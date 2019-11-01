const people = [{
    name: 'John',
    age: 22
},{
    name: 'Ice',
    age: 23
}, {
    name: 'Land',
    age: 35
}]



/** standard way of creating a function */
const under30 = people.filter(function(person){
    return person.age < 30
})

/**
 * Uses an ARROW function. 
 * Does the same job as the function above*/
const under30zero  = people.filter((person) => person.age < 30)


/** NOTE FROM STACK OVERFLOW:
 * https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable
 * 
 * If the function you want to replace does not use this, arguments and is not called with new, then yes. (You can replace normal function with arrow function)
 */

console.log(under30zero)


/** challenge */
const twenty2 = people.find((person) => person.age === 22)

console.log(twenty2.name)