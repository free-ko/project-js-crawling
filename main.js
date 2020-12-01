const {getImg} = require("./crawl.js");
const cron = require("node-cron");

async function handleAsync() {
  const img = await getImg();
  console.log("img", img);
}

cron.schedule("*/2 * * * *", async () => {
  console.log("running a task every two minutes");
  await handleAsync();
});