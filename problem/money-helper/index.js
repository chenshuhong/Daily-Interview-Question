const puppeteer = require("puppeteer");

const config = {
  jd: [
    {
      username: "",
    },
  ],
};

async function initBrowser() {
  const browser = await puppeteer.launch();
}

function jd() {
  console.log("开始【京东】任务");
}

async function main() {
  await initBrowser();
  await jd();
}

main();
