import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function Categorias() {
  const [categorias, setCategorias] = useState([
    { id: "1", nome: "Show" },
    { id: "2", nome: "Workshop" },
    { id: "3", nome: "Palestra" },
  ]);
  const [novaCategoria, setNovaCategoria] = useState("");

  const adicionarCategoria = () => {
    if (novaCategoria.trim() === "") {
      return alert("Digite um nome para a categoria");
    }
    const nova = { id: Date.now().toString(), nome: novaCategoria };
    setCategorias([...categorias, nova]);
    setNovaCategoria("");
  };

  const removerCategoria = (id) => {
    setCategorias(categorias.filter((cat) => cat.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gerenciar Categorias</Text>

      {/* Campo para adicionar nova categoria */}
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Nova categoria"
          value={novaCategoria}
          onChangeText={setNovaCategoria}
        />
        <TouchableOpacity style={styles.addButton} onPress={adicionarCategoria}>
          <Text style={styles.addText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de categorias */}
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removerCategoria(item.id)}
            >
              <Text style={styles.deleteText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#08007B" },
  row: { flexDirection: "row", marginBottom: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  addButton: {
    backgroundColor: "#08007B",
    paddingHorizontal: 16,
    justifyContent: "center",
    borderRadius: 8,
    marginLeft: 10,
  },
  addText: { color: "#fff", fontWeight: "bold" },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  itemText: { fontSize: 16 },
  deleteButton: { backgroundColor: "#e53935", paddingHorizontal: 12, borderRadius: 6 },
  deleteText: { color: "#fff", fontWeight: "bold" },
});