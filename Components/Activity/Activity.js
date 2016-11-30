import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';

import {
	ButtonGroup,
	Button
} from 'react-native-elements';
import Activitys from '../../models/Activity';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';
import LS from '../../models/LocalStorage';
@observer
class Activity extends Component {
	constructor () {
  		super()
  		this.state = {
    		isStarted: false
  		}
  	this.updateisStarted = this.updateisStarted.bind(this)
	}
	updateisStarted (selectedIndex) {
  		const selectedActivity = LS.read('Activity',`name="${Activitys.selectedActivity.name}"`)
  		console.log(selectedActivity['0'])
	}
	
	render() {
		const buttons = ['Start','End'];
		const { selectedIndex } = this.state
		return (
			<View style={{flex:1, paddingTop: 50}}>
				<Button
				raised
				backgroundColor={this.state.isStarted ? "red" :"#00303f"}
				title={this.state.isStarted ? "Stop Activity" : "Start Activity"}
				onPress={this.updateisStarted}
				/>
			</View>
			);
	}
}

export default Activity;