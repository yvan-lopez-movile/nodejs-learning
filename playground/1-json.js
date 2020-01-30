const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
//
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const jsonBuf = fs.readFileSync('1-json.json');
const jsonData = jsonBuf.toString();

const dataObj = JSON.parse(jsonData);
dataObj.name = 'Yvan';
dataObj.age = '37';

const newJsonData = JSON.stringify(dataObj);
fs.writeFileSync('1-json.json', newJsonData);
