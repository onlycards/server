USE app;

/*
  Пользователи создаются не через API, а администратором СУБД.
  Таблица хранит только данные, необходимые для входа и проверки роли.

  Пароль хэшируется SHA256 (в качестве соли используется ID).

  uq_name запрещает два аккаунта с одинаковым именем и ускоряет вход по имени.

  Для 'teacher' приложения отдаст как все группы, в которых он состоит,
  так и группы, владельцем которых он является.
  При этом нельзя пригласить себя в свою группу.

  Если пользователь был 'teacher', завёл себе группы и стал 'student',
  то он будет получать только группы, в которых он состоит.
*/
CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(128) NOT NULL,
  `password_hash` CHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `role` ENUM('student', 'teacher') NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_users_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
