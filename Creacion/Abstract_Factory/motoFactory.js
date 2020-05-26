const cbr = require('./moto-cbr');
const kawasaki = require('./moto-kawasaki');

class Motofactory {
    create(type, placa){
        switch(type){
            
            case 'cbr':
                return new cbr(placa);


            case 'kawasaki':
                return new kawasaki(placa);
    
            default: {
                console.log('motocicleta no existe.');
            }
        }
    }
}
module.exports = new Motofactory;