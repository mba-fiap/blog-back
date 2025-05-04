"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const posts_1 = require("./posts");
const fastify = (0, fastify_1.default)({ logger: true });
fastify.get('/posts', async (_, reply) => {
    reply.send(posts_1.posts);
});
fastify.get('/posts/:id', async (request, reply) => {
    const { id } = request.params;
    const post = posts_1.posts.find(p => p.id === Number(id));
    if (!post) {
        return reply.status(404).send({ error: 'Post não encontrado' });
    }
    reply.send(post);
});
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('🚀 Server running at http://localhost:3000');
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
