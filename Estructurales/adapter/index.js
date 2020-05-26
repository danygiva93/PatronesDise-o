const avion = require('./target');
const carro = require('./reference');
const adapter = require('./adapter');

const adaptedPlane = adapter(avion);

carro.arrancar();
carro.girar();

adaptedPlane.arrancar();
adaptedPlane.girar();


