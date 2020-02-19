require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('abc123').then((task) => {
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
