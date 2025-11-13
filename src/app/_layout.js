import { Stack } from "expo-router";
import { AuthProvider } from "./temporario/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        <Stack.Screen name="login/cadastro" options={{ title: "Cadastro" }} />
        <Stack.Screen name="evento/home" options={{ title: "Home" }} />
        <Stack.Screen name="evento/details" options={{ title: "Evento" }} />
      </Stack>
    </AuthProvider>
  );
}