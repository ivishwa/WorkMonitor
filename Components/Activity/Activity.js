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
import {observable} from 'mobx';

import LS from '../../models/LocalStorage';
@observer
class Activity extends Component {
	constructor () {
  		super()
  		this.updateisStarted = this.updateisStarted.bind(this)
	}
	updateisStarted () {
  		const selectedActivity = LS.read('Activity',`name="${Activitys.selectedActivity.name}"`)
  		if(selectedActivity['0'].isStarted == false){
			LS.update((res) => {
				res['0'].isStarted = true
				res['0'].records.push({startTime: new Date(), endTime: new Date() })
			}, [selectedActivity]);

  		} else {
  			LS.update((res) => {
				res['0'].isStarted = false
				let lastItem = res['0'].records[res['0'].records.length - 1] 
				lastItem.endTime = new Date();
			}, [selectedActivity]);
  		}
	}
	
	render() {
		const selectedActivity = LS.read('Activity',`name="${Activitys.selectedActivity.name}"`)
		return (
			<View style={{flex:1, paddingTop: 50}}>
				<Button
				raised
				backgroundColor={selectedActivity['0'].isStarted ? "red" :"#00303f"}
				title={selectedActivity['0'].isStarted ? "Stop Activity" : "Start Activity"}
				onPress={this.updateisStarted}
				/>
			</View>
			);
	}
}

export default Activity;