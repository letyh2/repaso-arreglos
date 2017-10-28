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
/*---------------------------------------------------------------------------*/
var testString = "abcde";
testString.charAt(2);
console.log(testString);
// para obtener un caracter apartir de un codigo
var codigo = testString.charCodeAt(2);
console.log(codigo);

//99
String.fromCharCode(codigo);
console.log(String.fromCharCode(codigo));
//c
