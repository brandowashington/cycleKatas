/*
                    We will be creating a function that calculates a students final grade:

This function will take two arguments:

        exam (grade for exam, from 0 to 100) and projects (amount of completed project, from 0 and up)

This function should return a number (final grade). There are 4 types of final grades:
    100, if a grade for the exam is more than 90 or if number of completed projects is more than 10.

    90, if a grade for the exam is more than 75 and if number of completed projects is a minimum of 5.

    75, if a grade for the exam is more than 50 and if number of completed projects is a minimum of 2.

    0, in all other cases
*/















function finalGrade(exam, projects)
{
    if(exam > 90 || projects > 10)
    { return 100;}
    if(exam > 75 && projects >= 5)
    { return 90;}
    if(exam > 50 && projects >= 2)
    { return 75;}
    else { return 0;}
}
console.log(finalGrade(28,15));