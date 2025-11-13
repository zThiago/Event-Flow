import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import MapView, { Marker } from "react-native-maps";

export default function CadastrarMapa() {
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [marker, setMarker] = useState(null);

    const handleLongPress = (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setMarker({ latitude, longitude });
        setLatitude(latitude.toString());
        setLongitude(longitude.toString());
    };

    const salvarLocal = () => {
        alert(
            `Local salvo:\n${endereco}, ${numero}\n${bairro} - ${cidade}\nCEP: ${cep}\nLat: ${latitude}, Lng: ${longitude}`
        );
    };

    const router = useRouter();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>
                <Text style={styles.header}>Cadastrar Local</Text>

                <Text style={styles.label}>Precione para Marcar no mapa</Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -9.9762,
                        longitude: -67.8413,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    onLongPress={handleLongPress}
                >
                    {marker && <Marker coordinate={marker} />}
                </MapView>

                {/* Campos manuais */}
                <View style={styles.field}>
                    <Text style={styles.label}>Endereço</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Rua das Flores"
                        value={endereco}
                        onChangeText={setEndereco}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Bairro</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Centro"
                        value={bairro}
                        onChangeText={setBairro}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Cidade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Rio Branco"
                        value={cidade}
                        onChangeText={setCidade}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>CEP</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: 69900-000"
                        value={cep}
                        onChangeText={setCep}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Número</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: 123"
                        value={numero}
                        onChangeText={setNumero}
                        keyboardType="numeric"
                    />
                </View>

                {/* Latitude e Longitude automáticas */}
                <View style={styles.field}>
                    <Text style={styles.label}>Latitude</Text>
                    <TextInput style={styles.input} value={latitude || ""} editable={false} />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Longitude</Text>
                    <TextInput style={styles.input} value={longitude || ""} editable={false} />
                </View>

                <Text style={styles.orText}>Ou Marque no Mapa o Local Desejado</Text>
            </ScrollView>

            {/* Footer fixo */}
            <View style={styles.footer}>
                <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={salvarLocal}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 20 },
    header: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#08007B" },
    map: { width: "100%", height: 200, borderRadius: 10, marginBottom: 20 },
    field: { marginBottom: 16 },
    label: { fontSize: 14, fontWeight: "bold", marginBottom: 6, color: "#333" },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12 },
    orText: { fontSize: 14, fontStyle: "italic", color: "#555", marginTop: 10 },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderTopWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
    },
    button: {
        flex: 1,
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 5,
    },
    saveButton: { backgroundColor: "#08007B" },
    cancelButton: { backgroundColor: "#e53935" },
    buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});