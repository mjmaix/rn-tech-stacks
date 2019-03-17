import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { DetailsScreen, HomeScreen } from "./screens";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
