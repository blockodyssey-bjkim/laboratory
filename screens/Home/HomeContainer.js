import React from "react";
import { View, Text, Button } from "react-native";

const HomeContainer = ({ navigation }) => (
  <View>
    <Text>Home</Text>
    <Button title="kakaka" onPress={() => navigation.navigate("Detail")} />
  </View>
);
export default HomeContainer;
