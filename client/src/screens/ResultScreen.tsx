import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ResultScreen = ({ route }: any) => {
  const { result } = route.params;

  const renderExplanation = ({ item }: any) => (
    <View style={styles.explanationContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      <Text style={styles.explanationText}>
        Correct Answer: {item.correctAnswer}
      </Text>
      <Text style={styles.explanationText}>Explanation: {item.explanation}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exam Results</Text>
      <Text style={styles.scoreText}>Score: {result.score}</Text>
      <FlatList
        data={result.wrongAnswers}
        renderItem={renderExplanation}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A62D43',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#A62D43',
  },
  explanationContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    color: '#A62D43',
  },
  explanationText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ResultScreen;
