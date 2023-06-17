const express = require('express')
const app = express()
const mongoose = require('mongoose');

const Product = require('./model/productModel');

const port = process.env.PORT|| 3000;

app.use(express.json());

//route
app.get("/", (req, res)=>{
    res.send("hello Node API");
});

app.get("/blog", (req, res) =>{
    res.send("Hello blog");
})

app.post("/product", async(req, res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(err){
        console.log("error occured inside product post")
        res.status(500).json({message: err.message});
    }
    console.log(req.body);
})

mongoose.set("strictQuery", false);
mongoose
.connect("mongodb+srv://nikhiln:12345nikhiladmin@cluster0.wieoljn.mongodb.net/nodeapi?retryWrites=true&w=majority")
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Node api app is running on port ${port}`);    
    })
    console.log("Connection to mongo done");
}).catch(()=>{
    console.log("Authentication failed for mongo db")
});
