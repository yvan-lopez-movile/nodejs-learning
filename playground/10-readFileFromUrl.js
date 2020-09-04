const http = require('http')
const fs = require('fs')

const url = 'http://north-latam-mockup.s3.amazonaws.com/RCS/lmc/img/15minutos.png'
const dest = 'archivo.png'

//const file = fs.createWriteStream(dest);
// http.get(url, response => {
//   var stream = response.pipe(file);

//   stream.on("finish", function() {
//     console.log("done");
//   });
// });


const download = (url, dest, cb) => { 
    const file = fs.createWriteStream(dest)
    const request = http.get( url, function(response) {
            response.pipe(file)
            file.on('finish', function() {
                file.close(cb(null, file));  // close() is async, call cb after close completes.
            })
        }).on('error', function(err) { // Handle errors
            fs.unlink(dest); // Delete the file async. (But we don't check the result)
            if (cb) cb(err.message);
        }
    )
}

download(url, dest, (error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})
