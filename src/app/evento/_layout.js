import { Drawer } from "expo-router/drawer";
import { AuthProvider } from "../temporario/authContext";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

function CustomDrawerContent(props) {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Cabeçalho */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: "https://www.otempo.com.br/adobe/dynamicmedia/deliver/dm-aid--3c688312-d189-4a89-8be2-3e2c95043af4/entretenimento-gravida-de-taubate-meme-edu-guedes-quadrigemeas-recordtv-hoje-em-dia-chris-flores-1709144777.jpg?quality=82&preferwebp=true&width=800&height=600" }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
          YARA DE OLIVEIRA MATOS
        </Text>
        <Text style={{ color: "gray" }}>Olá,</Text>
      </View>

      {/* Opções do menu */}
      <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => router.push("evento/conta")}>
        <Text style={{ fontSize: 16 }}>Minha Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => router.push("evento/termo")}>
        <Text style={{ fontSize: 16 }}>Termos de Uso e Política</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => router.push("evento/notificacao")}>
        <Text style={{ fontSize: 16 }}>Notificação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => router.replace("/login")}>
        <Text style={{ fontSize: 16, color: "red" }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="conta" options={{ title: "Minha Conta" }} />
        <Drawer.Screen name="notificacao" options={{ title: "Notificação" }} />
        <Drawer.Screen name="termo" options={{ title: "Termos" }} />
        <Drawer.Screen name="locaisCadastrados" options={{title: "Home do adm"}}/>
        <Drawer.Screen name="eventosCadastrado" options={{title: "HOme agoria fiui"}}/>
      </Drawer>
    </AuthProvider>
  );
}