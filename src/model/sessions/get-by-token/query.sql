SELECT
  `id`,
  `frontend`,
  `user_id` AS `userId`,
  `expires_at` AS `expiresAt`
FROM `sessions`
WHERE `token_hash` = ?
  AND `expires_at` > CURRENT_TIMESTAMP
