'use strict'

module.exports = async function (fastify, opts) {
  const url = `https://api.clickup.com/api/v2/list/${fastify.config.CLICKUP_LIST_ID}/task`;

  fastify.post('/email', async function (request, reply) {
    const payload = {
      name: request.body.name,
      description: `${request.body.email}\n\n${request.body.description}`,
    };

    await fastify.axios.post(url, {
      ...payload,
      assignees: [2437459]
    }, {
      headers: {
        Authorization: fastify.config.CLICKUP_API_TOKEN
      }
    });

    reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(payload)
  })
}

module.exports.autoPrefix = '/api'
