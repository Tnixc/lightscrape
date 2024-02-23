//@ts-expect-error
import * as http from 'http';

function downloadHtml(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Usage example
const url = 'https://webnovelpub.co/web-novel-pub/building-a-business-empire-with-my-technological-system';
downloadHtml(url)
  .then((html) => {
    console.log(html);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
