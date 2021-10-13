const Message = require('../models/email.model');
const { schemaMessage } = require('../validate/message.validate');

const getMessages = async (req,res)=>{
    const messages = await Message.find();
    
    res.json({
        data: messages,
        error: false,
    })
}

const postMessage = async (req,res)=>{
    try {
        const {error} = schemaMessage.validate(req.body);

        if(!error){
            const response = await new Message(req.body);
            const message = await response.save();

            res.json({
                data: message,
                error: false
            })
        }else{
            res.status(400).json({
                error: error.details[0].message
            })
        }
    } catch (error) {
        res.status(400).json({
            data: null,
            error: true
        });
    }
}

module.exports = {
    getMessages,
    postMessage
}