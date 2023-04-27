class Car {
  #brand = '';

  #plate = '';

  #color = '';

  #fuelTank = 0;

  #currentFuelTank = 0;

  #consumption = 0;

  #fuelType = '';

  constructor(
    brand,
    plate,
    color,
    currentFuelTank,
    fuelTank,
    consumption,
    fuelType,
  ) {
    this.#brand = brand;
    this.#plate = plate;
    this.#color = color;
    this.#fuelTank = fuelTank;
    this.#currentFuelTank = currentFuelTank;
    this.#consumption = consumption;
    this.#fuelType = fuelType;
  }

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    this.#brand = value;
  }

  get plate() {
    return this.#plate;
  }

  set plate(value) {
    this.#plate = value;
  }

  get color() {
    return this.#color;
  }

  get fuelTank() {
    return this.#fuelTank;
  }

  set fuelTank(value) {
    this.#fuelTank = value;
  }

  get currentFuelTank() {
    return this.#currentFuelTank;
  }

  set currentFuelTank(value) {
    let tempValue = 0;
    if (value < 0) tempValue = 0;
    if (value > this.#fuelTank) tempValue = this.#fuelTank;

    this.#currentFuelTank = tempValue;
  }

  get consumption() {
    return this.#consumption;
  }

  set consumption(value) {
    this.#consumption = value < 0 ? 0 : value;
  }

  get fuelType() {
    return this.#fuelType;
  }

  set fuelType(value) {
    let tempValue = value;
    if (tempValue !== 'Gasoline' && tempValue !== 'Diesel') {
      tempValue = 'Gasoline';
    }
    this.#fuelType = tempValue;
  }

  fillTank(amount) {
    this.currentFuelTank += amount;
  }

  calculateConsumption(kms) {
    const usedFuel = (kms * this.consumption) / 100;
    this.#currentFuelTank -= usedFuel;
  }
}

// e.
const car1 = new Car('Nissan', '91-GH-15', 'Green', 40, 60, 5, 'Diesel');
console.log(car1);
const car2 = new Car('Opel', '23-AB-23', 'White', 50, 55, 6.5, 'Gasoline');
console.log(car2);
const car3 = new Car('Nissan', '12-CX-45', 'Black', 22, 70, 4.5, 'Diesel');
console.log(car3);

// f.
car1.fillTank(50);
console.log(car1.currentFuelTank);
car1.calculateConsumption(150);
console.log('Current fuel on car1 after travelling 150km:', car1.currentFuelTank);

// g.
const cars = [car1, car2, car3];

// h.
function getCountByBrand(brand) {
  return cars.filter((car) => car.brand === brand).length;
}
console.log('Number of cars branded Nissan:', getCountByBrand('Nissan'));

function getSumByFuelType(fuelType) {
  return cars
    .filter((car) => car.fuelType === fuelType)
    .reduce((acc, car) => acc + car.currentFuelTank, 0);
}
console.log('Sum of the current fuel of all cars that use Diesel:', getSumByFuelType('Diesel'));
