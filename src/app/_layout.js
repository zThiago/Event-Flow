import { Stack } from "expo-router";
import { AuthProvider } from "./temporario/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        {/*De for ma temporaria */}
        <Stack.Screen name="newEvento/eventosCadastrado" options={{title: "Editar Eventos"}}/>

        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        
        <Stack.Screen name="evento" options={{headerShown: false}}/>
        
        
      </Stack>
    </AuthProvider>
  );
}