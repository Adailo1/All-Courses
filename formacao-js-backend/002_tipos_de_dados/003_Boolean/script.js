let studentName = 'Fernando'
let approved = true

if (approved === true) { 
    console.log('Approved, congratulations!')
  } else {
    console.log('Failed, good luck next time')
}

if (studentName === 'Fernando') {
    console.log(`Hello, ${studentName}`);
} else {
    console.log('who are you?');
}

//Tenary operation

approved = false ? `${studentName} approved` : `${studentName} failed`
console.log(approved)