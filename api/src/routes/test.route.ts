import express from 'express';
import { startTest, submitTest, fetchQuestions, testRoute } from '../controllers/test.controller';
import { verifyToken } from '../utils/verifyUser';
const router = express.Router();

// router.post('/create',verifyToken, verifyAdmin, createTest);

router.get('/', testRoute);

router.get('/start', verifyToken, startTest)

router.get('/fetch-questions', verifyToken, fetchQuestions)

router.post('/tests/submit', verifyToken, submitTest);  // Submit test results

// router.post('/google', google)

export default router;