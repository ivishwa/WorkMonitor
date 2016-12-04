import React, {Component} from 'react';

import {
	View,
	Text
} from 'react-native';

import {
 	FormLabel, 
 	FormInput,
 	Button 
} from 'react-native-elements'
import Activitys from '../../models/Activity';
class ActivityNew extends Component {

	constructor(){
		super()
		this.state = {value: ""}
	}
	render() {
		return (
				<View style={{flex:1, paddingTop: 50}}>
					<FormLabel>Activity Name</FormLabel>
					<FormInput onChangeText={(text) => this.setState({value: text})} />
					<Button
  						raised
  						title='Submit'
  						fontFamily='Comic Sans MS' 
  						onPress={() => Activitys.add(this.state.value)}/>
				</View>
			)
	}
}
	
export default ActivityNew;