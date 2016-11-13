export class Activity {

}
Activity.schema = {
  name: 'Activity',
  properties: {
    name:  'string',
    records: {type: 'list', objectType: 'Monitor'},
    picture: {type: 'string', optional: true}, // optional property
    description: {type: 'string', optional: true}
  }
}
