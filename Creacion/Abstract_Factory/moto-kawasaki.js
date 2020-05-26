const moto = require('./moto');

class kawasaki {
    constructor(placa){
        return new moto(placa, 'ER6N',  'deportiva' , 'mecanica', 650, 'negra');
    }
}

module.exports = kawasaki;