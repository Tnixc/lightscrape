import { downloadHtml } from "./utils";
import { getTitle } from "./utils";
if (process.argv.length === 2) {
  console.error("Expected at least one argument!");
  process.exit(1);
}

console.log("Url: ", process.argv.slice(2, 3).toString());
const url = process.argv.slice(2, 3).toString();
console.log("Getting Info...");
const main_page = await downloadHtml(url);

// console.log(main_page)
console.log("Book:", getTitle(main_page));

console.log("Getting table of contents...");
