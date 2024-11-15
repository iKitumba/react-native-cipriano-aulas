import { Title } from "@/components/title";
import { Tweet } from "@/components/tweet";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const tweetList = [
  {
    id: 1,
    username: "cipriano",
    fullName: "Cipriano Sunguahanga",
    numberOfComments: 12,
    numberOfLikes: 200,
    postedTime: "5m",
    content: "Oi, Meu primeiro post no feed. Value a todos",
  },
  {
    id: 2,
    username: "alberto",
    fullName: "Alberto Kitumba",
    numberOfComments: 2,
    numberOfLikes: 10,
    postedTime: "10h",
    content:
      "As exceções verificadas podem às vezes ser úteis se você estiver criando uma biblioteca crítica: é preciso capturá-las.",
  },
  {
    id: 3,
    username: "aldair",
    fullName: "Aldair Valente",
    numberOfComments: 2,
    numberOfLikes: 10,
    postedTime: "1h",
    content: "Sei lá estou bué loucooooo! 🤮",
  },
  {
    id: 4,
    username: "alberto",
    fullName: "Alberto Kitumba",
    numberOfComments: 2,
    numberOfLikes: 10,
    postedTime: "10h",
    content:
      "As exceções verificadas podem às vezes ser úteis se você estiver criando uma biblioteca crítica: é preciso capturá-las.",
  },
  {
    id: 5,
    username: "alberto",
    fullName: "Alberto Kitumba",
    numberOfComments: 2,
    numberOfLikes: 10,
    postedTime: "10h",
    content:
      "As exceções verificadas podem às vezes ser úteis se você estiver criando uma biblioteca crítica: é preciso capturá-las.",
  },
];

export default function Feed() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={styles.header}
          >
            <MaterialIcons name="arrow-back" size={24} />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
          <Title isDark>Twitter</Title>
        </View>

        {/* Aqui vai o tweet */}
        {tweetList.map(function (item, index) {
          return (
            <Tweet
              fullName={item.fullName}
              username={item.username}
              numberOfComments={item.numberOfComments}
              numberOfLikes={item.numberOfLikes}
              time={item.postedTime}
              text={item.content}
              key={item.id}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
  },
  headerTop: {
    paddingHorizontal: 16,
    marginBottom: 24,
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
