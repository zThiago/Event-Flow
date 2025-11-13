import { View, Text, StyleSheet, Switch,TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Notificacao() {
  const [enabled, setEnabled] = useState(false);
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
      <Text style={styles.title}>🔔 Notificações</Text>

      <View style={styles.row}>
        <Text style={styles.label}>
          {enabled ? "Notificações Ativadas" : "Notificações Desativadas"}
        </Text>
        <Switch
          value={enabled}
          onValueChange={(value) => setEnabled(value)}
          thumbColor={enabled ? "#08007B" : "#ccc"}
          trackColor={{ false: "#999", true: "#4CAF50" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#08007B",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});