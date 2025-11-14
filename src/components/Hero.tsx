import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import BackgroundRemover from "./BackgroundRemover";

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
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Team Members with removed background */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Member 1 - Left */}
        <div className="absolute left-0 bottom-0 w-1/3 md:w-2/5 lg:w-1/3 h-full flex items-end">
          <BackgroundRemover
            src={teamMember1}
            alt="Profissional Eletric Energy"
            className="w-full h-auto object-contain"
            position="left"
          />
        </div>
        
        {/* Member 2 - Right */}
        <div className="absolute right-0 bottom-0 w-1/3 md:w-2/5 lg:w-1/3 h-full flex items-end">
          <BackgroundRemover
            src={teamMember2}
            alt="Profissional Eletric Energy"
            className="w-full h-auto object-contain"
            position="right"
          />
        </div>
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
              asChild
            >
              <a href="https://wa.me/5515996570260?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20elétricos%20e%20de%20segurança%20eletrônica." target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-accent/10 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/5515996570260?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Eletric%20Energy%20sobre%20serviços%20elétricos." target="_blank" rel="noopener noreferrer">
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
