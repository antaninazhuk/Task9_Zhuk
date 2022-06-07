// Task 1

// let cars = [
//     { model: "Jeep", price: 50000, carMileage: 40000 },
//     { model: "Audi", price: 46000, carMileage: 80000 },
//     { model: "BMW", price: 32000, carMileage: 340000 },
//     { model: "Kia", price: 67500, carMileage: 70000 },
//     { model: "Geely", price: 22000, carMileage: 49000 },
// ];


// function getAveragePriceCarWithCarMileageLessFiftyHundreds(cars) {
//     let carsWithCarMileageLessFiftyHundreds = cars.filter(({ carMileage }) => carMileage < 50000);
//     return carsWithCarMileageLessFiftyHundreds.reduce((arr, { price }) => arr + price, 0) / carsWithCarMileageLessFiftyHundreds.length;
// }

// let averagePriceCarWithCarMileageLessFiftyHundreds = getAveragePriceCarWithCarMileageLessFiftyHundreds(cars);
// console.log(averagePriceCarWithCarMileageLessFiftyHundreds);


// function getModelCarsWithCarMileageLessFiftyHundreds(cars) {
//     return cars
//         .filter(({ carMileage }) => carMileage < 50000)
//         .map(({ model }) => model);
// }

// let ModelCarsWithCarMileageLessFiftyHundreds = getModelCarsWithCarMileageLessFiftyHundreds(cars);
// console.log(ModelCarsWithCarMileageLessFiftyHundreds);


// Task 2

// let student = {
//     name: "Your name",
//     age: "Your age",
//     id: 1,
// }

// let studentEntries = Object.entries(student);
// let studentMap = new Map(studentEntries);

// studentMap.set('group', 25)
//     .set('level', 'beginner');

// console.log(studentMap.has('name'));
// console.log(studentMap);

// Task 3

// for (let keys of studentMap.keys()) {
//     console.log(keys);
// }

// for (let values of studentMap.values()) {
//     console.log(values);
// }

// for (let entries of studentMap.entries()) {
//     console.log(entries);
// }


// Task 4

// let amount = {
//     apple: 440,
//     burger: 316,
//     juice: 1120,
// }

// let amountArr = Object.entries(amount);
// let newAmoutArr = amountArr.map(([key, value]) => {
//     return [key, value / 2]
// });
// let newAmount = Object.fromEntries(newAmoutArr);

// console.log(newAmount);

// Task 5

// let sumFruits = newAmoutArr.reduce((acc, [key, value]) => {
//     return acc + value;
// }, 0);

// console.log(sumFruits);



// Task 6

// function getUniqueValues(arr) {
//     return [...new Set(arr)];

// }


// Task 7

// const weather = {
//     "coord": {
//         "lon": -122.08,
//         "lat": 37.39
//     },
//     "weather": [{
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01d"
//     }],
//     "base": "stations",
//     "main": {
//         "temp": 282.55,
//         "feels_like": 281.86,
//         "temp_min": 280.37,
//         "temp_max": 284.26,
//         "pressure": 1023,
//         "humidity": 100
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.5,
//         "deg": 350
//     },
//     "clouds": {
//         "all": 1
//     },
//     "dt": 1560350645,
//     "sys": {
//         "type": 1,
//         "id": 5122,
//         "message": 0.0139,
//         "country": "US",
//         "sunrise": 1560343627,
//         "sunset": 1560396563
//     },
//     "timezone": -25200,
//     "id": 420006353,
//     "name": "Mountain View",
//     "cod": 200
// }

// let weatherJson = JSON.stringify(weather);
// let anotherWeather = JSON.parse(weatherJson);