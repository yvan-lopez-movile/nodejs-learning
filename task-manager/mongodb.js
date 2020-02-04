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

        // db.collection('users').updateOne({
        //     _id: new ObjectID('5e39b0d7aa82e70d8873ae21')
        // }, {
        //     $inc: {
        //         age: 1
        //     }
        // }).then((result) => {
        //     console.log('Result', result)
        // }).catch((error) => {
        //     console.log('Error', error)
        // })

        db.collection('tasks').updateMany({
            completed: false
        }, {
            $set: {
                completed: true
            }
        }).then((result) => {
            console.log('Result', result)
        }).catch((error) => {
            console.log('Error', error)
        })

    })
