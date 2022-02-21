import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

const TripItem = ({ navigation, trip }) => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", margin: "50px" }}>
      <Pressable
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        {/* trip: trip => data from props */}

        <Image source={{ uri: trip.image }} style={styles.tripImage} />
        <Text mx="2">{trip.name}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  TripImage: {
    height: 100,
    width: 100,
  },
});
