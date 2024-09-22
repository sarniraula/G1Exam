import AsyncStorage from '@react-native-async-storage/async-storage';

// Store the token
export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('accessToken', token);
  } catch (error) {
    console.error('Error saving token to storage:', error);
  }
};

// Retrieve the token
export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token from storage:', error);
    return null;
  }
};

// Clear the token (logout function)
export const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('accessToken');
  } catch (error) {
    console.error('Error clearing token from storage:', error);
  }
};
