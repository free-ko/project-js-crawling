const axios = require("axios");
const cheerio = require("cheerio");

let html = "";

async function getHtml() {
  try {
    return await axios.get("https://www.coupang.com/");
  } catch (error) {
    console.error(error);
  }
}

async function getImg() {
  if (!html) {
    html = await getHtml();
  }

  const $ = cheerio.load(html.data);
  let img = {};
  $("#productList .baby-product .image")
    .find("img")
  return img;
}

module.exports = {getImg};