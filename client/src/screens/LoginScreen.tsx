import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { theme } from '../theme'; // Import the theme
import { useState } from 'react';
import { storeToken } from '../storage';  // Token storage functions

type FormData = {
  email: string; 
  password: string;
};

const LoginScreen: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [loading, setLoading] = useState(false); // Loading state

  // Function to handle login API request
  const onSubmit = async (data: FormData) => {
    setLoading(true); // Show loader while logging in
    try {
      // Call your login API
      const res = await fetch('http://192.168.2.112:8000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        }),
      });
      const responseData = await res.json(); // Parse the response body
    
      const { accessToken, user } = responseData; // Destructure response data
      // Store the token in AsyncStorage
      await storeToken(accessToken);

      // Show success alert and navigate to the home screen
      Alert.alert('Login Success', `Welcome, ${user.username}`);
      navigation.navigate('Home');
    } catch (error) {
      // Handle errors from API
      Alert.alert('Login Failed', 'Invalid email or password');
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        rules={{ required: 'Email is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        rules={{ required: 'Password is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your password"
            secureTextEntry
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      {/* Show loader if logging in */}
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      )}

      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
  },
  label: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
  },
  input: {
    height: theme.normalize(40),
    borderColor: theme.colors.muted,
    borderWidth: 1,
    marginBottom: theme.spacing.medium,
    paddingLeft: theme.spacing.small,
    borderRadius: theme.borderRadius.small,
  },
  error: {
    color: theme.colors.danger,
    marginBottom: theme.spacing.small,
  },
  link: {
    color: theme.colors.link,
    textAlign: 'center',
    marginTop: theme.spacing.large,
  },
});

export default LoginScreen;
