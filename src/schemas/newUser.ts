import Joi from 'joi';

export const newUserSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name cannot be an empty field',
    'string.min': 'Name must have at least {#limit} characters',
    'any.required': 'Name is a required field',
  }),

  email: Joi.string()
    .email()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.base': 'Email must be a string',
      'string.email': 'Email must be a valid email address',
      'string.empty': 'Email cannot be an empty field',
      'any.required': 'Email is a required field',
    }),
});
