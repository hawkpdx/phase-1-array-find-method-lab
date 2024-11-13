// ARRAY of OBJECTS, OBJECTS containing multiple PROPERTIES!
// each example 'property' contains key:value pair (IS THIS A RULE?? or can properties be another data type?)
// Can pass multiple of the same KEY (PROPERTY), VALUE(PROPERTY) must be different.
const record = [
    {year: 2015, record: "W"},
    {year: 2014, record: "N/A"},
    {year: 2013, record: "L"}
]

function superbowlWin(array) {
    const win = array.find(function(element) {
        return element.result === "W"
    })
    if (win) {
        return win.year
    }   else { return(undefined)
    }
}

console.log(superbowlWin(record))
/*
#Deliverables
[] 1. write a function called superbowWin
    [] function should receive 1 argument
    [] argument should be array of JS objects
    [] each object has 2 properties --- year and result
[] 2. function should use find() to test each object
    [] find() should interate through each 'result' key, checking for "W"
    [] return should include year when "W" occured
    [] if no win, return should = undefined
*/