import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

//components
import Home from "../Home";
import TripDetail from "../Trips/TripDetail";
import TripList from "../Trips/TripsList";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import TripItem from "../Trips/TripItem";
import { Button } from "native-base";
import AddTrip from "../Buttons/AddTrip";
import authstore from "../../stores/authStore";
import Auth from "../Buttons/Auth";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Trips"
        component={TripList}
        options={{
          headerStyle: "All Trips",
          headerRight: () => (authstore.user ? <AddTrip /> : <Auth />),
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => ({ title: route.params.trip.name })}
      />

      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />

      {/* <Screen name="AddTrip" component={AddTrip} /> */}
    </Navigator>
  );
};

export default StackNavigator;
