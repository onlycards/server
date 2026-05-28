USE app;

/*
  Приглашение связывает пользователя и группу до реакции пользователя
  или отзыва приглашения преподавателем. Принятие, отклонение и отзыв
  приглашения удаляют строку.

  uq_pair запрещает дубль приглашения для той же пары group/user.

  fk_group и fk_user запрещают приглашения к несуществующим группам
  и пользователям. При удалении группы или пользователя приглашение удаляется
  каскадно.
*/
CREATE TABLE IF NOT EXISTS `invitations` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `group_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_pair` (`group_id`, `user_id`),
  CONSTRAINT `fk_group`
    FOREIGN KEY (`group_id`)
    REFERENCES `groups` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`id`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
