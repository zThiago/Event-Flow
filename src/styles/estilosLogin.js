import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    logo: {
        marginBottom: 40,
        alignItems: 'center',
    },

    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#007AFF', // azul padrão iOS
    },

    login: {
        width: '100%',
        alignItems: 'center',
    },

    email: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 15,
        fontSize: 16,
    },

    senha: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 20,
        fontSize: 16,
    },

    botaoEntrar: {
        width: '100%',
        height: 50,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        color: 'green',
        margin: 20
    }
});