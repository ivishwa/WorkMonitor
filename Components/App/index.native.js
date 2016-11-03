import React , { Component } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {
  Button
} from 'react-native-elements';
class App extends Component {
  render() {
    return (
      <View style={{flex:1, paddingTop: 50}}>
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
