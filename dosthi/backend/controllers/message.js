const Message = require("../models/Message");
exports.message = async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    console.log(req.body);
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.getMessage = async (req, res) => {
  try {
    console.log(req.params);
    // const conId = req.params.conversationId;
    // console.log(conId)

    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};

