//command line arguments
const args = process.argv.slice(2)
const url = args[0];
const filePath = args[1];

//use needle and fs
const needle = require("needle");
const fs = require('node:fs');

//make function for request and save
const requestSave = (url, filePath) => {

  //make http request
needle.get(url, (error, response, body) => {
  
  //write data to the file
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.error(error);
    } else {
      const fileSize = body.length;
      console.log(`saved ${fileSize} bytes to ${filePath}`);
    }
  });
  
});

};

//call function with args
requestSave(url, filePath);