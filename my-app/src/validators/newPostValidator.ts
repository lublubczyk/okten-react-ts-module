import Joi from "joi";

const newPostValidator = Joi.object({
    userId: Joi.number().min(1).max(10).required().messages({
        "number.min": "min number 1",
        "number.max": "max number 10",
        "number.base": "Can not be empty"
    }),
    body: Joi.string().pattern(/^[^\d]+$/).max(200).required().messages({
        "string.pattern.base": "Can not use number",
        "string.max": "Max length body 200 symbols",
        "string.empty": "Can not be empty"
    }),
    title: Joi.string().pattern(/^[^\d]+$/).max(30).required().messages({
        "string.max": "Max title length 30 symbols",
        "string.empty": "Can not be empty",
        "string.pattern.base": "Can not use number"
    })
});

export { newPostValidator };