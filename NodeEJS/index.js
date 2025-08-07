
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views"));
app.get("/" ,(req , res)=>{
    res.render("home.ejs");
});

app.get("/rolldice", (req, res)=>{
    let rolldice = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {num : rolldice});
})

app.get("/ig/:username", (req, res) => {
    let{username } = req.params;
    const instData = require("./data.json");
    let data = instData[username];
    // console.log(data);
    if(data){
        res.render("instagram", {data});
    }else{
        res.render("error");
    }
});

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});
