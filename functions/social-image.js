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

  const image = await renderSocialImage({
    template: "basic",
    templateParams: {
      imageUrl:
        "https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80",
      title: "Hello, world"
    },
    browser: await puppeteer.launch()
  });

  // let image = 'image hola';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Image Generated !",
      buffer: image 
    })
  }
}