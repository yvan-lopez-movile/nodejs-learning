require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('abc123', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    return await User.documents({age})
}

updateAgeAndCount('abc123', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
