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
  const context = await browser.newContext();

  const pagezhad = await context.newPage();

  // 登录
  await pagezhad.goto('https://one.ahu.edu.cn/');
  await pagezhad.fill('#un', account.username);
  await pagezhad.fill('#pd', account.password);
  await pagezhad.click('#index_login_btn');

  // 进入教务系统网站
  await pagezhad.click('#common_app');
  const [pagejwxt] = await Promise.all([
    context.waitForEvent('page'),
    pagezhad.click('a[appid="250915141496832"]')
  ])
  await pagejwxt.waitForLoadState();

  // 输出网页标题
  console.log(await pagejwxt.title());

  await browser.close();
}

main();
