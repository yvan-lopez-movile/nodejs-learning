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

        // db.collection('users').findOne({_id: new ObjectID('5e39a6eaf8c0c03ca0425129')}, (error, user) => {
        //     if (error) {
        //         console.log('Unable to fetch')
        //     }
        //
        //     console.log(user)
        // })

        // db.collection('users').find({age: 7}).toArray((error, users) => {
        //     console.log(users)
        // })
        //
        // db.collection('users').find({age: 7}).count((error, q) => {
        //     console.log(q)
        // })

        db.collection('tasks').findOne({_id: new ObjectID('5e39ad3abf0cd83ed8669385')}, (error, task) => {
            if (error) {
                console.log('Unable to fetch')
            }
            console.log(task)
        })

        db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
            if (error) {
                console.log('Unable to fetch')
            }

            console.log(tasks)
        })

    })
