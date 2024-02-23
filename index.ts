import bun from "bun";
import {
  downloadHtml,
  getTitle,
  getReadNowLink,
  getNextLink,
} from "./utils";


if (process.argv.length === 2) {
  console.error("Expected at least one argument!");
  process.exit(1);
}

console.log("Url: ", process.argv.slice(2, 3).toString());
const url = process.argv.slice(2, 3).toString();

console.log("Getting Info...");

const main_page = await downloadHtml(url);

console.log("Book:", getTitle(main_page));

console.log("Getting chapter 1");

const read_now_link = getReadNowLink(main_page, url);
console.log("Chapter 1: ", read_now_link);

async function recursiveDownload(startURL: string, stop: number){
  if (stop === 0){
    console.log("Reached stop");
    return;
  }
  const page = await downloadHtml(startURL);
  bun.write(`./res/${stop}.html`, page);
  const nextURL = getNextLink(page, url);
  if (nextURL.includes("javascript:;")){
    console.log("No more chapters");
    return;
  }
  console.log("Next URL: ", nextURL);
  recursiveDownload(nextURL, stop - 1);
}

recursiveDownload(read_now_link, 5);