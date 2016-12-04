import React , { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Activity from '../../models/Activity';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import ActivityList from '../Activity/ActivityList';

class App extends Component {
  render() {
    return (
      <View style={{flex:1, paddingTop: 50}}>
        <ActivityList />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => Actions.activityNew()}
        />
      </View>
    );
  }
}
export default App;
