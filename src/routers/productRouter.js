import express from 'express';
import { createProductController } from '../controller/product/createProductController.js';
import { listProductController } from '../controller/product/listProductController.js';
import { getByIdProductController } from '../controller/product/getByIdProductController.js'; 
import { editProductController } from '../controller/product/editProductController.js'; 
import { deleteProductController } from '../controller/product/deleteProductController.js';

const router = express.Router();

router.post('/', createProductController )
router.get('/', listProductController )
router.get('/:id', getByIdProductController )
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController )

export default router;