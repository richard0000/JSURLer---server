import pkg from "pg";
import { keys } from "./keys.js";

const { Pool } = pkg;

export const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("connect", (client) => {
  client
    .query(
      "CREATE TABLE IF NOT EXISTS links (url VARCHAR, slug VARCHAR, title VARCHAR, timesVisited INT)"
    )
    .catch((err) => console.log(err));
});
