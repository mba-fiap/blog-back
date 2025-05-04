import Fastify, { FastifyReply, FastifyRequest } from 'fastify'

import { posts } from './posts'

const fastify = Fastify({ logger: true })

fastify.get('/posts', async (_: FastifyRequest, reply: FastifyReply) => {
  reply.send(posts)
})

fastify.get(
  '/posts/:id',
  async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) => {
    const { id } = request.params

    const post = posts.find(p => p.id === Number(id))

    if (!post) {
      return reply.status(404).send({ error: 'Post não encontrado' })
    }

    reply.send(post)
  },
)

const start = async () => {
  try {
    await fastify.listen({ port: parseInt(process.env.PORT || '3000') })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
