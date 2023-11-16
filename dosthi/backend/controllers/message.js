const Message= require("../models/Message");
exports.message = async (req,res)=> {
    const newMessage = new message(req.body)
    try{
        const savedMessage = await newMessage.save();
         res.status(200).json(savedMessage);

    }catch(err){
        res.status(400).json(err)
    }
}