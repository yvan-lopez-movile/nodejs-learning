require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('abc123').then((task) => {
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    return await Task.documents({completed: false})
}

deleteTaskAndCount('123abc').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

