let obj = {
  name: "Paris",
  favoriteFood: "Chat",
  city: "Bras",
};

//Simple
let result = 0;
let values = Object.values(obj);
values.forEach((value) => {
  result += value.length;
});
console.log(result);
if (result % 2) {
  console.log("impair");
} else {
  console.log("pair");
}
console.log('le resultat est', result)
console.log(`le resultat est ${result % 2 ? 'impair' : 'pair'}`)

//Compliqué
//result = 0;
//result = values.reduce((acc, value) => acc + value.length, 0);
//console.log(result);
//if (result % 2) {
//  console.log("impair");
//} else {
//  console.log("pair");
//}
