const dotenv = require ('dotenv')
dotenv.config()
const express = require('express');
const employeeRouter = require('./routes/employee')
const bodyparser = require('body-parser')
const cors = require('cors')
const Connection = require('./database/mongoose')
const app = express();

app.use(cors())
app.use(bodyparser.json());
app.use('/',employeeRouter)

app.listen(5000,async()=>{
    console.log('Server is running on port 5000');

    await Connection()
})
