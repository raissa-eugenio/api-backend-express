import express from 'express';
import { createProfileController } from '../controller/profile/createProfileController.js';
import { listProfileController } from '../controller/profile/listProfileController';
import { getProfileController } from '../controller/profile/getProfileController';
import { editProfileController } from '../controller/profile/editProfileController';
import { deleteProfileController } from '../controller/profile/deleteProfileController';

const router = express.Router();

router.post('/', createProfileController)
router.get('/', listProfileController )
router.get('/:id', getProfileController)
router.put('/:id', editProfileController)
router.delete('/:id',deleteProfileController )

export default router;