import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Termo() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>

      {/* Botão de voltar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/evento/home")}
      >
        <Text style={styles.buttonText}>Voltar para Eventos</Text>
      </TouchableOpacity>
      <Text style={styles.title}>📜 Termos de Uso e Política de Privacidade</Text>

      <Text style={styles.sectionTitle}>1. Introdução</Text>
      <Text style={styles.paragraph}>
        Bem-vindo ao nosso aplicativo. Ao utilizá-lo, você concorda com os termos
        e condições descritos abaixo. Este documento estabelece as regras de uso
        e a forma como tratamos suas informações.
      </Text>

      <Text style={styles.sectionTitle}>2. Coleta de Dados</Text>
      <Text style={styles.paragraph}>
        Nós coletamos informações básicas como nome, e-mail e preferências de uso
        para melhorar sua experiência. Seus dados nunca serão compartilhados sem
        consentimento.
      </Text>

      <Text style={styles.sectionTitle}>3. Responsabilidades do Usuário</Text>
      <Text style={styles.paragraph}>
        O usuário se compromete a utilizar o aplicativo de forma ética, sem
        práticas que possam prejudicar outros usuários ou comprometer a
        segurança da plataforma.
      </Text>

      <Text style={styles.sectionTitle}>4. Alterações</Text>
      <Text style={styles.paragraph}>
        Podemos atualizar estes termos periodicamente. Recomendamos que você
        consulte esta página regularmente para estar sempre informado.
      </Text>

      <Text style={styles.sectionTitle}>5. Contato</Text>
      <Text style={styles.paragraph}>
        Em caso de dúvidas sobre os termos ou sobre o uso de seus dados, entre em
        contato pelo e-mail: suporte@meuapp.com
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#08007B",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
    color: "#333",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
    marginBottom: 10,
    textAlign: "justify",
  },
});