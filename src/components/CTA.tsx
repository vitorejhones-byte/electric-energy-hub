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
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-card/50 backdrop-blur-sm border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-10 py-7"
              >
                <Phone className="mr-2" />
                Ligar Agora
              </Button>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">Telefone</div>
                <div className="font-bold text-lg">(11) 98765-4321</div>
              </div>
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                <div className="font-bold text-lg">(11) 98765-4321</div>
              </div>
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                <div className="text-sm text-muted-foreground mb-1">E-mail</div>
                <div className="font-bold text-lg text-sm">contato@eletricenergy.com.br</div>
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
