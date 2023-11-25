import express from 'express';
import { flutter } from '../constroller/payment.controller.js';

const router = express.Router();

router.get("flutter", flutter);

export default router;