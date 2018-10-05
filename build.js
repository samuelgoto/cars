const fs = require("fs");

let dataset = {
 "@context": "https://code.sgo.to/datasets",
 "@type": "Dataset",
 "name": "The Stanford car dataset ported to JSON-LD",
 "classes": [
 ]
};

for (let i = 0; i < 196; i++) {
 dataset.classes.push(`images/${i}.jsonld`);
}

fs.writeFileSync("index.jsonld", 
                 JSON.stringify(dataset, undefined, 2));
