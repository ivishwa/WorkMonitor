import { observable, computed } from 'mobx';
import LS from './LocalStorage';

export class Activity {
	@observable activityListCache = {};
	@observable selectedActivity = "";
	@computed get activityList() {
		if(Object.keys(this.activityListCache).length){
			return this.activityListCache
		}
		else{
			this.fetchResult()
			return {}
		}
	}

	fetchResult(){
		console.log('reached');
		return Promise.resolve().then(()=>{
			console.log("value", LS.read('Activity'))
			this.setDefaultActivity();
			return this.activityListCache = LS.read('Activity')
		});
	}

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

	add(val){
		let currentDate = new Date();
		this.activityListCache = {}
		return LS.save('Activity',
			{
				name: val,
				records: [
					{
						startTime: currentDate,
						endTime: currentDate
					}
				]
			}
		)
	}
}

const activity = new Activity();
export default  activity;