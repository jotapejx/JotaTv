#!/bin/bash

# Script de deploy para GitHub Pages
# Este script prepara e faz deploy do site JotaTv para GitHub Pages
# 
# Uso: ./deploy.sh [repository-name] [base-path]
# 
# Exemplos:
#   ./deploy.sh                              # Deploy em user.github.io (raiz)
#   ./deploy.sh jotatv-site /jotatv-site    # Deploy em user.github.io/jotatv-site

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuração
REPO_NAME="${1:-.}"
BASE_PATH="${2:-/}"

echo -e "${YELLOW}=== JotaTv GitHub Pages Deploy ===${NC}"
echo "Repository: $REPO_NAME"
echo "Base Path: $BASE_PATH"
echo ""

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não está instalado${NC}"
    exit 1
fi

# Verificar se o pnpm está instalado
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}⚠️  pnpm não está instalado, instalando...${NC}"
    npm install -g pnpm
fi

echo -e "${YELLOW}📦 Instalando dependências...${NC}"
pnpm install

echo -e "${YELLOW}🔨 Compilando projeto...${NC}"
VITE_BASE_PATH="$BASE_PATH" pnpm run build --config vite.config.github.ts

echo -e "${YELLOW}📁 Preparando arquivos para deploy...${NC}"

# Copiar arquivo .nojekyll
if [ ! -f "dist/.nojekyll" ]; then
    touch dist/.nojekyll
    echo "✓ Arquivo .nojekyll criado"
fi

# Copiar arquivo 404.html
if [ -f "client/public/404.html" ]; then
    cp client/public/404.html dist/404.html
    echo "✓ Arquivo 404.html copiado"
fi

echo ""
echo -e "${GREEN}✅ Build concluído com sucesso!${NC}"
echo ""
echo "Próximos passos:"
echo "1. Commit e push dos arquivos:"
echo "   git add ."
echo "   git commit -m 'Deploy para GitHub Pages'"
echo "   git push origin main"
echo ""
echo "2. Configure GitHub Pages em seu repositório:"
echo "   - Vá para Settings → Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main (ou gh-pages)"
echo "   - Folder: / (root)"
echo ""
echo "3. Seu site estará disponível em:"
if [ "$BASE_PATH" = "/" ]; then
    echo "   https://[seu-usuario].github.io"
else
    echo "   https://[seu-usuario].github.io$BASE_PATH"
fi
