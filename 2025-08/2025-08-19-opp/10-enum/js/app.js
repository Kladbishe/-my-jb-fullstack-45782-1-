var Countries;
(function (Countries) {
    Countries["Israel"] = "Israel";
    Countries["USA"] = "USA";
    Countries["Portugal"] = "Portugal";
})(Countries || (Countries = {}));
const Ido = {
    name: "Ido",
    age: 22,
    eyeColor: "black",
    country: Countries.Israel,
};
const dean = {
    name: "Dean",
    age: 23,
    eyeColor: "brown",
    country: Countries.Portugal,
};
console.log(dean);
// document.getElementById('Countries').innerHTML =
console.log(Object.keys(Countries));
