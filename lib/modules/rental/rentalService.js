

import logger from '../../services/logging.js';

import { requestResponse } from '../../handlers/responseHandler.js';
import {
  CODE,
  MESSAGE,

} from '../../constants.js';
import { createConnection } from '../../services/database.js';
import uploadImg from '../../utils/multer.js';



/**
 * *
 * @param {*} req
 * @param {*} res
 *
 */
export async function createProduct(req) {
  try {
    const connection =  await createConnection();
    console.log("sasa",req.body)
    console.log("sasa",req.files)
    const { primeuid, internalrefrence, name, bussnesstype, producttype, productcategory, size, color, taxcode, taxpersantage, qty, saleprice, photo } = req.body;
    
    const productAddQuery= `INSERT INTO "RENT"."PRODUCT" (PRIME_UID, INTERNAL_REFRENCE, NAME, BUSSNESS_TYPE, PRODUCT_TYPE, PRODUCT_CATEGORY, P_SIZE, COLOR, TAX_CODE, TAX_PERSANTAGE, QTY, SALE_PRICE, PHOTO)
     VALUES ('${primeuid}', '${internalrefrence}', '${name}', '${bussnesstype}', '${producttype}', '${productcategory}', '${size}', '${color}', '${taxcode}', '${taxpersantage}', '${qty}', '${saleprice}', '${photo}')`;
    const commitQuery= `COMMIT`; 
  
    const addResult = await connection.execute(productAddQuery);
    const commitResult = await connection.execute(commitQuery);
    if(addResult && commitResult){
      return requestResponse(CODE.success, MESSAGE.orgStepOneDone,req.body);
    }
      
  } catch (error) {
    logger.error(error);
    return requestResponse(CODE.intrnlSrvr, MESSAGE.internalServerError, error);
  }
}
export async function uploadImgProduct(req) {
  try {
    console.log("req.files",req.files)
    if(true){
      return requestResponse(CODE.success, MESSAGE.orgStepOneDone,"req.body");
    }
      
  } catch (error) {
    logger.error(error);
    return requestResponse(CODE.intrnlSrvr, MESSAGE.internalServerError, error);
  }
}
