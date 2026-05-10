# Landing Page - Gerenciamento de Redes Sociais

Landing page moderna criada com Next.js 15, TypeScript e Tailwind CSS, inspirada na mLabs.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **React Icons** - Biblioteca de ícones

## 📦 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página inicial
│   └── globals.css     # Estilos globais
├── components/
│   ├── Navbar.tsx      # Barra de navegação
│   ├── Hero.tsx        # Seção hero principal
│   ├── Features.tsx    # Seção de funcionalidades
│   ├── Testimonials.tsx # Depoimentos de clientes
│   ├── Blog.tsx        # Últimas postagens do blog
│   └── Footer.tsx      # Rodapé
├── public/             # Arquivos estáticos
└── tailwind.config.ts  # Configuração do Tailwind

```

## 🎨 Seções da Landing Page

1. **Hero** - Título principal com CTA e ícones de redes sociais
2. **Funcionalidades** - 6 cards com recursos principais:
   - Agendamento de posts
   - IA para criação de conteúdo
   - Relatórios e dashboards
   - Análise de concorrentes
   - App mobile
   - Suporte humanizado
3. **Depoimentos** - Feedback de clientes
4. **Blog** - Últimas publicações
5. **Footer** - Links e informações de contato

## 🏃 Como Executar

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

O projeto estará disponível em `http://localhost:3000`

## 🎨 Personalização

As cores principais podem ser ajustadas em [tailwind.config.ts](tailwind.config.ts):

```ts
colors: {
  primary: {
    500: '#f97316',  // Laranja principal
    600: '#ea580c',  // Laranja escuro
    // ...
  },
}
```

## 📝 Notas

- Projeto configurado com ESLint para qualidade de código
- Responsivo para mobile, tablet e desktop
- Utiliza gradientes modernos e animações sutis
- Pronto para adicionar conteúdo real e imagens

---

Desenvolvido com ❤️ usando Next.js
