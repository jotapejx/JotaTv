# 🚀 Guia de Setup - JotaTv no GitHub Pages

Este guia explica como configurar e fazer deploy do site JotaTv no GitHub Pages.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (ou npm/yarn)
- Uma conta GitHub
- Um repositório GitHub criado

## 🎯 Passo 1: Preparar o Repositório

### Opção A: Usar um repositório existente

Se você já tem um repositório, clone-o:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### Opção B: Criar um novo repositório

1. Vá para [github.com/new](https://github.com/new)
2. Crie um repositório chamado `jotatv-site` (ou outro nome de sua escolha)
3. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/jotatv-site.git
cd jotatv-site
```

## 📦 Passo 2: Copiar os Arquivos do Projeto

Copie todos os arquivos do projeto JotaTv para o repositório:

```bash
# Copie os arquivos do projeto para o repositório
cp -r /caminho/do/projeto/* .
```

## ⚙️ Passo 3: Configurar o Projeto

### Renomear arquivos de configuração

O projeto vem com arquivos específicos para GitHub Pages. Renomeie-os:

```bash
# Configuração do Vite
mv vite.config.github.ts vite.config.ts

# Package.json
mv package.github.json package.json

# HTML principal
mv client/index.github.html client/index.html

# Páginas do React
mv client/src/App.github.tsx client/src/App.tsx
mv client/src/pages/Hub.github.tsx client/src/pages/Hub.tsx
mv client/src/pages/Download.github.tsx client/src/pages/Download.tsx

# .gitignore
mv .gitignore.github .gitignore
```

### Instalar dependências

```bash
pnpm install
```

## 🔧 Passo 4: Configurar Base Path (Opcional)

Se você está usando um repositório com um nome específico (não `user.github.io`), você precisa configurar o `base path`.

### Opção A: Repositório com nome customizado

Se seu repositório é `https://github.com/seu-usuario/jotatv-site`:

```bash
# No vite.config.ts, altere:
const base = process.env.VITE_BASE_PATH || "/jotatv-site/";
```

### Opção B: GitHub Pages com domínio customizado

Se você tem um domínio customizado, o base path é `/`:

```bash
# No vite.config.ts, use:
const base = process.env.VITE_BASE_PATH || "/";
```

## 🏗️ Passo 5: Build Local (Teste)

Antes de fazer deploy, teste o build localmente:

```bash
# Compilar o projeto
pnpm run build

# Visualizar o resultado
pnpm run preview
```

Acesse `http://localhost:4173` para visualizar o site.

## 🚀 Passo 6: Configurar GitHub Pages

1. Vá para seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. Na barra lateral, clique em **Pages**
4. Em "Source", selecione:
   - **Branch**: `main` (ou `master`, dependendo do seu repositório)
   - **Folder**: `/ (root)`
5. Clique em **Save**

GitHub Pages agora está configurado!

## 📤 Passo 7: Fazer Deploy

### Opção A: Usar o script de deploy (Recomendado)

```bash
# Se o repositório é user.github.io (raiz)
./deploy.sh

# Se o repositório tem um nome customizado
./deploy.sh jotatv-site /jotatv-site
```

### Opção B: Deploy manual

```bash
# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Deploy JotaTv para GitHub Pages"

# Fazer push
git push origin main
```

## ✅ Verificar o Deploy

1. Vá para `https://seu-usuario.github.io` (se usando `user.github.io`)
   ou
   `https://seu-usuario.github.io/jotatv-site` (se usando repositório com nome)

2. Você deve ver a página inicial do JotaTv

3. Teste a navegação:
   - Clique em "Planos e Informações"
   - Clique em "Download dos Apps"
   - Clique em "Chamar no WhatsApp"

## 🔄 Atualizar o Site

Sempre que você fizer alterações no código:

```bash
# Fazer commit das alterações
git add .
git commit -m "Descrição das alterações"

# Fazer push
git push origin main

# GitHub Pages atualizará automaticamente em alguns minutos
```

## 🐛 Troubleshooting

### Problema: As rotas não funcionam (404 ao navegar)

**Solução**: Verifique se o `base path` está correto em `vite.config.ts`:

```bash
# Para repositório com nome customizado
const base = process.env.VITE_BASE_PATH || "/jotatv-site/";

# Para user.github.io
const base = process.env.VITE_BASE_PATH || "/";
```

### Problema: Arquivo 404.html não está funcionando

**Solução**: Certifique-se de que o arquivo `dist/404.html` existe após o build:

```bash
ls -la dist/404.html
```

Se não existir, copie manualmente:

```bash
cp client/public/404.html dist/404.html
```

### Problema: Estilos não estão sendo carregados

**Solução**: Limpe o cache do navegador (Ctrl+Shift+Delete) e recarregue a página.

### Problema: Imagens não estão aparecendo

**Solução**: As imagens são carregadas de URLs externas (CDN). Verifique sua conexão de internet e se o CDN está acessível.

## 📚 Recursos Adicionais

- [Documentação oficial do GitHub Pages](https://docs.github.com/en/pages)
- [Vite - Build Tool](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 💡 Dicas

1. **Sempre teste localmente antes de fazer push**: Use `pnpm run preview` para testar o build final.

2. **Use branches para desenvolvimento**: Crie uma branch `develop` para trabalhar e faça merge para `main` quando estiver pronto.

3. **Monitore o deploy**: GitHub Pages leva alguns minutos para atualizar. Você pode ver o status em `Settings → Pages`.

4. **Mantenha o histórico Git limpo**: Faça commits pequenos e descritivos.

## ❓ Dúvidas?

Se encontrar problemas, verifique:

1. O arquivo `vite.config.ts` está correto?
2. O `base path` está configurado corretamente?
3. O arquivo `dist/404.html` existe?
4. GitHub Pages está habilitado em Settings?
5. O branch está correto em GitHub Pages settings?

---

**Pronto para começar?** Execute os passos acima e seu site JotaTv estará no ar! 🎉
