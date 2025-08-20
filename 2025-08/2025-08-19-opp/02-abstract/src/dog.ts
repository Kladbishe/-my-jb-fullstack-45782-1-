import Animal from "./animal";

export default class Dog extends Animal {
  defecate(): void {
    throw new Error("defected......");
  }
  canine: string;
  bark() {
    console.log("woof woof");
  }
  constructor(weight: number, canine: string) {
    super(weight);
    this.weight = weight;
  }
}
