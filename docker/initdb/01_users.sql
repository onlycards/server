USE app;

/*
  Пользователи создаются не через API, а администратором СУБД.
  Таблица хранит только данные, необходимые для входа и проверки роли.

  uq_name запрещает два аккаунта с одинаковым именем и ускоряет вход по имени.

  password_hash хранится в ASCII с binary collation, потому что результат
  password_hash() не требует utf8-сравнений и должен сравниваться байт-в-байт.

  Для 'teacher' приложения отдаст как все группы, в которых он состоит,
  так и группы, владельцем которых он является.
  При этом нельзя пригласить себя в свою группу.

  Если пользователь был 'teacher', завёл себе группы и стал 'student',
  то он будет получать только группы, в которых он состоит.
*/
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(128) NOT NULL,
  `password_hash` VARCHAR(255) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `role` ENUM('student', 'teacher') NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
