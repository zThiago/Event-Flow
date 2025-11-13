import { StyleSheet } from "react-native";

const shadowBox = {
  elevation: 3,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
};

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" ,paddingBottom: 35, },

  header: { padding: 20, marginTop: 1, alignSelf: "center" },
  headerText: { padding: 20, marginTop: 20, alignSelf: "center" },
  welcome: { fontSize: 20, marginBottom: 10, alignSelf: "center" },
  search: {
    backgroundColor: "#dddbdbff",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    minWidth: 350,
  },
  sectionTitle: { fontSize: 18, marginBottom: 8, alignSelf: "center" },
  divider: { borderBottomColor: "#ccc", borderBottomWidth: 1 },

  mapaCard: {
    marginHorizontal: 20,
    marginTop: -10,
    height: 120,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    ...shadowBox,
  },

  mapaFull: {
    flex: 1, // ocupa toda a tela
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
    ...shadowBox,
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // elementos nas extremidades
    alignItems: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1, // ocupa espaço à esquerda
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  type: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    color: "#333",
  },
  detailsButton: {
    paddingHorizontal: 36,
    paddingVertical: 4,
    backgroundColor: "#08007B",
    borderRadius: 20,
  },
  detailsText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white", // corrigido: removida duplicidade
  },
  textDestaq: {
    fontWeight: "bold",paddingTop:100,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 6,
    borderRadius: 20,
    width: 40,
    zIndex: 10,
    alignItems: "center",
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});