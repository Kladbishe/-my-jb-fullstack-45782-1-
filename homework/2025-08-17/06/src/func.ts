export default class Func {
  protected static instances: number = 0;
  constructor(instances: number) {
    Func.instances++;
  }
  static getInstances(): number {
    return Func.instances;
  }
}
