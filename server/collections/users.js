Meteor.users._collection._ensureIndex({
  location: '2dsphere'
}, {
  background: true,
  name: 'doc_location'
});