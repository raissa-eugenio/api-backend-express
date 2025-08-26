import express from 'express';
import { createSupplierController } from '../controller/supplier/createSupplierController.js';
import { listSupplierController } from '../controller/supplier/listSupplierController.js';
import { getByIdSupplierController } from '../controller/supplier/getByIdSupplierController.js';
import { editSupplierController } from '../controller/supplier/editSupplierController.js';
import { deleteSupplierController } from '../controller/supplier/deleteSupplierController.js';

const router = express.Router();

router.post('/', createSupplierController);
router.get('/', listSupplierController);
router.get('/:id', getByIdSupplierController);
router.put('/:id', editSupplierController);
router.delete('/:id', deleteSupplierController);

export default router;