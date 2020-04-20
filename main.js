import puppeteer from 'puppeteer-serverless';
import renderSocialImage from 'puppeteer-social-image';

const gen = async() => {
  const isDev =  process.env.NODE_ENV === 'development';
  console.log(isDev)
  const browser = isDev ?
    await puppeteer.launch({ executablePath: '/usr/bin/google-chrome' }) :
    await puppeteer.launch();

  await renderSocialImage({
    template: "article",
    templateParams: {
      unsplashId: "WV4B_aVj0aQ",
      title: "My awesome title",
      subtitle: "Is Maths related to science?",
      eyebrow: "brows",    
    },
    output: "output.png",
    browser
  });
}

gen()