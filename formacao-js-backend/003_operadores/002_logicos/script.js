const finalGrade = 7;
const absence = 3;

if (finalGrade >= 7 && absence <= 3){
    console.log('Approved, congratulations')
} else {
    console.log(finalGrade < 7 ? `The final grade was less than the minimal necessary to be Appoved` : `You had more absences than the allowed`)
}

/*
    && = And
    || = Or
    ! = Not
*/