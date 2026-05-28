USE app;

/*
  Колода принадлежит преподавателю-владельцу и задаёт языки обеих сторон.
  При удалении колоды карты и доступы групп удаляются каскадно.

  fk_owner запрещает колоду без владельца.
  При удалении владельца его колоды удаляются каскадно.
  fk_front и fk_back запрещают языки, которых нет в справочнике.
  Язык нельзя удалить, пока он используется колодами.
*/
CREATE TABLE IF NOT EXISTS `decks` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `owner_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(128) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `front_language` CHAR(2) NOT NULL,
  `back_language` CHAR(2) NOT NULL,
  `front_audio_enabled` BOOLEAN NOT NULL,
  `back_audio_enabled` BOOLEAN NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  CONSTRAINT `fk_owner`
    FOREIGN KEY (`owner_id`)
    REFERENCES `users` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `fk_front`
    FOREIGN KEY (`front_language`)
    REFERENCES `languages` (`code`)
    ON DELETE RESTRICT,
  CONSTRAINT `fk_back`
    FOREIGN KEY (`back_language`)
    REFERENCES `languages` (`code`)
    ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
