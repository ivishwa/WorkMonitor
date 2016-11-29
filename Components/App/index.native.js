import React , { Component } from 'react';
import {observer} from 'mobx-react/native';
import {
  View,
  Text
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Activity from '../../models/Activity';

import ActionButton from 'react-native-action-button';

@observer
class App extends Component {
  render() {
    const activity = Activity.activityList;
    return (
      <View style={{flex:1, paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
          {
            Object.keys(activity).map((l) => (
                <ListItem
                  onPress={() => console.log("Hiee")}
                  key={l}
                  title={activity[l].name}
                  />
              ))
          }
        </List>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => console.log("Hiee")}
        />
      </View>
    );
  }
}
export default App;
