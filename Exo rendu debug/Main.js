let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"];

function countCharacter(value) {
  return value.length;
}

users.forEach((users) => {
  if (countCharacter(users) > 5) {
    console.log(`${users} est un prénom long de plus de 5 lettres.`);
  } else {
    console.log(`${users} n'est pas du tout un prenom long.`);
  }
});
