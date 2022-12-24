import express from 'express';

import webhookController from '../controllers/webhookController';

let router = express.Router();

router
    .route('/')
    .get(webhookController.getWebHooks)
    .post(webhookController.postWebHooks);

export default router;
