USE app;

/*
  Карта принадлежит колоде. Содержимое в JSON,
  потому что структура карточки валидируется серверным кодом.

  fk_cards_deck запрещает карты в несуществующих колодах.
  При удалении колоды её карты удаляются каскадно.
*/
CREATE TABLE `cards` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `deck_id` INT UNSIGNED NOT NULL,
  `content` JSON NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cards_deck`
    FOREIGN KEY (`deck_id`)
    REFERENCES `decks` (`id`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
