module.exports = {
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  database: 'pollsweb',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
