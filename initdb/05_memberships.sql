USE app;

/*
  Участие пользователя в группе хранит только текущее состояние.
  Выход пользователя из группы или отвязка преподавателем означает
  удаление строки.

  uq_memberships_pair запрещает дубль связи group/user
  и защищает от гонок запросов.

  fk_memberships_group и fk_memberships_user
  запрещают связи с несуществующими группами и пользователями.
  При удалении группы или пользователя связь удаляется каскадно.
*/
CREATE TABLE `memberships` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `group_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_memberships_pair` (`group_id`, `user_id`),
  CONSTRAINT `fk_memberships_group`
    FOREIGN KEY (`group_id`)
    REFERENCES `groups` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_memberships_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`id`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
