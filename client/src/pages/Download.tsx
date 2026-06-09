import { Download, Smartphone, Tv, Monitor, HelpCircle, ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Link } from "wouter";
import { routes } from "@/lib/routes";

/**
 * Design System: Modernismo Minimalista com Contraste Alto
 * Paleta: Azul Profundo (#0F1B2E) + Azul Ciano (#1C9CE3) da logo JotaTv
 * Tipografia: Poppins (títulos) + Lato (corpo)
 * Layout: Página de download com separação por planos
 */

export default function DownloadPage() {
  const [selectedPlan, setSelectedPlan] = useState<"maxplayer" | "jotatv" | null>(null);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [isClosingGuideModal, setIsClosingGuideModal] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [zoomedImageUrl, setZoomedImageUrl] = useState<string | null>(null);
  const [isClosingZoomModal, setIsClosingZoomModal] = useState(false);
  const [windowsImageIndex, setWindowsImageIndex] = useState(0);
  const [androidImageIndex, setAndroidImageIndex] = useState(0);
  const [iosImageIndex, setIosImageIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const androidTouchStartX = useRef(0);
  const androidTouchEndX = useRef(0);
  const iosTouchStartX = useRef(0);
  const iosTouchEndX = useRef(0);

  const handlePrevWindowsImage = () => {
    setWindowsImageIndex((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNextWindowsImage = () => {
    setWindowsImageIndex((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextWindowsImage();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrevWindowsImage();
    }
  };

  const handleAndroidTouchStart = (e: React.TouchEvent) => {
    androidTouchStartX.current = e.changedTouches[0].screenX;
  };

  const handleAndroidTouchEnd = (e: React.TouchEvent) => {
    androidTouchEndX.current = e.changedTouches[0].screenX;
    handleAndroidSwipe();
  };

  const handleAndroidSwipe = () => {
    if (androidTouchStartX.current - androidTouchEndX.current > 50) {
      setAndroidImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }
    if (androidTouchEndX.current - androidTouchStartX.current > 50) {
      setAndroidImageIndex((prev) => (prev === 0 ? 2 : prev - 1));
    }
  };

  const handleIosTouchStart = (e: React.TouchEvent) => {
    iosTouchStartX.current = e.changedTouches[0].screenX;
  };

  const handleIosTouchEnd = (e: React.TouchEvent) => {
    iosTouchEndX.current = e.changedTouches[0].screenX;
    handleIosSwipe();
  };

  const handleIosSwipe = () => {
    if (iosTouchStartX.current - iosTouchEndX.current > 50) {
      setIosImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }
    if (iosTouchEndX.current - iosTouchStartX.current > 50) {
      setIosImageIndex((prev) => (prev === 0 ? 2 : prev - 1));
    }
  };

  const handleCloseGuideModal = () => {
    setIsClosingGuideModal(true);
    setTimeout(() => {
      setShowGuideModal(false);
      setIsClosingGuideModal(false);
    }, 200);
  };

  const handleCloseZoomModal = () => {
    setIsClosingZoomModal(true);
    setTimeout(() => {
      setZoomedImageUrl(null);
      setIsClosingZoomModal(false);
    }, 200);
  };

  function encodeWhatsAppMessage(message: string): string {
    return encodeURIComponent(message);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/50 backdrop-blur sticky top-0 z-40">
        <div className="container py-4 flex items-center justify-between">
          {/* Mobile Back Button */}
          <div className="md:hidden">
            <Link href={routes.home}>
              <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Voltar</span>
              </button>
            </Link>
          </div>

          {/* Desktop Home Button */}
          <div className="hidden md:block">
            <Link href={routes.home}>
              <button className="text-foreground hover:text-primary transition font-medium">Home</button>
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-center flex-1">Download dos Apps</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Plan Selection */}
        {!selectedPlan && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Escolha seu Plano</h2>
              <p className="text-lg text-muted-foreground">Selecione qual plano você deseja baixar</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* MaxPlayer Card */}
              <div
                onClick={() => setSelectedPlan("maxplayer")}
                className="group cursor-pointer bg-card/50 backdrop-blur border border-border rounded-2xl p-8 hover:border-primary transition hover:bg-card/80"
              >
                <div className="flex items-center gap-6 h-full">
                  <div className="flex-shrink-0">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/download-neon-icon_12895cda.png"
                      alt="MaxPlayer"
                      className="h-16 w-16 object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">MaxPlayer</h3>
                    <p className="text-sm text-muted-foreground">Aplicativo profissional com todas as funcionalidades</p>
                  </div>
                </div>
              </div>

              {/* JotaTv Card */}
              <div
                onClick={() => setSelectedPlan("jotatv")}
                className="group cursor-pointer bg-card/50 backdrop-blur border border-border rounded-2xl p-8 hover:border-primary transition hover:bg-card/80"
              >
                <div className="flex items-center gap-6 h-full">
                  <div className="flex-shrink-0">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/jotatv-logo-new_7e0944ee.png"
                      alt="JotaTv"
                      className="h-16 w-16 object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">JotaTv</h3>
                    <p className="text-sm text-muted-foreground">Aplicativo leve e rápido para streaming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Download Instructions - MaxPlayer */}
        {selectedPlan === "maxplayer" && (
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setSelectedPlan(null)}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
              >
                <ArrowLeft size={20} />
                <span>Voltar</span>
              </button>
              <h2 className="text-3xl font-bold">MaxPlayer - Download</h2>
            </div>

            {/* Platform Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: "android", label: "Android", icon: Smartphone },
                { id: "ios", label: "iOS", icon: Smartphone },
                { id: "windows", label: "Windows", icon: Monitor },
                { id: "smarttv", label: "Smart TV", icon: Tv },
              ].map((platform) => (
                <button
                  key={platform.id}
                  className="bg-card/50 backdrop-blur border border-border rounded-xl p-4 hover:border-primary transition hover:bg-card/80 text-center"
                >
                  <platform.icon className="mx-auto mb-2" size={24} />
                  <span className="font-medium">{platform.label}</span>
                </button>
              ))}
            </div>

            {/* Download Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() =>
                  window.open(
                    `https://wa.me/5592981301005?text=${encodeWhatsAppMessage("Olá! Gostaria de baixar o MaxPlayer.")}`,
                    "_blank"
                  )
                }
              >
                <Download size={20} />
                Solicitar Download
              </Button>
            </div>
          </div>
        )}

        {/* Download Instructions - JotaTv */}
        {selectedPlan === "jotatv" && (
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setSelectedPlan(null)}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
              >
                <ArrowLeft size={20} />
                <span>Voltar</span>
              </button>
              <h2 className="text-3xl font-bold">JotaTv - Download</h2>
            </div>

            {/* Platform Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: "android", label: "Android", icon: Smartphone },
                { id: "ios", label: "iOS", icon: Smartphone },
                { id: "windows", label: "Windows", icon: Monitor },
                { id: "smarttv", label: "Smart TV", icon: Tv },
              ].map((platform) => (
                <button
                  key={platform.id}
                  className="bg-card/50 backdrop-blur border border-border rounded-xl p-4 hover:border-primary transition hover:bg-card/80 text-center"
                >
                  <platform.icon className="mx-auto mb-2" size={24} />
                  <span className="font-medium">{platform.label}</span>
                </button>
              ))}
            </div>

            {/* Download Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() =>
                  window.open(
                    `https://wa.me/5592981301005?text=${encodeWhatsAppMessage("Olá! Gostaria de baixar o JotaTv.")}`,
                    "_blank"
                  )
                }
              >
                <Download size={20} />
                Solicitar Download
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur mt-16">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Sobre</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href={routes.home}>
                    <a className="hover:text-primary transition cursor-pointer">Home</a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Sobre Nós
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2026 JotaTv. Todos os direitos reservados.</p>
            <a
              href="https://wa.me/5592981301005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition flex items-center gap-2 mt-4 md:mt-0"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
