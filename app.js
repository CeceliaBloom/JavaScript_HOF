      //Exercise 1:
console.log("EXERCISE 1:\n==========\n");
function plus(number){
  return function(plusNumber){
    return plusNumber + number;
  }
}
const plus15= plus(15);
console.log(plus15(10));


         //Exercise 2:
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];
users.forEach(users => console.log(users.name));

          //Exercise 3:
console.log("EXERCISE 3:\n==========\n");

const mappedArray = users.map((users)=>{
  return `name: ${users.name} scores: ${users.score}`;
});

console.log(mappedArray);

            //Exercise 4:
console.log("EXERCISE 4:\n==========\n");
const filteredResult = users.filter((users)=> users.isActive == true);
  console.log(filteredResult);

            //Exercise 5:
console.log("EXERCISE 5:\n==========\n");
users.sort((a,b)=> b.score - a.score);

console.log(users);


           //Exercise 6:
console.log("EXERCISE 6:\n==========\n");

const sum= users.reduce((acc,curr)=>{
  return acc + curr.score;
},0);

const avg= sum / users.length;

console.log(avg);






