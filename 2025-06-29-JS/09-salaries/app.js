const salaries = [8000, 10000, 2000, 5000, 5000, 2000 , 7000 , 1000 , 4000 , 6000];
let sum = 0;
let max = 0;
// console.log(salaries)
for(const salary of salaries){
    console.log(salary)
    
}
sum += salary;
document.write(`average salary is ${sum/salaries.length}`);
// console.log(`max salary is ${max}`);
