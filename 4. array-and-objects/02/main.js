var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };
  // 
  let penguien = [Gunter,Ramon,Fred];
  //
  console.log(penguien[0]);
  //
  let secondPenguin = Fred;
  //
  console.log(penguien[2]);
  //
  penguien[3] = "penguien";
  //
  console.log(penguien[length]);
  //
  penguien["canfly"] = false;
  //
  penguien.sayHello();
  //
  for (let key in penguien) {
    console.log(penguien[key]);
  }
  