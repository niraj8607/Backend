import express from "express";

const app = express();
const port = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("You connected with root path");
});

//path parameter
app.get("/:username/:id" , (req, res) =>{
    let{username, id} = req.params;
    res.send(`Welcome to the page of @${username}`);
});

//Query String
app.get("/search", (req,res) =>{
    let {q} = req.query;
    res.send(`Your search result for query is ${q}`);
})

// Start server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// Apple route
// app.get("/apple", (req, res) => {
//   res.send("You connected with apple path");
// });

// Mango route
// app.get("/mango", (req, res) => {
//   res.send("You connected with mango path");
// });

// Catch-all route (for undefined paths)
// app.get(/(.*)/, (req, res) => {
//   res.send("This path does not exist");
// });



// app.use((req , res) =>{
//     console.log("request received");
//     res.send("<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>");
// });
