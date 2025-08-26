import express from 'express';
import { createCustomerController } from '../controller/customer/createCustomerController.js';
import { listCustomerController } from '../controller/customer/listCustomerController.js';
import { getByIdCustomerController } from '../controller/customer/getByIdCustomerController.js';
import { editCustomerController } from '../controller/customer/editCustomerController.js';
import { deleteCustomerController } from '../controller/customer/deleteCustomerController.js';

const router = express.Router();

router.post('/', createCustomerController);
router.get('/', listCustomerController);
router.get('/:id', getByIdCustomerController);
router.put('/:id', editCustomerController);
router.delete('/:id', deleteCustomerController);

export default router;
