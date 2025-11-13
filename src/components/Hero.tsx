import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-electrician.jpg";
import logoIcon from "@/assets/logo-icon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo top left */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src={logoIcon} 
          alt="Eletric Energy" 
          className="h-16 w-16 object-contain"
        />
      </div>
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Técnico profissional em ação"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Geometric elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-electric-blue/30 rotate-45 animate-pulse" />
        <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-primary/20 rotate-12" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-electric-blue/10 blur-xl rounded-full" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-semibold gradient-text-orange">
              Soluções Completas em Energia e Segurança
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Soluções Elétricas e{" "}
            <span className="gradient-text-orange">Segurança Eletrônica</span>
            {" "}com Alta Confiabilidade
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Residencial, Industrial e Comercial
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group hover-glow-orange text-lg px-8 py-6"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-accent/10 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/5515996570260?text=Ol%C3%A1!%20%F0%9F%91%8B%20Aqui%20%C3%A9%20da%20Eletric%20Energy.%20Como%20posso%20ajudar%20voc%C3%AA%20hoje%3F%20Precisando%20de%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20el%C3%A9trica%20ou%20seguran%C3%A7a%20eletr%C3%B4nica%3F" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-orange">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-blue">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-orange">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
