import { observable, computed } from 'mobx';
import LS from './LocalStorage';

export class Activity {
	@observable activityListCache = []

	@computed get activityList() {
		if(!this.activityListCache.length)
			this.fetchActivity()
		return this.activityListCache
	}

	fetchActivity(){
		return Promise.resolve(() => this.activityListCache = LS.read('Activity') )
	}
}

const activity = new Activity();
export default  activity;