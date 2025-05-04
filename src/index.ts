import Fastify from 'fastify'

import { posts, Post } from './posts'

const fastify = Fastify({ logger: true })

fastify.get('/posts', async (_, reply) => {
  reply.send(posts)
})

fastify.get('/posts/:id', async (request, reply) => {
  const { id } = request.params as { id: string }

  const post = posts.find(p => p.id === Number(id))

  if (!post) {
    return reply.status(404).send({ error: 'Post não encontrado' })
  }

  reply.send(post)
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })

    console.log('🚀 Server running at http://localhost:3000')
  } catch (err) {
    fastify.log.error(err)

    process.exit(1)
  }
}

start()
