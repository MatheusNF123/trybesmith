import Joi from 'joi';
import { ILogin, IProduct, IProductId, IUser } from '../../interfaces';

const validateBody = (body: ILogin) => Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

const joiValidateBodyProducts = (body: IProduct) => Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': '"name" is required',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.empty': '"amount" is required',
  }),
}).validate(body);

const joiValidateBodyUsers = (body: IUser) => Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.empty': '"username" is required',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.empty': '"classe" is required',
  }),
  level: Joi.number().min(1).required().messages({
    'number:min': '"level" must be greater than or equal to 1',
    'string.empty': '"password" is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.empty': '"password" is required',
  }),
}).validate(body);

const joiValidateBodyProductId = (body: IProductId) => Joi.object({
  productsIds: Joi.array().required().items(
    Joi.number().required(),
  )
    .messages({
      'array:min': '"productsIds" must include only numbers',
      'any:required': '"productsIds" must include only numbers',
    }),

}).validate(body);

export { joiValidateBodyProducts, joiValidateBodyUsers, joiValidateBodyProductId };
export default validateBody;
