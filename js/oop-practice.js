// STEP 1
// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
// }
// const myCat = new Cat('Cilantro');
// console.log(myCat.name);

// class Dog {
//     constructor() {
//       console.log('The new dog has been created.')
//     }
// }
// const myDog = new Dog();


// STEP 2
// class Cat {

// }
// const cat1 = new Cat()

// class Dog {

// }
// const dog1 = new Dog()


// STEP 3
// class Animal {
//       constructor() {
//       }
//       born = function () {
//         console.log('The Animal has been created.')
//       }
//   }
// const giraffe = new Animal();
// giraffe.born();


// STEP 4
// class Animal {
//   constructor(species) {
//     this.species = species;
//   }
//   born = function () {
//     console.log(`The ${this.species} has been created.`)
//   }
// }
// const giraffe = new Animal('Giraffe');
// giraffe.born();


// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const myCat = new Animal('cat', 'tabby', 'brown', '10in', '25in');
// console.log(myCat);


// STEP 6
// for (const property in Animal) {
//   console.log(`${Animal[property]}`)
// }


// STEP 7
// class Animal {
//     constructor(type, color){
//       this.type = type;
//       this.color = color;
//     }
//     speak = function(){
//       if(this.type == 'dog') {
//         console.log(`The ${this.color} ${this.type} is barking!`)
//       } else if (this.type == 'cat') {
//         console.log(`The ${this.color} ${this.type} is meowing!`)
//       }
//     }
// }

// const myDog = new Animal('dog', 'silver');
// myDog.speak();


// STEP 8
// class Animal {
//     constructor(type, color){
//       let _type = type;
//       let _color = color;
//       let checkType = function() {
//         return _type;
//       }
//       this.speak = function() {
//         checkType()
//         console.log(`The ${_type} has made a noise!`)
//       }
//     }
// }

// const myDog = new Animal('dog', 'silver');
// myDog.speak();

// STEP 9
// let paragraph = new String("Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on.");

// String.prototype.findWords = function(word){
//   this.word = word;
//   let search = this.word.match(/[this.word]/g).length;
//   return alert(search);
// }

// paragraph.findWords('wasted');



