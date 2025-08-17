//primitives

const age: number = 23;

const message: string = " hello world";

const isActive: boolean = true;

//array

const ages: number[] = [223, 42, 66];

const messages: string[] = ["hello", "world"];

const someFlags: boolean[] = [true, false, true];

const mixedArray: unknown[] = [1, true, "hello"];

//object

const myObject: object = {};
type User = { name: string; age: number; birthdate: Date };

const aUser: User = {
  name: "uval",
  age: 22,
  birthdate: new Date(),
};

const bUser: User = {
  name: "slomo",
  age: 25,
  birthdate: new Date(),
};

const users: User[] = [];
users.push(aUser);
users.push(bUser);
//special

type NumberOfString = number | string;
const someVar: NumberOfString = "sfas";
const someVar2: NumberOfString = 22;

type Dog = {
  name: string;
  breed: string;
};
type Cat = {
  name: string;
  numberOfSoulsLeft: number;
  eyeColor?: string;
};

const mitzi: Cat = {
  name: "mitzi",
  numberOfSoulsLeft: 5,
};
type Animal = Cat | Dog;
const animal: Animal = {
  name: "mitzi",
  numberOfSoulsLeft: 5,
  breed: "",
};

type Predator = {
  name: string;
  eat: Function;
};

const lior: Predator = {
  name: "leo",
  eat: () => {},
};

