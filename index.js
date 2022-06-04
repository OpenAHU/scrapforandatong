const playwright = require('playwright');
const account = require('./account.json');

async function main() {

  if (account.username == null || account.password == null) {
    console.log('Please set your account info in account.json');
    return;
  }

  const browser = await playwright.chromium.launch({
    headless: false // setting this to true will not run the UI
  });

  const page = await browser.newPage();

  // 登录
  await page.goto('https://one.ahu.edu.cn/');
  await page.fill('#un', account.username);
  await page.fill('#pd', account.password);
  await page.click('#index_login_btn');

  // 进入教务系统网站
  await page.click('#common_app');
  await page.click('a[appid="250915141496832"]')

  // 课程表

  await page.waitForTimeout(5000);
  await browser.close();
}

main();
