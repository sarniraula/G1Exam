// import mongoose, { Schema, Document } from 'mongoose';

// // Define the schema for each question's options
// const optionSchema = new Schema({
//   text: { type: String, required: true },    // The text for the option
//   isCorrect: { type: Boolean, required: true },  // Flag if the option is the correct answer
// });

// // Define the schema for each question in the test
// const questionSchema = new Schema({
//   questionText: { type: String, required: true }, // The question itself
//   questionImage: { type: String, default: "https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_1280.jpg"},
//   options: { type: [optionSchema], required: true }, // Array of possible options for the question
//   explanation: { type: String }, // Optional: An explanation for the correct answer
// });

// // Define the schema for the overall test
// const testSchema = new Schema({
//   title: { type: String, required: true },  // The title of the test
//   category: { type: String, required: true },  // e.g., "Traffic Rules", "Signs", etc.
//   isFree: { type: Boolean, default: true },  // Flag to indicate if the test is free or paid
//   questions: { type: [questionSchema], required: true }, // Array of questions
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the test
//   totalMarks: { type: Number, required: true },  // Total marks for the test
//   passingMarks: { type: Number, required: true }, // Minimum marks required to pass
//   duration: { type: Number, required: true }, // Duration of the test in minutes
//   createdAt: { type: Date, default: Date.now },  // Timestamp of when the test was created
// });

// const Test = mongoose.model('Test', testSchema);

// export default Test;
