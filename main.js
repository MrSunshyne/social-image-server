import puppeteer from 'puppeteer-serverless';
import renderSocialImage from 'puppeteer-social-image';

import slugify from "slugify";

let title = "Saamiyah a Post and this one has a really long title"
let slug = slugify(title);

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
    output: slug + ".png",
    size: "facebook",
    browser:  await puppeteer.launch({})
  });
}