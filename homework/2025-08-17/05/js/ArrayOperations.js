export default class ArrayOperations {
    static getSum(arr) {
        return arr.reduce((a, b) => a + b, 0);
    }
    static getAvg(arr) {
        return this.getSum(arr) / arr.length;
    }
    static getMax(arr) {
        return Math.max(...arr);
    }
    static getMin(arr) {
        return Math.min(...arr);
    }
}
