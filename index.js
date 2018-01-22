var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  var copy = Object.assign({}, object)
  copy[key] = value
   return copy
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey (object, key) {
var copy = Object.assign({}, object)
return delete copy.key
}
function destructivelyDeleteFromObjectByKey (object, key) {
   delete object[key]
   return object
=======
  var newObj = object
  newObj[key] = value
   return newObj
>>>>>>> a913bf2e54e3df87c9805835bb11ad676a4140ff
}
