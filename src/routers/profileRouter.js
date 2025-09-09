import express from 'express';
import { createProfileController } from '../controller/profile/createProfileController.js';
import { listProfileController } from '../controller/profile/listProfileController.js';
import { getByIdProfileController } from '../controller/profile/getByIdProfileController.js';
import { editProfileController } from '../controller/profile/editProfileController.js';
import { deleteProfileController } from '../controller/profile/deleteProfileController.js';

const router = express.Router();

router.post('/', createProfileController)
router.get('/', listProfileController )
router.get('/:id', getByIdProfileController)
router.put('/:id', editProfileController)
router.delete('/:id',deleteProfileController )

export default router;