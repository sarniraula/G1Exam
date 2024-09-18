import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ text: String, isCorrect: Boolean }],
});

const testSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Traffic Rules"
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now },
});

const Test = mongoose.model('Test', testSchema);
export default Test;
