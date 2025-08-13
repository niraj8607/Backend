const mongoose = require("mongoose");
const Chat = require("./Models/chat");

main()
  .then(() => {
    console.log("connection successful");

    // Insert multiple values
    return Chat.insertMany([
      {
        from: "Nikky",
        to: "Niraj",
        msg: "How are you?",
        created_at: new Date(),
      },
      {
        from: "Niraj",
        to: "Nikky",
        msg: "I’m good! How about you?",
        created_at: new Date(),
      },
      {
        from: "Ankit",
        to: "Niraj",
        msg: "Hey! Long time no see.",
        created_at: new Date(),
      },
      {
        from: "Niraj",
        to: "Ankit",
        msg: "Yeah, been busy lately!",
        created_at: new Date(),
      },
      {
        from: "Priya",
        to: "Nikky",
        msg: "Let’s meet tomorrow.",
        created_at: new Date(),
      }
    ]);
  })
  .then((res) => {
    console.log("✅ Data inserted successfully:", res);
  })
  .catch((err) => console.error(err));

async function main() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/whatsapp`);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}