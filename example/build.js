const fs = require("fs");

async function main() {
 let result = {
  "@context": "https://schema.org",
  "@type": "DataFeed",
  "name": "A car overlay",
  "items": []
 };

 let index = JSON.parse(new String(fs.readFileSync("manifest.json")));
 // console.log(index.classes);
 for (let file of index.classes) {
  // console.log(file);
  let clazz = JSON.parse(new String(fs.readFileSync(file)));
  // console.log(clazz.name);
  // console.log("../images/" + clazz.images[0].url);
  let url = "https://www.google.com/search?q=" 
   + encodeURIComponent(clazz.name)
   + "%20site:wikipedia.org&btnI=true";
  let base = "https://code.sgo.to/cars/";
  let thumbnail = new URL(clazz.images[0].url, base + file);
  result.items.push({
    "@type": "ARArtifact",
    "arTarget": {
      "@type": "VisualDescription",
      "class": new URL(file, base)
    },
    "arContent": {
      "@type": "WebPage",
      "url": url,
      "title": clazz.name,
      "thumbnail": thumbnail
    }
  });
  break;
 }
 // console.log(index);
 console.log(JSON.stringify(result, undefined, 2));
 // return result;
}

main();


//fs.writeFileSync("index.jsonld", 
//                 JSON.stringify(dataset, undefined, 2));
