import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="text-center space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-card border border-primary/30 rounded-full">
              <span className="text-sm font-semibold gradient-text-orange">
                Entre em Contato Agora
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Pronto para um Atendimento{" "}
              <span className="gradient-text-orange">Profissional</span>?
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como podemos ajudar sua residência, 
              empresa ou indústria com soluções elétricas e de segurança eletrônica.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="group hover-glow-orange text-lg px-10 py-7"
                asChild
              >
                <a href="https://wa.me/5515996570260?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20grátis%20para%20serviços%20elétricos%20e%20de%20segurança." target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento Grátis
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-card/50 backdrop-blur-sm border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-10 py-7"
                asChild
              >
                <a href="https://wa.me/5515996570260?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Eletric%20Energy." target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2" />
                  Ligar Agora
                </a>
              </Button>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">Telefone</div>
                <div className="font-bold text-lg">(11) 98765-4321</div>
              </div>
              <a 
                href="https://wa.me/5515996570260?text=Ol%C3%A1!%20%F0%9F%91%8B%20Aqui%20%C3%A9%20da%20Eletric%20Energy.%20Como%20posso%20ajudar%20voc%C3%AA%20hoje%3F%20Precisando%20de%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20el%C3%A9trica%20ou%20seguran%C3%A7a%20eletr%C3%B4nica%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-accent transition-colors block"
              >
                <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                <div className="font-bold text-lg">(15) 99657-0260</div>
              </a>
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">E-mail</div>
                <div className="font-bold text-lg text-sm">eletricenergy14@gmail.com</div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="pt-8">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Atendimento imediato • Orçamento sem compromisso
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
