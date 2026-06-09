import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Hub from "./pages/Hub";
import Home from "./pages/Home";
import DownloadPage from "./pages/Download";
import { routes } from "./lib/routes";

/**
 * Router para GitHub Pages
 * 
 * Usa a configuração centralizada de rotas que respeita o base path
 * do GitHub Pages (ex: /repo-name/ ou apenas / para projeto root)
 */
function Router() {
  return (
    <Switch>
      <Route path={routes.home} component={Hub} />
      <Route path={routes.planos} component={Home} />
      <Route path={routes.download} component={DownloadPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
