import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import { styles } from '../styles/estilosHome';
import { Link } from "expo-router";

const coordinate = {
  latitude: -9.976227513833033,
  longitude: -67.84134974624467,
};

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const eventos = [
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
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      {!expanded && (
        <View style={styles.header}>
          <Text style={styles.welcome}>Bem vindo ao Aplicativo</Text>
          <TextInput
            style={styles.search}
            placeholder="Pesquise Eventos, Show e etc..."
          />
          <Text style={styles.sectionTitle}> <Text style={styles.textDestaq}>Explore</Text> os Eventos</Text>
          <View style={styles.divider} />
        </View>
      )}

      {/* Mapa */}
      <TouchableOpacity
        activeOpacity={1}
        style={expanded ? styles.mapaFull : styles.mapaCard}
        onPress={() => setExpanded(!expanded)}
      >
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.210,
            longitudeDelta: 0.210,
          }}
        >
          <Marker
            coordinate={coordinate}
            title="Loja do Daniel S"
            description="Casa do Samuel, AC"
          />
        </MapView>
      </TouchableOpacity>

      {/* Lista de eventos */}
      {!expanded && (
        <View style={{ flex: 1, paddingHorizontal: 16, marginTop: -30 }}>
          <Text style={styles.header}>Mostrando <Text style={styles.textDestaq}>5</Text> de <Text style={styles.textDestaq}>45</Text> eventos</Text>
          <FlatList
            data={eventos}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.card}>
                {/* Imagem no topo */}
                <Image source={{ uri: item.imagem }} style={styles.image} />

                {/* Conteúdo abaixo da imagem */}
                <View style={styles.info}>
                  {/* Linha título + data */}
                  <View style={styles.row}>
                    <Text style={styles.title}>{item.titulo}</Text>
                    <Text style={styles.date}>{item.data}</Text>
                  </View>

                  {/* Tipo do evento */}
                  <Text style={styles.type}>{item.tipo}</Text>

                  {/* Linha preço + botão */}
                  <View style={styles.row}>
                    <Text style={styles.price}>Ingresso {item.preco}</Text>
                    <Link
                      href={{
                        pathname: "/details",
                        params: { evento: JSON.stringify(item) }, // envia os dados do evento
                      }}
                      style={styles.detailsButton}>
                      <Text style={styles.detailsText}>Mais Detalhes</Text>
                    </Link>
                  </View>
                </View>
              </View>


            )}
          />
        </View>
      )}
    </View>
  );
}

