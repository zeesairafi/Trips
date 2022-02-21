import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TripDetail from "../Trips/TripDetail";
import TripList from "../Trips/TripsList";
import TripItem from "../Trips/TripItem";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="trips"
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
      }}
    >
      <Screen
        name="Trips"
        component={TripList}
        options={{ headerStyle: "All Trips" }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => ({ title: route.params.trip.name })}
      />
    </Navigator>
  );
};

export default StackNavigator;
