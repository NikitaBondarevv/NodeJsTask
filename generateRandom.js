const generateRandom = (from, to) => console.log(Math.floor(Math.random() * (to - from + 1)) + from);

module.exports = generateRandom;
