import bun from "bun";
import {
  downloadHtml,
  getTitle,
  getReadNowLink,
  getNextLink,
  parseContent
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

let count = 1;
async function recursiveDownload(startURL: string, stop: number){
  if (stop === 0){
    console.log("Reached stop");
    return;
  }
  let page = await downloadHtml(startURL);
  page = page.replace("<z15e0>ʀᴇᴀᴅ ʟᴀᴛᴇsᴛ ᴄʜᴀᴘᴛᴇʀs ᴀᴛ novᴇl(ꜰ)ire.ɴet</z15e0>", "");
  bun.write(`./res/${count}.html`, parseContent(page).trim());
  count++;
  const nextURL = getNextLink(page, url);
  if (nextURL.includes("javascript:;")){
    console.log("No more chapters");
    return;
  }
  console.log("Next URL: ", nextURL);
  recursiveDownload(nextURL, stop - 1);
}

recursiveDownload(read_now_link, 5);