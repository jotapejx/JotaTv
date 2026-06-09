# 🚀 Quick Start - JotaTv GitHub Pages

Bem-vindo! Este é o site JotaTv pronto para GitHub Pages. Siga estes passos para começar:

## ⚡ 5 Passos Rápidos

### 1️⃣ Preparar os Arquivos

Execute estes comandos na raiz do projeto:

```bash
# Renomear arquivos de configuração
mv vite.config.github.ts vite.config.ts
mv package.github.json package.json
mv client/index.github.html client/index.html
mv client/src/App.github.tsx client/src/App.tsx
mv client/src/pages/Hub.github.tsx client/src/pages/Hub.tsx
mv client/src/pages/Download.github.tsx client/src/pages/Download.tsx
mv .gitignore.github .gitignore
```

### 2️⃣ Instalar Dependências

```bash
pnpm install
```

### 3️⃣ Testar Localmente

```bash
# Desenvolvimento
pnpm run dev

# Acesse http://localhost:5173
```

### 4️⃣ Build

```bash
pnpm run build
```

### 5️⃣ Deploy

```bash
git add .
git commit -m "Deploy JotaTv para GitHub Pages"
git push origin main
```

Depois, configure GitHub Pages em **Settings → Pages** e selecione:
- Branch: `main`
- Folder: `/ (root)`

## 📚 Documentação Completa

Para um guia mais detalhado, veja:
- **[GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)** - Guia completo de setup
- **[MIGRATION_CHECKLIST.md](./MIGRATION_CHECKLIST.md)** - Checklist de verificação
- **[README_GITHUB_PAGES.md](./README_GITHUB_PAGES.md)** - Visão geral do projeto

## ⚙️ Configuração do Base Path

Se seu repositório não é `user.github.io`, edite `vite.config.ts`:

```typescript
// Para repositório customizado (ex: jotatv-site)
const base = process.env.VITE_BASE_PATH || "/jotatv-site/";

// Para user.github.io
const base = process.env.VITE_BASE_PATH || "/";
```

## ✅ Verificação Rápida

- [ ] Arquivos renomeados
- [ ] `pnpm install` executado
- [ ] `pnpm run dev` funciona
- [ ] `pnpm run build` completa
- [ ] GitHub Pages configurado
- [ ] Site está online

## 🆘 Problemas?

1. **Rotas não funcionam**: Verifique o `base path` em `vite.config.ts`
2. **Estilos não carregam**: Limpe o cache (Ctrl+Shift+Delete)
3. **Imagens não aparecem**: Verifique conexão de internet

Para mais ajuda, veja [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

---

**Pronto? Comece agora! 🎉**
