import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { Button } from "native-base";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://www.gtitravel.com/wp-content/uploads/2017/06/Do-Travel-Agents-get-free-trips.jpg",
      }}
    >
      <View style={styles.titleView}>
        <Text style={styles.title}>Trips</Text>
      </View>
      <Button onPress={() => navigation.navigate("Trips")}>
        Explore Trips
      </Button>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  title: { color: "#000", fontSize: 38, textAlign: "center" },
  titleView: { height: "40%", alignItems: "center", justifyContent: "center" },
});
