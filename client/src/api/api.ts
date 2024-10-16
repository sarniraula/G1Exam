import axios from "axios";

const API_URL = "http://192.168.2.112:8000/api";

export const loginUser = async (email: string, password: string) => {
    
    const response = await axios.post(`${API_URL}/auth/signin`, {
        email,
        password,
    });

    return response.data; // token and user details
};

// Register User
export const registerUser = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
    });
    return response.data; // Expected to return a token and user data
  };


// Fetch exam questions
export const fetchExamQuestions = async () => {
const response = await axios.get(`${API_URL}/exams/mock`);
return response.data; // array of exam questions
};

export const submitExamAnswers = async (answers: any) => {
    const response = await axios.post(`${API_URL}/exams/submit`, { answers });
    return response.data; // exam result and explanations
};



