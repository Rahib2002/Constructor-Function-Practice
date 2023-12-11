    
    // Using Constructor Function
    
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
  
  
  function FourWheeler(make, model, numOfWheels) {

    Vehicle.call(this, make, model);
  
    
    this.numOfWheels = numOfWheels || 4;
  }
  
  
  Vehicle.prototype.drive = function () {
    console.log("Vroom Vroom!");
  };
  
 
  const mCar = new FourWheeler("Toyota", "Camry");
  console.log(mCar); 
  myCar.drive(); 



 
  // Using Object


  const Vehicle = {
    init: function (make, model) {
      this.make = make;
      this.model = model;
    },
    drive: function () {
      console.log("Vroom Vroom!");
    },
  };
  
 
  const FourWheeler = Object.create(Vehicle);
  

  FourWheeler.init = function (make, model, numOfWheels) {
   
    Vehicle.init.call(this, make, model);
  
   
    this.numOfWheels = numOfWheels || 4;
  };
  

  const myCar = Object.create(FourWheeler);
  myCar.init("Toyota", "Camry");
  console.log(myCar); 
  myCar.drive();
  