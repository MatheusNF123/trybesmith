import Joi from 'joi';
import { ILogin } from '../../interfaces';

const validateBody = (body: ILogin) => Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

export default validateBody;