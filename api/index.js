import express from "express";

const app=express();

app.use(express.json());  //
app.get("/", (req, res) => {
    res.send("Welcom to PropEasy API");
});

app.listen(3000,()=>{
    console.log("PropEasy is runnning on 3000");

});