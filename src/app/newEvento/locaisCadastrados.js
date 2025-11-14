import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import MapView, { Marker } from "react-native-maps";

export default function LocaisCadastrados() {
  const router = useRouter();

  const [locais, setLocais] = useState([
    {
      id: "1",
      titulo: "Auditório Central",
      latitude: -9.974,
      longitude: -67.824,
    },
    {
      id: "2",
      titulo: "Sala 101",
      latitude: -9.975,
      longitude: -67.825,
    },
    {
      id: "3",
      titulo: "Teatro Municipal",
      latitude: -9.976,
      longitude: -67.826,
    },
  ]);

  const excluirLocal = (id) => {
    setLocais(locais.filter((l) => l.id !== id));
  };

  const editarLocal = (id) => {
    alert(`Editar local ${id}`);
  };

  const criarLocal = () => {
    router.push("/newEvento/cadastrarMapa");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Listagem de Locais</Text>
        <TextInput style={styles.search} placeholder="Pesquise Locais..." />
        <TouchableOpacity style={styles.createButton} onPress={criarLocal}>
          <Text style={styles.createText}>Criar Local +</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          Mostrando {locais.length} de 45 Locais Cadastrados
        </Text>
      </View>

      {/* Lista de locais */}
      <FlatList
        data={locais}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Mapa com botão Excluir flutuante */}
            <View>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                scrollEnabled={false}
                zoomEnabled={false}
                rotateEnabled={false}
              >
                <Marker
                  coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                  title={item.titulo}
                />
              </MapView>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => excluirLocal(item.id)}
              >
                <Text style={styles.deleteText}>Excluir Local ✖</Text>
              </TouchableOpacity>
            </View>

            {/* Informações */}
            <View style={styles.info}>
              <Text style={styles.localTitle}>{item.titulo}</Text>

              <View style={styles.actions}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.edit]}
                  onPress={() => editarLocal(item.id)}
                >
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.actionButton, styles.view]}
                  onPress={() => alert(`Ver local ${item.id}`)}
                >
                  <Text style={styles.buttonText}>Ver</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: "#08007B",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  createText: { color: "#fff", fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "gray", marginBottom: 10 },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 2,
  },
  map: { width: "100%", height: 150 },
  info: { padding: 10 },
  localTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5, color: "#08007B" },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#e53935",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  deleteText: { color: "#fff", fontWeight: "bold" },
  actions: { flexDirection: "row", justifyContent: "flex-end", marginTop: 10 },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 8,
  },
  edit: { backgroundColor: "#fbc02d" },
  view: { backgroundColor: "#08007B" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});