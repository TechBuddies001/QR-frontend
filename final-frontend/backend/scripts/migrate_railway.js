const { Client } = require('pg');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const RAILWAY_URL = "postgresql://postgres:SRXgaNrmrgMSpjGbNdowQvhZSYZGnUxn@maglev.proxy.rlwy.net:32688/railway";
const SQLITE_PATH = path.join(__dirname, '..', 'prisma', 'dev_production.db');

async function migrate() {
    const pgClient = new Client({ connectionString: RAILWAY_URL });
    const db = new sqlite3.Database(SQLITE_PATH);

    const runSql = (sql, params = []) => new Promise((resolve, reject) => {
        db.run(sql, params, function(err) {
            if (err) reject(err);
            else resolve(this);
        });
    });

    try {
        await pgClient.connect();
        console.log("✅ Connected to Railway Postgres");

        // Tables to migrate in order (to respect FKs if any)
        const tables = [
            'Admin', 'User', 'Category', 'Sponsor', 'Plan', 'Setting', 
            'Tag', 'Product', 'ScanLog', 'CallLog', 'SmsLog', 
            'Transaction', 'Subscription', 'Lead', 'ProductScanLog', 
            'Order', 'OrderItem'
        ];

        for (const table of tables) {
            console.log(`\n📦 Migrating table: ${table}...`);
            
            // Get data from Postgres
            // Note: Postgres tables might be lowercase or double-quoted depending on how Prisma created them.
            // Prisma usually uses camelCase/PascalCase but Postgres converts to lowercase unless quoted.
            // We'll try quoted first.
            let rows;
            try {
                const res = await pgClient.query(`SELECT * FROM "${table}"`);
                rows = res.rows;
            } catch (e) {
                console.log(`   ⚠️ Table "${table}" not found in Postgres, skipping.`);
                continue;
            }

            if (rows.length === 0) {
                console.log(`   ℹ️ No data found in ${table}.`);
                continue;
            }

            console.log(`   🚀 Found ${rows.length} rows.`);

            // Prepare SQLite Insert
            const columns = Object.keys(rows[0]);
            const placeholders = columns.map(() => '?').join(',');
            const sql = `INSERT OR REPLACE INTO ${table} (${columns.join(',')}) VALUES (${placeholders})`;

            let successCount = 0;
            for (const row of rows) {
                const values = columns.map(col => {
                    let val = row[col];
                    // Handle JSON/Object types (Prisma/Postgres returns objects, SQLite needs strings)
                    if (val !== null && typeof val === 'object' && !(val instanceof Date)) {
                        return JSON.stringify(val);
                    }
                    // Handle Dates
                    if (val instanceof Date) {
                        return val.toISOString();
                    }
                    return val;
                });

                try {
                    await runSql(sql, values);
                    successCount++;
                } catch (e) {
                    console.error(`   ❌ Error inserting row in ${table}:`, e.message);
                }
            }
            console.log(`   ✅ Finished ${table}. Migrated ${successCount}/${rows.length} rows.`);
        }

        console.log("\n✨ MIGRATION COMPLETE! ✨");

    } catch (err) {
        console.error("Critical Migration Error:", err);
    } finally {
        await pgClient.end();
        db.close();
    }
}

migrate();
