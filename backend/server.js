const express = require("express");
const app = express();
const { connectMongo } = require("./connect");
const urlRoute = require("./urlRouter");
const cors = require("cors");
const URL = require("./models/url");

const PORT = 3001;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/url", urlRoute);

connectMongo("mongodb://localhost:27017/url_shortner")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/:shortID", async (req, res) => {
  const shortId = req.params.shortID;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});


app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
