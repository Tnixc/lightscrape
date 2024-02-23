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

export function getReadNowLink(html: string, url: string): string {
  const lines = html.split("\n");
  const filteredLines = lines.filter(
    (line) => line.includes("readchapterbtn") || line.includes("Read Now")
  );
  let res = filteredLines
    .join("\n")
    .replace(/ *.*href="/, "")
    .replace(/".*/, "");
  if (res.startsWith("https://")) {
    return res;
  } else {
    return "https://" + url.split("/")[2] + res;
  }
}

export function getNextLink(html: string, url: string): string {
  const lines = html.split("\n");
  const filteredLines = lines.filter(
    (line) => line.includes('rel="next"')
  );
  let res = filteredLines[0]
    .replace(/ *.*href="/, "")
    .replace(/".*/, "");
  if (res.startsWith("https://")) {
    return res;
  } else {
    return "https://" + url.split("/")[2] + res;
  }
}
