import { Stack } from "expo-router";
import { AuthProvider } from "./temporario/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}