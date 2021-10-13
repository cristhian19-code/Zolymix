const Joi = require('@hapi/joi');

const schemaMessage = Joi.object({
    email: Joi.string().required().email(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    type_product: Joi.string().required(),
    message: Joi.string().required(),
    phone: Joi.number().required()
})

module.exports = {
    schemaMessage
}