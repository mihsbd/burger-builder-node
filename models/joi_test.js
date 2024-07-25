const Joi = require('joi');
// search 'npm joi' for knowing details

const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
})

const user = {
    email: "hello@gmail.com",
    password: "12345"
}

// const result = schema.validate(user);
// console.log(result);
// console.log(result.error);
const { error } = schema.validate(user);    // destructuring
// console.log(error);
// console.log(error.details);
// console.log(error.details[0]);
console.log(error.details[0].message);
