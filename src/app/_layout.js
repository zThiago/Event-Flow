import { Stack } from "expo-router";
import { AuthProvider } from "./temporario/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        <Stack.Screen name="login/cadastro" options={{ title: "Cadastro" }} />
        <Stack.Screen name="evento" options={{headerShown: false}}/>
        
        
      </Stack>
    </AuthProvider>
  );
}