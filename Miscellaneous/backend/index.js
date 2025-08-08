const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// GET request handler
app.get("/register", (req, res) => {
    let { username, password } = req.query;  // 🟢 Corrected from `user` to `username`
    res.send(`Standard GET request - Welcome ${username}`);
});

// POST request handler
app.post("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`Standard POST request - Welcome ${username}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});