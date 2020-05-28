import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Mask from "../screens/Mask";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => route?.state?.routeNames[route.state.index] || "약국";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "약국") {
            return (
              <Ionicons
                name={focused ? "ios-compass" : "md-compass"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "마스크") {
            return (
              <Ionicons name={focused ? "ios-sad" : "md-sad"} size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#3498db",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="약국" component={Home} />
      <Tabs.Screen name="마스크" component={Mask} />
    </Tabs.Navigator>
  );
};
