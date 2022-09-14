// 1
console.log(new Date().toLocaleString());
console.log(`File name: ${process.argv}`);

// 2
const generateRandom = require('./generateRandom');

generateRandom(10, 20);

//3
const read = require('./readingFile');

read('name.txt')
  .then(text => console.log(text))
  .catch(err => console.log(err));
  