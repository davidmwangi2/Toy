// write your code here 
function calculateDemeritPoints(speedInKmh) {
  const speedLimit = 70;
  const pointsPerExcessKmh = 2;

  const speedExcess = Math.max(0, speedInKmh - speedLimit); 
  const demeritPoints = speedExcess * pointsPerExcessKmh;

  return demeritPoints;
}
  