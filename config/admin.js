module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '729d6b2013c26273589e5b3c228cc095'),
  },
});
