// Code your solution in this file!
const startPoint=42;

function distanceFromHqInBlocks(pickUpPoint){
     //returns the number of blocks given a value
     
     if (pickUpPoint > 42){
        return pickUpPoint-startPoint;
     }
     else if (pickUpPoint< 42){
        return startPoint-pickUpPoint;
     }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(pickUpPoint) {
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    const block=distanceFromHqInBlocks(pickUpPoint);

    return block*264;

  }

  distanceFromHqInFeet(43);
  distanceFromHqInFeet(50);
  distanceFromHqInFeet(34);


  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const distance= Math.abs(start-destination);
    start= startPoint;
    destination= distanceFromHqInBlocks();
    const feetTraveled = distance*264;
  
    return feetTraveled;
  }

  distanceTravelledInFeet(43, 48);
  distanceTravelledInFeet(50, 60);
  distanceTravelledInFeet(34, 28);


  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance1= Math.abs(start-destination);
    start= startPoint;
    destination= distanceFromHqInBlocks();
    const feetTraveled1 = distance1*264;
    let charges = (feetTraveled1-400)*0.02;

    if (feetTraveled1<=400){
      return charges=0;
    }
    else if(feetTraveled1>=400 && feetTraveled1<=2000){
        return charges;
    }

    else if (feetTraveled1<2500){
        return charges =25;
    }

    else {
        return 'cannot travel that far' ;
    }
    return charges;

  }

  calculatesFarePrice(43, 44);
  calculatesFarePrice(34, 32);
  calculatesFarePrice(50, 58);
  calculatesFarePrice(34, 24);
