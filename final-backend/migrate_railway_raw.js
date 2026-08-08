
const { Client } = require('pg');
const fs = require('fs');

async function dump() {
  const connectionString = "postgresql://postgres:SRXgaNrmrgMSpjGbNdowQvhZSYZGnUxn@maglev.proxy.rlwy.net:32688/railway";
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log("Connected to Railway Postgres.");

    const tables = ['Admin', 'User', 'Tag', 'Sponsor', 'Plan', 'ScanLog', 'CallLog'];
    const dumpData = {};

    for (const table of tables) {
      console.log(`Dumping ${table}...`);
      const res = await client.query(`SELECT * FROM "${table}"`);
      dumpData[table] = res.rows;
      console.log(`Found ${res.rows.length} rows in ${table}.`);
    }

    fs.writeFileSync('migration_dump.json', JSON.stringify(dumpData, null, 2));
    console.log("Data dumped successfully to migration_dump.json");

  } catch (err) {
    console.error("Dump failed:", err);
  } finally {
    await client.end();
  }
}

dump();
