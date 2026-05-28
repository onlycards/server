USE app;

/*
  Сессии хранят независимые токены для клиентского приложения и админки.
  Один пользователь может иметь любое количество активных сессий.

  Токен хэшируется SHA256.

  При logout или отзыве токена строка удаляется.
  При удалении пользователя все его сессии удаляются каскадно.

  uq_token нужен для авторизации запроса по хэшу токена.

  fk_s_user запрещает сессии для несуществующего пользователя.
*/
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `frontend` ENUM('client', 'admin') NOT NULL,
  `token_hash` CHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` TIMESTAMP NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_token` (`token_hash`),
  CONSTRAINT `fk_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`id`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
