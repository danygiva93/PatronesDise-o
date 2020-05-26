const R = require('ramda');

const Plane = {
  tiltLeft: R.curry((grados) => {
    console.log(`Inglinacion ${grados} grados a la izquierda`)
  }),
  tiltRight: R.curry((grados) => {
    console.log(`Inglinacion ${grados} grados a la derecha`)
  }),
  takeOff: () => console.log('Despegar'),
  land: () => console.log('Aterrizar'),
};

module.exports = Plane;
