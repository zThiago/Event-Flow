import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },

    backButton: {
        backgroundColor: 'red',
        borderColor: 'gray',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginBottom: 12,
       
    },
    backText: { color: "#fff", fontWeight: "bold", fontSize: 14 },

    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        paddingBottom: 10,
        marginBottom: 35,
    },

    image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 16 },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
    type: { fontSize: 16, color: "#666", marginBottom: 4 },
    date: { fontSize: 16, color: "#666", marginBottom: 12 },
    description: { fontSize: 14, color: "#444", marginBottom: 20, lineHeight: 20 },

    sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 16, marginBottom: 8, alignSelf: 'center', marginRight: 8, },
    row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },

    info: { fontSize: 14, color: "#333", marginBottom: 12 },
    bold: { fontWeight: "bold" },

    priceButton: {
        backgroundColor: "#08007B",   // azul escuro
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 25,
        marginBottom: 20,
    },

    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between", // joga os textos para extremos
        alignItems: "center",
    },

    priceLabel: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    priceText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    mapContainer: {
        height: 250,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 12,
    },
    divider: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginVertical: 1, // espaço acima e abaixo da linha
    },

    sectionHeader: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 12,
},


sectionLine: {
  flex: 1, // ocupa todo espaço restante
  height: 1,
  backgroundColor: "#ccc",
},

});