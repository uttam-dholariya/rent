import { Router } from 'express';

import {
  createProductControl,
  uploadImgProductControl
 
} from './rentalController.js';
import {
  createProductValidation,
  uploadImgProductValidation
 
} from './rentalValidators.js';
import uploadImg from '../../utils/multer.js';

const rentalRoute = Router();

rentalRoute.route('/createProduct').post([createProductValidation], createProductControl);
    
    rentalRoute.route('/uploadImg').post(uploadImg.single("photo"),uploadImgProductControl);

export default rentalRoute;
