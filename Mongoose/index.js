const mongoose = require("mongoose");
//connection establish
main().then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//schema
const userSchema = mongoose.Schema({
    name : String,
    email : String,
    age : Number
});
//model
const User = mongoose.model("User", userSchema);

//insert by one
// const user1 = new User({
//     name : "Niraj",
//     email : "kumarniraj8607@gmail.com",
//     age : 21

// });

// const user2 = new User({
//     name : "Amit",
//     email : "amit@gmail.com",
//     age : 18
// })
// user1.save();
// user2.save();

// User.insertMany([
//     {name : "Niraj", email : "niraj@gmail.com", age : 22},
//     {name : "Ankit", email : "ankit@gmail.com", age :22},
//     {name : "Rohit", email : "rohit@gmail.com",age : 23}
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


//find in mongoose
User.find({}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});



//find in mongoose with conditions
// User.find({age :{$gt : 22}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//Model.updateOne()
// User.updateOne({name : "Ankit"}, {age : 82}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//Model.updateMany

// User.updateMany({age : {$gt : 22}}, {age : 55}).then((res)=> {
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })