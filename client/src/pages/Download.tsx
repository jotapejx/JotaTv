import { Link } from "wouter";
import { Download, Smartphone, Tv, Monitor, HelpCircle, ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

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

  const handlePrevAndroidImage = () => {
    setAndroidImageIndex((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNextAndroidImage = () => {
    setAndroidImageIndex((prev) => (prev === 3 ? 0 : prev + 1));
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
      handleNextAndroidImage();
    }
    if (androidTouchEndX.current - androidTouchStartX.current > 50) {
      handlePrevAndroidImage();
    }
  };

  const handlePrevIosImage = () => {
    setIosImageIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextIosImage = () => {
    setIosImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
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
      handleNextIosImage();
    }
    if (iosTouchEndX.current - iosTouchStartX.current > 50) {
      handlePrevIosImage();
    }
  };

  const handleCloseZoomModal = () => {
    setIsClosingZoomModal(true);
    setTimeout(() => {
      setZoomedImageUrl(null);
      setIsClosingZoomModal(false);
    }, 200);
  };

  const maxplayerMedia = [
    {
      type: "youtube",
      url: "https://www.youtube.com/embed/l5VSPG0tTVE",
      title: "MaxPlayer - Streaming de Qualidade",
    },
    {
      type: "image",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/Designsemnome(1)_0670adfb.png",
      title: "MaxPlayer - Aplicativo Profissional",
    },
    {
      type: "image",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/CópiadeDesignsemnome(1)_d5cd4a4b.png",
      title: "MaxPlayer - Experiência Mobile",
    },
  ];

  const handlePrevMedia = () => {
    setMediaIndex((prev) => (prev === 0 ? maxplayerMedia.length - 1 : prev - 1));
  };

  const handleNextMedia = () => {
    setMediaIndex((prev) => (prev === maxplayerMedia.length - 1 ? 0 : prev + 1));
  };

  const handleCloseGuideModal = () => {
    setIsClosingGuideModal(true);
    setTimeout(() => {
      setShowGuideModal(false);
      setIsClosingGuideModal(false);
    }, 200);
  };

  const plans = {
    maxplayer: {
      name: "MaxPlayer",
      downloads: [
        {
          id: "pc",
          name: "Windows",
          icon: Monitor,
          description: "Compatível com Windows 10+",
          downloadUrl: "https://apps.microsoft.com/detail/9njp3ph1hxl6?hl=pt-BR&gl=BR",
          type: "download",
        },
        {
          id: "android",
          name: "Android",
          icon: Smartphone,
          description: "Compatível com Android 5.0+",
          downloadUrl: "https://play.google.com/store/apps/details?id=tv.maxplayer.android&hl=pt_BR",
          type: "download",
        },
        {
          id: "ios",
          name: "iOS",
          icon: Smartphone,
          description: "Compatível com iPhone e Mac",
          downloadUrl: "https://apps.apple.com/br/app/max-player/id1660982028",
          type: "download",
        },
        {
          id: "smarttv",
          name: "Smart TV",
          icon: Tv,
          description: "Pesquise por MaxPlayer na loja da sua TV",
          downloadUrl: "#",
          type: "guide",
        },
      ],
    },
    jotatv: {
      name: "JotaTv e Associados",
      downloads: [
        {
          id: "pc",
          name: "Windows",
          icon: Monitor,
          description: "Compatível com Windows 10+",
          downloadUrl: "https://appslim.cc/pc",
          type: "download",
          images: [
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/CapturadeTela(108)_166e60ab.png",
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/CapturadeTela(112)_da729b39.png",
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/CapturadeTela(113)_f7cf480b.png",
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/CapturadeTela(109)_b74e12a3.png",
          ],
        },
        {
          id: "android",
          name: "Android",
          icon: Smartphone,
          description: "Compatível com Android 5.0+",
          downloadUrl: "https://play.google.com/store/apps/details?id=facilita.app&hl=pt_BR",
          type: "download",
          images: [
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/android_image_056ba8b7.jpeg",
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/android_image2_b28b54da.jpeg",
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/android_image3_a081b34b.jpeg",
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/android_image4_6f83b929.jpeg",
          ],
        },
        {
          id: "ios",
          name: "iOS",
          icon: Smartphone,
          description: "Compatível com iPhone e Mac",
          downloadUrl: "https://apps.apple.com/us/app/smarters-player-lite/id1628995509",
          type: "download",
          images: [
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/ios_image1_f3d0554c.jpg",
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/ios_image2_25fd13b2.jpg",
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/ios_image3_15ab1e9b.jpg",
          ],
        },
        {
          id: "smarttv",
          name: "Smart TV",
          icon: Tv,
          description: "Fale conosco para solicitar o app para sua Smart TV",
          downloadUrl: `https://wa.me/5592981301005?text=${encodeURIComponent("Olá! Gostaria de solicitar o app do JotaTv para minha Smart TV.")}`,
          type: "support",
        },
      ],
    },
  };

  const currentPlan = selectedPlan ? plans[selectedPlan] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/hero-streaming-dark-blue-HtvGSHmZbgJboQfEdcbFUU.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <nav className="flex gap-8 items-center">
            <Link href="/">
              <a className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">Voltar</span>
              </a>
            </Link>
            <div className="w-px h-6 bg-border"></div>
            <span className="text-lg font-semibold">Download dos Apps</span>
          </nav>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-20">
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Baixe nossos aplicativos</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Escolha seu plano:
            </p>

            {/* Plan Selection Buttons */}
            <div className="flex gap-4 justify-center mb-16 flex-wrap">
              <button
                onClick={() => setSelectedPlan("maxplayer")}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  selectedPlan === "maxplayer"
                    ? "bg-primary text-background"
                    : "bg-card/50 border border-border hover:border-primary text-foreground"
                }`}
              >
                MaxPlayer
              </button>
              <button
                onClick={() => setSelectedPlan("jotatv")}
                className={`px-8 py-3 rounded-lg font-semibold transition ${
                  selectedPlan === "jotatv"
                    ? "bg-primary text-background"
                    : "bg-card/50 border border-border hover:border-primary text-foreground"
                }`}
              >
                JotaTv e Associados
              </button>
            </div>
          </div>

          {/* Message or Downloads Grid */}
          {!selectedPlan ? (
            <div className="text-center py-16 text-muted-foreground">
              <p>Selecione um plano para visualizar os downloads disponíveis.</p>
            </div>
          ) : currentPlan ? (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {currentPlan.downloads.map((app: any) => {
              const Icon = app.icon;
              const isGuide = app.type === "guide";
              const isSupport = app.type === "support";
              const isJotaTv = selectedPlan === "jotatv";
              const hasImages = app.images && isJotaTv && (app.id === "pc" || app.id === "android" || app.id === "ios");

              const handleClick = () => {
                if (isGuide) {
                  setShowGuideModal(true);
                } else if (isSupport) {
                  window.open(app.downloadUrl, "_blank");
                }
              };

              return (
                <div
                  key={app.id}
                  className={`bg-card/50 backdrop-blur border border-border rounded-2xl overflow-hidden hover:border-primary transition ${
                    hasImages ? "flex flex-col" : "p-8"
                  }`}
                >
                  <div className={hasImages ? "p-6 flex-1 flex flex-col" : ""}>
                    <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/20 flex-shrink-0">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold">{app.name}</h3>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                  </div>

                  {isGuide ? (
                    <Button
                      onClick={handleClick}
                      className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                    >
                      <HelpCircle className="w-4 h-4" />
                      Ver Guia
                    </Button>
                  ) : isSupport ? (
                    <Button
                      onClick={() => window.open(app.downloadUrl, "_blank")}
                      className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                    >
                      <HelpCircle className="w-4 h-4" />
                      Solicitar via WhatsApp
                    </Button>
                  ) : (
                    <Button
                      onClick={() => window.open(app.downloadUrl, "_blank")}
                      className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Baixar Agora
                    </Button>
                  )}
                  {hasImages && (
                    <div className="mt-6 border-t border-border pt-6">
                      <div className="relative bg-black/30 rounded-lg overflow-hidden group">
                        <div
                          className="relative h-48 overflow-hidden"
                          onTouchStart={app.id === "android" ? handleAndroidTouchStart : app.id === "ios" ? handleIosTouchStart : handleTouchStart}
                          onTouchEnd={app.id === "android" ? handleAndroidTouchEnd : app.id === "ios" ? handleIosTouchEnd : handleTouchEnd}
                        >
                          <img
                            src={app.images[app.id === "android" ? androidImageIndex : app.id === "ios" ? iosImageIndex : windowsImageIndex]}
                            alt={`${app.name} screenshot ${(app.id === "android" ? androidImageIndex : app.id === "ios" ? iosImageIndex : windowsImageIndex) + 1}`}
                            className="w-full h-full object-cover cursor-pointer animate-in fade-in slide-in-from-right-1/2 duration-300"
                            onClick={() => setZoomedImageUrl(app.images[app.id === "android" ? androidImageIndex : app.id === "ios" ? iosImageIndex : windowsImageIndex])}
                            key={app.id === "android" ? androidImageIndex : app.id === "ios" ? iosImageIndex : windowsImageIndex}
                          />
                        </div>
                        <button
                          onClick={app.id === "android" ? handlePrevAndroidImage : app.id === "ios" ? handlePrevIosImage : handlePrevWindowsImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity z-10"
                          aria-label="Imagem anterior"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={app.id === "android" ? handleNextAndroidImage : app.id === "ios" ? handleNextIosImage : handleNextWindowsImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity z-10"
                          aria-label="Próxima imagem"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-center gap-2 mt-4">
                        {app.images.map((_: string, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => app.id === "android" ? setAndroidImageIndex(idx) : app.id === "ios" ? setIosImageIndex(idx) : setWindowsImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition ${
                              idx === (app.id === "android" ? androidImageIndex : app.id === "ios" ? iosImageIndex : windowsImageIndex) ? "bg-primary" : "bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Ir para imagem ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              );
            })}
          </div>
          ) : null}

          {/* Media Carousel - MaxPlayer Only */}
          {selectedPlan === "maxplayer" && (
            <div className="mt-16 mb-16">
              <div className="relative bg-card/50 backdrop-blur border border-border rounded-lg overflow-hidden">
                {/* Media Display */}
                <div className="relative aspect-video bg-black/50 flex items-center justify-center">
                  {maxplayerMedia[mediaIndex].type === "youtube" ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={maxplayerMedia[mediaIndex].url}
                      title={maxplayerMedia[mediaIndex].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <img
                      src={maxplayerMedia[mediaIndex].url}
                      alt={maxplayerMedia[mediaIndex].title}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                      onClick={() => setZoomedImageUrl(maxplayerMedia[mediaIndex].url)}
                    />
                  )}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevMedia}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition z-10"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextMedia}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition z-10"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {maxplayerMedia.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMediaIndex(idx)}
                      className={`w-2 h-2 rounded-full transition ${
                        idx === mediaIndex ? "bg-primary" : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Ir para mídia ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Installation Guide */}
          <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Guia de Instalação Rápida</h3>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Escolha seu plano</h4>
                  <p className="text-sm text-muted-foreground">
                    Selecione entre MaxPlayer ou JotaTv e Associados
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Baixe o aplicativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Clique no botão de download para o seu dispositivo
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instale o aplicativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Abra o arquivo baixado e siga as instruções de instalação
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Faça login</h4>
                  <p className="text-sm text-muted-foreground">
                    Use suas credenciais de acesso que o suporte lhe enviou para fazer login no aplicativo
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Comece a assistir</h4>
                  <p className="text-sm text-muted-foreground">
                    Pronto! Agora você pode desfrutar de todo o conteúdo disponível
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Tendo problemas com a instalação?
            </p>
            <Button
              onClick={() => window.open("https://wa.me/5592981301005?text=" + encodeURIComponent("Olá! Estou tendo problemas com a instalação do aplicativo."), "_blank")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>

        {/* Guide Modal */}
        {showGuideModal && (
          <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300 ${isClosingGuideModal ? 'animate-out fade-out duration-200' : ''}`}>
            <div className={`bg-card/95 backdrop-blur border border-primary/30 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300 ease-out ${isClosingGuideModal ? 'animate-out zoom-out-95 duration-200' : ''}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Guia de Instalação - Smart TV</h3>
                <button
                  onClick={handleCloseGuideModal}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  X
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Abra a loja de aplicativos</p>
                    <p className="text-sm text-muted-foreground">Acesse a loja de apps da sua Smart TV</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Pesquise por MaxPlayer</p>
                    <p className="text-sm text-muted-foreground">Digite MaxPlayer na busca</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Clique em Instalar</p>
                    <p className="text-sm text-muted-foreground">Aguarde a conclusão da instalação</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-background font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-semibold">Faca login</p>
                    <p className="text-sm text-muted-foreground">Use suas credenciais de acesso que o suporte lhe enviou</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCloseGuideModal}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Entendi
              </Button>
            </div>
          </div>
        )}

        {/* Image Zoom Modal */}
        {zoomedImageUrl && (
          <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300 ${isClosingZoomModal ? 'animate-out fade-out duration-200' : ''}`}>
            <div className={`relative max-w-4xl w-full animate-in zoom-in-95 duration-300 ease-out ${isClosingZoomModal ? 'animate-out zoom-out-95 duration-200' : ''}`}>
              <button
                onClick={handleCloseZoomModal}
                className="absolute -top-10 right-0 text-white hover:text-primary transition z-10"
                aria-label="Fechar"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={zoomedImageUrl}
                alt="Imagem ampliada"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
