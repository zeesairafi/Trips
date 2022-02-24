import React from "react";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import { Container, Heading } from "native-base";
import { StyleSheet, Text } from "react-native";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));
  console.log(
    "🚀 ~ file: tripList.js ~ line 13 ~ TripList ~ tripStore.trips",
    tripStore.trips
  );
  return (
    <Container>
      <Heading mb="2" size="md">
        trips
      </Heading>
      {tripList}
    </Container>
  );
};

export default observer(TripList);
const styles = StyleSheet.create({});
