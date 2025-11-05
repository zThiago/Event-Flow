import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { styles } from '../styles/estilos';
import { useAuth } from './temporario/authContext';

export default function Home() {
  return (
    <View>
        <Text>Aqui é pra ficar os bagui</Text>
    </View>
  );
}
