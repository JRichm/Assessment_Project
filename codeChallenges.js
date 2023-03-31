const perf = require('execution-time')();

console.log(`\n\n\n\n\n\n\n\n`)
console.log(`\n\n\n\n=========================================================================`)
/* PROBLEM ONE*/
/* Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise. */
console.log(`\n\t-\tPROBLEM ONE\t-\taddToZero()\t-\n`);
console.log(`=========================================================================\n`)

function addToZero(numArr) {
    let sum;
    for (let i = 0; i < numArr.length - 1; i++) {
        for (let j = i + 1; j < numArr.length; j++) {
            sum = numArr[i] + numArr[j];
            if (sum === 0) {
                return true;
            }
        }
    }
    return false;
}

let mul = 1;
let maxNum = 100;
let p1_XS, p1_S, p1_M, p1_L, p1_XL;
let b = [];
for (let test = 0; test < 5; test++) {
    mul *= 10;
    let a = [];
    for (let i = 0; i < mul; i++) {
        a.push(Math.round((Math.random() * maxNum * 2) - maxNum));
    }
    b.push(a);
}

perf.start();
addToZero(b[0]);
res = perf.stop();
p1_XS = res.preciseWords;
p1_XS_Length = b[0].length;

perf.start();
addToZero(b[1]);
res = perf.stop();
p1_S = res.preciseWords;
p1_S_Length = b[1].length;

perf.start();
addToZero(b[2]);
res = perf.stop();
p1_M = res.preciseWords;
p1_M_Length = b[2].length;

perf.start();
addToZero(b[3]);
res = perf.stop();
p1_L = res.preciseWords;
p1_L_Length = b[3].length;

perf.start();
addToZero(b[4]);
res = perf.stop();
p1_XL = res.preciseWords;
p1_XL_Length = b[4].length;

console.log(`   input size: \t\t solve time: \t\t array length:`);
console.log(`\tXS \t\t  ${p1_XS} \t\t ${p1_XS_Length}`);
console.log(`\tS \t\t  ${p1_S} \t\t ${p1_S_Length}`);
console.log(`\tM \t\t  ${p1_M} \t\t ${p1_M_Length}`);
console.log(`\tL \t\t  ${p1_L} \t\t ${p1_L_Length}`);
console.log(`\tXL \t\t  ${p1_XL} \t\t ${p1_XL_Length}\n`);

console.log(`The output below is not the result from the test above, but the test examples from frodo`)

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

console.log(`\naddToZero()'s time complexity:\t\tO(n^2)`);
console.log(`addToZero()'s space complexity:\t\tO(1)`);



console.log(`\n\n\n\n=========================================================================`)
/* PROBLEM TWO*/
/* Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise. */
console.log(`\n\t-\tPROBLEM TWO\t-\thasUniqueChars()\t-\n`);
console.log(`=========================================================================\n`)

function hasUniqueChars(string) {
    let strArr = string.split('');
    let charList = '';

    for (let i = 0; i < strArr.length; i++) {
        if (charList.includes(strArr[i])) {
            return false;
        }

        charList += strArr[i];
    }
    return true;
}

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

console.log(`\nhasUniqueChars()' time complexity:\tO(n)`);
console.log(`hasUniqueChars()' space complexity:\tO(1)`);



console.log(`\n\n\n\n=========================================================================`)
/* PROBLEM THREE*/
/* A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.” */
/* Write a function to check a sentence to see if it is a pangram or not. */
console.log(`\n\t-\tPROBLEM THREE\tisPangram()\t-\n`);
console.log(`=========================================================================\n`)

function isPangram(string) {
    strArr = string.split('');
    let letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < strArr.length; i++) {
        if (letters.includes(`${strArr[i]}`)) {
            letters = letters.replace(`${strArr[i]}`, '');
        }
    }
    if (letters === '') return true;
    else return false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

console.log(`\nisPangram()'s time complexity:\t\tO(n)`);
console.log(`isPangram()'s space complexity:\t\tO(1)`);



console.log(`\n\n\n\n=========================================================================`)
/* PROBLEM FOUR*/
/* Write a function, find_longest_word, that takes a list of words and returns the length of the longest one. */
console.log(`\n\t-\tPROBLEM FOUR\tfindLongestWord()\t-\n`);
console.log(`=========================================================================\n`)

function findLongestWord(wordArr) {
    let length;
    for (let i = 0; i < wordArr.length; i++) {
        if (i === 0) length = wordArr[i].length;
        else {
            if (wordArr[i].length > length)
                length = wordArr[i].length
        }
    }
    return length;
}

// findLongestWord(['minecraft', 'call of duty', 'phasmophobia', 'escape the backrooms', 'overcooked']);

console.log(findLongestWord(["hi", "hello"]));
// -> 5

console.log(`\nfindLongestWord()'s time complexity:\tO(n)`);
console.log(`findLongestWord()'s space complexity:\tO(1)`);