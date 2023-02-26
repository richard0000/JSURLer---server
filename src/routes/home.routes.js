import express from "express";

export const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.json({
    message:
      "Hi there! Following, you will find what I can do. Hope I can hepl you!",
    endpoints: [
      {
        method: "GET",
        url: "/:slug",
        response: {
          longUrl: "string",
        },
        description:
          "If you already saved a long URL with us, you can pass the slug here and I will return the long URL to you.",
      },
      {
        method: "POST",
        url: "/slug",
        payload: {
          title: "string",
          longUrl: "string",
        },
        response: {
          slug: "string",
        },
        description:
          "If you have a long URL you want to save, you can give it to me here and I will save it and return a short slug to you to remember and use it to share with someone to use it later,",
      },
    ],
  });
});
