// CRUD: create, read, update, delete

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString())
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true},
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database!')
        }

        const db = client.db(databaseName)

        // db.collection('users').insertOne({
        //     _id: id,
        //     name: 'Anthony',
        //     age: 36
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert user!')
        //     }
        //
        //     console.log(result.ops)
        // })

        // db.collection('users').insertMany([
        //     {
        //         name: 'Ben',
        //         age: 7
        //     },
        //     {
        //         name: 'Fausto',
        //         age: 1
        //     }
        // ], (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert documents!')
        //     }
        //
        //     console.log(result.ops)
        // })

        // db.collection('tasks').insertMany([
        //     {
        //         description: 'tarea 1',
        //         completed: true
        //     },
        //     {
        //         description: 'tarea 2',
        //         completed: true
        //     },
        //     {
        //         description: 'tarea 3',
        //         completed: false
        //     }
        // ], (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert tasks!')
        //     }
        //
        //     console.log(result.ops)
        // })

    })
