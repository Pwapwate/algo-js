let a = "Jean";
let b = "Paul";
let c = "Jean";
let result = null;

function checkname(reg1, reg2) {
  if (reg1 === reg2) {
    result = "Pareil";
  } else result = "Pas Pareil";
  console.log(result);
}
checkname(a, b);
