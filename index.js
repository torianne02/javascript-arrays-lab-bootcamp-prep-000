const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten(name) {
  var newKittens = kittens.slice(0);
  return newKittens.push(name);
}