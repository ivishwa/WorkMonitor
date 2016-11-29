import Realm from 'realm';
import Activity from '../Activity';
import Monitor from '../Monitor';

export let realm = new Realm({schema: [Monitor, Activity]});

export class LocalStorage {

  save(key, value) {
    realm.write(()=> {
      realm.create(key, value);
    })
  }

  read(key, q = null, sort = null) {
    let ob = realm.objects(key);
    if (q !== null) {
      ob = ob.filtered(q)
    }
    if (sort !== null ){
      ob = ob.sorted(sort);
    }
    return ob;
  }
}

const ls = new LocalStorage();
export default ls;
