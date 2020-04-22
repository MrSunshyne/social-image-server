const renderSocialImage = require('puppeteer-social-image');
const puppeteer = require('puppeteer-serverless');
// return {
//     statusCode: 200,
//     body: JSON.stringify({ 
//         message: `Complete screenshot of ${pageToScreenshot}`, 
//         buffer: screenshot 
//     })
// }


exports.handler = async (event, context, callback) => { 

  const browser = await puppeteer.launch();

  const image = await renderSocialImage({
    template: "basic",
    templateParams: {
      imageUrl:
        "https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80",
      title: "Hello, world"
    },
    browser
  });

  let image = 'image hola';

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: image
    })
  }
}