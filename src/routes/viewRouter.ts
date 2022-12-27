import express from 'express';
import viewController from '../controllers/viewController';

let router = express.Router();

router.get('/', viewController.getHomePage);
router.post('/setup-profile', viewController.setupProfile);

export default router;
