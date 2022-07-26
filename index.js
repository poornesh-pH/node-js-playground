// run `node index.js` in the terminal
const fs = require('fs');

const userName = 'Poornesh';
fs.writeFile('fileName.txt', 'Name: ' + userName, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('wrote file');
});

console.log(`Hello Node.js v${process.versions.node}!`);
