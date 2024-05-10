import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const questionsFilePath = path.join(__dirname, '../data/questions.json').replace(/^\\/, '');

// Create the file if it doesn't exist
try {
    fs.accessSync(questionsFilePath, fs.constants.F_OK);
} catch (err) {
    fs.writeFileSync(questionsFilePath, '[]');
}

export const getAllQuestions = async (req, res) => {
    try {
        const questionsData = fs.readFileSync(questionsFilePath, 'utf8');
        const questions = JSON.parse(questionsData);
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createQuestion = async (req, res) => {
    try {
        const questionsData = fs.readFileSync(questionsFilePath, 'utf8');
        const questions = JSON.parse(questionsData);
        
        const newQuestion = {
            id: questions.length + 1,
            questionText: req.body.questionText,
            options: req.body.options
        };

        questions.push(newQuestion);

        fs.writeFileSync(questionsFilePath, JSON.stringify(questions, null, 2));

        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }   
};

export const getQuestionById = async (req, res) => {
    try {
        const questionsData = fs.readFileSync(questionsFilePath, 'utf8');
        const questions = JSON.parse(questionsData);

        const question = questions.find(q => q.id === parseInt(req.params.id));
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
