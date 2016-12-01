import Realm from 'realm';
const schema = {
'activity': {
  name: 'Activity',
  properties: {
    name:  'string',
    isStarted: {type: 'bool', default: false},
    records: {type: 'list', objectType: 'Monitor'},
      picture: {type: 'string', optional: true}, // optional property
      description: {type: 'string', optional: true}
    }
  },
  'monitor':  {
    name: 'Monitor',
    properties: {
      startTime: 'date',
      endTime: 'date'
    }
  }
}

export let realm = new Realm({schema: [schema.monitor, schema.activity]});
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
  clearDB(key){
    realm.write(() => {
      let ob = realm.objects(key);
      realm.delete(ob)
    })
  }

  update({callback, ...rest}){
    realm.write(() => {
      if(typeof callback === 'function')
        callback(...rest);
    })
  }
}

const ls = new LocalStorage();
export default ls;
