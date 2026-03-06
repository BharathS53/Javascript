const myArr=[0,1,2,3,4,5]
// console.log(myArr);


//watch notebook for further methods
//myArr.push(6)
// myArr.pop()
// myArr.unshift(9)
// myArr.pop()
//slics,splice,indexof(3),include(9)


const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros);


console.log(Array.isArray("bharath"))
console.log(Array.from("bharath"))
console.log(Array.from({name:"bharath"}))


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))