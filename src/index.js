// requiere framework fastify

const fastify = require('fastify')({
    logger: true
})

// declarar una ruta
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// run server
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`Server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1)
    }
}
start()