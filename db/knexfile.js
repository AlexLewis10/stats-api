// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stats'
  },


  production: {
    client: 'postgresql',
    connection: 'postgres://localhost/stats'
  }

};
