USE app;

/*
  Используем ISO 639-1:
  короткий код как первичный ключ и название языка на самом этом языке.
*/
CREATE TABLE IF NOT EXISTS `languages` (
  `code` CHAR(2) NOT NULL,
  `name` VARCHAR(32) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

/*
  Начальный набор языков.
*/
INSERT INTO `languages` (`code`, `name`) VALUES
  ('ru', 'Русский'),
  ('en', 'English'),
  ('es', 'Español'),
  ('de', 'Deutsch'),
  ('fr', 'Français'),
  ('it', 'Italiano'),
  ('pt', 'Português');
