import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true }
});

const testQuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  category: { type: String, enum: ['Traffic Signs', 'Traffic Rules'], required: true },
  options: [optionSchema]
});

const TestQuestion = mongoose.model('TestQuestion', testQuestionSchema);
export default TestQuestion;
