import { View, Text } from 'react-native'
import React from 'react'
import UserData from '../components/Auth/UserData';
import LoginForm from '../components/Auth/LoginForm';
import useAuth from '../hooks/useAuth';

export default function Account() {
  const {auth}=useAuth();
  return (
    <View>
      {auth 
      ?
      <Text><UserData/></Text>
      : 
      <Text> <LoginForm/></Text>
      }
    </View>
  )
}