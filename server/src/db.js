import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import pg from "pg";

const { Pool } = pg;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Railway's public Postgres proxy requires SSL; its internal network
// connection doesn't. Set PGSSL=true if you hit an SSL-related connection
// error (e.g. when using the public proxy host instead of the internal one).
const useSsl = process.env.PGSSL === "true" || process.env.DATABASE_URL?.includes("proxy.rlwy.net");

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: useSsl ? { rejectUnauthorized: false } : false,
});

/** Creates any missing tables. Safe to call on every startup. */
export async function migrate() {
  const sql = readFileSync(path.join(__dirname, "..", "db", "schema.sql"), "utf8");
  await pool.query(sql);
}
