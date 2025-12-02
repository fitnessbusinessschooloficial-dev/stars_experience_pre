import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <article className="max-w-2xl text-center">
        {/* Title */}
        <h1 className="animate-fade-in-up text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          PRÉ-VENDA LIBERADA —{" "}
          <span className="text-primary">STARS EXPERIENCE</span>
        </h1>

        {/* Subtitle */}
        <h2 className="animate-fade-in-up-delay-1 mt-6 text-lg font-semibold uppercase tracking-wide text-muted-foreground sm:text-xl md:text-2xl">
          Condição Exclusiva Apenas Para o Grupo VIP
        </h2>

        {/* Main paragraph */}
        <p className="animate-fade-in-up-delay-2 mx-auto mt-8 max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg">
          A imersão que vai tirar você do modo sobrevivência e colocar seu negócio no crescimento{" "}
          <strong className="text-primary">previsível, lucrativo e dominante</strong> — para apenas{" "}
          <strong className="text-primary">40 participantes</strong>.
        </p>

        {/* Secondary paragraph */}
        <p className="animate-fade-in-up-delay-3 mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          Entre no <strong className="text-foreground">Grupo VIP</strong> e receba{" "}
          <strong className="text-foreground">acesso antecipado</strong>,{" "}
          <strong className="text-foreground">benefícios especiais</strong> e a{" "}
          <strong className="text-foreground">melhor condição da história</strong> do evento.
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
