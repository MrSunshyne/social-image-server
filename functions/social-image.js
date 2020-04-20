import puppeteer from 'puppeteer-serverless';
import renderSocialImage from 'puppeteer-social-image';

let title = "Twasi a Post and this one has a really long title"

export default async () => {
  await renderSocialImage({
    template: "article",
    templateParams: {
      unsplashId: "WV4B_aVj0aQ",
      title: title,
      subtitle: "Is Maths related to science?",
      eyebrow: "VueJS",
      watermark: "sandeep.ramgolam.com"
    },
    size: "facebook",
    browser:  await puppeteer.launch({})
  });
}