let MyMap = new Map() ;
const KeyString =`a string`;
const KeyObj ={};
const KeyFn =()=> {}

//setting of values

MyMap.set(KeyString,'value associated with " a string"');
MyMap.set(KeyObj,'value associated with KeyObj');
MyMap.set(KeyFn,'value associated with KeyFn')

// Note the the set() is a chainable method ,meaning u can use a shortHand formate like this:
MyMap.set(KeyString,'value associated with "a string"').set(KeyObj,'value associated with KeyObj').set(KeyFn,'value associated with KeyFn')



console.log(MyMap.size) //3

//getting the values
console.log(MyMap.get(KeyString)) //value associated with " a string"
console.log(MyMap.get(KeyObj)) //value associated with KeyObj
console.log(MyMap.get(KeyFn)) //value associated with KeyFn