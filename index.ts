import { downloadHtml } from "./utils";

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

downloadHtml(url)
  .then((html) => {
    console.log(html);
  })
  .catch((err) => {
    console.error('Error:', err);
  });


console.log("Url: ", process.argv.slice(2, 3).toString());
const url = process.argv.slice(2, 3).toString();

