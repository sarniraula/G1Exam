import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { fetchExamQuestions, submitExamAnswers } from '../api/api';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const ExamScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState<any>({});

  type Question = {
    id: string;
    question: string;
    options: string[];
  };

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const examQuestions = await fetchExamQuestions();
        setQuestions(examQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const handleAnswer = (questionId: string, selectedOption: string) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleSubmitExam = async () => {
    try {
      const result = await submitExamAnswers(answers); // Call API to submit
      navigation.navigate('Result', { result }); // Navigate to Result Screen
    } catch (error) {
      console.error('Error submitting exam:', error);
    }
  };

  const renderQuestion = ({ item }: {item: Question}) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      {item.options.map((option: string) => (
        <Button
          key={option}
          title={option}
          color={answers[item.id] === option ? '#A62D43' : '#ccc'}
          onPress={() => handleAnswer(item.id, option)}
        />
      ))}
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#A62D43" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        renderItem={renderQuestion}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Submit Exam"
        color="#A62D43"
        onPress={() => {
          handleSubmitExam();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  questionContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
    color: '#A62D43',
    marginBottom: 10,
  },
});

export default ExamScreen;
