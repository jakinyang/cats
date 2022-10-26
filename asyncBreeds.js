const fs = require('fs');

const breedDetailsFromFile = function(breed, dataHandler) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error)  dataHandler(data);
  });
};

const catFunction = data => {  
  console.log(data);
}
const bombay = breedDetailsFromFile('bombay', catFunction);

module.exports = breedDetailsFromFile;