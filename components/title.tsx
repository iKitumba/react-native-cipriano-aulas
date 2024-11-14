import { StyleSheet, Text } from "react-native";

type TitleProps = {
  isDark?: boolean;
  children: string;
};

export function Title(props: TitleProps) {
  if (props.isDark) {
    return <Text style={styles.textDark}>{props.children}</Text>;
  }

  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  textDark: {
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
  },
});
