module.exports = ({ name, emitter }) => {
// Dependency Injection
  const listeners = { // Another pattern applied here...
    Qhubo: ({ content }) => console.log(`QHUBO: No se salvaron de la muerte - ${content}`),
    Minuto30: ({ content }) => console.log(`MINUTO30: Muerte en las comunas - ${content}`),
    Colombiano: ({ content }) => console.log(`EL COLOMBIANO: Cada dia mas muertos - ${content}`),
    Otro: () => console.log('---------------NOTICIAS DEL DIA--------------------'),
  };

  const handler = listeners[name] || listeners.Otro;
  emitter.on('covid', handler);
};
