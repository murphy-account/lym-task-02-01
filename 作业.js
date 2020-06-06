
var fp = require('lodash/fp');
const cars = [
   { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
   { name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false },
   { name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false },
   { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
   { name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true },
   { name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false }
]
//练习1
const last_car = arr => fp.last(arr);
const isLastInStock = obj => fp.prop('in_stock', obj)
let fff1 = fp.flowRight(isLastInStock,last_car)
console.log(fff1(cars));

//练习2
const first_car = arr => fp.first(arr);
const isFirstName = obj => fp.prop('name', obj)
let fff2 = fp.flowRight(isFirstName,first_car)
console.log(fff2(cars));

//练习3
const _average = xs => fp.reduce(fp.add, 0, xs) / xs.length
const getValue = cars => fp.map((car) => car.dollar_value, cars)
const fff3 = fp.flowRight(_average, getValue)
console.log(fff3(cars))

//练习4
const _underscore = str => fp.replace(/\W+/g, '_',str)
const _getName = cars => fp.map((car) => car.name, cars)
const _toLow = function(arr){
   let aaa = [];
   for(let item of arr){
      aaa.push(_underscore(item.toLowerCase()))
   }
   return aaa
}
const fff4 = fp.flowRight(_toLow,_getName)
console.log(fff4(cars));



// class Container {
//    static of(value) {
//       return new Container(value)
//    }
//    constructor(valoue) {
//       this._value = value
//    }
//    map(fn) {
//       return Container.of(fn(this._value))
//    }
// }
// class Maybe {
//    static of(x) {
//       return new Maybe(x)
//    }
//    isNothing() {
//       return this._value === null || this._value === undefined
//    }
//    constructor(x) {
//       this._value = x
//    }
//    map(fn) {
//       return this.isNothing() ? this : Maybe.of(fn(this._value))
//    }
// }
// module.exports = {
//    Maybe,
//    Container
// }


