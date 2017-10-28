var testArray = [];
for(var i= 0; i<=10; i++){
  testArray.push(i);//agrega de uno en uno elementos
}
console.log(testArray);
//eliminar el primer elemento del arreglo
testArray.shift();
console.log(testArray);

//eliminar el primer elemento del arreglo
testArray.pop();
console.log(testArray);

//revertir los elementod del arreglo
testArray.reverse();
console.log(testArray);
