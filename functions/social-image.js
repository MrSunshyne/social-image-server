const renderSocialImage = require('puppeteer-social-image');
const chromium = require('chrome-aws-lambda');

// return {
//     statusCode: 200,
//     body: JSON.stringify({ 
//         message: `Complete screenshot of ${pageToScreenshot}`, 
//         buffer: screenshot 
//     })
// }


exports.handler = async (event, context, callback) => { 

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const image = await renderSocialImage({
    template: "basic",
    templateParams: {
      imageUrl:
        "https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80",
      title: "Hello, world"
    },
    browser
  });

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: image
    })
  }
}