import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="hero-bg relative flex min-h-screen items-center justify-center bg-background px-4 py-8 sm:px-6 sm:py-12">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      <article className="relative z-10 w-full max-w-2xl px-2 text-center sm:px-0">
        {/* Title */}
        <h1 className="animate-fade-in-up text-2xl font-extrabold uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          PRÉ-VENDA LIBERADA —{" "}
          <span className="text-primary">STARS EXPERIENCE</span>
        </h1>

        {/* Subtitle */}
        <h2 className="animate-fade-in-up-delay-1 mt-4 text-base font-semibold uppercase tracking-wide text-muted-foreground sm:mt-6 sm:text-lg md:text-xl lg:text-2xl">
          A Condição Especial Para Quem Quer Começar 2026 No Lucro
        </h2>

        {/* Main paragraph */}
        <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-xl text-sm leading-relaxed text-foreground/90 sm:mt-8 sm:text-base md:text-lg">
          Se você é personal trainer ou dono de academia, já sabe: quem continuar no modo "sobrevivência" vai ficar para trás em 2026.
        </p>

        {/* Secondary paragraph */}
        <p className="animate-fade-in-up-delay-3 mx-auto mt-4 max-w-lg text-xs leading-relaxed text-muted-foreground sm:mt-6 sm:text-sm md:text-base">
          O <strong className="text-primary">STARS EXPERIENCE</strong> é a imersão presencial que vai te mostrar como aumentar faturamento, lotar agendas, vender com previsibilidade e transformar seu negócio em uma máquina lucrativa com estratégias práticas de marketing, vendas e IA.
        </p>

        {/* Final reinforcement paragraph */}
        <p className="animate-fade-in-up-delay-3 mx-auto mt-4 max-w-lg text-xs font-semibold leading-relaxed text-foreground sm:mt-6 sm:text-sm md:text-base">
          Apenas <strong className="text-primary">40 participantes</strong> terão acesso à condição especial da pré-venda.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up-delay-4 mt-8 sm:mt-10">
          <a
            href="https://chat.whatsapp.com/HbwHg9GWwAOCxIz4RAd5NH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="neon"
              size="lg"
              className="animate-pulse-glow animate-subtle-float px-6 py-4 text-sm sm:px-10 sm:py-5 sm:text-base md:px-12 md:py-6 md:text-lg"
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
