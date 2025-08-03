const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'info.txt');
const text = 'Node.js is awesome!';

fs.writeFile(filePath, text, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully:', filePath);

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File content:', data);
      }
    });
  }
});
