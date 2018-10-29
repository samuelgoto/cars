const fs = require("fs");

let dataset = {
 "@context": "https://code.sgo.to/feeds",
 "@type": "Feed",
 "name": "The Stanford car dataset ported to JSON-LD",
 "items": [
 ]
};

for (let i = 0; i < 196; i++) {
 dataset.items.push(`images/${i}.jsonld`);
}

fs.writeFileSync("index.jsonld", 
                 JSON.stringify(dataset, undefined, 2));
