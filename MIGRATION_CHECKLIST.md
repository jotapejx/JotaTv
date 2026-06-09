# ✅ Checklist de Migração para GitHub Pages

Use este checklist para garantir que tudo está configurado corretamente para GitHub Pages.

## 📋 Preparação

- [ ] Repositório GitHub criado
- [ ] Repositório clonado localmente
- [ ] Node.js 18+ instalado
- [ ] pnpm instalado (`npm install -g pnpm`)

## 🔄 Renomear Arquivos de Configuração

```bash
# Execute estes comandos na raiz do projeto
mv vite.config.github.ts vite.config.ts
mv package.github.json package.json
mv client/index.github.html client/index.html
mv client/src/App.github.tsx client/src/App.tsx
mv client/src/pages/Hub.github.tsx client/src/pages/Hub.tsx
mv client/src/pages/Download.github.tsx client/src/pages/Download.tsx
mv .gitignore.github .gitignore
```

- [ ] `vite.config.ts` renomeado
- [ ] `package.json` renomeado
- [ ] `client/index.html` renomeado
- [ ] `client/src/App.tsx` renomeado
- [ ] `client/src/pages/Hub.tsx` renomeado
- [ ] `client/src/pages/Download.tsx` renomeado
- [ ] `.gitignore` renomeado

## ⚙️ Configuração do Base Path

Edite `vite.config.ts` e verifique o `base path`:

```typescript
// Se seu repositório é user.github.io
const base = process.env.VITE_BASE_PATH || "/";

// Se seu repositório tem um nome customizado (ex: jotatv-site)
const base = process.env.VITE_BASE_PATH || "/jotatv-site/";
```

- [ ] `vite.config.ts` - `base` configurado corretamente
- [ ] Tipo de repositório identificado (user.github.io ou customizado)

## 📦 Instalar Dependências

```bash
pnpm install
```

- [ ] Dependências instaladas sem erros
- [ ] `node_modules/` criado
- [ ] `pnpm-lock.yaml` atualizado

## 🧪 Testar Localmente

```bash
# Desenvolvimento
pnpm run dev

# Build
pnpm run build

# Visualizar build
pnpm run preview
```

- [ ] `pnpm run dev` funciona (acesse http://localhost:5173)
- [ ] Navegação funciona localmente
- [ ] Links internos funcionam
- [ ] Links WhatsApp funcionam
- [ ] `pnpm run build` completa sem erros
- [ ] Pasta `dist/` criada
- [ ] `dist/404.html` existe
- [ ] `dist/.nojekyll` existe
- [ ] `pnpm run preview` funciona (acesse http://localhost:4173)

## 🔗 Verificar Rotas

Teste as seguintes rotas localmente:

- [ ] `/` - Página inicial (Hub)
- [ ] `/planos` - Página de planos
- [ ] `/download` - Página de download
- [ ] `/inexistente` - Deve mostrar 404

## 📤 Preparar para GitHub

```bash
# Adicionar todos os arquivos
git add .

# Verificar status
git status

# Commit
git commit -m "Preparar para GitHub Pages"

# Push
git push origin main
```

- [ ] `git add .` executado
- [ ] `git status` mostra arquivos prontos
- [ ] `git commit` feito
- [ ] `git push` executado com sucesso

## 🌐 Configurar GitHub Pages

1. Vá para seu repositório no GitHub
2. Clique em **Settings**
3. Na barra lateral, clique em **Pages**

- [ ] Acessei Settings → Pages
- [ ] **Source** está configurado para **Deploy from a branch**
- [ ] **Branch** está configurado para `main` (ou `master`)
- [ ] **Folder** está configurado para `/ (root)`
- [ ] Cliquei em **Save**

## ⏳ Aguardar Deploy

GitHub Pages leva alguns minutos para fazer o deploy.

- [ ] Aguardei 2-3 minutos
- [ ] Verifiquei o status em Settings → Pages (deve mostrar "Your site is live")

## ✅ Verificar Deploy

Acesse seu site:

- [ ] Site está acessível em `https://seu-usuario.github.io/jotatv-site`
  (ou `https://seu-usuario.github.io` se for user.github.io)
- [ ] Página inicial carrega corretamente
- [ ] Estilos (CSS) estão sendo carregados
- [ ] Imagens estão visíveis
- [ ] Navegação para `/planos` funciona
- [ ] Navegação para `/download` funciona
- [ ] Botão WhatsApp funciona
- [ ] Botão de voltar funciona

## 🔄 Atualizar o Site

Para futuras atualizações:

```bash
# Fazer alterações no código
# ...

# Commit e push
git add .
git commit -m "Descrição das alterações"
git push origin main

# Aguardar 2-3 minutos para o deploy
```

- [ ] Entendo o processo de atualização
- [ ] Sei como fazer commit e push
- [ ] Sei que leva 2-3 minutos para atualizar

## 🎉 Conclusão

- [ ] Todos os itens acima foram verificados
- [ ] Site está funcionando corretamente
- [ ] Pronto para usar!

## 🆘 Se Algo Não Funcionar

1. **Rotas não funcionam**: Verifique o `base path` em `vite.config.ts`
2. **Estilos não carregam**: Limpe o cache do navegador
3. **404 ao navegar**: Verifique se `dist/404.html` existe
4. **Imagens não aparecem**: Verifique conexão de internet

Para mais ajuda, veja [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

---

**Parabéns! Seu site JotaTv está no GitHub Pages! 🎉**
