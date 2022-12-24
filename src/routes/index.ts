import express from "express";
import viewRouter from './viewRouter'
import webhookRouter from './webHookRouter'

let router = express.Router();

router.use('/',viewRouter);
router.use("/webhooks",webhookRouter);

export default router