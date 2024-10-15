import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExamScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exam Screen</Text>

      <Button
        title="Start Mock Exam"
        color="#A62D43"
        onPress={() => {
          // Start exam logic
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A62D43',
  },
});

export default ExamScreen;
