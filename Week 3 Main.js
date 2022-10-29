//Question 1
console.log('1. Create an array called ages with the following elements: 3, 9, 23, 64, 2, 8, 28, 93.');

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log('\n Answer: ' + ages);

//Question 1.a
console.log('\n1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array');

let oneA = ages[ages.length - 1] - ages[0];
console.log('\n Answer: ' + oneA);

//Question 1.b
console.log('\n1.b Add a new age to your array and repeat the step above to ensure it is dynamic.');

ages.push(9);
console.log('\n I pushed 9 to the array. New answer: ' + oneA);

//Question 1.c
console.log('\n1.c Use a loop to iterate through the array and calculate the average age.');

let ageSum = ages.reduce((previous, current) => previous + current);
let oneC = ageSum / ages.length;
console.log('\n Answer: ' + oneC);

//Question 2
console.log('\n2. Create an array called names with the names Sam, Tommy, Tim, Sally, Buck, and Bob.');

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log('\n Answer: ' + names);

//Question 2.a
console.log('\n2.a Use a loop to iterate through the array and calculate the average number of letters per name.');

let totalNameLength = 0;
for (let name of names) {
    totalNameLength += name.length;
}
let totalOfNames = names.length;
console.log('\n Answer: ' + totalNameLength / totalOfNames);

//Question 2.b
console.log('\n2.b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');

let namesConcated = '';
for (let name of names) {
    namesConcated += name + " ";
}
console.log('\n Answer: ' + namesConcated);

//Question 3
console.log('\n3. How do you access the last element of any array?')

console.log('\n Answer: There are multiple ways. Such as arrayName[arrayName - 1]. The -1 fetches the last element in the array.');

//Question 4
console.log('\n4. How do you access the first element of any array?');

console.log('\n Answer: Using [0] in some fashion. Such as arrayName[0]. Arrays are 0 based indexes. The 0 is the first element of the array.');

//Question 5
console.log('\n5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array');

let nameLengths = [];
for (let name of names) {
    nameLengths.push(name.length);
}
console.log('\n Answer: ' + nameLengths);

//Question 6
console.log('\n6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');

let nameLengthsSum = 0;
for (let nameTotal of nameLengths) {
    nameLengthsSum += nameTotal;
}
console.log('\n Answer: ' + nameLengthsSum);

//Question 7
console.log('\n7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.');

function repeat(word, n) {
    let repeatedValue = '';
    while(n > 0) {
        repeatedValue += word;
        n--;
    }
    return repeatedValue;
}
console.log('\n Answer: ' +  repeat('repeat', 3));

//Question 8
console.log('\n8. Write a function that takes two parameters, firstName and lastName, and returns a full name.')

function fullName(firstName, lastName) {
    return firstName + lastName;
}
console.log('\n Answer: ' + fullName('John','Doe'));

//Question 9
console.log('\n9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.');

function arrayGreaterThan100(anArray) {
    let array100Sum = anArray.reduce((accumulator, currentIndex) => accumulator + currentIndex, 0);
    if (array100Sum > 100) {
        return true;
    }
    return false;
}
console.log('\n For this question I used the ages array with my function. Answer: ' + arrayGreaterThan100(ages));

//Question 10
console.log('\n10. Write a function that takes an array of numbers and returns the average of all the elements in the array.');

function arrayAverage(theArray) {
    let theArraySum = theArray.reduce((climber, theIndex) => climber + theIndex, 0);
    return theArraySum / theArray.length;
}
console.log('\n I used ages again here. Answer: ' + arrayAverage(ages));

//Question 11
console.log('\n11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.');

function arrayAverageGreater(array1, array2) {
    let array1Average = arrayAverage(array1);
    let array2Average = arrayAverage(array2);
    if (array1Average > array2Average) {
        return true;
    }
    return false;
}
console.log('\n I used the ages array and the namesLength array with this function. Answer: ' + arrayAverageGreater(ages, nameLengths));

//Question 12
console.log('\n12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50');

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket >= 10.50) {
        return true;
    }
    return false;
}
console.log('\n Answer: ' + willBuyDrink(false, 12));

//Question 13
console.log('\n13. Create a function of your own that solves a problem.')

//Below function checks if the array in Parameter 1's total is smaller than Parameter 2's array total. Returns true if smaller.

/* I thought this function could be useful in a video game. If player 1 has a bunch of items that are worth less points than another player's you could do all sorts of things with
that info. You could display a warning message to that player. You could give the player another chance to catch up by giving them a random item. 
You could use it as a failure state against computer players. Etc. etc. */

function arrayIsSmaller(checkedArray, comparedArray) {
    let checkedArraySum = checkedArray.reduce((parameter1, parameter2) => parameter1 + parameter2, 0);
    let comparedArraySum = comparedArray.reduce((cParameter1, cParameter2) => cParameter1 + cParameter2, 0);
    if (checkedArraySum < comparedArraySum) {
        return true;
    }
    return false;
}
console.log('\n Checking to see if ages array sum is less than nameLengths sum. Answer: ' + arrayIsSmaller(ages, nameLengths));