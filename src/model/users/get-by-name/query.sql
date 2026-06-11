SELECT
  `id`,
  `name`,
  `role`,
  `password_hash` AS `passwordHash`
FROM `users`
WHERE `name` = ?
