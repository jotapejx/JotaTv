# 🎬 JotaTv - Site para GitHub Pages

Este é o site do JotaTv convertido para ser hospedado no **GitHub Pages** de forma totalmente independente.

## 🚀 Quick Start

### 1. Clonar/Preparar o repositório

```bash
# Se você já tem um repositório
cd seu-repositorio

# Se está começando do zero
git clone https://github.com/seu-usuario/jotatv-site.git
cd jotatv-site
```

### 2. Preparar os arquivos

```bash
# Renomear arquivos de configuração para GitHub Pages
mv vite.config.github.ts vite.config.ts
mv package.github.json package.json
mv client/index.github.html client/index.html
mv client/src/App.github.tsx client/src/App.tsx
mv client/src/pages/Hub.github.tsx client/src/pages/Hub.tsx
mv client/src/pages/Download.github.tsx client/src/pages/Download.tsx
mv .gitignore.github .gitignore
```

### 3. Instalar e testar

```bash
# Instalar dependências
pnpm install

# Testar localmente
pnpm run dev

# Build final
pnpm run build

# Visualizar o build
pnpm run preview
```

### 4. Fazer deploy

```bash
# Adicionar arquivos
git add .

# Commit
git commit -m "Deploy JotaTv para GitHub Pages"

# Push
git push origin main
```

### 5. Configurar GitHub Pages

1. Vá para **Settings** → **Pages**
2. Selecione **Branch**: `main`
3. Selecione **Folder**: `/ (root)`
4. Clique em **Save**

Seu site estará disponível em: `https://seu-usuario.github.io/jotatv-site`

## 📁 Estrutura do Projeto

```
.
├── client/                          # Código React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Hub.github.tsx      # Landing page (renomear para Hub.tsx)
│   │   │   ├── Home.tsx            # Página de planos
│   │   │   └── Download.github.tsx # Página de download (renomear para Download.tsx)
│   │   ├── App.github.tsx          # App principal (renomear para App.tsx)
│   │   ├── lib/
│   │   │   └── routes.ts           # Configuração de rotas com base path
│   │   └── hooks/
│   │       └── useBasePath.ts      # Hook para base path
│   ├── index.github.html           # HTML principal (renomear para index.html)
│   └── public/
│       ├── 404.html                # Para SPA routing
│       └── .nojekyll              # Desabilita Jekyll
├── vite.config.github.ts           # Config Vite (renomear para vite.config.ts)
├── package.github.json             # Dependências (renomear para package.json)
├── deploy.sh                        # Script de deploy
├── GITHUB_PAGES_SETUP.md           # Guia detalhado
└── README_GITHUB_PAGES.md          # Este arquivo
```

## 🔧 Configurações Importantes

### Base Path

Se seu repositório não é `user.github.io`, você precisa configurar o base path em `vite.config.ts`:

```typescript
// Para repositório com nome customizado
const base = process.env.VITE_BASE_PATH || "/jotatv-site/";

// Para user.github.io
const base = process.env.VITE_BASE_PATH || "/";
```

### Rotas Internas

As rotas internas são gerenciadas automaticamente via `client/src/lib/routes.ts`:

```typescript
export const routes = {
  home: `${cleanBase}/`,
  planos: `${cleanBase}/planos`,
  download: `${cleanBase}/download`,
} as const;
```

## ✨ Recursos

- ✅ React 19 + Vite
- ✅ Tailwind CSS 4
- ✅ shadcn/ui components
- ✅ Roteamento com wouter
- ✅ Totalmente estático (sem backend)
- ✅ Otimizado para GitHub Pages
- ✅ SPA routing com 404.html
- ✅ Suporte a base path customizado

## 📱 Páginas

1. **Hub (Landing Page)** - Página inicial com navegação
2. **Planos** - Informações sobre planos e preços
3. **Download** - Links para download dos aplicativos

## 🔗 Links Externos

- WhatsApp: +55 (92) 98130-1005
- Imagens hospedadas em CDN externo

## 🐛 Troubleshooting

### Rotas não funcionam após deploy

Verifique:
1. O `base path` em `vite.config.ts`
2. Se o arquivo `dist/404.html` existe
3. GitHub Pages está habilitado em Settings

### Estilos não carregam

Limpe o cache do navegador: `Ctrl+Shift+Delete`

### Imagens não aparecem

Verifique sua conexão de internet (imagens são de CDN externo)

## 📚 Documentação Completa

Para um guia mais detalhado, veja [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

## 🎯 Próximos Passos

1. Customize o conteúdo em `client/src/pages/`
2. Atualize as imagens e links conforme necessário
3. Teste tudo localmente antes de fazer deploy
4. Configure um domínio customizado (opcional)

## 📄 Licença

MIT

---

**Dúvidas?** Consulte [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) para um guia completo.
