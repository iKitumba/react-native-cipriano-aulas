import { Title } from "@/components/title";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Feed() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={styles.header}
      >
        <MaterialIcons name="arrow-back" size={24} />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <Title isDark>Feed</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },

  backText: {
    textTransform: "uppercase",
    fontWeight: "700",
  },
});
