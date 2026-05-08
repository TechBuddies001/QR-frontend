
const { Client } = require('pg');
const fs = require('fs');

async function deeper_check() {
  const connectionString = "postgresql://postgres:SRXgaNrmrgMSpjGbNdowQvhZSYZGnUxn@maglev.proxy.rlwy.net:32688/railway";
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log("Connected.");

    // List all databases
    const dbs = await client.query("SELECT datname FROM pg_database WHERE datistemplate = false;");
    console.log("Databases:", dbs.rows.map(r => r.datname));

    // List all schemas
    const schemas = await client.query("SELECT schema_name FROM information_schema.schemata;");
    console.log("Schemas:", schemas.rows.map(r => r.schema_name));

    // Try case-insensitive count for Tag
    const tagCountLower = await client.query(`SELECT count(*) FROM "tag"`).catch(e => ({rows:[{count:'N/A'}]}));
    console.log("Count from 'tag' (lowercase):", tagCountLower.rows[0].count);

  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

deeper_check();
