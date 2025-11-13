import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useState } from "react";
import { useRouter } from 'expo-router';

export default function NewEvento() {
  const [eventos, setEventos] = useState([
    {
      id: "1",
      titulo: "Lorem ipsum dolor sit ame...",
      tipo: "Palestra",
      data: "12/11/2025",
      preco: "R$ 00,00",
      imagem: "https://agenciafivemira.com.br/wp-content/uploads/2025/02/evento-corporativo-foto-de-capa.jpg"
    },
    {
      id: "2",
      titulo: "Workshop de Tecnologia",
      tipo: "Workshop",
      data: "20/11/2025",
      preco: "R$ 50,00",
      imagem: "https://agenciafivemira.com.br/wp-content/uploads/2025/02/evento-corporativo-foto-de-capa.jpg"
    },
    {
      id: "3",
      titulo: "Show Musical",
      tipo: "Show",
      data: "25/11/2025",
      preco: "R$ 100,00",
      imagem: "https://agenciafivemira.com.br/wp-content/uploads/2025/02/evento-corporativo-foto-de-capa.jpg"
    }
  ]);

  const router = useRouter();

  // Funções de exemplo
  const excluirEvento = (id) => {
    setEventos(eventos.filter((e) => e.id !== id));
  };

  const editarEvento = (id) => {
    alert(`Editar evento ${id}`);
  };

  const criarEvento = () => {
    alert("Criar novo evento");
    router.push("/newEvento/criadorEvento")
    
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Gerenciar Eventos</Text>
        <TextInput
          style={styles.search}
          placeholder="Pesquise Eventos..."
        />
        <TouchableOpacity style={styles.createButton} onPress={criarEvento}>
          <Text style={styles.createText}>Criar Evento +</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          Mostrando {eventos.length} de 45 Eventos
        </Text>
      </View>

      {/* Lista de eventos */}
      <FlatList
  data={eventos}
  keyExtractor={(item) => item.id}
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <View style={styles.card}>
      {/* Imagem com botão Excluir flutuante */}
      <View>
        <Image source={{ uri: item.imagem }} style={styles.image} />
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => excluirEvento(item.id)}
        >
          <Text style={styles.deleteText}>Excluir Evento ✖</Text>
        </TouchableOpacity>
      </View>

      {/* Informações */}
      <View style={styles.info}>
        {/* Linha título + data */}
        <View style={styles.row}>
          <Text style={styles.eventTitle}>{item.titulo}</Text>
          <Text style={styles.date}>{item.data}</Text>
        </View>

        {/* Tipo */}
        <Text style={styles.type}>{item.tipo}</Text>

        {/* Linha ingresso + botões */}
        <View style={styles.rowBottom}>
          <View>
            <Text style={styles.ingressoLabel}>Ingresso</Text>
            <Text style={styles.price}>{item.preco}</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.actionButton, styles.edit]}
              onPress={() => editarEvento(item.id)}
            >
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.view]}
              onPress={() => alert(`Ver evento ${item.id}`)}
            >
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
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
  image: { width: "100%", height: 150 },
  info: { padding: 10 },
  eventTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5, color: "#08007B" },
  type: { fontSize: 14, color: "#555" },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#08007B",
    marginTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#e53935",
    marginTop: 6,
  },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#e53935",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 8,
  },
  edit: { backgroundColor: "#fbc02d" },
  view: { backgroundColor: "#08007B" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  row: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

rowBottom: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginTop: 10,
},

ingressoLabel: {
  fontSize: 14,
  fontWeight: "bold",
  color: "#333",
},

price: {
  fontSize: 14,
  fontWeight: "bold",
  color: "#333",
  marginTop: 2,
},
});