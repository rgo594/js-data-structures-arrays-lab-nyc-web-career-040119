// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let newdriver = [...drivers, name];
  return newdriver
}

function prependDriver(name){
  let newdriver = [name, ...drivers];
  return newdriver
}

function removeLastDriver(){
  return drivers.slice(0 , 2 );

}

function removeFirstDriver(){
  return drivers.slice(1);

}
