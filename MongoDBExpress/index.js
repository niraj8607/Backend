const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./Models/chat");

const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/whatsapp`);
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
}

// Routes
app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    res.render("index", { chats });
});

app.get("/chats/new", (req, res) => {
    res.render("newchat");
});

app.post("/chats", async (req, res) => {
    let { from, to, msg } = req.body;
    let newchat = new chat({
        from,
        to,
        msg,
        created_at: new Date()
    });
    await newchat.save();
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

