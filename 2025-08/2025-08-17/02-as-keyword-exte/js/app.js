"use strict";
function testAs() {
    console.log("test as");
    const Pave = {
        firstName: "Pave",
        familyName: "gold",
        birthdate: new Date()
    };
    const axel = {
        breed: "snake",
        eat: () => console.log("im eating")
    };
    const ido = axel;
    console.log(ido.firstName);
}
testAs();
