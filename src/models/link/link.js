import { pgClient } from "../../db/db.js";

export const findBy = async ({ attribute, value }) => {
  const result = await pgClient.query(
    `SELECT * FROM links WHERE ${attribute} = $1`,
    [value]
  );

  const [link] = result.rows;

  return link;
};

export const incrementTimesVisited = async (slug, timesvisited) => {
  await pgClient.query("UPDATE links SET timesVisited = $1 WHERE slug = $2", [
    timesvisited + 1,
    slug,
  ]);
};

export const create = async ({ url, slug, title }) => {
  await pgClient.query(
    `INSERT INTO links (url, slug, title, timesvisited) VALUES($1, $2, $3, $4)`,
    [url, slug, title, 0]
  );
};
