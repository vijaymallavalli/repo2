const Conversation = require("../models/Conversation");
const User = require("../models/User");

exports.conversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();

    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] }
    });

    const user = await User.findById(req.params.userId).select("-password").populate("first_name last_name username picture");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const response = {
      conversation: {
        user: {
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          picture: user.picture
        },
        messages: conversation // Assuming there is a 'messages' property in the Conversation model
      }
    };

    res.status(200).json(response);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


