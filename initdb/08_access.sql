USE app;

/*
  Доступ группы к колоде хранит только текущее состояние.
  Отзыв доступа означает удаление строки.

  `uq_access_pair` запрещает дубль доступа для одной пары group/deck
  и покрывает загрузку колод группы по `group_id`.

  `fk_access_group` и `fk_access_deck`
  запрещают доступы к несуществующим группам и колодам.
  При удалении группы или колоды доступ удаляется каскадно.
*/
CREATE TABLE `group_deck_access` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `group_id` INT UNSIGNED NOT NULL,
  `deck_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_access_pair` (`group_id`, `deck_id`),
  CONSTRAINT `fk_access_group`
    FOREIGN KEY (`group_id`)
    REFERENCES `groups` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_access_deck`
    FOREIGN KEY (`deck_id`)
    REFERENCES `decks` (`id`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
