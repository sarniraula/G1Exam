import express from "express";
import { getAllQuestions, createQuestion, getQuestionById } from '../controllers/questionController.js';

const router = express.Router();

router.get('/', getAllQuestions);
router.post('/', createQuestion);
router.get('/:id', getQuestionById);

export default router;  
