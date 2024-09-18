// src/screens/WelcomeScreen.tsx
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { theme } from '../theme'; // Import the theme

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Driving License Test App</Text>
      <Text style={styles.subtitle}>Prepare for your driving test with ease!</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('Login')} // Navigate to Login screen
          color={theme.colors.primary}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Register')} // Navigate to Register screen
          color={theme.colors.secondary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fontSizes.extraLarge,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
  },
  subtitle: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
  },
  buttonContainer: {
    marginTop: theme.spacing.medium,
    width: '80%',
  },
});

export default WelcomeScreen;
