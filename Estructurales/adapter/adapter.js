const PlaneAdapter = (myPlane) => ({
  turnLeft: () => myPlane.tiltLeft(45),
  turnRight: () => myPlane.tiltRight(45),
  arrancar: myPlane.takeOff,
  girar: myPlane.land,
});


module.exports = PlaneAdapter;
