export default class Speaker {
  color: string;
  volume: number;

  constructor(color: string, volume: number) {
    this.color = color;
    this.volume = volume;
  }
  turnOn() {
    console.log(`Speaker is now ON... `);
  }
  turnOff() {
    console.log(`Speaker is now OFF... `);
  }
    playSound() {
    console.log("Playing sound...");
  }
    showDetails() {
    console.log(`Color: ${this.color}, Volume: ${this.volume}`);
  }
}
