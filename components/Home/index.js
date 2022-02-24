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
        <Button
          style={{ width: 150 }}
          onPress={() => navigation.navigate("Trips")}
        >
          Explore Trips
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  title: { color: "#000", fontSize: 38, textAlign: "center" },
  titleView: {
    marginTop: "20%",
    height: "30%",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
});
