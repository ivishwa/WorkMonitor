import React , { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Button
} from 'react-native-elements';
class App extends Component {
  render() {
    return (
      <View>
      <Button
        raised
        icon={{name: 'cached'}}
        title='RAISED WITH ICON'
        fontFamily='Comic Sans MS'
        onPress={()=> console.log("Button",this.props.toggleSideMenu())}/>
      </View>
    );
  }
}
export default App;
