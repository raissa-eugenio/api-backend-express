import express from 'express';
import { createProductCrontroller } from '../controller/product/createProductController.js';
import { listProductCrontroller } from '../controller/product/listProductController.js';
import { getByIdProductController } from '../controller/product/getByIdProductController.js'; 
import { editProductController } from '../controller/product/editProductController.js'; 
import { deleteProductConroller } from '../controller/product/deleteProductController.js';

const router = express.Router();

router.post('/', createProductCrontroller )
router.get('/', listProductCrontroller )
router.get('/:id', getByIdProductController )
router.put('/:id', editProductController)
router.delete('/:id', deleteProductConroller )

export default router;