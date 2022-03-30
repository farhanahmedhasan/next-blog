import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  message: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Messages = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Messages;
