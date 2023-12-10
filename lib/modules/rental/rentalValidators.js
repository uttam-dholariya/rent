import joi from 'joi';
import { requestResponse, sendError } from '../../handlers/responseHandler.js';
import { messages } from './rentalConstants.js';
import { CODE } from '../../constants.js';

function validationErrorHandler(res, error) {
  sendError(
    res,
    requestResponse(
      CODE.badRequest,
      error.details
        ? error.details[0].message
        : 'There is some issue in validation.',
      {},
    ),
  );
}

export async function createProductValidation(req, res, next) {
  try {
    console.log("validesan ", req.body)
    // const schema = joi.object({
    //   email: joi.string().empty('').email().required().messages({
    //     'any.required': messages.email,
    //   }),
    //   password: joi.string().empty('').required().messages({
    //     'any.required': messages.password,
    //   }),
    // });
    // await schema.validateAsync(req.body);
    next();
  } catch (error) {
    console.log('error =', error);
    validationErrorHandler(res, error);
  }
}

export async function uploadImgProductValidation(req, res, next) {
  try {
    console.log("validesan ", req.files)
    // const schema = joi.object({
    //   email: joi.string().empty('').email().required().messages({
    //     'any.required': messages.email,
    //   }),
    //   password: joi.string().empty('').required().messages({
    //     'any.required': messages.password,
    //   }),
    // });
    // await schema.validateAsync(req.body);
    next();
  } catch (error) {
    console.log('error =', error);
    validationErrorHandler(res, error);
  }
}
