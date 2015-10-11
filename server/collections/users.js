Meteor.users._collection._ensureIndex({
  'profile.location': '2dsphere'
}, {
  background: true,
  name: 'doc_location'
});