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

function calculatesFarePrice(x, y){
    const feet= 264;
    const distanceFromHqInBlocks = Math.abs(x-y);
    const distanceFromHqInFeet = distanceFromHqInBlocks *feet;

    const free = 400;
    const medium = 2000;
    const max = 2500;

    if (distanceFromHqInFeet <= free) {
        return 0; 
      } else if (distanceFromHqInFeet <= medium) {
        
        const excessFeet = distanceFromHqInFeet - free;
        return (excessFeet * 0.02).toFixed(2); 
      } else if (distanceFromHqInFeet <= max) {
        return 25; 
      } else {
        return 'cannot travel that far'; 
      }
    }


// Code your solution in this file!
