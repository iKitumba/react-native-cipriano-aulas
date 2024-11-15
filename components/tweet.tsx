import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TweetProps = {
  username: string;
  fullName: string;
  time: string;
  text: string;
  numberOfComments: number;
  numberOfLikes: number;
};

export function Tweet(props: TweetProps) {
  const [numberOfLikes, setNumberOfLikes] = useState(props.numberOfLikes);

  function handleLike() {
    setNumberOfLikes((valorAnterior) =>
      props.numberOfLikes === valorAnterior
        ? valorAnterior + 1
        : props.numberOfLikes
    );
  }

  return (
    <View style={styles.tweetContainer}>
      <View>
        <Image
          style={styles.tweetAuthorImage}
          source={require("../assets/images/perfil.jpg")}
        />
      </View>
      <View style={styles.tweetContent}>
        <View style={styles.tweetContentTop}>
          <View style={styles.tweetContentTopLeft}>
            <Text style={styles.tweetContentUserFullName}>
              {props.fullName}
            </Text>
            <Text style={styles.tweetContentUserName}>
              @{props.username} • {props.time}
            </Text>
          </View>
          <View style={styles.tweetContentTopRight}>
            <FontAwesome6 name="ellipsis" color="#999999" size={20} />
          </View>
        </View>
        <View>
          <Text style={styles.tweetContentText}>{props.text}</Text>
        </View>

        <View style={styles.tweetContentReactions}>
          <TouchableOpacity style={styles.tweetContentReaction}>
            <Ionicons name="chatbubbles-outline" color={"#55555"} size={20} />
            <Text style={styles.tweetContentReactionNumber}>
              {props.numberOfComments}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tweetContentReaction}>
            <Ionicons name="copy-outline" color={"#55555"} size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLike}
            style={styles.tweetContentReaction}
          >
            {props.numberOfLikes < numberOfLikes ? (
              <Ionicons name="heart" color={"red"} size={20} />
            ) : (
              <Ionicons name="heart-outline" color={"#555555"} size={20} />
            )}

            <Text style={styles.tweetContentReactionNumber}>
              {numberOfLikes}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tweetContentReaction}>
            <Ionicons name="share-outline" color={"#55555"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tweetContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tweetAuthorImage: {
    width: 54,
    height: 54,
    borderRadius: 54,
  },
  tweetContent: {
    flex: 1,
    gap: 4,
  },
  tweetContentTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tweetContentTopLeft: {
    flexDirection: "row",
    gap: 4,
  },
  tweetContentTopRight: {},
  tweetContentUserFullName: {
    fontWeight: "bold",
  },
  tweetContentUserName: {
    color: "#555555",
  },
  tweetContentText: {
    color: "#222222",
    fontSize: 15,
    lineHeight: 21,
  },
  tweetContentReactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  tweetContentReaction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  tweetContentReactionNumber: {
    color: "#555555",
  },
});
