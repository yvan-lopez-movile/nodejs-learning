var request = require('request')
const fs = require('fs')
var http = require('http')
const axios = require('axios')

const url = 'http://north-latam-mockup.s3.amazonaws.com/RCS/lmc/img/15minutos.png'
const dest = 'archivo.png'


// 1
request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
        const data = Buffer.from(body).toString('base64')
        fs.writeFileSync('contenido01.txt', data)
    }
});


// 2
http.get(url, (resp) => {
    resp.setEncoding('base64');
    body = "data:" + resp.headers["content-type"] + ";base64,";
    resp.on('data', (data) => { 
        //body += data
        fs.writeFileSync('contenido02.txt', data)
    });
    resp.on('end', () => {
        //console.log(body);
        
        //return res.json({result: body, status: 'success'});
    });
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});


// 3
let option = {
    method: "GET",
    url,
    responseType: 'arraybuffer'
  }
const result = axios(option);

result.then((image) => {
    let returnedB64 = Buffer.from(image.data).toString('base64');
    fs.writeFileSync('contenido03.txt', returnedB64)
}).catch((e) => {
    console.log('e', e)
})



// 4
var {Base64Encode} = require('base64-stream');
http.get(url, function(res) {
    if (res.statusCode === 200)
        res.pipe(new Base64Encode()).pipe(process.stdout);
})

// const contents = fs.readFileSync('archivo.png', {encoding: 'base64'});
// console.log('contenido', contents)

// fs.writeFileSync('contenido.txt', contents)