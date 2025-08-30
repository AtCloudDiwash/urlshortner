const { nanoid } = require("nanoid");
const URL = require("./models/url");

function normalizeUrl(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
}

async function generateShortUrl(req, res) {
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: "Url is required" });

  const shortID = nanoid(8);
  const redirectUrl = normalizeUrl(body.url); 

  await URL.create({
    shortId: shortID,
    redirectUrl,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

module.exports = {
  generateShortUrl,
};
