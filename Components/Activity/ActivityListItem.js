import React, {Component} from 'react';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class ActivityListItem extends Component {
	render(){
		const { index, activity } = this.props;
		return (
			<ListItem
				onPress={() => Actions.activity()}
				title={activity.name}
			/>
		);
	}
}
export default ActivityListItem;
