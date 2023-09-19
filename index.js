function distanceFromHqInBlocks() {
    return 1;
}
function distanceFromHqInBlocks() {
 return 8;
}

function distanceFromHqInBlocks(street) {
    const blocks = 42;
    return Math.abs(street-blocks);
}

function distanceFromHqInFeet(street) {
    const blocks = 42;
    const feet = 264;
    const hq = street;
    return Math.abs((blocks-hq)*feet);
}
 

function distanceTravelledInFeet(a,b) {
    const feet = 264;
    const distanceFromHqInBlocks = Math.abs(a-b);
    const total = distanceFromHqInBlocks *feet; 
    return total;
}


function calculatesFarePrice(x, y) {
    const feet = 264;
    const distanceFromHqInFeet = Math.abs(x - y) * feet;
  
    if (distanceFromHqInFeet <= 400) return 0;
    if (distanceFromHqInFeet <= 2000) return (distanceFromHqInFeet * 0.02).toFixed(2);
    if (distanceFromHqInFeet <= 2500) return 25;
    return 'cannot travel that far';
  }
  
// Code your solution in this file!
