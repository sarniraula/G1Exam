import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { theme } from '../theme';  // Import theme for styling

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen: React.FC = () => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const password = watch("password");

  const onSubmit = (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
    } else {
      // Call registration API or handle successful registration here
      Alert.alert('Registration Success', `Email: ${data.email}`);
      navigation.navigate('Login'); // Redirect to Login after successful registration
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } }}
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

      <Text style={styles.label}>Confirm Password</Text>
      <Controller
        control={control}
        rules={{ required: 'Please confirm your password' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Confirm your password"
            secureTextEntry
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleSubmit(onSubmit)} color={theme.colors.primary} />
      </View>

      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Sign In
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
  title: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
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
  buttonContainer: {
    marginTop: theme.spacing.medium,
  },
  link: {
    color: theme.colors.link,
    textAlign: 'center',
    marginTop: theme.spacing.large,
  },
});

export default RegisterScreen;
