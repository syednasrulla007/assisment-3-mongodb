const {Information} = require('../models/info')
const data = require('../ApiFile/ApiData')

const employeeEnrollment = async(req,res)=>{
    try{
    const result = await Information.insertMany(data);
    res.send(result)
    }
    catch(err){
        console.log(err.message);
        res.send('Error in student enrollement')
    }
        
}

const getAllData = async(req,res)=>{
    try{
        const result = await Information.find()
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const dataBySalary = async(req,res)=>{
    try{
        const result = await Information.find({salary:{$gt:'30000'}})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const dataByExp = async(req,res)=>{
    try{
        const result = await Information.find({'overallExp':{$gt:'1'}})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const dataByGrad = async(req,res)=>{
    try{
        const result = await Information.find({$and:[{'yearGrad':{$gt:2015}},{'overallExp':{$gt:'1'}}]})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const updateBySalary = async(req,res)=>{
    try{
        const result = await Information.updateOne({department:'HR'},{$set:{salary:'65000'}})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const deleteEmployee = async(req,res)=>{
    try{
        const result = await Information.deleteMany({lastCompany:'Y'})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}


module.exports = {employeeEnrollment,getAllData,dataBySalary,dataByExp,dataByGrad,updateBySalary,deleteEmployee}