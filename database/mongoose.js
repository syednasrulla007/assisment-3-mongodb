const mongoose = require('mongoose');
const url = process.env.URL

const Connection = async()=>{
    try{
        console.log('connecting to db');
        const dbConn = await mongoose.connect(url)
        console.log("Connected to db");
    }
    catch(err){
        console.log('error in db connection')
    }
}

module.exports = Connection;