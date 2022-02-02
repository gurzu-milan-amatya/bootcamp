const fs = require('fs')

const car = {
    model: "TT-57",
    name: "SOME CAR NAME",
}

const carStr = JSON.stringify(car);
fs.writeFileSync('car.json', carStr);
console.log(JSON.parse(carStr).model);