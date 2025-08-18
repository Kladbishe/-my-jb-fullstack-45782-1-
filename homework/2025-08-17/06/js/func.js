class Func {
    constructor(instances) {
        Func.instances++;
    }
    static getInstances() {
        return Func.instances;
    }
}
Func.instances = 0;
export default Func;
