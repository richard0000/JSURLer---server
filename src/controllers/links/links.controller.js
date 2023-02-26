import { pgClient } from "../../db/db.js";
import { Link } from "../../models/link/index.js";
import { SluggerService } from "../../services/slugger/index.js";

export const goTo = async (req, res) => {
  const { slug } = req.params;

  const link = await Link.findBy({ attribute: "slug", value: slug });

  if (!link)
    return res.status(404).json({
      message: `The provided slug (${slug}) does not exists in our records.`,
    });

  await Link.incrementTimesVisited(slug, link.timesvisited);

  return res.json({
    longUrl: link.url,
  });
};

export const createLink = async (req, res) => {
  const { url, title } = req.body;

  if (!url || !title)
    return res.status(422).json({
      message: "Please Provide url and title in payload",
    });

  const existent = await Link.findBy({ attribute: "url", value: url });

  if (existent) {
    return res.json({
      slug: existent.slug,
    });
  }

  const slug = SluggerService.generateSlug(url);

  await Link.create({ url, slug, title });

  return res.json({
    slug,
  });
};
