module.exports = ({ emitter }) => {
  const Noticias = () => {
    emitter.emit('covid', { content: 'This is a random content' });
  };
  const startPublicidad = () => setInterval(Noticias, 2000);
  return { startPublicidad };
};
