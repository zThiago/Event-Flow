import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuth } from './temporario/authContext';
import { useState } from 'react';
import { styles } from '../styles/estilos'



export default function Index() {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [linkCadastro, setLinkCadastro] = useState(false)
    const { users } = useAuth() //Apenas temporario para testes do fronte
    const router = useRouter()

    function validarLogin() {
        const cadastrado = users.find(
            (u) => u.email === login && u.senha === senha
        )//temporario
        if (login == '' || senha == "") {
            return alert('Por favor preencha os campos')
        }
        if (cadastrado) {
            alert("login valido :)")
            router.replace('/home')

        } else {
            alert("login invalido!!!")
            setLinkCadastro(true)
        }
    }


    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>
                        LOGO
                    </Text>
                </View>

                <View style={styles.login}>
                    <TextInput
                        placeholder='Email'
                        style={styles.email}
                        value={login}
                        onChangeText={setLogin}

                    ></TextInput>
                    <TextInput
                        placeholder='Senha'
                        style={styles.senha}
                        value={senha}
                        onChangeText={setSenha}

                    ></TextInput>


                    <TouchableOpacity
                        style={styles.botaoEntrar}
                        onPress={() => validarLogin()}
                    >
                        <Text style={styles.botaoTexto}>Entrar</Text>
                    </TouchableOpacity>

                    {linkCadastro && (<Link href={'/cadastro'} style={styles.linkText}>Ainda não tem um conta? Cadastre-se clicando aqui</Link>) }


                </View>

            </View>
            </TouchableWithoutFeedback>
            
        </KeyboardAvoidingView>

    );
}


