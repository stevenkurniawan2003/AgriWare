import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image,StatusBar } from "react-native";
import BaseButton from "../components/BaseButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
      source={require("../assets/bgagri.jpg")}
    >
      <StatusBar barStyle={'dark-content'} backgroundColor={'#3A6D8C'} />
      <View style={styles.content}>
        <Image style={styles.image} source={require("../assets/logofix.png")} />
        <Text style={styles.text}>Agriware!!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <BaseButton title="Petani" navigation={navigation} />
        <BaseButton title="User" navigation={navigation} color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: "20%",
    alignItems: "center",
  },
  image: {
    height: 120,
    width: 120,
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
  },
  buttonsContainer: {
    padding: 20,
  },
});
