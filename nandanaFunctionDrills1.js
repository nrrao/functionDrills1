/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
function yearOfBirth(age) {
  if(Math.sign(age) === -1){
    throw new Error('Age cannot be negative');
  }
  return 2019-age;
}

try {
  // eslint-disable-next-line no-unused-vars
  const greeting1 = createGreeting('nandana',-29); 
} catch(err){
  // eslint-disable-next-line no-console
  console.log(err.message);
}


    
function createGreeting(name,age) {
  if (name === undefined || age === undefined){
    throw 'Arguments not defined';
  }

  if ((typeof(name)!== 'string') || (typeof(age)!== 'number')){
    throw new TypeError('Name should be string and age should be number');
  }
  const yob = yearOfBirth(age);
  return `Hi ,my name is ${name} and I'm ${age} years old and I was born in year ${yob}`;
}

try {
  const greeting2 = createGreeting('','');
} catch(error){
  console.log(error.message);
}
const greeting1 = createGreeting('nandana',29);
console.log(greeting1);