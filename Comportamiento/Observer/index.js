const Noticias = require('./agency');
const SportsNewspaper = require('./newspaper');

const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const agency = Noticias({ emitter });

const Qhubo = SportsNewspaper({ emitter, name: 'Qhubo' });
const Minuto30 = SportsNewspaper({ emitter, name: 'Minuto30' });
const Colombiano = SportsNewspaper({ emitter, name: 'Colombiano' });
const Otro = SportsNewspaper({ emitter, name: 'A new newspaper' });

agency.startPublicidad();
