import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

type IHomeScreenProps = NavigationScreenProps;

class HomeScreen extends React.Component<IHomeScreenProps> {
  public render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={this.onPressGoToDetails} />
      </View>
    );
  }
  private onPressGoToDetails = () => this.props.navigation.navigate("Details");
}

export default HomeScreen;
