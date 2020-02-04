// CRUD: create, read, update, delete

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true},
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        // db.collection('users').deleteMany({
        //     age: 37
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        db.collection('tasks').deleteOne({
            _id: new ObjectID('5e39ad3abf0cd83ed8669385')
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })


    })
