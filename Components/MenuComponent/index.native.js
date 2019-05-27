import React, { Component } from "react";
import { View } from "react-native";

import { ListItem } from "react-native-elements";
import { Actions } from "react-native-router-flux";
export default class MenuComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ededed", paddingTop: 50 }}>
        <ListItem onPress={() => console.log("Hiee")} title="ActivityList" />
        <ListItem onPress={() => Actions.report()} title="Reports" />
      </View>
    );
  }
}
