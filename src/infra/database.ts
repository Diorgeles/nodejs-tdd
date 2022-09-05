import pgp from 'pg-promise';

const db = pgp.call({
  user: 'postgres',
  password: 'postgres',
  host: 'postgres',
  port: 5432,
  database: 'schedule',
});

module.exports = db;
