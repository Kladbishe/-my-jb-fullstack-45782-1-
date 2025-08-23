enum Countries {
  Israel = "Israel",
  USA = "USA",
  Portugal = "Portugal",
}

interface Person {
  name: string;
  age: number;
  eyeColor: string;
  country: Countries;
}

const Ido: Person = {
  name: "Ido",
  age: 22,
  eyeColor: "black",
  country: Countries.Israel,
};
const dean: Person = {
  name: "Dean",
  age: 23,
  eyeColor: "brown",
  country: Countries.Portugal,
};
console.log(dean);
// document.getElementById('Countries').innerHTML =
console.log(Object.keys(Countries))