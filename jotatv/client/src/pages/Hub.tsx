import { Link } from "wouter";

/**
 * Design System: Modernismo Minimalista com Contraste Alto
 * Paleta: Azul Profundo (#0F1B2E) + Azul Ciano (#1C9CE3) da logo JotaTv
 * Tipografia: Poppins (títulos) + Lato (corpo)
 * Layout: Hub de navegação com cards interativos
 */

function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message);
}

export default function Hub() {
  const hubItems = [
    {
      id: "planos",
      title: "Planos e Informações",
      description: "Conheça nossos planos de streaming e escolha o melhor para você",
      icon: null,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/jotatv-logo-new_7e0944ee.png",
      href: "/planos",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: "download",
      title: "Download dos Apps",
      description: "Baixe nossos aplicativos para Android, iOS, Windows e Smart TVs",
      icon: null,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/download-neon-icon_12895cda.png",
      href: "/download",
      color: "from-cyan-600 to-cyan-400",
    },
    {
      id: "whatsapp",
      title: "Chamar no WhatsApp",
      description: "Fale conosco e tire suas dúvidas sobre o streaming",
      icon: null,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663215833430/bnzNNygQHEnV6gjocxj9cz/WhatsAppImage2026-04-09at11.01.06_e8b00f8f.jpeg",
      href: `https://wa.me/5592981301005?text=${encodeWhatsAppMessage("Olá! Gostaria de mais informações sobre o Streaming.")}`,
      isExternal: true,
      color: "from-green-600 to-green-400",
    },
  ];

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

      {/* Main Content */}
      <div className="container min-h-screen flex flex-col items-center justify-center py-20">
        {/* Title and Description */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">JotaTv</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bem-vindo à JotaTv! Escolha uma opção abaixo para começar sua jornada de streaming.
          </p>
        </div>

        {/* Hub Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {hubItems.map((item) => {
            const Icon = item.icon;

            const cardContent = (
              <div className="flex items-center gap-6 h-full">
                <div className="flex-shrink-0">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="h-16 w-16 object-contain rounded-lg" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );

            if (item.isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-8 hover:border-primary transition h-full cursor-pointer hover:bg-card/80">
                    {cardContent}
                  </div>
                </a>
              );
            }

            return (
              <Link key={item.id} href={item.href}>
                <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-8 hover:border-primary transition h-full cursor-pointer hover:bg-card/80">
                  {cardContent}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2026 JotaTv. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}
