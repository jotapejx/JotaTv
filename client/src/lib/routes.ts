/**
 * Configuração centralizada de rotas para GitHub Pages
 * 
 * Este arquivo centraliza todas as rotas da aplicação para facilitar
 * a migração entre diferentes ambientes (Manus, GitHub Pages, etc)
 * 
 * Uso:
 * import { routes } from '@/lib/routes';
 * <Link href={routes.planos}>Planos</Link>
 */

// Base path será injetado pelo Vite em tempo de build
const BASE = import.meta.env.BASE_URL || "/";

// Remove trailing slash para consistência
const cleanBase = BASE.endsWith("/") && BASE !== "/" ? BASE.slice(0, -1) : BASE;

export const routes = {
  home: `${cleanBase}/`,
  planos: `${cleanBase}/planos`,
  download: `${cleanBase}/download`,
} as const;

export type Route = (typeof routes)[keyof typeof routes];
