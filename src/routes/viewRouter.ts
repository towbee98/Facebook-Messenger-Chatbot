import express from 'express';
import viewController from '../controllers/viewController';

let router = express.Router();

router.get('/', viewController.getHomePage);
router
    .route('/setup-profile')
    .post(viewController.setupProfile)
    .get(viewController.fetchSetupProfilePage);

export default router;
