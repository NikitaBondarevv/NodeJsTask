const fs = require('fs');
const read = name => {
 return new Promise ((resolve, reject) => {
    fs.readFile(name, (error, data) => {
      resolve(data.toString('utf8'));
      reject(error);
    });
  })

}

module.exports = read;