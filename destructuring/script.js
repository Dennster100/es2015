// object destructuring 1
// it prints 8 , 1846

// object destructuring 2
// it prints an object containing the rest of the object 
//    {
//    yearNeptuneDiscovered: 1846,
//    yearMarsDiscovered: 1659
//    }

// object destructuring 3
//it will return 
//'Your name is Alejandro and you like purple'
//'Your name is Melissa and you like green'
//'Your name is undefined and you like green'

//Array Destructuring 1
//it will reutrn 
//Maya
//Marisa
//Chi

//Array Destructuring 2
//it will print
//Raindrops on roses
//whiskers on kittens
// [
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
// ]

//Array Destructuring 3
//it will print
//[ 10, 30, 20 ]


//ES5 Assigning Variables to Object Properties
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const { numbers: a, b } = obj;
//Array Swap
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()
//when you are sending the argument you have to add the spread operator ... 
//raceResults(...['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = (first, seconed, third, ...rest) => ({ first, seconed, third, rest })
