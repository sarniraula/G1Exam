import mongoose, { Schema } from 'mongoose';

const testResultSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  scoreSigns: { type: Number, required: true },
  scoreRules: { type: Number, required: true },
  passed: { type: Boolean, required: true },
  dateTaken: { type: Date, default: Date.now }
});

const TestResult = mongoose.model('TestResult', testResultSchema);
export default TestResult;
