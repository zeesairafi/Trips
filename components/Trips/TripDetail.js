import { Image, SafeAreaView, Text, View, Button, HStack } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";

import styles from "./styles";

const TripDetail = ({ navigation, route }) => {
  if (tripStore.loading) return <Loading />;
  const trip = route.params.trip;
  const types = trip.type.map((item) => <Text key={item}>{item}</Text>);

  return (
    <SafeAreaView>
      <View style={styles.titleView}>
        <Text style={styles.name}>
          {trip.name} {trip.name}
        </Text>
        <Image style={styles.image} source={{ uri: baseURL + trip.image }} />
      </View>
    </SafeAreaView>
  );
};

export default observer(TripDetail);
