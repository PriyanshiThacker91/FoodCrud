const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const food=require('./Food');
const connectionString="mongodb+srv://avani_panara768:avani123@cluster0.bvi2i.mongodb.net/Food";
const cors=require('cors');
mongoose.connect(connectionString).then(()=>{


    const app=express();
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(cors())
    app.get('/food',async(req,res)=>{

        const ans= await food.find();
        res.send(ans);
    });

    app.get("/food/:id",async(req,res)=>{
        const ans=await food.findOne({id:req.params.id});
        res.send(ans);
    });


    app.post('/food',async(req,res)=>{

        const foodobj=new food({...req.body});

        const ans=await foodobj.save();
        res.send(ans);
    });


    app.put('/food/edit/:id',async(req,res)=>{

        const foodobj=await food.findOneAndUpdate({id:req.params.id},req.body);
        const ans=await foodobj.save();
        res.send(ans);
    });

    app.delete('/food/:id',async(req,res)=>{

        const ans=await food.deleteOne({id:req.params.id});
        res.send(ans);
    });


    app.listen(8000,()=>{
        console.log('server started @ 3000.......')
    })
})

