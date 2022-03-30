import mongoose from "mongoose";
import Messages from "../../model/messageModel";

const handleForm = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
      return res.status(422).json({
        status: "failed",
        message: "Invalid input",
      });
    }

    // Store in a db
    const newMessage = {
      email,
      name,
      message,
    };

    const DB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.dhf6k.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

    let db;
    try {
      db = await mongoose.connect(DB);
    } catch (error) {
      return res.status(500).json({
        status: "failed",
        message: `Couldn't Connect to Database`,
      });
    }

    try {
      await Messages.create(newMessage);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message: `We couldn't store the message`,
      });
      db.disconnect();
      return;
    }

    return res.status(201).json({
      status: "success",
      data: {
        message: newMessage,
      },
    });
  }
};

export default handleForm;
