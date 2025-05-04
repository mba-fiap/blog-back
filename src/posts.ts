export interface Post {
  id: number
  slug: string
  title: string
  image: string
  thumb: string
  content: string
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'como-criar-um-blog-com-vuejs',
    title: 'Como criar um blog com Vue.js',
    image: '/images/como-criar-um-blog-com-vuejs.png',
    thumb: '/images/como-criar-um-blog-com-vuejs-thumb.png',
    content: `
## Introdução

Criar um blog com Vue.js é uma excelente forma de aprender o framework enquanto desenvolve algo útil. Neste artigo, você verá como montar a estrutura inicial, criar rotas e componentes, e deixar seu blog pronto para publicação.

---

## 1. Configurando o projeto

Primeiro, você precisa criar um novo projeto com o Vue CLI ou Vite:

\`\`\`bash
npm init vue@latest
# ou
npm create vite@latest
\`\`\`

Escolha as configurações que desejar (suporte a router, TypeScript etc.).

---

## 2. Criando rotas com Vue Router

O Vue Router permite que você crie navegação entre as páginas do blog, como:

- Página inicial
- Página de post individual
- Página de erro 404

Exemplo de rota:

\`\`\`js
{
  path: '/post/:slug',
  name: 'PostDetail',
  component: () => import('@/views/PostDetail.vue')
}
\`\`\`

---

## 3. Estrutura de componentes

Você pode criar componentes como:

- \`PostList.vue\` — mostra todos os posts
- \`PostCard.vue\` — preview de um post
- \`PostDetail.vue\` — página com o conteúdo completo do post

---

## 4. Trabalhando com dados mock

Crie um arquivo \`posts.ts\` com seus dados (como esse que estamos criando agora) e use como base para simular um backend.

---

## 5. Estilizando o blog

Você pode usar Tailwind CSS, Bootstrap ou CSS puro. O importante é manter uma identidade visual consistente.

---

## Conclusão

Agora você tem a base de um blog com Vue.js! É possível evoluir ainda mais, integrando com CMSs como Strapi ou Sanity, usando Markdown para o conteúdo, e até fazer deploy gratuito com Netlify ou Vercel.

Boa codificação 🚀
  `,
  },
  {
    id: 2,
    slug: 'vuex-na-pratica',
    title: 'Gerenciamento de estado com Vuex na prática',
    image: '/images/vuex-na-pratica.png',
    thumb: '/images/vuex-na-pratica-thumb.png',
    content: `# Gerenciamento de estado com Vuex na prática

Gerenciar o estado da aplicação é um dos maiores desafios ao construir interfaces ricas com muitos componentes. O Vuex é a solução oficial do Vue.js para esse problema e funciona como uma store centralizada que armazena todo o estado compartilhado da aplicação.

Este post apresenta conceitos fundamentais do Vuex, exemplos práticos, quando utilizar (ou não), além de mostrar como integrá-lo com a Composition API.

---

## O que é o Vuex?

Vuex é uma biblioteca de gerenciamento de estado inspirada no padrão Flux. Ele permite:

- Centralizar o estado da aplicação
- Tornar mutações previsíveis através de commits
- Rastrear alterações no estado com ferramentas de debug

Sua estrutura é baseada em **state**, **getters**, **mutations**, **actions** e **modules**.

---

## Estrutura básica de uma store Vuex

\`\`\`js
import { createStore } from 'vuex'

export const store = createStore({
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})
\`\`\`

---

## Quando usar Vuex

Você **não precisa** do Vuex em todos os projetos Vue. Use-o quando:

- Múltiplos componentes precisam acessar e modificar os mesmos dados
- Você quer rastrear o histórico de mudanças no estado
- O app é grande e tem interações complexas entre domínios

Para apps pequenos ou médios, \`ref()\` e \`reactive()\` com \`provide/inject\` ou Pinia (substituto moderno) podem ser mais simples.

---

## Integrando Vuex com a Composition API

Com Vue 3 e Composition API, você pode usar o Vuex com \`useStore()\`:

\`\`\`ts
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()

    const count = computed(() => store.state.count)
    const increment = () => store.commit('increment')

    return { count, increment }
  }
}
\`\`\`

---

## Módulos Vuex

Você pode dividir sua store em módulos para melhor organização:

\`\`\`js
const cart = {
  namespaced: true,
  state: () => ({ items: [] }),
  mutations: {
    addItem(state, item) {
      state.items.push(item)
    }
  }
}

const store = createStore({
  modules: { cart }
})
\`\`\`

---

## Vuex vs Pinia

Desde o Vue 3, a comunidade vem migrando para o [Pinia](https://pinia.vuejs.org), considerado o sucessor oficial do Vuex:

| Vuex                      | Pinia                    |
|--------------------------|--------------------------|
| Verboso                  | API mais simples         |
| Mutations + Actions      | Apenas actions           |
| Não tree-shakable        | Tree-shakable            |
| Suporte legado Vue 2/3   | Foco no Vue 3+           |

---

## Conclusão

Vuex continua sendo uma ótima escolha para projetos Vue que precisam de controle centralizado de estado, especialmente em apps grandes. No entanto, se estiver iniciando um novo projeto com Vue 3, considere também avaliar o Pinia, que oferece uma abordagem mais moderna e concisa para gerenciamento de estado.

A chave é entender as necessidades da sua aplicação e escolher a ferramenta que equilibra **clareza**, **manutenção** e **complexidade**.`,
  },
  {
    id: 3,
    slug: 'componentes-reutilizaveis-vue',
    title: 'Criando componentes reutilizáveis no Vue',
    image: '/images/componentes-reutilizaveis-vue.png',
    thumb: '/images/componentes-reutilizaveis-vue-thumb.png',
    content: `# Criando componentes reutilizáveis no Vue

Criar componentes reutilizáveis é uma das principais vantagens ao trabalhar com frameworks como o Vue.js. Componentes bem estruturados melhoram a manutenibilidade, reduzem a duplicação de código e facilitam a padronização de interfaces.

Neste post, vamos ver como criar componentes reutilizáveis no Vue 3 usando a Composition API, com boas práticas para \`props\`, \`slots\`, \`emit\` e composição de estilo.

---

## Por que criar componentes reutilizáveis?

- **Redução de código duplicado**
- **Facilidade de manutenção**
- **Criação de uma base para um design system**
- **Padronização da UI e comportamento da aplicação**

---

## Exemplo: Componente de botão reutilizável

Vamos criar um botão simples e reutilizável com suporte a diferentes variantes:

### \`BaseButton.vue\`

\`\`\`vue
<template>
  <button
    :class="[
      'px-4 py-2 rounded font-semibold transition-colors duration-300',
      variantClasses
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600'
    default:
      return 'bg-blue-500 text-white hover:bg-blue-600'
  }
})
</script>
\`\`\`

---

## Usando o componente

\`\`\`vue
<BaseButton @click="doSomething">Salvar</BaseButton>
<BaseButton variant="secondary">Cancelar</BaseButton>
<BaseButton variant="danger">Excluir</BaseButton>
\`\`\`

---

## Componentes com \`slots\` e \`fallback\`

Slots são essenciais para criar componentes flexíveis. Exemplo com um \`Card\`:

### \`BaseCard.vue\`

\`\`\`vue
<template>
  <div class="p-4 rounded-lg shadow bg-white">
    <header v-if="$slots.header" class="mb-2">
      <slot name="header" />
    </header>

    <div class="text-sm text-gray-700">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="mt-4">
      <slot name="footer" />
    </footer>
  </div>
</template>
\`\`\`

---

## Composição de estilo e comportamento

Evite hardcodes repetidos. Reutilize utilitários com \`@apply\`, classes dinâmicas e até mixins se necessário. Use \`emit\` para ações esperadas:

\`\`\`vue
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border px-3 py-2 rounded w-full"
  />
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
\`\`\`

---

## Boas práticas

- Use nomes prefixados (\`BaseButton\`, \`BaseCard\`, etc.)
- Documente os \`props\` com tipos e valores padrão
- Priorize \`slots\` para conteúdo flexível
- Use \`defineEmits\` e \`defineProps\` com tipagem
- Evite acoplamento direto com dados externos (faça seu componente o mais isolado possível)

---

## Conclusão

Criar componentes reutilizáveis é o primeiro passo para criar um design system robusto e uma aplicação Vue escalável. Com props bem definidas, uso estratégico de slots e atenção ao estilo, é possível construir interfaces flexíveis, manuteníveis e coesas.

Comece pequeno — com botões, inputs, cards — e evolua para estruturas mais completas como tabelas, modais e layouts.`,
  },
  {
    id: 4,
    slug: 'introducao-vue-router',
    title: 'Introdução ao Vue Router',
    image: '/images/introducao-vue-router.png',
    thumb: '/images/introducao-vue-router-thumb.png',
    content: `# Introdução ao Vue Router

Ao construir aplicações Vue com múltiplas páginas ou telas, você precisará de um sistema de rotas para navegar entre elas sem recarregar a página. O [Vue Router](https://router.vuejs.org) é a solução oficial de roteamento para Vue.js, e permite transformar seu app em uma SPA (Single Page Application) completa.

Neste post, vamos cobrir os conceitos básicos de roteamento com Vue 3 e Composition API.

---

## Instalação

Se você estiver usando Vite, pode instalar o Vue Router com:

\`\`\`bash
npm install vue-router@4
\`\`\`

---

## Estrutura de exemplo

Vamos criar duas páginas: \`Home.vue\` e \`About.vue\`.

\`\`\`vue
<!-- Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <p>Bem-vindo à página inicial!</p>
  </div>
</template>
\`\`\`

\`\`\`vue
<!-- About.vue -->
<template>
  <div>
    <h1>Sobre</h1>
    <p>Esta é a página sobre o projeto.</p>
  </div>
</template>
\`\`\`

---

## Configurando o Vue Router

Crie um arquivo chamado \`router/index.ts\` (ou \`.js\`):

\`\`\`ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
\`\`\`

---

## Integrando ao Vue

No seu \`main.ts\`:

\`\`\`ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
\`\`\`

---

## Navegação entre páginas

Você pode usar o componente \`<router-link>\`:

\`\`\`vue
<router-link to="/">Início</router-link>
<router-link to="/about">Sobre</router-link>
\`\`\`

Ou fazer a navegação programaticamente:

\`\`\`ts
this.$router.push('/about')
\`\`\`

Se estiver usando Composition API:

\`\`\`ts
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/about')
\`\`\`

---

## Rota com parâmetros

Você pode definir rotas dinâmicas:

\`\`\`ts
{ path: '/user/:id', component: UserProfile }
\`\`\`

E acessá-las via:

\`\`\`ts
const route = useRoute()
console.log(route.params.id)
\`\`\`

---

## Rotas aninhadas

Você pode definir rotas dentro de outras:

\`\`\`ts
{
  path: '/admin',
  component: AdminLayout,
  children: [
    { path: 'users', component: AdminUsers },
    { path: 'settings', component: AdminSettings }
  ]
}
\`\`\`

---

## Conclusão

O Vue Router é essencial para qualquer aplicação Vue com múltiplas telas. Ele oferece rotas dinâmicas, navegação programática, lazy loading de páginas e suporte a guardas de rota. Aprender a usá-lo corretamente é um passo fundamental para estruturar SPAs profissionais com Vue.js.

No próximo nível, você pode explorar:
- Lazy loading de componentes com \`defineAsyncComponent\`
- Guardas de rota (\`beforeEach\`)
- Nested views com \`<router-view>\`
- Navegação com transições animadas`,
  },
  {
    id: 5,
    slug: 'vue3-vs-vue2',
    title: 'Vue 3 vs Vue 2: Principais diferenças',
    image: '/images/vue3-vs-vue2.png',
    thumb: '/images/vue3-vs-vue2-thumb.png',
    content: `# Vue 3 vs Vue 2: Principais diferenças

O Vue.js evoluiu muito desde sua primeira versão. A chegada do Vue 3 trouxe melhorias significativas de performance, uma nova forma de escrever componentes e uma base mais moderna para aplicações complexas.

Neste post, vamos destacar as principais diferenças entre o Vue 2 e o Vue 3 para ajudar você a entender o que mudou e por que vale a pena considerar a migração.

---

## 1. Performance e arquitetura interna

O Vue 3 foi reescrito do zero usando TypeScript e adotou uma arquitetura baseada em proxies ao invés de \`Object.defineProperty\`, o que trouxe:

- Menor bundle size (~55% menor)
- Melhor gerenciamento de reatividade
- Melhor suporte a TypeScript
- Tempo de inicialização mais rápido

---

## 2. Composition API

A maior mudança para os desenvolvedores foi a introdução da **Composition API**, uma nova forma de organizar a lógica dos componentes.

### Vue 2 (Options API):

\`\`\`js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
\`\`\`

### Vue 3 (Composition API):

\`\`\`js
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    return { count, increment }
  }
}
\`\`\`

A Composition API permite agrupar lógica por funcionalidade, não por opção (\`data\`, \`methods\`, etc.), o que facilita reuso e manutenção em componentes grandes.

---

## 3. Fragmentos e múltiplos elementos raiz

No Vue 2, todo componente precisava ter **um único elemento raiz**. No Vue 3, é possível retornar múltiplos elementos diretamente:

\`\`\`vue
<template>
  <h1>Título</h1>
  <p>Subtítulo</p>
</template>
\`\`\`

---

## 4. Suspense e componentes assíncronos

O Vue 3 introduziu o \`<Suspense>\`, que facilita carregamento assíncrono com fallback:

\`\`\`vue
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <div>Carregando...</div>
  </template>
</Suspense>
\`\`\`

---

## 5. Nova forma de criar apps

Vue 3 usa \`createApp\` ao invés de \`new Vue()\`:

\`\`\`js
// Vue 2
new Vue({ render: h => h(App) }).$mount('#app')

// Vue 3
import { createApp } from 'vue'
createApp(App).mount('#app')
\`\`\`

---

## 6. Reatividade com \`ref\` e \`reactive\`

Vue 3 introduziu \`ref()\` e \`reactive()\` como alternativas poderosas ao \`data()\`:

\`\`\`js
const count = ref(0)
const user = reactive({ name: 'Lucas', age: 28 })
\`\`\`

---

## 7. Melhor suporte a TypeScript

Vue 2 tinha suporte parcial e difícil de escalar com TypeScript. O Vue 3 foi escrito **inteiramente em TypeScript**, com suporte de tipagem mais robusto, especialmente usando \`<script setup lang="ts">\`.

---

## 8. Novo sistema de plugins

Plugins agora são registrados com \`app.use()\` ao invés de \`Vue.use()\`:

\`\`\`js
import { createApp } from 'vue'
import MyPlugin from './plugin'

const app = createApp(App)
app.use(MyPlugin)
\`\`\`

---

## 9. Nova abordagem para eventos personalizados

O Vue 3 removeu o uso automático do \`.native\` e \`this.$on\`, favorecendo \`emits\` explícitos:

\`\`\`ts
defineEmits(['submit'])
\`\`\`

---

## Conclusão

O Vue 3 representa uma evolução significativa da framework, com melhorias em performance, organização de código e suporte moderno para ferramentas como TypeScript. A migração é altamente recomendada para novos projetos e pode ser feita gradualmente em projetos existentes.

Se você está começando com Vue agora, comece diretamente com o Vue 3 e explore a Composition API para uma arquitetura mais escalável.`,
  },
  {
    id: 6,
    slug: 'composition-api-exemplos',
    title: 'Composition API com exemplos práticos',
    image: '/images/composition-api-exemplos.png',
    thumb: '/images/composition-api-exemplos-thumb.png',
    content: `# Composition API com exemplos práticos

A Composition API é um dos principais recursos do Vue 3. Ela permite uma forma mais flexível e organizada de escrever componentes Vue, separando a lógica por funcionalidade em vez de por opções (\`data\`, \`methods\`, \`computed\`, etc).

Neste post, vamos explorar exemplos práticos da Composition API para que você entenda como aplicá-la no dia a dia.

---

## Por que usar a Composition API?

- Melhor organização do código
- Maior reuso de lógica entre componentes
- Melhor suporte a TypeScript
- Mais controle sobre o ciclo de vida e reatividade

---

## Criando um contador simples

### Usando a Options API (Vue 2)

\`\`\`js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
\`\`\`

### Usando a Composition API (Vue 3)

\`\`\`js
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++

    return { count, increment }
  }
}
\`\`\`

---

## Separando lógica reutilizável

Você pode extrair partes da lógica para funções reutilizáveis chamadas \`composables\`.

### useCounter.js

\`\`\`js
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  const reset = () => count.value = 0

  return { count, increment, reset }
}
\`\`\`

### Em um componente

\`\`\`js
import { useCounter } from './useCounter'

export default {
  setup() {
    const { count, increment, reset } = useCounter()
    return { count, increment, reset }
  }
}
\`\`\`

---

## Reatividade com \`reactive\` e \`ref\`

- \`ref(value)\` → usado para valores primitivos (string, number, boolean)
- \`reactive(object)\` → usado para objetos e arrays

\`\`\`js
const user = reactive({
  name: 'João',
  age: 30
})
\`\`\`

---

## Ciclo de vida com Composition API

Use os novos hooks de ciclo de vida dentro do \`setup()\`:

\`\`\`js
import { onMounted, onUnmounted } from 'vue'

setup() {
  onMounted(() => {
    console.log('Componente montado')
  })

  onUnmounted(() => {
    console.log('Componente destruído')
  })
}
\`\`\`

---

## Tipagem com TypeScript

A Composition API tem suporte completo a TypeScript, especialmente com \`<script setup lang="ts">\`.

\`\`\`ts
<script setup lang="ts">
import { ref } from 'vue'

const name = ref<string>('Lucas')
</script>
\`\`\`

---

## Conclusão

A Composition API é poderosa, moderna e essencial para projetos Vue 3 escaláveis. Ela melhora a legibilidade, a organização e permite reusar lógica de forma clara. Recomenda-se utilizá-la desde o início em novos projetos.

Comece pequeno, usando \`ref()\`, \`reactive()\` e \`setup()\`, e logo você estará confortável para criar seus próprios composables e hooks personalizados.`,
  },
  {
    id: 7,
    slug: 'vuejs-com-typescript',
    title: 'Utilizando Vue.js com TypeScript',
    image: '/images/vuejs-com-typescript.png',
    thumb: '/images/vuejs-com-typescript-thumb.png',
    content: `# Utilizando Vue.js com TypeScript

Com a chegada do Vue 3, o suporte a TypeScript se tornou nativo e robusto. Usar TypeScript em aplicações Vue traz diversos benefícios, como segurança de tipos, autocompletar em IDEs e melhor refatoração de código.

Neste post, vamos explorar como configurar seu projeto Vue com TypeScript e aplicar boas práticas na tipagem de props, emits e estados reativos.

---

## Por que usar TypeScript no Vue?

- Detecção de erros em tempo de desenvolvimento
- Melhor autocompletar e documentação inline
- Facilita refatorações grandes com segurança
- Mais clareza na comunicação entre componentes

---

## Criando um projeto Vue com TypeScript

Se você está usando Vite, crie o projeto com suporte TS:

\`\`\`bash
npm create vite@latest my-app --template vue-ts
\`\`\`

Isso já gera a estrutura com \`<script setup lang="ts">\`, arquivos \`.ts\` e tipagens adequadas.

---

## Tipando variáveis reativas

Use os genéricos de \`ref()\` e \`reactive()\`:

\`\`\`ts
<script setup lang="ts">
import { ref, reactive } from 'vue'

const count = ref<number>(0)

interface User {
  name: string
  age: number
}

const user = reactive<User>({
  name: 'Lucas',
  age: 28
})
</script>
\`\`\`

---

## Tipando props com \`defineProps\`

\`\`\`ts
<script setup lang="ts">
interface Props {
  title: string
  isActive?: boolean
}

const props = defineProps<Props>()
</script>
\`\`\`

---

## Tipando eventos com \`defineEmits\`

\`\`\`ts
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submit', payload: { id: number }): void
  (e: 'cancel'): void
}>()
</script>
\`\`\`

---

## Tipagem em componentes filhos

Você pode passar e validar tipos entre componentes facilmente:

### Pai.vue

\`\`\`vue
<BaseButton @submit="handleSubmit" />
\`\`\`

### BaseButton.vue

\`\`\`ts
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submit'): void
}>()

const onClick = () => emit('submit')
</script>
\`\`\`

---

## Trabalhando com \`defineExpose\`

Útil para expor métodos para componentes pais:

\`\`\`ts
<script setup lang="ts">
const reset = () => { /* ... */ }
defineExpose({ reset })
</script>
\`\`\`

---

## Dicas e boas práticas

- Sempre use \`lang="ts"\` no \`<script setup>\`
- Prefira \`interface\` para definir props e dados complexos
- Tipar \`emits\` ajuda a evitar erros de digitação
- Use VSCode + Volar para aproveitar o suporte completo de TS no Vue

---

## Conclusão

Usar TypeScript com Vue 3 é uma escolha inteligente para quem busca segurança e escalabilidade. A integração com a Composition API e o \`<script setup>\` torna o uso de tipos muito mais simples e intuitivo. Com o tempo, você perceberá que sua produtividade aumenta à medida que os erros diminuem.`,
  },
  {
    id: 8,
    slug: 'melhores-praticas-vue',
    title: 'Melhores práticas para projetos em Vue.js',
    image: '/images/melhores-praticas-vue.png',
    thumb: '/images/melhores-praticas-vue-thumb.png',
    content: `# Melhores práticas para projetos em Vue.js

Manter a qualidade, legibilidade e escalabilidade de um projeto Vue depende da aplicação de boas práticas desde o início. Seja em projetos pequenos ou grandes, seguir padrões consistentes ajuda a evitar dívidas técnicas e melhora a colaboração entre times.

Neste post, você encontrará um guia com práticas recomendadas para trabalhar com Vue.js — especialmente com Vue 3, Composition API e Vite.

---

## 1. Utilize \`<script setup>\`

O uso do \`<script setup>\` reduz a verbosidade, melhora a legibilidade e facilita o uso de Composition API:

\`\`\`ts
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
\`\`\`

---

## 2. Organize o projeto em pastas

Estruture seus arquivos em domínios ou funcionalidades:

\`\`\`
src/
├─ components/
├─ views/
├─ composables/
├─ router/
├─ store/
├─ assets/
├─ types/
\`\`\`

Evite deixar todos os arquivos na raiz.

---

## 3. Use \`composables\` para lógica reutilizável

Separe lógica de negócio reutilizável em funções puras no diretório \`/composables\`:

\`\`\`ts
// useDarkMode.ts
import { ref, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)
  watch(isDark, value => {
    document.body.classList.toggle('dark', value)
  })
  return { isDark }
}
\`\`\`

---

## 4. Tipagem sempre que possível

Use \`lang="ts"\`, \`defineProps<>()\`, \`defineEmits<>()\` e declare interfaces:

\`\`\`ts
interface Props {
  label: string
  count?: number
}
\`\`\`

---

## 5. Padronize a nomenclatura de componentes

- Use PascalCase para componentes (ex: \`BaseButton.vue\`)
- Evite nomes genéricos como \`Component.vue\` ou \`Page.vue\`
- Prefixe componentes reutilizáveis com \`Base\` ou \`App\` (\`BaseCard\`, \`AppHeader\`)

---

## 6. Use \`v-model\` corretamente

Com Vue 3, é possível usar múltiplos \`v-model\`s e tipar seus updates:

\`\`\`ts
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
\`\`\`

---

## 7. Evite lógica complexa no template

Evite condicional ternária ou chamadas de função diretamente no HTML. Prefira usar variáveis computadas ou métodos:

❌ Ruim:
\`\`\`vue
<p>{{ items.filter(i => i.active).length > 0 ? 'Ativo' : 'Inativo' }}</p>
\`\`\`

✅ Melhor:
\`\`\`ts
const hasActiveItems = computed(() => items.filter(i => i.active).length > 0)
\`\`\`

---

## 8. Use diretivas utilitárias

- \`v-bind\` sempre com shorthand (\`:prop\`)
- \`v-if\` e \`v-for\` não devem coexistir no mesmo elemento
- Use \`key\` sempre que usar \`v-for\`

---

## 9. Utilize plugins e ferramentas úteis

- ESLint + Prettier com regras para Vue
- Volar para TS + template intelligence
- Pinia para store
- VueUse para utilitários reativos
- Tailwind CSS (se quiser produtividade em UI)

---

## 10. Documente seus componentes

Documente os \`props\`, eventos, slots e exposições usando comentários JSDoc ou anotações diretamente no código.

---

## Conclusão

Projetos Vue.js bem estruturados são mais fáceis de manter, escalar e compartilhar. Adotar boas práticas não é um luxo, mas uma necessidade para equipes que buscam eficiência e sustentabilidade a longo prazo.

Comece aplicando essas práticas gradualmente e use ferramentas que reforcem esses padrões no seu time (linters, scaffolds, CI/CD, etc).`,
  },
  {
    id: 9,
    slug: 'animacoes-com-vue',
    title: 'Trabalhando com animações no Vue.js',
    image: '/images/animacoes-com-vue.png',
    thumb: '/images/animacoes-com-vue-thumb.png',
    content: `# Trabalhando com animações no Vue.js

Animações são uma excelente maneira de melhorar a experiência do usuário, dando vida à interface e comunicando mudanças de forma mais fluida. O Vue.js oferece suporte nativo a transições e animações com uma API simples e poderosa.

Neste post, vamos ver como aplicar transições em elementos, usar classes personalizadas e integrar bibliotecas externas como GSAP.

---

## Transições com \`<transition>\`

A forma mais comum de aplicar animações no Vue é usando o componente \`<transition>\`.

\`\`\`vue
<template>
  <button @click="show = !show">Toggle</button>

  <transition name="fade">
    <p v-if="show">Este é um parágrafo animado.</p>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
\`\`\`

---

## Nomes de classe padrão

Vue aplica classes específicas durante o ciclo de vida da transição:

- \`*-enter-from\`
- \`*-enter-active\`
- \`*-enter-to\`
- \`*-leave-from\`
- \`*-leave-active\`
- \`*-leave-to\`

---

## Transições com componentes

Você pode aplicar transições ao trocar componentes com \`<component :is="...">\`.

\`\`\`vue
<transition name="fade" mode="out-in">
  <component :is="view" />
</transition>
\`\`\`

---

## Animações com JavaScript (hooks)

Vue permite usar funções para controlar animações mais complexas:

\`\`\`vue
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @leave="leave"
>
  <div v-if="show">Animado via JS</div>
</transition>
\`\`\`

\`\`\`ts
function beforeEnter(el) {
  el.style.opacity = 0
}
function enter(el, done) {
  gsap.to(el, { opacity: 1, duration: 0.5, onComplete: done })
}
function leave(el, done) {
  gsap.to(el, { opacity: 0, duration: 0.3, onComplete: done })
}
\`\`\`

---

## Integrando GSAP

Para animações complexas, GSAP é uma ótima opção:

\`\`\`bash
npm install gsap
\`\`\`

\`\`\`vue
<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.from('.box', { y: -100, opacity: 0, duration: 1 })
})
</script>

<template>
  <div class="box bg-blue-500 text-white p-4 rounded">
    Animado com GSAP
  </div>
</template>
\`\`\`

---

## Dicas práticas

- Use \`mode="out-in"\` ao trocar componentes
- Prefira \`transition-group\` para listas com animação
- Sempre defina \`key\` em elementos com \`v-for\`
- Combine Tailwind com classes animadas (ex: \`transition-all\`, \`duration-500\`)
- Evite animações que prejudiquem a acessibilidade (respeite \`prefers-reduced-motion\`)

---

## Conclusão

O Vue.js fornece uma base sólida para animações simples e elegantes. Combinando o poder do componente \`<transition>\`, ganchos de ciclo de vida e bibliotecas externas como GSAP, você pode criar experiências interativas sem sacrificar a performance ou a manutenção do código.

Use animações com propósito, sempre pensando na clareza da interface e na experiência do usuário.`,
  },
  {
    id: 10,
    slug: 'consumindo-api-com-axios-vue',
    title: 'Consumindo APIs REST com Axios no Vue',
    image: '/images/consumindo-api-com-axios-vue.png',
    thumb: '/images/consumindo-api-com-axios-vue-thumb.png',
    content: `# Consumindo APIs REST com Axios no Vue

Grande parte das aplicações web modernas precisa se comunicar com APIs externas para obter e enviar dados. No ecossistema Vue, uma das formas mais populares de fazer isso é utilizando o Axios, uma biblioteca HTTP baseada em Promises.

Neste post, vamos aprender como configurar o Axios em um projeto Vue 3 com Composition API, como organizar chamadas em serviços e como tratar erros de forma elegante.

---

## Instalando o Axios

\`\`\`bash
npm install axios
\`\`\`

---

## Criando uma instância do Axios

Você pode configurar uma instância personalizada com baseURL, headers e interceptors:

### \`src/services/api.ts\`

\`\`\`ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default api
\`\`\`

---

## Fazendo uma requisição no componente

### Exemplo básico:

\`\`\`ts
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const posts = ref([])

onMounted(async () => {
  try {
    const response = await api.get('/posts')
    posts.value = response.data
  } catch (error) {
    console.error('Erro ao carregar posts:', error)
  }
})
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>
\`\`\`

---

## Separando lógica em serviços

Organize suas chamadas em arquivos separados para manter os componentes limpos:

### \`src/services/postService.ts\`

\`\`\`ts
import api from './api'

export async function fetchPosts() {
  const response = await api.get('/posts')
  return response.data
}

export async function fetchPost(id: number) {
  const response = await api.get(\`/posts/\${id}\`)
  return response.data
}
\`\`\`

### Componente usando o serviço:

\`\`\`ts
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchPosts } from '@/services/postService'

const posts = ref([])

onMounted(async () => {
  posts.value = await fetchPosts()
})
</script>
\`\`\`

---

## Lidando com erros

Uma abordagem prática é centralizar o tratamento com interceptors:

\`\`\`ts
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // redirecionar para login, por exemplo
    }
    return Promise.reject(error)
  }
)
\`\`\`

Ou aplicar try/catch com mensagens amigáveis ao usuário:

\`\`\`ts
try {
  const data = await fetchPosts()
} catch (err) {
  toast.error('Erro ao carregar dados. Tente novamente.')
}
\`\`\`

---

## Dicas úteis

- Sempre tipar as respostas com interfaces TypeScript
- Prefira \`async/await\` no lugar de \`.then()\`
- Configure \`baseURL\` no arquivo de ambiente para facilitar deploys
- Utilize composables como \`useFetchPosts()\` para lógica reativa

---

## Conclusão

Consumir APIs REST com Axios no Vue 3 é direto, mas exige uma boa organização para manter o código limpo e confiável. Separar serviços, centralizar erros e usar a Composition API trazem clareza e reaproveitamento para suas integrações.

Use essas práticas como base para construir interfaces mais escaláveis e robustas.`,
  },
  {
    id: 11,
    slug: 'vue-cli-ou-vite',
    title: 'Vue CLI ou Vite? Qual usar em 2025',
    image: '/images/vue-cli-ou-vite.png',
    thumb: '/images/vue-cli-ou-vite-thumb.png',
    content: `# Vue CLI ou Vite? Qual usar em 2025

Ao iniciar um novo projeto Vue, uma das decisões mais importantes é escolher a ferramenta de build e scaffolding ideal. Durante muitos anos, o Vue CLI foi o padrão, mas com a chegada do Vite, o cenário mudou completamente.

Neste post, vamos comparar o Vue CLI e o Vite e entender por que a comunidade está migrando para o Vite como padrão em 2025.

---

## O que é Vue CLI?

O Vue CLI é a ferramenta oficial de scaffolding criada para Vue 2 e mantida para Vue 3. Ele utiliza Webpack como bundler, oferece uma interface gráfica opcional (UI), e suporta configuração via arquivos dedicados ou com zero config.

### Recursos do Vue CLI:

- Baseado em Webpack
- Suporte a plugins via GUI
- Configuração extensível com \`vue.config.js\`
- Projetos com presets e scaffolds completos

---

## O que é Vite?

O Vite é uma ferramenta de build moderna criada por Evan You (o mesmo criador do Vue). Ele utiliza ES modules nativos para desenvolvimento ultrarrápido e Rollup para builds de produção.

### Recursos do Vite:

- Server de desenvolvimento instantâneo
- Build mais rápido com Rollup
- Suporte nativo a Vue 3, React, Svelte e outros
- Extensível com plugins via \`vite.config.ts\`
- Integração mais simples com Tailwind, TypeScript e Composition API

---

## Principais diferenças

| Recurso              | Vue CLI                   | Vite                            |
|----------------------|---------------------------|---------------------------------|
| Bundler              | Webpack                   | Rollup (dev: ESModules)         |
| Velocidade dev       | Mais lento (Webpack)      | Instantâneo (ESM nativo)        |
| Configuração         | Mais complexa             | Minimalista                     |
| Vue 3 + \`<script setup>\` | Compatível, mas menos fluido  | Suporte nativo                  |
| HMR (Hot Reload)     | Lento                     | Extremamente rápido             |
| Plugins              | Ecossistema antigo        | Comunidade crescente            |

---

## Quando usar Vue CLI

- Projetos legados com Webpack
- Equipes que dependem da GUI do Vue CLI
- Requisitos específicos com loaders complexos

---

## Quando usar Vite

- Projetos Vue 3 modernos
- Performance de build e HMR é prioridade
- Uso com Tailwind CSS, TypeScript, Pinia e \`<script setup>\`
- Deseja simplicidade e velocidade no setup

---

## Criando um projeto com Vite

\`\`\`bash
npm create vite@latest my-app --template vue-ts
cd my-app
npm install
npm run dev
\`\`\`

---

## Criando um projeto com Vue CLI

\`\`\`bash
npm install -g @vue/cli
vue create my-app
\`\`\`

---

## Conclusão

O Vue CLI ainda é funcional, mas o Vite já é considerado o padrão de facto para novos projetos Vue em 2025. Ele oferece uma experiência de desenvolvimento moderna, rápida e compatível com o futuro da web.

Se você está começando agora, vá de Vite. Se você mantém um projeto legado com Vue 2 ou Webpack, o Vue CLI ainda é uma opção válida — mas considere migrar gradualmente.`,
  },
  {
    id: 12,
    slug: 'testes-unitarios-no-vue',
    title: 'Testes unitários em componentes Vue',
    image: '/images/testes-unitarios-no-vue.png',
    thumb: '/images/testes-unitarios-no-vue-thumb.png',
    content: `# Testes unitários em componentes Vue

Testes unitários são fundamentais para garantir que os componentes da sua aplicação funcionem corretamente em diferentes cenários. No Vue 3, a combinação de [Vue Test Utils](https://test-utils.vuejs.org/) e [Jest](https://jestjs.io/) é uma das mais utilizadas para realizar esses testes.

Neste post, você aprenderá como configurar o ambiente de testes e escrever testes unitários eficazes para componentes Vue.

---

## Por que testar?

- Garante que alterações no código não quebrem funcionalidades existentes
- Facilita refatorações
- Serve como documentação de comportamento
- Ajuda a identificar bugs antes da produção

---

## Instalando as dependências

\`\`\`bash
npm install -D jest @vue/test-utils vue-jest ts-jest @testing-library/jest-dom
\`\`\`

Configure o Jest:

### \`jest.config.js\`

\`\`\`js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'ts', 'vue']
}
\`\`\`

---

## Criando um componente para teste

### \`BaseButton.vue\`

\`\`\`vue
<template>
  <button @click="$emit('click')">
    <slot>Botão</slot>
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>
\`\`\`

---

## Escrevendo o teste

### \`BaseButton.test.ts\`

\`\`\`ts
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/BaseButton.vue'

describe('BaseButton', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Clique aqui' }
    })
    expect(wrapper.text()).toBe('Clique aqui')
  })

  it('emite evento de clique', async () => {
    const wrapper = mount(BaseButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
\`\`\`

---

## Testando props

Se seu componente tiver props, você pode testá-las facilmente:

### \`MyTitle.vue\`

\`\`\`vue
<template>
  <h1 :class="{ 'is-large': large }">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps<{ title: string; large?: boolean }>()
</script>
\`\`\`

### \`MyTitle.test.ts\`

\`\`\`ts
import { mount } from '@vue/test-utils'
import MyTitle from '@/components/MyTitle.vue'

it('aplica classe condicional se "large" for true', () => {
  const wrapper = mount(MyTitle, {
    props: { title: 'Olá', large: true }
  })
  expect(wrapper.classes()).toContain('is-large')
})
\`\`\`

---

## Boas práticas

- Escreva testes claros e de fácil leitura
- Nomeie os testes pelo comportamento esperado
- Evite testar implementação interna (foco no resultado)
- Use \`data-testid\` para facilitar a seleção de elementos
- Combine com testes de integração para cobrir fluxos completos

---

## Conclusão

Testes unitários em Vue não precisam ser complicados. Com Vue Test Utils e Jest, é possível validar componentes com rapidez e confiança. Comece testando os componentes mais reutilizados, como botões e formulários, e expanda para os mais complexos conforme necessário.

Testes são investimentos: quanto antes você começar, mais fácil será manter a saúde do seu projeto Vue.`,
  },
  {
    id: 13,
    slug: 'deploy-vue-netlify',
    title: 'Como fazer deploy do seu app Vue na Netlify',
    image: '/images/deploy-vue-netlify.png',
    thumb: '/images/deploy-vue-netlify-thumb.png',
    content: `# Como fazer deploy do seu app Vue na Netlify

Publicar seu projeto Vue na internet é uma das etapas mais gratificantes do desenvolvimento. A [Netlify](https://www.netlify.com/) é uma plataforma gratuita (com plano generoso) que permite hospedar aplicações front-end com CI/CD integrado ao seu repositório Git.

Neste post, você vai aprender como fazer deploy de um app Vue criado com Vite na Netlify — do zero até produção.

---

## Pré-requisitos

- Projeto Vue criado com Vite
- Conta no GitHub
- Conta gratuita na Netlify

---

## 1. Suba seu projeto para o GitHub

Se ainda não fez isso, inicialize o repositório:

\`\`\`bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-projeto.git
git push -u origin main
\`\`\`

---

## 2. Crie uma conta no Netlify

- Acesse [netlify.com](https://www.netlify.com/)
- Clique em \“Sign up\” e conecte com sua conta GitHub
- Autorize o acesso aos repositórios

---

## 3. Faça o deploy

- Clique em **"Add new site" > "Import an existing project"**
- Selecione o repositório do GitHub
- Configure os seguintes campos:

| Campo             | Valor           |
|------------------|-----------------|
| Build command     | \`npm run build\` |
| Publish directory | \`dist\`         |
| Framework preset  | \`Vite\`         |

- Clique em **Deploy Site**

A Netlify irá:
1. Clonar seu projeto
2. Instalar as dependências
3. Rodar \`npm run build\`
4. Publicar o conteúdo da pasta \`dist\`

---

## 4. Adicione um arquivo \`netlify.toml\` (opcional)

Para configurações mais avançadas, como redirects ou headers personalizados, crie um arquivo na raiz do projeto:

\`\`\`toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

Esse redirect é necessário em SPAs para garantir que todas as rotas redirecionem para o \`index.html\`.

---

## 5. Configurando deploy contínuo

Toda vez que você fizer push no GitHub, a Netlify irá automaticamente:

- Buscar o novo commit
- Rodar o build
- Atualizar o site com as novas mudanças

Você pode acompanhar logs e status de deploy direto pelo painel da Netlify.

---

## 6. Usando domínio personalizado

- Vá até "Site Settings" > "Domain management"
- Clique em "Add custom domain"
- Aponte seu domínio via DNS para o endereço \`your-site.netlify.app\`

---

## Conclusão

A Netlify simplifica o deploy de aplicações Vue com integração contínua e suporte nativo ao Vite. Com poucos cliques, seu app pode estar publicado e atualizado automaticamente a cada commit.

Agora que você publicou seu projeto, compartilhe com o mundo! 🚀`,
  },
  {
    id: 14,
    slug: 'vue-e-tailwind-css',
    title: 'Utilizando Tailwind CSS com Vue.js',
    image: '/images/vue-e-tailwind-css.png',
    thumb: '/images/vue-e-tailwind-css-thumb.png',
    content: `# Vue.js + Tailwind CSS: Interface bonita e responsiva

Criar interfaces bonitas e responsivas com Vue.js pode ser simples e rápido — especialmente quando se usa o [Tailwind CSS](https://tailwindcss.com/). Essa biblioteca de utilitários CSS permite construir layouts com agilidade, sem sair do HTML, e com total controle sobre responsividade, tema e animações.

Neste post, você aprenderá a configurar o Tailwind em um projeto Vue 3 e verá exemplos práticos para criar UIs modernas, bonitas e escaláveis.

---

## 1. Instalando o Tailwind CSS

Se você usa Vite (recomendado com Vue 3), rode:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

---

## 2. Configurando o Tailwind

No arquivo \`tailwind.config.js\`, defina onde o Tailwind deve buscar classes:

\`\`\`js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
}
\`\`\`

No arquivo CSS principal (ex: \`src/style.css\`):

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

Importe o CSS no seu \`main.ts\`:

\`\`\`ts
import './style.css'
\`\`\`

---

## 3. Criando layout responsivo com Vue + Tailwind

### Exemplo de Card de Produto

\`\`\`vue
<template>
  <div class="max-w-sm bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition">
    <img src="https://source.unsplash.com/random/400x200" class="w-full" />
    <div class="p-4">
      <h2 class="text-xl font-bold text-gray-800">Produto</h2>
      <p class="text-gray-600 text-sm mt-1">Descrição curta do produto.</p>
      <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Comprar
      </button>
    </div>
  </div>
</template>
\`\`\`

---

## 4. Responsividade com utilitários

Tailwind usa prefixos como \`sm:\`, \`md:\`, \`lg:\`, \`xl:\` para estilos responsivos:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- cards aqui -->
</div>
\`\`\`

Isso define:
- 1 coluna no mobile
- 2 colunas em tablets
- 4 colunas em desktops

---

## 5. Dark mode (modo escuro)

Ative o modo escuro no \`tailwind.config.js\`:

\`\`\`js
module.exports = {
  darkMode: 'class',
  // ...
}
\`\`\`

Aplique tema escuro com uma classe:

\`\`\`html
<body class="dark">
  <div class="bg-white dark:bg-gray-900 text-black dark:text-white">
    Conteúdo adaptável
  </div>
</body>
\`\`\`

---

## 6. Animações com Tailwind

\`\`\`html
<button class="transition duration-300 transform hover:scale-105">
  Hover animado
</button>
\`\`\`

---

## 7. Dicas práticas

- Use \`@apply\` para agrupar estilos em CSS modules ou componentes
- Combine Tailwind com Heroicons ou Lucide para ícones
- Mantenha consistência de padding, espaçamento e cores com tokens do Tailwind
- Explore o plugin \`@tailwindcss/typography\` para melhorar estilos de markdown

---

## Conclusão

Integrar Vue.js com Tailwind CSS é uma das combinações mais produtivas para criar interfaces modernas, bonitas e responsivas. Com pouco esforço, você consegue montar layouts que funcionam bem em qualquer dispositivo, mantendo seu CSS enxuto e sem repetir código.

Comece criando seus próprios componentes estilizados e experimente escalar para sistemas de design completos com base no Tailwind.`,
  },
  {
    id: 15,
    slug: 'autenticacao-no-vue-js-com-token-jwt',
    title: 'Autenticação no Vue.js com Token JWT',
    image: '/images/autenticacao-no-vue-js-com-token-jwt.png',
    thumb: '/images/autenticacao-no-vue-js-com-token-jwt-thumb.png',
    content: `# Autenticação no Vue.js com Token JWT

Autenticação é uma parte essencial de qualquer aplicação que exige login. Uma das abordagens mais comuns é o uso de **JWT (JSON Web Token)**, que permite autenticação baseada em token de forma segura e sem necessidade de sessão no servidor.

Neste post, você vai aprender como implementar autenticação com JWT em um projeto Vue.js, utilizando Vue 3, Composition API, e Axios.

---

## O que é JWT?

JWT (JSON Web Token) é um formato compacto e seguro para representar informações entre duas partes. Ele é amplamente usado para autenticação porque pode ser armazenado no lado do cliente e validado no servidor sem armazenar estado.

---

## 1. Fluxo básico de autenticação com JWT

1. Usuário envia login e senha para a API
2. A API retorna um token JWT válido
3. O cliente armazena esse token (em \`localStorage\` ou \`sessionStorage\`)
4. Em cada requisição subsequente, o token é enviado no header Authorization
5. O backend valida o token e permite ou nega o acesso

---

## 2. Tela de login no Vue

### \`LoginView.vue\`

\`\`\`vue
<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" placeholder="Email" class="input" />
    <input v-model="password" type="password" placeholder="Senha" class="input" />
    <button class="btn">Entrar</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import api from '@/services/api'

const email = ref('')
const password = ref('')

async function handleLogin() {
  try {
    const response = await api.post('/auth/login', { email: email.value, password: password.value })
    const token = response.data.token
    localStorage.setItem('token', token)
    // redirecionar
  } catch (error) {
    console.error('Erro ao autenticar:', error)
  }
}
</script>
\`\`\`

---

## 3. Interceptor de requisições com token

### \`src/services/api.ts\`

\`\`\`ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sua-api.com'
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`
  }
  return config
})

export default api
\`\`\`

---

## 4. Protegendo rotas com Navigation Guards

### \`src/router/index.ts\`

\`\`\`ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
\`\`\`

---

## 5. Fazendo logout

\`\`\`ts
function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
\`\`\`

---

## Boas práticas

- Nunca armazene tokens em \`cookies\` sem \`HttpOnly\`
- Prefira \`localStorage\` para SPAs sem backend próprio
- Use HTTPS sempre que for trafegar tokens
- Expire o token no backend e trate status 401 para redirecionar
- Evite guardar informações sensíveis no payload do JWT

---

## Conclusão

Autenticação com JWT no Vue é simples de implementar, segura e funciona bem para aplicações SPA modernas. Com Vue 3 e Composition API, o gerenciamento de token e a proteção de rotas se tornam organizados e previsíveis.

Agora que você configurou login e autenticação, é hora de proteger as funcionalidades críticas do seu app com base no token!`,
  },
]
