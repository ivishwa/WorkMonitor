import { observable, computed } from 'mobx';
import LS from './LocalStorage';

export class Activity {
	constuctor(){
		this.setDefaultActivity();
	}
	@observable activityList = LS.read('Activity');

	setDefaultActivity(){
		let temp = LS.read('Activity')
		let currentDate = new Date();
		let defaultActivity = [{
				name: 'Programming',
				records: [
					{
						startTime: currentDate,
						endTime: currentDate
					}
				]
			},
			{
				name: 'Study',
				records: [
					{
						startTime: currentDate,
						endTime: currentDate
					}
				]
			},
			{
				name: 'Exercise',
				records: [
					{
						startTime: currentDate,
						endTime: currentDate
					}
				]
			}
		]
		if(temp.length == 0){
			defaultActivity.map(val => LS.save('Activity', val))
		}
	}
}

const activity = new Activity();
export default  activity;