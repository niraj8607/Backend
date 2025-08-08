const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // Import UUID

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding"
  },
  {
    id: uuidv4(),
    username: "nirajkumar",
    content: "Hard work is important to achieve success"
  },
  {
    id: uuidv4(),
    username: "yadavnikky",
    content: "I got selected for my 1st internship"
  },
];

app.get("/post", (req, res) => {
  res.render("index", { posts });
});

app.get("/post/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ id: uuidv4(), username, content }); // Generate new UUID
  res.redirect("/post");
});

app.get("/post/:id", (req, res) => {
  let { id } = req.params;
  console.log({ id });

  let post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("show.ejs", { post });
});

// Show Edit Form
app.get("/post/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("edit.ejs", { post });
});

// Handle Edit Form Submission
app.post("/post/:id", (req, res) => {
  let { id } = req.params;
  let { username, content } = req.body;

  let post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).send("Post not found");
  }

  post.username = username;
  post.content = content;

  res.redirect(`/post/${id}`);
});

// Delete Post
app.post("/post/:id/delete", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => p.id !== id); // remove post with matching id
  res.redirect("/post");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});