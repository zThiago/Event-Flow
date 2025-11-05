import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { styles } from '../styles/estilos';
import { useAuth } from './temporario/authContext';

export default function TelaCadastro() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')
  const router = useRouter();
  const { addUser } = useAuth();//temporario

  function Cadastro() {
    if (senha === confSenha) {
      addUser({ email: email, senha: senha })//temporario
      alert('Cadastro feito com sucesso!')
      router.back()
    } else {
      alert('Digite a mesma senha')
    }

  }

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>
          LOGO
        </Text>
      </View>

      <View style={styles.login}>
        <TextInput
          placeholder='Digite seu e-mail'
          style={styles.email}
          value={email}
          onChangeText={setEmail}

        ></TextInput>
        <TextInput
          placeholder='Digite uma senha'
          style={styles.senha}
          value={senha}
          onChangeText={setSenha}

        ></TextInput>
        <TextInput
          placeholder='Confirme a sua senha'
          style={styles.senha}
          value={confSenha}
          onChangeText={setConfSenha}

        ></TextInput>


        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={() =>  Cadastro() }
        >
          <Text style={styles.botaoTexto}>Cadastra-se</Text>
        </TouchableOpacity>




      </View>
    </View>
    </KeyboardAvoidingView>
    
  );
}
