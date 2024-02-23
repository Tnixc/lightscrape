//@ts-expect-error
import * as http from "http";

export async function downloadHtml(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

export function getTitle(html: string): string {
  let startIndex = html.indexOf("<title>");
  let endIndex = html.indexOf("</title>");
  let title = html.substring(startIndex + 7, endIndex);
  return title;
}

export function getReadNowLink(html: string): string {
  const lines = html.split("\n");
  const filteredLines = lines.filter((line) =>
    line.includes("chapter-latest-container")
  );
  return filteredLines.join("\n").split(`"`)[5];
}
