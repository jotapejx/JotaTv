/**
 * Hook para obter o base path do GitHub Pages
 * 
 * Uso:
 * - const basePath = useBasePath();
 * - const href = useBasePath('/planos'); // Retorna '/repo-name/planos' ou '/planos'
 */

export function useBasePath(path?: string): string {
  // O base path é definido no vite.config.ts via import.meta.env.BASE_URL
  const base = import.meta.env.BASE_URL || "/";
  
  if (!path) {
    return base;
  }
  
  // Remove leading slash de path se existir, para evitar duplos
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  // Remove trailing slash do base se existir
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  
  return `${cleanBase}/${cleanPath}`;
}
