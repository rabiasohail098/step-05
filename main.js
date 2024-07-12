"use strict";
// //step05a_object
// let object = {
//     name:"Mobile",
//     model:"Infinix 30 i",
//     color:"Black"
// }
//Inheritance
// interface Cat extends Animal {
//     age:number
//      eat:()=>void
// }
// nominal typing
let cat = {
    name: "Mano",
    color: "White",
    _cat: "cat"
};
let dog = {
    name: "Tommy",
    color: "Brown",
    _dog: "dog"
};
let mySelf = {
    name: "Rabia",
    age: 35,
    marritalStatus: true,
    hobbies: [
        "Coding",
        "Reading",
        "Cooking",
        "Outing"
    ],
    child1: {
        name: "Yashal Khan",
        age: 6,
        marritalStatus: false,
        hobbies: [
            "Playing with toys",
            "Watching Cartoons",
            "Outing",
            "Eating Fast food",
        ]
    },
    child2: {
        name: "Kiswah Khan",
        age: 4,
        marritalStatus: false,
        hobbies: [
            "Crying",
            "Playing",
            "Watching Cartoons"
        ]
    }
};
mySelf.name = "Parniya";
console.log(mySelf.name);
// type intersect
