// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }
//
// class Person extends AgedPerson{
//     name = 'Max';
//
//     constructor() {
//         super();
//         this.age = 30;
//     }
//
//     greet() {
//         console.log(
//             `Hi, I am ${this.name} and I am ${this.age} years old.`
//         )
//     }
// }

function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function () {
        console.log(
            `Hi, I am ${this.name} and I am ${this.age} years old.`
        )
    }
}
//
// Person.describe = function() {
//     console.log('Creating persons...')
// }
// Person.describe()
//
// Person.prototype.printAge = function() {
//     console.log(this.age);
// }
Person.prototype = {
    printAge() {
        console.log(this.age);
    }
}
// console.dir(Person)
const p = new Person();
// const p2 = new Person();
p.greet()
// s = 'a'
// console.dir(s)
// const p2 = new p.__proto__.constructor();
// console.dir(Object);

// const course = {
//     title: 'JavaScript - The Complete Guide',
//     rating: 5,
// }
//
// Object.setPrototypeOf(course, {
//     ...Object.getPrototypeOf(course),
//     printRating: function () {
//         console.log(`${this.rating}/5`)
//     }
// })
//
// course.printRating();
// console.log(course)
//
// const student = Object.create({
//     printProgress: function () {
//         console.log(this.progress);
//     }
// })
//
// console.log(student);

// const uid = Symbol('uid')
// console.log(uid)

