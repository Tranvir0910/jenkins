const mongoose = require('mongoose');

// await phải nằm trong func async
async function connect(){
    // xử lý lỗi try catch trong async await
    try {
        await mongoose.connect('mongodb://localhost:27017/edu_dev', {});
        console.log('Connected!!!');
    } catch (error) {
        console.log('Fail!!!');
    }
}

module.exports = { connect };