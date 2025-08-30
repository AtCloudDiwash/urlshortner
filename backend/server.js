const express = require("express");
const app = express();
const { connectMongo } = require("./connect");
const urlRoute = require("./urlRouter");
const cors = require("cors");
const URL = require("./models/url");
const mongo_url_cluster = require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use("/url", urlRoute);

connectMongo(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

  app.get("/:shortID", async (req, res) => {
    const shortId = req.params.shortID;

    try {
      const entry = await URL.findOneAndUpdate(
        { shortId },
        {
          $push: {
            visitHistory: {
              timestamp: Date.now(),
            },
          },
        },
        { new: true }
      );

      if (!entry) {
        return res.status(404).send("Short URL not found");
      }

      res.redirect(entry.redirectUrl);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });


app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
