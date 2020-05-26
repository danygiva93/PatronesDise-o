const moto = require('./moto');

class cbr {
    constructor(placa){
        return new moto(placa, 'Honda', 'deportiva', 'mecanica', 250, 'roja');
    }
}

module.exports = cbr;