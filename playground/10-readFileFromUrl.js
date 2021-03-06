const https = require('https')
const fs = require('fs')

const url = 'https://incentivos.avoncpe.com/api/user/co/00000117825?preview=true' //'http://north-latam-mockup.s3.amazonaws.com/RCS/lmc/img/15minutos.png'
const targetPath = 'avon.pdf' //'archivo.png'

//const file = fs.createWriteStream(dest);
// http.get(url, response => {
//   var stream = response.pipe(file);

//   stream.on("finish", function() {
//     console.log("done");
//   });
// });


const download = (url, targetPath, cb) => { 
    const file = fs.createWriteStream(targetPath)
    const request = https.get( url, function(response) {
            response.pipe(file)
            file.on('finish', function() {
                file.close(cb(null, file));  // close() is async, call cb after close completes.
            })
        }).on('error', function(err) { // Handle errors
            fs.unlink(targetPath); // Delete the file async. (But we don't check the result)
            if (cb) cb(err.message);
        }
    )
}

download(url, targetPath, (error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})
