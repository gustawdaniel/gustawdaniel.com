'use strict'

const fp = require('fastify-plugin')
const fastifyEnv = require('fastify-env')

const schema = {
  type: 'object',
  required: ['CLICKUP_API_TOKEN'],
  properties: {
    CLICKUP_API_TOKEN: {
      type: 'string',
    },
    CLICKUP_LIST_ID: {
      type: 'string',
      default: '19409275'
    }
  }
}

const options = {
  schema: schema,
}

module.exports = fp(async function (fastify, opts) {
  fastify.register(fastifyEnv, options)
})
