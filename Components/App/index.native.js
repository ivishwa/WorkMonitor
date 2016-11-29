import React , { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Activity from '../../models/Activity';
class App extends Component {
  render() {
    const activity = Activity.activityList
    return (
      <View style={{flex:1, paddingTop: 50}}>

      </View>
    );
  }
}
export default App;
