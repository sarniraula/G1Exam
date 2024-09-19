import axios from 'axios';
import TestQuestion from '../models/testQuestion.model';
import TestResult from '../models/testResult.model';
import errorHandler from '../utils/error';

export const fetchQuestions = async (req: any, res: any, next: any) => {
  try {
    const questionsUrl = process.env.QUESTIONS_URL || 'defaultURL';
    
    const response = await axios.get(questionsUrl);

    const { trafficSigns, trafficRules } = response.data;

    if (!trafficSigns || !trafficRules) {
      return next(errorHandler(404, 'Questions not found!'));
    }

    // Randomly pick 20 questions from each category
    const randomSigns = trafficSigns.sort(() => 0.5 - Math.random()).slice(0, 20);
    const randomRules = trafficRules.sort(() => 0.5 - Math.random()).slice(0, 20);

    res.status(200).json({ signs: randomSigns, rules: randomRules });
  } catch (error) {
    next(errorHandler(500, 'Error fetching questions'));
  }
}

//Generate Random questions from two categories
export const startTest = async (req: any, res: any, next: any) => {
  try {
    const trafficSigns = await TestQuestion.find({ category: 'Traffic Signs' });
    const trafficRules = await TestQuestion.find({ category: 'Traffic Rules' });

    // Pick 20 random questions from each category
    const randomSigns = trafficSigns.sort(() => 0.5 - Math.random()).slice(0, 20);
    const randomRules = trafficRules.sort(() => 0.5 - Math.random()).slice(0, 20);

    res.status(200).json({ signs: randomSigns, rules: randomRules });
  } catch (error) {
    next(error);
  }
};

// Submit the test and calculate the result
export const submitTest = async (req: any, res: any, next: any) => {
  const { answers } = req.body;

  try {
    let correctSigns = 0;
    let correctRules = 0;

    for (const answer of answers) {
      const question = await TestQuestion.findById(answer.questionId);
      if(!question) {
        return res.status(404).json({ message: 'Question not found' });
      };

      if (question.category === 'Traffic Signs') {
        const correctOption = question.options.find(opt => opt.isCorrect);
        if (correctOption && correctOption.text === answer.selected) correctSigns++;
      }

      if (question.category === 'Traffic Rules') {
        const correctOption = question.options.find(opt => opt.isCorrect);
        if (correctOption && correctOption.text === answer.selected) correctRules++;
      }
    }

    const passedSigns = correctSigns >= 16;
    const passedRules = correctRules >= 16;
    const passed = passedSigns && passedRules;

    const result = new TestResult({
      user: req.user.id,
      scoreSigns: correctSigns,
      scoreRules: correctRules,
      passed
    });

    await result.save();

    res.status(200).json({ passed, correctSigns, correctRules });
  } catch (error) {
    next(error);
  }
};





