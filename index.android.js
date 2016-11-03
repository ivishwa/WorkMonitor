import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import {
  SideMenu
} from 'react-native-elements'

import {observable} from 'mobx';
import {observer} from 'mobx-react/native';
import App from './Components/App';
import MenuComponent from './Components/MenuComponent';

@observer
export default class WorkMonitor extends Component {
  constructor () {
    super()
    this.state = { toggled: false }
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }
  @observable toggle = false;
  toggleSideMenu () {
    this.toggle = !this.toggle;
    (this.toggle)? this._drawer.openDrawer(): this._drawer.closeDrawer();
  }
  render() {
    return (
      <DrawerLayoutAndroid
        ref={(ref) => this._drawer = ref}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={300}
        renderNavigationView={()=><MenuComponent/>}
        >
        <App toggleSideMenu={this.toggleSideMenu}/>
      </DrawerLayoutAndroid>
    );
  }
}


AppRegistry.registerComponent('WorkMonitor', () => WorkMonitor);
