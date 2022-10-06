import Joi from 'joi';
import { ILogin, IProduct } from '../../interfaces';

const validateBody = (body: ILogin) => Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

const joiValidateBodyProducts = (body: IProduct) => Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': '"name" is required',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.empty': '"name" is required',
  }),
}).validate(body);

export { joiValidateBodyProducts };
export default validateBody;
