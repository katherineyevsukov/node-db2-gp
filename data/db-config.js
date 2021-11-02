const configs = require('../knexfile')
const knex = require('knex')

const environment = process.env.NODE_ENV || 'development'

module.exports = knex(configs[environment]) // like db('cars') - allows us to connect to the database