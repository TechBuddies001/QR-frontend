
const { Client } = require('pg');
const fs = require('fs');

async function check() {
  const connectionString = "postgresql://postgres:SRXgaNrmrgMSpjGbNdowQvhZSYZGnUxn@maglev.proxy.rlwy.net:32688/railway";
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log("Connected.");

    const res = await client.query(`SELECT table_name FROM information_schema.tables WHERE table_schema='public'`);
    console.log("Tables:", res.rows.map(r => r.table_name));

    const total = await client.query(`SELECT count(*) FROM "Tag"`);
    console.log("Total Tags in 'Tag' table:", total.rows[0].count);

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

check();
