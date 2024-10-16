import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LearningModulesScreen from '../screens/LearningModulesScreen';
import ExamScreen from '../screens/ExamScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

type IconName = 'home-outline' | 'book-outline' | 'clipboard-outline' | 'person-outline';

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: IconName | undefined;
          
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Learning') {
            iconName = 'book-outline';
          } else if (route.name === 'Exams') {
            iconName = 'clipboard-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#B71C1C', 
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 10, paddingTop: 10, height: 70 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Learning" component={LearningModulesScreen} />
      <Tab.Screen name="Exams" component={ExamScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
