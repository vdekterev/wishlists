module.exports = {
  openapi: '3.0.3',
  info: {
    title: 'Wishlists API',
    version: '0.0.0',
    description: 'Сервис для создания вишлистов',
  },
  servers: [{ url: 'http://localhost:5000' }],
  components: {
    schemas: {
      Test: {},
    },
  },
};
