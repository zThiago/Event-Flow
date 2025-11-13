import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../temporario/authContext";
import { useRouter } from "expo-router";

export default function Conta() {
  const { currentUser } = useAuth(); 
  // currentUser deve ter { nome, email, imagem } ou algo parecido
    const router = useRouter();


  return (
    <View style={styles.container}>
          {/* Botão de voltar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/evento/home")}
      >
        <Text style={styles.buttonText}>Voltar para Eventos</Text>
      </TouchableOpacity>

        
      {/* Foto de perfil */}
      <Image
        source={{
          uri: currentUser?.imagem || "https://www.otempo.com.br/adobe/dynamicmedia/deliver/dm-aid--3c688312-d189-4a89-8be2-3e2c95043af4/entretenimento-gravida-de-taubate-meme-edu-guedes-quadrigemeas-recordtv-hoje-em-dia-chris-flores-1709144777.jpg?quality=82&preferwebp=true&width=800&height=600",
        }}
        style={styles.avatar}
      />

      {/* Nome */}
      <Text style={styles.name}>
        {currentUser?.nome || "Usuário sem nome"}
      </Text>

      {/* Email */}
      <Text style={styles.email}>
        {currentUser?.email || "email@exemplo.com"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  button: {
    backgroundColor: "#08007B",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});