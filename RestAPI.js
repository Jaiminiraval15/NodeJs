const express=require('express');
const mongoose=require('mongoose');
const Car=require('./model/Car');
const bodyParser=require('body-parser');

mongoose.connect('mongodb+srv://jaimini15:<password>@cluster0.l0lxyjh.mongodb.net/Supercars?retryWrites=true&w=majority')
.then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    
    //getallfaculties
    app.get('/cars',async (req,res)=>{
        const data=await Car.find();
        res.send(data);
    })
    //insertnew
    app.post('/car',async(req,res)=>{
        const sup=new Car();
        sup.id=req.body.id;
        sup.SuperCarName=req.body.name;
        sup.SuperCarImage=req.body.img;
        sup.SuperCarDescription=req.body.desp;
        sup.SuperCarPrice=req.body.price;
       
        const data=await sup.save();
        res.send(data);
    })
    //getbyid
    app.get('/car',async(req,res)=>{
        const data=await Car.findOne({id:req.params.id})
        res.send(data)
    })
    //update
    app.put('/car/:id',async(req,res)=>{
        const data=await Car.findOne({id:req.params.id})
        data.id=req.body.id;
        data.SuperCarName=req.body.name;
        data.SuperCarImage=req.body.img;
        data.SuperCarDescription=req.body.desp;
        data.SuperCarPrice=req.body.price;
       
        await data.save();
        res.send(data);
    })
    //delete
    app.delete('/car/:id',async(req,res)=>{
        const data =await Car.deleteOne({id:req.params.id})
        res.send(data);
    })
    app.listen(1515,()=>{
        console.log("Server started @ 1515")
    })

})