import React, {Component} from 'react';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Activity from '../../models/Activity';

class ActivityListItem extends Component {
	handleOnPress(activity){
		Activity.selectedActivity = activity;
		Actions.activity({title: activity.name});
	}
	render(){
		const { index, activity } = this.props;
		return (
			<ListItem
				onPress={() => this.handleOnPress(activity)}
				title={activity.name}
			/>
		);
	}
}
export default ActivityListItem;
