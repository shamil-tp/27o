const mongoose = require('mongoose')
const uri = 'mongodb+srv://shamil:urcx5298@mysnapgram.zq2yd.mongodb.net/personlist'

exports.connectDb = function(){
    mongoose.connect(uri).then(()=>{
        console.log('database connected')
    }).catch((e)=>{
        console.log('an error occured during connecting to the database')
        console.log(e)
    })
}
