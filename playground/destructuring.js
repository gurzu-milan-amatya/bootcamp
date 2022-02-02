const car = {
    model: "TT-57",
    name: "SOME CAR NAME",
}


// const model  = car.model;
const {model: someNewName} = car;
console.log(someNewName); 