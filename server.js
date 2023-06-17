const express = require('express')
const app = express()

const port = process.env.PORT|| 3000;

//route

app.get("/", (req, res)=>{
    res.send("hello Node API");
});




app.listen(port, ()=>{
    console.log(`Node api app is running on port ${port}`);    
})