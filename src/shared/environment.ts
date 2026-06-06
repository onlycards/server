import 'dotenv/config'

const {
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  SERVER_EXTERNAL_PORT,
  DATABASE_EXTERNAL_PORT,
} = process.env

if (
  !MYSQL_USER ||
  !MYSQL_DATABASE ||
  !MYSQL_PASSWORD ||
  !SERVER_EXTERNAL_PORT ||
  !DATABASE_EXTERNAL_PORT
) {
  throw new Error('Create .env file before launching')
}

export const env = {
  dbUser: MYSQL_USER,
  dbName: MYSQL_DATABASE,
  dbPassword: MYSQL_PASSWORD,
  dbPort: parseInt(DATABASE_EXTERNAL_PORT),
  serverPort: parseInt(SERVER_EXTERNAL_PORT),
}
