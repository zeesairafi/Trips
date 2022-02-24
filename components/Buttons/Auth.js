import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.navigate("Signin")}>Sign In </Button>
  );
};

export default Auth;

const styles = StyleSheet.create({});
