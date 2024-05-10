import mongoose from "mongoose";
        
const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true
    },
    options: [{
        text: {
            type: String,
            required: true
        },
        isCorrect: {
            type: Boolean,
            required: true
        }
    }]
});

// module.exports = mongoose.model('Question', questionSchema);
export default mongoose.model('Question', questionSchema);
    