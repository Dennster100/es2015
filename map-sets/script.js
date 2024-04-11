//Quick Question #1
//it returns with the set. it will remove th duplicates 
//{Set(4) {1, 2, 3, 4}}

//Quick Question #2
// the set will remove the duplicates from the set and then the join method converts it back to a string
//it will return 'ref' 

//Quick Questions #3
//it will create a map 1st then adds 2 array refrences of 3 equal to true and one to false 
//Map(2) {Array(3) => true, Array(3) => false}

function hasDuplicate(array) {
    const removeDupes = [...new Set(array)];
    const bool = array.some((el, index) => el !== removeDupes[index])
    return bool;

}
function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(string) {
    const stringMap = [...string].filter((el) => isVowel(el)).reduce(function (accum, curVal) {
        return accum.get(curVal) === undefined ? accum.set(curVal, 1) : accum.set(curVal, (accum.get(curVal) + 1));

    },new Map())
    return stringMap;
}