const fs = require('fs');
const path = require('path');

const folderName = path.join(__dirname, 'myFolder');

fs.mkdir(folderName, (err) => {
  if (err) {
    console.error('Error creating folder:', err);
  } else {
    console.log('Folder created successfully:', folderName);

    fs.rmdir(folderName, (err) => {
      if (err) {
        console.error('Error removing folder:', err);
      } else {
        console.log('Folder removed successfully:', folderName);
      }
    });
  }
});
