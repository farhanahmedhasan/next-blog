const handleForm = (req, res) => {
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

    console.log(newMessage);

    return res.status(201).json({
      status: "success",
      data: {
        message: newMessage,
      },
    });
  }
};

export default handleForm;
