import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="hero-bg relative flex min-h-screen items-center justify-center bg-background px-6 py-12">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      <article className="relative z-10 max-w-2xl text-center">
        {/* Title */}
        <h1 className="animate-fade-in-up text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          PRÉ-VENDA LIBERADA —{" "}
          <span className="text-primary">STARS EXPERIENCE</span>
        </h1>

        {/* Subtitle */}
        <h2 className="animate-fade-in-up-delay-1 mt-6 text-lg font-semibold uppercase tracking-wide text-muted-foreground sm:text-xl md:text-2xl">
          A Condição Especial Para Quem Quer Começar 2026 No Lucro
        </h2>

        {/* Main paragraph */}
        <p className="animate-fade-in-up-delay-2 mx-auto mt-8 max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg">
          Se você é personal trainer ou dono de academia, já sabe: quem continuar no modo "sobrevivência" vai ficar para trás em 2026.
        </p>

        {/* Secondary paragraph */}
        <p className="animate-fade-in-up-delay-3 mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          O <strong className="text-primary">STARS EXPERIENCE</strong> é a imersão presencial que vai te mostrar como aumentar faturamento, lotar agendas, vender com previsibilidade e transformar seu negócio em uma máquina lucrativa com estratégias práticas de marketing, vendas e IA.
        </p>

        {/* Final reinforcement paragraph */}
        <p className="animate-fade-in-up-delay-3 mx-auto mt-6 max-w-lg text-sm leading-relaxed text-foreground font-semibold sm:text-base">
          Apenas <strong className="text-primary">40 participantes</strong> terão acesso à condição especial da pré-venda.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up-delay-4 mt-10">
          <a
            href="https://chat.whatsapp.com/HbwHg9GWwAOCxIz4RAd5NH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="neon"
              size="xxl"
              className="animate-pulse-glow animate-subtle-float"
            >
              ENTRAR NO GRUPO VIP DA PRÉ-VENDA
            </Button>
          </a>
        </div>
      </article>
    </main>
  );
};

export default Index;
