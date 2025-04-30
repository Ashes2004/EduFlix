// app/_layout.jsx
import { Stack } from "expo-router";
import { useState } from "react";
import SplashScreen from "./splash";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
