import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const loginUser = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/signin`, {
      email,
      password,
    });

    return response.data; // token and user details
};

export const fetchExamQuestions = async () => {
const response = await axios.get(`${API_URL}/exams/mock`);
return response.data; // array of exam questions
};

export const submitExamAnswers = async (answers: any) => {
    const response = await axios.post(`${API_URL}/exams/submit`, { answers });
    return response.data; // exam result and explanations
};



