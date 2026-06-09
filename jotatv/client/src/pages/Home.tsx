import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Smartphone, Tv, Monitor, Zap, Shield, TrendingUp, MessageCircle, ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Modernismo Minimalista com Contraste Alto
 * Paleta: Azul Profundo (#0F1B2E) + Azul Ciano (#00D4FF) da logo JotaTv
 * Tipografia: Playfair Display (títulos) + Lato (corpo)
 * Layout: Assimétrico com seções bem definidas
 */

function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<"maxplayer" | "jotatv">("maxplayer");
  const [mediaIndex, setMediaIndex] = useState(0);
  const [zoomedImageUrl, setZoomedImageUrl] = useState<string | null>(null);
  const [isClosingZoomModal, setIsClosingZoomModal] = useState(false);

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

  const jotatvMedia = [
    {
      type: "image",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/iptv_smarters_pro_4418300e.png",
      title: "IPTV Smarters Pro - Compatível com JotaTv",
    },
    {
      type: "image",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/iptv_smarters_pro_2_db981a45.png",
      title: "IPTV Smarters Pro - Só no App!",
    },
    {
      type: "image",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/iptv_smarters_pro_3_b393aecf.png",
      title: "IPTV Smarters Pro - Indicou Ganhou",
    },
  ];

  const [jotatvMediaIndex, setJotatvMediaIndex] = useState(0);

  const handlePrevJotatvMedia = () => {
    setJotatvMediaIndex((prev) => (prev === 0 ? jotatvMedia.length - 1 : prev - 1));
  };

  const handleNextJotatvMedia = () => {
    setJotatvMediaIndex((prev) => (prev === jotatvMedia.length - 1 ? 0 : prev + 1));
  };

  const handlePrevMedia = () => {
    setMediaIndex((prev) => (prev === 0 ? maxplayerMedia.length - 1 : prev - 1));
  };

  const handleNextMedia = () => {
    setMediaIndex((prev) => (prev === maxplayerMedia.length - 1 ? 0 : prev + 1));
  };

  const plans = {
    maxplayer: {
      name: "MaxPlayer",
      description: "Aplicativo padrão profissional com melhor experiência",
      price: 30,
      packages: [
        { months: 1, price: 30, pricePerMonth: 30, discount: undefined },
        { months: 3, price: 75, pricePerMonth: 25, discount: "17%" },
        { months: 6, price: 150, pricePerMonth: 25, discount: "17%" },
      ],
      features: [
        "Aplicativo padrão MaxPlayer",
        "Conteúdo variado",
        "Suporte humanizado",
        "1 conexão ativa",
        "Streaming em HD",
        "Ativação imediata",
        "Estabilidade excelente",
      ],
    },
    jotatv: {
      name: "JotaTv e Associados",
      description: "Solução flexível para instalar em múltiplos dispositivos",
      price: 20,
      packages: [
        { months: 1, price: 20, pricePerMonth: 20, discount: undefined },
        { months: 3, price: 60, pricePerMonth: 20, discount: undefined },
        { months: 6, price: 120, pricePerMonth: 20, discount: undefined },
      ],
      features: [
        "Compatível com múltiplos aplicativos",
        "Conteúdo variado",
        "Suporte humanizado",
        "1 conexão ativa",
        "Streaming em Full HD",
        "Ativação imediata",
        "Estabilidade excelente",
      ],
    },
  };

  const devices = [
    { category: "Smart TVs", items: ["Samsung", "LG", "Android TV", "Roku"] },
    { category: "Celulares", items: ["Android", "iOS"] },
    { category: "Streaming", items: ["Fire Stick", "Mi Stick", "Roku", "Apple TV"] },
    { category: "Computadores", items: ["Windows", "macOS"] },
  ];

  const comparison = [
    { feature: "Preço Mensal", maxplayer: "R$ 30", jotatv: "R$ 20" },
    { feature: "Preço 3 Meses", maxplayer: "R$ 75", jotatv: "R$ 60" },
    { feature: "Preço 6 Meses", maxplayer: "R$ 150", jotatv: "R$ 120" },
    { feature: "Aplicativo Padrão", maxplayer: "✓", jotatv: "✗" },
    { feature: "Suporte Prioritário", maxplayer: "✓", jotatv: "Padrão" },
    { feature: "Atualização Diária", maxplayer: "✓", jotatv: "✓" },
    { feature: "Ativação Imediata", maxplayer: "✓", jotatv: "✓" },
  ];

  const currentPlan = plans[selectedPlan];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className="md:hidden flex items-center gap-2 hover:text-primary transition cursor-pointer">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">Voltar</span>
              </a>
            </Link>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/jotatv-logo_779bd7ed.png"
              alt="JotaTv Logo"
              className="h-12 w-auto rounded-lg"
            />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/">
              <a className="hover:text-primary transition cursor-pointer">Home</a>
            </Link>
            <div className="w-px h-6 bg-border"></div>
            <a href="#planos" className="hover:text-primary transition">Planos</a>
            <a href="#comparacao" className="hover:text-primary transition">Comparação</a>
            <a href="#dispositivos" className="hover:text-primary transition">Dispositivos</a>
          </nav>
          <a href="#cta" className="block">
            <Button className="bg-primary hover:bg-primary/90">Começar Agora</Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/hero-streaming-dark-blue-HtvGSHmZbgJboQfEdcbFUU.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              JotaTv
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              JotaTv oferece streaming completo com canais ao vivo, filmes e séries. Venha conferir nossos planos ou faça o teste grátis hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#planos" className="block">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                  Escolher Meu Plano
                </Button>
              </a>
              <a
                href={`https://wa.me/5592981301005?text=${encodeWhatsAppMessage("Olá! Quero solicitar um teste de graça do Streaming.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Começar Teste Grátis
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Até 70% mais barato</p>
                  <p className="text-sm text-muted-foreground">que TV a cabo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Ativação Imediata</p>
                  <p className="text-sm text-muted-foreground">em minutos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Acesso Seguro</p>
                  <p className="text-sm text-muted-foreground">e confiável</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Todos os Dispositivos</p>
                  <p className="text-sm text-muted-foreground">compatível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 md:py-32 border-t border-border relative scroll-smooth">
        <div className="absolute inset-0 opacity-20 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/pricing-section-bg-9VWVXYVADspoPDvBt6dTd3.webp"
            alt="Pricing Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Escolha Seu Plano</h2>
            <p className="text-lg text-muted-foreground">Dois planos profissionais para atender suas necessidades</p>
          </div>

          {/* Plan Selector */}
          <div className="flex justify-center gap-12 mb-12">
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm font-semibold text-primary">Plano 1:</p>
              <button
                onClick={() => setSelectedPlan("maxplayer")}
                className={`px-8 py-3 rounded font-semibold transition ${
                  selectedPlan === "maxplayer"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary"
                }`}
              >
                MaxPlayer
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm font-semibold text-primary">Plano 2:</p>
              <button
                onClick={() => setSelectedPlan("jotatv")}
                className={`px-8 py-3 rounded font-semibold transition ${
                  selectedPlan === "jotatv"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary"
                }`}
              >
                JotaTv e Associados
              </button>
            </div>
          </div>

          {/* Plan Explanation */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            {selectedPlan === "maxplayer" ? (
              <p className="text-lg text-muted-foreground">
                <strong>MaxPlayer</strong> é nosso plano mais profissional, com um aplicativo padrão único que funciona perfeitamente em todos os seus dispositivos. Ideal para quem busca simplicidade e consistência.
              </p>
            ) : (
              <p className="text-lg text-muted-foreground">
                <strong>JotaTv e Associados</strong> oferece flexibilidade total com aplicativos variados otimizados para cada plataforma. Perfeito para quem quer customizar sua experiência em cada dispositivo.
              </p>
            )}
          </div>

          {/* Media Carousel - MaxPlayer Only */}
          {selectedPlan === "maxplayer" && (
            <div className="mb-12 max-w-4xl mx-auto">
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

          {/* Media Carousel - JotaTv Only */}
          {selectedPlan === "jotatv" && (
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="relative bg-card/50 backdrop-blur border border-border rounded-lg overflow-hidden">
                {/* Media Display */}
                <div className="relative aspect-video bg-black/50 flex items-center justify-center">
                  <img
                    src={jotatvMedia[jotatvMediaIndex].url}
                    alt={jotatvMedia[jotatvMediaIndex].title}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                    onClick={() => setZoomedImageUrl(jotatvMedia[jotatvMediaIndex].url)}
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevJotatvMedia}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition z-10"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextJotatvMedia}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition z-10"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {jotatvMedia.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setJotatvMediaIndex(idx)}
                      className={`w-2 h-2 rounded-full transition ${
                        idx === jotatvMediaIndex ? "bg-primary" : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Ir para mídia ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Plans Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {currentPlan.packages.map((pkg, idx) => {
              const planLabels = ["Mensal", "Trimestral", "Semestral"];
              const planMessages: Record<string, Record<number, string>> = {
                maxplayer: {
                  0: "Olá! Gostaria de assinar o plano mensal do MaxPlayer",
                  1: "Olá! Gostaria de assinar o plano trimestral do MaxPlayer",
                  2: "Olá! Gostaria de assinar o plano semestral do MaxPlayer",
                },
                jotatv: {
                  0: "Olá! Gostaria de assinar o plano mensal do JotaTv e Associados",
                  1: "Olá! Gostaria de assinar o plano trimestral do JotaTv e Associados",
                  2: "Olá! Gostaria de assinar o plano semestral do JotaTv e Associados",
                },
              };
              const message = planMessages[selectedPlan]?.[idx] || "Olá! Gostaria de mais informações sobre o Streaming.";
              const whatsappLink = `https://wa.me/5592981301005?text=${encodeWhatsAppMessage(message)}`;
              return (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-8 hover:border-primary transition bg-card/50 backdrop-blur"
                >
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-primary mb-3">{planLabels[idx]}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">R$ {pkg.price}</span>
                      {pkg.discount && (
                        <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded">
                          {pkg.discount} off
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">R$ {pkg.pricePerMonth}/mês</p>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                    title="Conversar com João Pedro - JotaTv no WhatsApp"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90">Assinar via WhatsApp</Button>
                  </a>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparacao" className="py-20 md:py-32 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Compare os Planos</h2>
            <p className="text-lg text-muted-foreground">Veja as diferenças entre MaxPlayer e JotaTv e Associados</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Característica</th>
                  <th className="text-center py-4 px-4 font-semibold">MaxPlayer</th>
                  <th className="text-center py-4 px-4 font-semibold">JotaTv e Associados</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-primary/5 transition">
                    <td className="py-4 px-4">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.maxplayer === "✓" ? (
                        <Check className="w-5 h-5 text-primary inline" />
                      ) : row.maxplayer === "✗" ? (
                        <span className="text-muted-foreground">—</span>
                      ) : (
                        row.maxplayer
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.jotatv === "✓" ? (
                        <Check className="w-5 h-5 text-primary inline" />
                      ) : row.jotatv === "✗" ? (
                        <span className="text-muted-foreground">—</span>
                      ) : (
                        row.jotatv
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section id="dispositivos" className="py-20 md:py-32 border-t border-border relative">
        <div className="absolute inset-0 opacity-20 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/devices-compatibility-bg-XTUsJqdAuTMUCvzANhW5ji.webp"
            alt="Devices Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Funciona em Todos os Seus Dispositivos</h2>
            <p className="text-lg text-muted-foreground">Compatibilidade total com os aparelhos que você já possui</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {devices.map((deviceGroup, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-6 flex justify-center">
                  {deviceGroup.category === "Smart TVs" && <Tv className="w-12 h-12 text-primary" />}
                  {deviceGroup.category === "Celulares" && <Smartphone className="w-12 h-12 text-primary" />}
                  {deviceGroup.category === "Streaming" && <Zap className="w-12 h-12 text-primary" />}
                  {deviceGroup.category === "Computadores" && <Monitor className="w-12 h-12 text-primary" />}
                </div>
                <h3 className="font-semibold mb-4">{deviceGroup.category}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {deviceGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 md:py-32 border-t border-border relative">
        <div className="absolute inset-0 opacity-30 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/cta-section-bg-oCtdqouuFpYNLCSqsyprpf.webp"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar Seu Entretenimento?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de clientes satisfeitos. Ativação imediata e suporte humanizado incluído.
          </p>
          <div className="flex justify-center">
            <a
              href={`https://wa.me/5592981301005?text=${encodeWhatsAppMessage("Olá! Gostaria de mais informações sobre o Streaming.")}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Conversar com João Pedro - JotaTv no WhatsApp"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Fale Conosco no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">JotaTv</h4>
              <p className="text-sm text-muted-foreground">O melhor streaming IPTV do Brasil</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/"><a className="hover:text-primary transition cursor-pointer">Home</a></Link></li>
                <li><a href="#planos" className="hover:text-primary transition">Planos</a></li>
                <li><a href="#dispositivos" className="hover:text-primary transition">Dispositivos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-primary transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition">Política de Reembolso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <a href="https://wa.me/5592981301005" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition flex items-center gap-2" title="Conversar com João Pedro - JotaTv no WhatsApp">
                <MessageCircle className="w-4 h-4" />
                João Pedro - JotaTv
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 JotaTv. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
