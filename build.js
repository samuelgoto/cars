const fs = require("fs");

let dataset = {
 "@context": "https://code.sgo.to/vod",
 "@type": "Layer",
 "name": "A car model overlay, based on the Stanford car dataset ported to JSON-LD",
 "description": "With this overlay you can get information about over 200 different car models!",
 "download": "https://github.com/samuelgoto/cars/releases/download/0.0.1/cars.tar.gz",
 "items": [
 ]
};

for (let i = 0; i < 196; i++) {
 dataset.items.push(`images/${i}.jsonld`);
}

fs.writeFileSync("index.jsonld", 
                 JSON.stringify(dataset, undefined, 2));
