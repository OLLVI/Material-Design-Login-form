import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import MainAppBar from '../components/MainAppBar';

export default function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState(false);

    const validateInput = (name, value) => {
        if (name === 'username' && value.length < 5) {
          return 'Username must be at least 5 characters long.';
        }
        if (name === 'password' && value.length < 5) {
          return 'Password must be at least 5 characters long.';
        }
        return '';
      };
    
      const validateAndSubmit = () => {
        let validationError = '';
    
        validationError = validateInput('username', formData.username);
        if (validationError) {
          setError(validationError);
          return;
        }
    
        validationError = validateInput('password', formData.password);
        if (validationError) {
          setError(validationError);
          return;
        }
    
        setError('');
    

        console.log('Form submitted successfully!');
      };
    

  return (
    <>
    <MainAppBar title="Login" />
    <ScrollView>
    <View style={styles.container}>
        <TextInput 
        label="Username" 
        style={styles.inputfield}
        value={formData.username}
        onChangeText={text => setFormData({...formData,username : text})} />
        <TextInput 
        label="Password" 
        style={styles.inputfield} 
        keyboardType='visible-password'
        value={formData.password}
        onChangeText={text => setFormData({...formData,password : text})}/>
        <Button mode="contained" title="Submit" style={styles.button} onPress={validateAndSubmit} />
    </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputfield: {
        margin: (16, 8, 16, 8),
        backgroundColor: '#fcfcfc',
    },
    button: {
        margin: (16, 8, 0, 8),
    },
    });