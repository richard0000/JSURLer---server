import express from "express";
import { LinksController } from "../controllers/links/index.js";

export const linksRouter = express.Router();

linksRouter.get("/:slug", LinksController.goTo);
linksRouter.post("/", LinksController.createLink);
