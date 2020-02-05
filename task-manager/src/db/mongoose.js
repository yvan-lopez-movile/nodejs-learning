const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })
//
// const me = new User({
//     name: 'Yvan',
//     age: 37 //'any_string'
// })
//
// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Clean the house',
    completed: true
})

task.save().then((taskResult) => {
    console.log(taskResult)
}).catch((error) => {
    console.log('Error!', error)
})
