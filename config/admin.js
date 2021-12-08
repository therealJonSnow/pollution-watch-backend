module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fddb4128c40a9df68bb47f528fc43926'),
  },
});
