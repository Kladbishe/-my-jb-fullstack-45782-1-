const ido = {
    name : 'ido',
    gender: 'male',
    age: 20,
    city: 'haifa',
}
const lior = {
    name : 'lior',
    gender: 'male',
    age: 24,
    city: 'Tel-aviv',
}

const itay = {
    name : 'itay',
    gender: 'male',
    age: 30,
    city: 'Haifa',
}
const students = [ido,lior,itay]                    //разобрать дома
for(const student of students){
    console.log(`iterating ${student.name}:`)
    for(const prop in student){
        console.log(`${prop} : ${student[prop]}`)
    }
}