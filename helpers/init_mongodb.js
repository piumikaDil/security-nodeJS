const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("mongodn is connected");
}).catch((err)=>{
    console.error(err)
})