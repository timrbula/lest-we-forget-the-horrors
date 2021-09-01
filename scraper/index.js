const axios = require("axios");
const cheerio = require("cheerio");
const datefns = require("date-fns");
const fs = require("fs");
const nanoid = require("nanoid");

const SITE_URL = "https://www.mcsweeneys.net/articles/the-complete-listing-so-far-atrocities-1-796";
const FULL_DATE_REGEX = /.*–\s(?<date>\w*(\s\d{1,2})?,\s\d{4})/;
const MONTH_YEAR_REGEX = /.*–\s(?<date>\w*,\s\d{4})/;
const YEAR_REGEX = /.*–\s.*(?<date>\d{4})/
const HTML_START_REGEX = /^.*<\/b>\s*(&#x2013;)?\s*/
const HTML_END_TEXT = /- (–|&#x2013;) -.*/gsm;
const HTML_END_MONTH_YEAR_REGEX = /<br>.*<\/h2>.*$/gsm;
const IMAGE_FILENAME_REGEX = /\w*.png/g;

const categoryColorMapList = [{
  category: "sexual", imageName: "bulletred.png"},
  {category: "prejudice", imageName: "bullet.png"},
  {category: "tweets", imageName: "bulletlightblue.png"},
  {category: "collusion", imageName: "bulletyellow.png"},
  {category: "staff", imageName: "bulletdarkpurple.png"},
   {category: "familyBusines", imageName: "bulletpink.png"},
  {category: "policy", imageName: "bulletorange.png"},
  {category: "environment", imageName: "bulletgreen.png"}
]

function determineCategoryByImageFilename(imageSrc) {
  const matchedEntry = categoryColorMapList.find(entry => {
    const filename = imageSrc.match(IMAGE_FILENAME_REGEX)[0];
    return filename === entry.imageName;
  })

  return matchedEntry.category;
}

async function getThings() {
  const atrocitiesHtml = await axios.get(SITE_URL);

  const $ = cheerio.load(atrocitiesHtml.data);
  const ol = $(".article-body > ol");
  let horrorList = []
  ol.find("li").each(function(index, listItem) {

    let horror = {
      id: nanoid.nanoid()
    }

    // Get text and HTML
    horror.html = $(listItem).html().replace(HTML_START_REGEX, "").replace(HTML_END_TEXT,"").replace(HTML_END_MONTH_YEAR_REGEX, "");

    const horrorText = $(listItem).text().trim()

    // Get date
    const fullDateRegexMatch = FULL_DATE_REGEX.exec(horrorText);
    const monthYearRegexMatch = MONTH_YEAR_REGEX.exec(horrorText);
    const yearRegexMatch = YEAR_REGEX.exec(horrorText);

    if(fullDateRegexMatch && fullDateRegexMatch.groups) {
      horror.date = datefns.parse(fullDateRegexMatch.groups.date, "MMMM dd, yyyy", new Date()); 
    } else if (monthYearRegexMatch && monthYearRegexMatch.groups) {
      horror.date = datefns.parse(monthYearRegexMatch.groups.date, "MMMM, yyyy", new Date()); 
    } else if (yearRegexMatch && yearRegexMatch.groups) {
      horror.date = datefns.parse(yearRegexMatch.groups.date, "yyyy", new Date()); 
    }

    // Format text
    horror.text = horrorText.replace(FULL_DATE_REGEX, "").replace(/^\s–\s/, "");

    // Get categories based on images
    horror.categories = [];
    $(listItem).children("img").each(function(index, image) {
       horror.categories.push(determineCategoryByImageFilename(image.attribs.src));
    })

    // Get links
    horror.links = [];
    $(listItem).children("a").each(function(index, link) {
       horror.links.push(link.attribs.href);
    })

    horrorList.push(horror)
  })

  fs.writeFileSync("horrors.json", JSON.stringify(horrorList));
}

getThings();