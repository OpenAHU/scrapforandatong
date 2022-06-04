# scrapforandatong

## TODO

- [x] 智慧安大登录
- [x] 智慧安大跳转教务系统
- [ ] 课表爬取

## 运行

根目录新建一个 `account.json` 文件，内容如下：
```json
{
  "username": "<你的学号>",
  "password": "<你的密码>"
}
```

安装依赖：
```sh
npm install
```

运行：
```sh
node index.js
```

## 第三方库

### Playwright

selenium -> puppeteer -> playwright

[Getting started](https://playwright.dev/docs/intro)

[Scraping the web with Playwright](https://www.scrapingbee.com/blog/playwright-web-scraping/)

[获取新Page实例](https://playwright.dev/docs/pages#handling-new-pages)
