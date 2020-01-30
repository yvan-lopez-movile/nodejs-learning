const fs = require('fs');

const jsonBuf = fs.readFileSync('1-json.json');
const jsonData = jsonBuf.toString();

const dataObj = JSON.parse(jsonData);
dataObj.name = 'Yvan';
dataObj.age = '37';

const newJsonData = JSON.stringify(dataObj);
fs.writeFileSync('1-json.json', newJsonData);
