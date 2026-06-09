# 📋 Sumário do Projeto - JotaTv GitHub Pages

## 📌 O que é este projeto?

Este é o site **JotaTv** convertido para ser hospedado no **GitHub Pages** de forma totalmente independente, sem dependências do Manus.

## 🎯 Objetivo

Fornecer uma estrutura pronta para copiar e colar em um repositório GitHub, permitindo que você hospede o site JotaTv gratuitamente no GitHub Pages.

## 📦 O que está incluído?

### ✅ Código-fonte
- React 19 + Vite (framework moderno e rápido)
- Tailwind CSS 4 (estilização)
- shadcn/ui (componentes prontos)
- wouter (roteamento SPA)
- TypeScript (tipagem segura)

### ✅ Páginas
1. **Hub (Landing Page)** - Página inicial com navegação
2. **Planos** - Informações sobre planos e preços
3. **Download** - Links para download dos aplicativos

### ✅ Configurações GitHub Pages
- `vite.config.github.ts` - Configuração Vite otimizada
- `package.github.json` - Dependências limpas (sem Manus)
- `client/index.github.html` - HTML com suporte a SPA routing
- `client/public/404.html` - Arquivo crítico para SPA routing
- `client/public/.nojekyll` - Desabilita Jekyll no GitHub Pages

### ✅ Rotas com Base Path
- `client/src/lib/routes.ts` - Configuração centralizada de rotas
- `client/src/hooks/useBasePath.ts` - Hook para base path
- `client/src/App.github.tsx` - App com rotas corretas
- Páginas atualizadas com rotas corretas

### ✅ Documentação Completa
- **QUICK_START.md** - Início rápido (5 passos)
- **GITHUB_PAGES_SETUP.md** - Guia detalhado
- **MIGRATION_CHECKLIST.md** - Checklist de verificação
- **README_GITHUB_PAGES.md** - Visão geral do projeto
- **deploy.sh** - Script de deploy automatizado

## 🔄 Arquivos que Precisam Ser Renomeados

Antes de usar, renomeie estes arquivos:

```bash
vite.config.github.ts      → vite.config.ts
package.github.json        → package.json
client/index.github.html   → client/index.html
client/src/App.github.tsx  → client/src/App.tsx
client/src/pages/Hub.github.tsx      → client/src/pages/Hub.tsx
client/src/pages/Download.github.tsx → client/src/pages/Download.tsx
.gitignore.github          → .gitignore
```

## 🚀 Como Usar

### Passo 1: Preparar
```bash
# Renomear arquivos (veja acima)
# Ou use o script:
bash -c '
mv vite.config.github.ts vite.config.ts
mv package.github.json package.json
mv client/index.github.html client/index.html
mv client/src/App.github.tsx client/src/App.tsx
mv client/src/pages/Hub.github.tsx client/src/pages/Hub.tsx
mv client/src/pages/Download.github.tsx client/src/pages/Download.tsx
mv .gitignore.github .gitignore
'
```

### Passo 2: Instalar
```bash
pnpm install
```

### Passo 3: Testar
```bash
pnpm run dev
# Acesse http://localhost:5173
```

### Passo 4: Build
```bash
pnpm run build
```

### Passo 5: Deploy
```bash
git add .
git commit -m "Deploy JotaTv para GitHub Pages"
git push origin main
```

### Passo 6: Configurar GitHub Pages
1. Vá para Settings → Pages
2. Selecione Branch: `main`
3. Selecione Folder: `/ (root)`
4. Clique em Save

## ⚙️ Configuração Importante

### Base Path

Se seu repositório não é `user.github.io`, edite `vite.config.ts`:

```typescript
// Para repositório customizado
const base = process.env.VITE_BASE_PATH || "/jotatv-site/";

// Para user.github.io
const base = process.env.VITE_BASE_PATH || "/";
```

## 📊 Estrutura de Arquivos

```
.
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Hub.github.tsx          ← Renomear para Hub.tsx
│   │   │   ├── Home.tsx                ← Página de planos
│   │   │   └── Download.github.tsx     ← Renomear para Download.tsx
│   │   ├── lib/
│   │   │   └── routes.ts               ← Rotas com base path
│   │   ├── hooks/
│   │   │   └── useBasePath.ts          ← Hook para base path
│   │   ├── App.github.tsx              ← Renomear para App.tsx
│   │   └── components/                 ← Componentes UI
│   ├── index.github.html               ← Renomear para index.html
│   └── public/
│       ├── 404.html                    ← Crítico para SPA routing
│       └── .nojekyll                   ← Desabilita Jekyll
├── vite.config.github.ts               ← Renomear para vite.config.ts
├── package.github.json                 ← Renomear para package.json
├── deploy.sh                           ← Script de deploy
├── QUICK_START.md                      ← Início rápido
├── GITHUB_PAGES_SETUP.md               ← Guia detalhado
├── MIGRATION_CHECKLIST.md              ← Checklist
└── README_GITHUB_PAGES.md              ← Visão geral
```

## 🔗 Links Importantes

- **Documentação React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **GitHub Pages**: https://docs.github.com/en/pages
- **shadcn/ui**: https://ui.shadcn.com/

## 📱 Funcionalidades

- ✅ Roteamento SPA com wouter
- ✅ Suporte a base path customizado
- ✅ Otimizado para GitHub Pages
- ✅ Totalmente estático (sem backend)
- ✅ Imagens de CDN externo
- ✅ Links WhatsApp funcionais
- ✅ Design responsivo
- ✅ Componentes UI prontos

## 🆘 Troubleshooting

### Rotas não funcionam
- Verifique o `base path` em `vite.config.ts`
- Certifique-se de que `dist/404.html` existe

### Estilos não carregam
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique a conexão de internet

### Imagens não aparecem
- Verifique a conexão de internet
- As imagens são de CDN externo

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)
2. Consulte [MIGRATION_CHECKLIST.md](./MIGRATION_CHECKLIST.md)
3. Verifique [QUICK_START.md](./QUICK_START.md)

## 📄 Licença

MIT

---

**Pronto para começar? Veja [QUICK_START.md](./QUICK_START.md)!** 🚀
