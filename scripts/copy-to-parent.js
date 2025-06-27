const fs = require('fs-extra');
const path = require('path');

const sourcePath = path.join(__dirname, '..', 'build');
const targetPath = path.join(__dirname, '..', '..', 'public', 'documentation');

// Remove target directory if it exists
fs.removeSync(targetPath);

// Copy build directory to target
fs.copySync(sourcePath, targetPath, {
  overwrite: true,
  errorOnExist: false,
  dereference: true,
});

console.log('Files copied successfully!');
