// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/westsalon'
  },

  test: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/westsalon_test'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
