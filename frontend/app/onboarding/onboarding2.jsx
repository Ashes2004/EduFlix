import { router } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Onboarding2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>[ Image Placeholder ]</Text>
      </View>
      <Text style={styles.title}>Your Personal AI Tutor</Text>
      <Text style={styles.subtitle}>
        Personalized video lessons, practice, and instant help – all in one
        place.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(auth)/login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  placeholder: {
    width: "90%",
    height: 250,
    borderRadius: 12,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  placeholderText: {
    color: "#777",
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#e50914",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
