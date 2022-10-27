// ================ Comparing objects ================

const obj1 = {
    name: '15',
    surname: 'tahirli'
};

const obj2 = {
    surname: 'tahirli',
    name: 15
};

// version 1 JSON
let isEqual1 = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(isEqual1);

// version 2 entries;
const checkEqualObj = (obj1, obj2) => {

    let obj1Entries = Object.entries(obj1);
    let obj2Entries = Object.entries(obj2);

    if (obj1Entries.length != obj2Entries.length)
        return false;

    for (const pair of obj1Entries) {
        if (obj2[pair[0]] !== pair[1]) {
            return false;
        }
    }
    return true;
};

let result = checkEqualObj(obj1, obj2);
console.log(result);

// testing on arrays 

let arr1 = [1, 2, 3];
let arr2 = [1, 3, 2];

// Json version cannot compare unordered arrays
let isEqual2 = JSON.stringify(arr1) === JSON.stringify(arr2);
console.log(isEqual2);

// isEqualObj function checks values by keys so cannot compare unordered arrays
isArraysEqual = checkEqualObj(arr1, arr2);
console.log(isArraysEqual);

let checkEqualArray = (arr1, arr2) => {
    let isValid = true;

    // first check length
    if (arr1.length != arr2.length)
        return false;

    // if length is equal, then only 1 match is possible
    arr1.forEach(item => {
        if (arr2[arr2.indexOf(item)] !== item)
            isValid = false;
    });

    if (isValid)
        return true;
    return false;

};

let IsEqualArray = checkEqualArray(arr1, arr2);
console.log(IsEqualArray);


