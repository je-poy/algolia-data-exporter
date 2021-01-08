// Only in Node.js
const fs = require('fs');
const algoliasearch = require('algoliasearch');
const moment = require("moment-timezone")

moment.tz.setDefault(process.env.TIMEZONE);

const client = algoliasearch(process.env.ALGOLIA_APPID, process.env.ALGOLIA_ADMINKEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX);

let hits = [];

index
  .browseObjects({
    batch: (objects) => (hits = hits.concat(objects)),
  })
  .then(() => {
    console.log('Finished! We got %d hits', hits.length);
    fs.writeFile(
      `${process.env.EXTRACT_PATH}/${moment().format('M-D-yyyy')}-${process.env.ALGOLIA_INDEX}.json`,
      JSON.stringify(hits, null, 2),
      'utf-8',
      (err) => {
        if (err) throw err;
        console.log('Your index was successfully exported!');
      }
    );
  })
  .catch(error => {
    console.log(error);
  });