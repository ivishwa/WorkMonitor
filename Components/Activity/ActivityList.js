import React , { Component } from 'react';
import {observer} from 'mobx-react/native';
import { List } from 'react-native-elements';
import Activity from '../../models/Activity';
import ActivityListItem from './ActivityListItem';
@observer
class ActivityList extends Component {
	render() {
		const activity = Activity.activityList;
		const activityList = Object.keys(activity).map((l) => <ActivityListItem activity={activity[l]} key={l} />);
		return (
			<List containerStyle={{marginBottom: 20}}>
				{activityList}
			</List>
		);
	}
}

export default ActivityList;