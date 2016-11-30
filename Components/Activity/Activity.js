import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';
import Activitys from '../../models/Activity';

class Activity extends Component {
	render() {
		return (
			<View style={{flex:1, paddingTop: 50}}>
				<Text>{Activitys.selectedActivity}</Text>
			</View>
			);
	}
}

export default Activity;