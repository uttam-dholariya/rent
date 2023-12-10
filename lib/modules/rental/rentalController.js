import {
  createProduct,
  uploadImgProduct
} from './rentalService.js';
import { sendError, sendSuccess } from '../../handlers/responseHandler.js';
/**
 * *
 * @param {*} req
 * @param {*} res
 * Created Date :
 * Developer :
 */
export function createProductControl(req, res) {
  return createProduct(req)
    .then((result) => {
      sendSuccess(res, result);
    })
    .catch((err) => {
      sendError(res, err);
    });
}
export function uploadImgProductControl(req, res) {
  return uploadImgProduct(req)
    .then((result) => {
      sendSuccess(res, result);
    })
    .catch((err) => {
      sendError(res, err);
    });
}
