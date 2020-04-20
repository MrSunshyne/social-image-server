import renderSocialImage from "puppeteer-social-image";
import slugify from "slugify";

let title = "Sandeep Writes a Post and this one has a really long title"
let slug = slugify(title);
renderSocialImage({
  template: "article",
  templateParams: {
    imageUrl:
      "https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80",
    title: title,
    subtitle: "This is my subtitle",
    eyebrow: "My eyebrows",
    watermark: "sandeep.ramgolam.com"
  },
  output: slug + ".png",
  size: "facebook"
});