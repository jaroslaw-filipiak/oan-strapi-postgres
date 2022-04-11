module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    proxy: true,
  app: {
    keys: env.array("APP_KEYS", ['8Rks9H4ByiY6VWkhPkMLmw==' ,'dx9zD7r++U5/C68Q0M60Cw==' ,'CnoIDz9Hn4k8N8TUs2u6gA==' ,'fnJpH/cFhTHl552vSdp29Q==']),
  },
  });
