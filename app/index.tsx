import { Title } from "@/components/title";
import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
// JSX -> JavaScript Extendible
// Kebab case pagina-inicial

export default function TelaInicial() {
  const [number, setNumber] = useState(1);
  const nome = "Cipriano";

  return (
    <View style={styles.container}>
      <Title>{String(number)}</Title>
      <Title>{nome}</Title>

      <View style={styles.botoes}>
        <Button
          onPress={() => {
            setNumber((valorAnterior) => {
              return valorAnterior - 1;
            });
          }}
          title="Diminuir -"
        />
        <Button
          onPress={() => {
            setNumber((valorAnterior) => {
              return valorAnterior + 1;
            });
          }}
          title="Aumentar +"
        />
      </View>
      <Button
        onPress={() => {
          router.push("/feed");
        }}
        title="Ir para o feed"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    // flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  botoes: {
    flexDirection: "row",
    gap: 40,
  },
});
