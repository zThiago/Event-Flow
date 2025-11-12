import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLocalSearchParams, useRouter } from "expo-router";
import { styles } from "../styles/detailsStyle";

export default function Details() {
    const { evento } = useLocalSearchParams();
    const data = JSON.parse(evento);
    const router = useRouter();

    // Coordenadas do endereço (exemplo fixo)
    const coordinate = {
        latitude: -23.55052,   // São Paulo
        longitude: -46.633308,
    };

    return (
        <ScrollView style={styles.container}>
            {/* Botão Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backText}>← Voltar</Text>
            </TouchableOpacity>

            {/* Card único */}
            <View style={styles.card}>
                {/* Imagem */}
                <Image source={{ uri: data.imagem }} style={styles.image} />

                {/* Título */}
                <Text style={styles.title}>{data.titulo}</Text>

                {/* Tipo */}
                <Text style={styles.type}>{data.tipo}</Text>

                {/* Data */}
                <Text style={styles.date}>📅 {data.data}</Text>

                {/* Descrição */}
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
                </Text>
                <View style={styles.divider} />   {/* linha separadora */}


                {/* Informações do Evento */}
                <Text style={styles.sectionTitle}>Informações do Evento</Text>
                <View style={styles.row}>
                    <Text style={styles.info}>📅 Data: {data.data}</Text>
                    <Text style={styles.info}>⏰ Horário: 08:00h — 12:30h</Text>
                </View>

                {/* Valor do ingresso como botão */}

                <TouchableOpacity style={styles.priceButton}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.priceLabel}>Valor Ingresso</Text>
                        <Text style={styles.priceText}>{data.preco}</Text>
                    </View>
                </TouchableOpacity>


                {/* Localização */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>📍 Localização</Text>
                    <View style={styles.sectionLine}/>
                </View>

                <View style={styles.mapContainer}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: coordinate.latitude,
                            longitude: coordinate.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker coordinate={coordinate} title={data.titulo} description="Local do evento" />
                    </MapView>
                </View>
                <Text style={styles.info}>
                    <Text style={styles.bold}>Endereço: </Text>Avenida Central, 1234
                </Text>
                <Text style={styles.info}>
                    <Text style={styles.bold}>Bairro: </Text>Aurora, Solaris City – SP
                </Text>
                <Text style={styles.info}>
                    <Text style={styles.bold}>Ponto de Referência: </Text>Próximo ao Lago da Lua e ao Shopping Estação Aurora
                </Text>

            </View>
        </ScrollView>
    );
}