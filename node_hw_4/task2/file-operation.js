const fs = require('fs');
require('dotenv').config();

const fileName = process.env.FILENAME;

fs.writeFile(fileName, 'Hello World!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`File ${fileName} created successfully!`);
  }

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log(`Content of ${fileName}:`, data);
    }
  });
});
