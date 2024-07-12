// //step05a_object
// let object = {
//     name:"Mobile",
//     model:"Infinix 30 i",
//     color:"Black"
// }

// //step05b_object_aliased
// type Student = {
//     name:string,
//     age:number,
//     enroll:boolean
// }

// let student1:Student = {
//     name:"Yashal",
//     age:6,
//     enroll:false
// }

// let student2:Student = {
//     name:"Kiswah",
//     age:4,
//     enroll:false
// }
// let student3:Student = {
//     name:"Yashal",
//     age:6,
//     enroll:false
// }

// interface Teacher {
//     name:string,
//     age:number,
//     exp:number
// }

// let teacher:Teacher = {
//     name:"Rabia",
//     age:35,
//     exp:3
// }

// interface Animal {
//     name:string,
//     color:string
//     sound?:string
// }

// interface Cat extends Animal {
//     eat:()=>void
// }

// let cat:Cat = {
//     name:"Mano",
//     color:"White",
//     eat(){
//     console.log("She likes to eat fish.");
    
//     }
// }
// console.log(cat);

// cat.eat()

// //step05c_structural_typing_object_literals
// //step05d_nested_objects

// let person = {
//     name:"Rabia",
//     age:35,
//     status:"Married",
//     children1:{
//         name:"Kiswah",
//         age:6,
//         enroll:false
//     },
//     children2:{
//         name:"Kiswah",
//         age:4,
//         enroll:false
//     }
// }

// console.log(person);

// //step05e_intersection_types

// //step05f_any__unknown_never_types


//object literals

// let person = {
//     name:"Rabia",
//     age:35,
//     enroll:true
// }

// console.log(person.name)

// type Aliyas
// type Candy = {
//     name:string,
//     color:string,
//     taste:string,
//     price:number,
// }

// // type LolyPop extends Candy = {

// // }

// let candy1:Candy = {
//     name:"Eclare",
//     color:"Brown",
//     taste:"Sweet",
//     price:5
// }

// let candy2:Candy = {
//     name:"Super Sour",
//     color:"Multi",
//     taste:"Sweet and Sour",
//     price:5
// }
// // interface
//  interface Person {
//     name:string,
//     age:number,
//     status:string
//  }

// let person:Person = {
//     name:"Rabia",
//     age:35,
//     status:"Married"
// }
// // type vs interface extending interface



// // fresh object
// let cat:Cat = {
//     name:"Mano",
//     color:"White",
//     age:2,
//     eat(){
//         console.log("He likes to eat fish.");
//     }
// }
// console.log(cat);
// cat.eat()

// // steal object

// cat.age = 3
// console.log(cat);

// let thing = {
//     name:"Mobile",
//     model:"Infinix 30i",
//     price:32000
// }

// console.log(thing);

// thing.price = 28000

// console.log(thing);


// // structural typing
//  interface Deal1 {
//     food:string
//  }
//  interface Deal2 {
//     food:string,
//     drink:string
//  }

//  let myOrder:Deal1 = {
//     food:"Biryani"
//  }
//  console.log(myOrder);
 

//  let yourOrder:Deal2 = {
//     food:"Biryani",
//     drink:"Dew"
//  }
//  console.log(yourOrder);
 

//  let guestOrder:Deal1 = yourOrder // structural typing accept extra properties
//  console.log(guestOrder);
 
//  let order:Deal2 = myOrder

// duck typing

    interface Animal {
        name:string,
        color:string
    }


   // Inheritance
    interface Cat extends Animal {
        age:number
         eat:()=>void
    }
    
    let cat1:Cat = {
        name:"Mano",
        color:"White",
        age:2,
        eat(){
            console.log("He likes to eat fish");
            
        }
    }
// nominal typing

let cat = {
    name:"Mano",
    color:"White",
    _cat:"cat"
}

let dog = {
    name:"Tommy",
    color:"Brown",
    _dog:"dog"
}

// cat = dog // error
 
// nested object
// optional properties

type Address = {
    city:string,
    country:string
}
type Person = {
   readonly name:string,
   readonly age:number,
    marritalStatus:boolean,
    hobbies:string[]
    child1:{
        name:string,
        age:number,
        marritalStatus:boolean,
        hobbies:string[]
    },
      child2:{
        name:string,
        age:number,
        marritalStatus:boolean,
        hobbies:string[]
    }
    grandChild?:{
        name:string,
        age:number,
        marritalStatus:boolean,
        hobbies:string[]
    }
    address:Address
}

let mySelf:Person = {
    name:"Rabia",
    age:35,
    marritalStatus:true,
    hobbies:[
        "Coding",
        "Reading",
        "Cooking",
        "Outing"
    ],
    child1:{
        name:"Yashal Khan",
        age:6,
        marritalStatus:false,
        hobbies:[
            "Playing with toys",
            "Watching Cartoons",
            "Outing",
            "Eating Fast food",
        ]
    },
    child2:{
        name:"Kiswah Khan",
        age:4,
        marritalStatus:false,
        hobbies:[
            "Crying",
            "Playing",
            "Watching Cartoons"
        ]
    },
    address:{
        city:"Karachi",
        country:"Pakistan"
    }
}

console.log(mySelf.name);


// type intersect

type Student = {
    name:string,
    age:number,
    enroll:boolean
}

type Teacher = {
    name:string,
    age:number,
    salary:number
}

let person: Student & Teacher = {
    name:"Syed Hamzah",
    age:22,
    enroll:true,
    salary:50000
}