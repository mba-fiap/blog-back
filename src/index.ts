import Fastify, { FastifyReply, FastifyRequest } from 'fastify'

import fastifyCors from '@fastify/cors'

import { posts } from './posts'

const fastify = Fastify({ logger: true })

fastify.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

fastify.get('/posts', async (_: FastifyRequest, reply: FastifyReply) => {
  reply.send(posts)
})

fastify.get(
  '/posts/:slug',
  async (
    request: FastifyRequest<{ Params: { slug: string } }>,
    reply: FastifyReply,
  ) => {
    const { slug } = request.params

    const post = posts.find(p => p.slug === slug)

    if (!post) {
      return reply.status(404).send({ error: 'Post não encontrado' })
    }

    reply.send(post)
  },
)

const start = async () => {
  try {
    await fastify.listen({
      port: parseInt(process.env.PORT || '3000'),
      host: '0.0.0.0',
    })
  } catch (err) {
    fastify.log.error(err)

    process.exit(1)
  }
}

start()
