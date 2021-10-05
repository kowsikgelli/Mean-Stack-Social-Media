const Message = require("../models/messageModel")

exports.newMessage = async (req,res)=>{
    const {conversationId,sender,text} = req.body
    try{
        const newMessage = await Message.create({
            conversationId,
            sender,
            text
        })
        res.send({success:true,response:newMessage})
    }catch(err){
        res.send({success:false,message:err.message})
    }
}

exports.getMessagesOfaConversation = async(req,res)=>{
    try{
        const messages = await Message.find({
            conversationId:req.params.conversationId
        })
        res.send({success:true,response:messages})
    }catch(err){
        res.send({success:false,message:err.message})
    }
}