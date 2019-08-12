// eslint-disable-next-line strict
function yearOfBirth(age) {
  if(Math.sign(age) === -1){
    throw new Error('Age can not be negative');
  }
  return 2019-age;
}

try {
  // eslint-disable-next-line no-unused-vars
  const greeting1 = createGreeting('nandana',-29); 
} catch(err){
  // eslint-disable-next-line no-console
  console.log(err);
}


    
function createGreeting(name,age) {
  const yob = yearOfBirth(age);
  return `Hi ,my name is ${name} and I'm ${age} years old and I was born in year ${yob}`;
}
const greeting1 = createGreeting('nandana',29);
console.log(greeting1);