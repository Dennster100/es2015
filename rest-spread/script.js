
function filterOutOdds(...nums) {
    return nums.filter( num => num%2 === 0)
}

function findMin(...nums) {

    const min = nums.reduce((num, currentValue) => { return num <= currentValue ? num : currentValue }, nums[0])
    return min;
}

function mergeObjects(obj1,obj2) {
    return { ...obj1, ...obj2 };
}

function doubleAndReturnArgs(...nums) {
    const newArray = nums.map(num => num * 2)
    return newArray;
}

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) =>{
    const randomIndex = Math.floor(Math.random() * items.length());
    const newArray = [...items]
    newArray.slice(randomIndex, 1)
    return newArray;
}

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
    return [...array1, ...array2];

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val }
    
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = { ...obj }
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };

}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return { ...obj, [key]: val }

}