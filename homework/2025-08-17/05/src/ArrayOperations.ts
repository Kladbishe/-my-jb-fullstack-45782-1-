export default  class ArrayOperations{
    static getSum(arr: number[]): number{
        return arr.reduce((a,b)=>a+b,0)
    }
    static getAvg(arr: number[]): number{
        return this.getSum(arr) / arr.length
    }
    static getMax(arr: number[]): number{
        return Math.max(...arr)
    }
    static getMin(arr:number[]): number{
        return Math.min(...arr)
    }
}