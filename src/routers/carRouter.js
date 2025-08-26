import express from 'express';
import { createCarController } from '../controller/car/createCarController.js';
import { listCarController } from '../controller/car/listCarController.js';
import { getByIdCarController } from '../controller/car/getByIdCarController.js';
import { editCarController } from '../controller/car/editCarController.js';
import { deleteCarController } from '../controller/car/deleteCarController.js';

const router = express.Router();

router.post('/', createCarController);
router.get('/', listCarController);
router.get('/:id', getByIdCarController);
router.put('/:id', editCarController);
router.delete('/:id', deleteCarController);

export default router;