function testAs(){
    console.log("test as")

    type Human ={
        firstName: string,
        familyName:string,
        birthdate: Date
    }
    type Animal = {
        breed: string,
        eat: Function
    }

    const Pave: Human ={
        firstName: "Pave",
        familyName: "gold",
        birthdate: new Date()

    }
    const axel: Animal = {
        breed: "snake",
        eat: () => console.log("im eating")
    }
    const ido: Human = axel as unknown as Human

    console.log(ido.firstName)
}
testAs()