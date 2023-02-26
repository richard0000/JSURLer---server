import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { homeRouter } from "./src/routes/home.routes.js";
import { linksRouter } from "./src/routes/links.routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", homeRouter);
app.use("/slug", linksRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
