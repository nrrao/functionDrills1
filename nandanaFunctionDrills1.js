function getYearOfBirth(age){
    return 2019-age;
}
    
function createGreeting(name,age) {
    const yob = getYearOfBirth(age);
    return `Hi ,my name is ${name} and I'm ${age} years old and I was born in year ${yob}`;
}
const greeting1 = createGreeting("nandana",29);
console.log(greeting1);