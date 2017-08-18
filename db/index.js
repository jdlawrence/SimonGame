const { Pool } = require('pg')
const connectionString = 'postgres://postgres:@localhost:5432/simon_game'
const pool = new Pool({
  connectionString
});


async function query(text, params) {
  let result;
  try {
    return await pool.query(text, params);
  } catch(e) {
    setImmediate(() => { throw e });
  }
}

module.exports = {
  query
}