import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { theme } from '../theme'; // Assuming a theme file exists
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <LinearGradient colors={['#6E8EF7', '#67C0FF']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, [User Name]!</Text>
        <Text style={styles.subText}>Are you ready for your next challenge?</Text>
      </View>

      {/* Main Buttons */}
      <View style={styles.mainSection}>
        <TouchableOpacity style={styles.startTestButton} onPress={() => navigation.navigate('StartTest')}>
          <Text style={styles.startTestButtonText}>Start New Test</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resultsButton} onPress={() => navigation.navigate('PreviousResults')}>
          <Text style={styles.resultsButtonText}>View Previous Results</Text>
        </TouchableOpacity>

        {/* Progress Overview */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Your Progress</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressText}>75% Complete</Text>
        </View>

        {/* Upgrade to Premium */}
        <TouchableOpacity style={styles.upgradeButton} onPress={() => navigation.navigate('Upgrade')}>
          <Text style={styles.upgradeButtonText}>Upgrade to Premium</Text>
        </TouchableOpacity>
      </View>

      {/* Tips Section */}
      <View style={styles.tipsSection}>
        <Text style={styles.tipsTitle}>Daily Driving Tips</Text>
        <Text style={styles.tipText}>Always check your mirrors before changing lanes!</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.large,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 26,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: theme.colors.muted,
    marginTop: theme.spacing.small,
  },
  mainSection: {
    alignItems: 'center',
  },
  startTestButton: {
    width: '80%',
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
    marginBottom: theme.spacing.large,
  },
  startTestButtonText: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  resultsButton: {
    width: '80%',
    backgroundColor: theme.colors.secondary,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
    marginBottom: theme.spacing.large,
  },
  resultsButtonText: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.white,
  },
  progressContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: theme.spacing.large,
  },
  progressTitle: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
  },
  progressBar: {
    width: '100%',
    height: theme.normalize(20),
    backgroundColor: theme.colors.muted,
    borderRadius: theme.borderRadius.small,
    overflow: 'hidden',
  },
  progressFill: {
    width: '75%',
    height: '100%',
    backgroundColor: theme.colors.primary,
  },
  progressText: {
    marginTop: theme.spacing.small,
    color: theme.colors.text,
  },
  upgradeButton: {
    width: '80%',
    backgroundColor: theme.colors.danger,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
  },
  upgradeButtonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.white,
  },
  tipsSection: {
    padding: theme.spacing.large,
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
  },
  tipsTitle: {
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  tipText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.text,
    marginTop: theme.spacing.small,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: theme.spacing.medium,
    backgroundColor: theme.colors.backgroundDark,
    borderTopLeftRadius: theme.borderRadius.large,
    borderTopRightRadius: theme.borderRadius.large,
  },
  navIcon: {
    width: theme.normalize(24),
    height: theme.normalize(24),
    tintColor: theme.colors.white,
  },
});

export default HomeScreen;
