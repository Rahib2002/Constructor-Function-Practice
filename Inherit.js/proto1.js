
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Vehicle.prototype.start = function () {
    console.log("The engine is starting.");
  };
  
  Vehicle.prototype.stop = function () {
    console.log("The engine is stopping.");
  };
  
  
  function FourWheeler(make, model, year, numberOfDoors) {
    Vehicle.call(this, make, model, year);
    this.numberOfDoors = numberOfDoors;
  }
  
  FourWheeler.prototype = Object.create(Vehicle.prototype);
  
  FourWheeler.prototype.drive = function () {
    console.log("The four-wheeler is moving.");
  };
  
  
  const myCar = new FourWheeler("Toyota", "Camry", 2023, 4);
  myCar.start();
  myCar.drive();
  myCar.stop();


  /*
const Vehicle = {
    init: function (make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    },
  
    start: function () {
      console.log("The engine is starting.");
    },
  
    stop: function () {
      console.log("The engine is stopping.");
    }
  };
  
  
  const FourWheeler = Object.create(Vehicle);
  
  FourWheeler.init = function (make, model, year, numberOfDoors) {
    Vehicle.init.call(this, make, model, year);
    this.numberOfDoors = numberOfDoors;
  };
  
  
  FourWheeler.drive = function () {
    console.log("The four-wheeler is moving.");
  };
  
 
  const myCar = Object.create(FourWheeler);
  myCar.init("Toyota", "Camry", 2023, 4);
  myCar.start();
  myCar.drive();
  myCar.stop();
  
  */