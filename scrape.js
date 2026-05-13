const https = require('https');
const fs = require('fs');

https.get('https://www.gayathrisreekumar.com/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    // extract all img src
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const imgs = new Set();
    let match;
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[1].startsWith('http') || match[1].startsWith('/')) {
        imgs.add(match[1].startsWith('/') ? 'https://www.gayathrisreekumar.com' + match[1] : match[1]);
      }
    }
    
    // extract all background images
    const bgRegex = /background-image:\s*url\((['"]?)([^'")]+)\1\)/g;
    while ((match = bgRegex.exec(data)) !== null) {
      if (match[2].startsWith('http') || match[2].startsWith('/')) {
        imgs.add(match[2].startsWith('/') ? 'https://www.gayathrisreekumar.com' + match[2] : match[2]);
      }
    }

    fs.writeFileSync('scrape.json', JSON.stringify({
      images: Array.from(imgs),
    }, null, 2));
    console.log('done');
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
