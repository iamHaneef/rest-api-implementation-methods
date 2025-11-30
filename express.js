const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//now express implementation

//GET 

app.get("/login" , (req,res)=>{

    console.log("REQ BODY : " , req.body);
    console.log("GET WORKED");

    res.send("GET WORKED SUCCESSFULLY");

});

//POST

app.post("/about" , (req,res)=>{

    console.log("REQ BODY : " , req.body);
    console.log("REQ HEADERS : " , req.headers);
    console.log("GET WORKED");

    res.send("POST WORKED SUCCESSFULLY");

});

//PUT

app.put("/profile/:id" , (req,res)=>{

    console.log("REQ BODY : " , req.body);
    console.log("USER ID :  ", req.params.id);
    console.log("REQ HEADERS : " , req.headers);
    console.log("PUT WORKED");

    res.send("PUT WORKED SUCCESSFULLY");

});

//DELETE

app.delete("/profile/:id" , (req,res)=>{

    console.log("REQ BODY : " , req.body);
    console.log("USER ID :  ", req.params.id);
    console.log("REQ HEADERS : " , req.headers);
    console.log("DELETE WORKED");

    
    res.send("DELETE WORKED SUCCESSFULLY");

});


app.listen(3000 , () => {
    console.log("SERVER RUNNING ON PORT 3000");
})