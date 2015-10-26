meteor test-packages packages/counter packages/nearby-list packages/shots \
 packages/stream-words -p 9000
# For some reason, it was not possible to mock Meteor.userId with the other
# test-packages running at the same time, investigate this later.
# meteor test-packages packages/game -p 3030
