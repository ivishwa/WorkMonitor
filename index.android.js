import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  SideMenu
} from 'react-native-elements'

import {
  App,
  MenuComponent
} from './Components';
export default class WorkMonitor extends Component {
  constructor () {
    super()
    this.state = { toggled: false }
  }

  toggleSideMenu () {
    this.setState({
      toggled: !this.state.toggled
    })
  }
  render() {
    return (
      <SideMenu
        MenuComponent={MenuComponent}
        toggled={this.state.toggled}>
        <App toggleSideMenu={this.toggleSideMenu}/>
      </SideMenu>
    );
  }
}


AppRegistry.registerComponent('WorkMonitor', () => WorkMonitor);
