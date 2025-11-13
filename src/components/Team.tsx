import teamImage from "@/assets/ceos-team.jpg";
import { Linkedin } from "lucide-react";

const Team = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Nossa Liderança</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conheça os <span className="gradient-text-orange">Fundadores</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profissionais dedicados e apaixonados por oferecer as melhores soluções em energia e segurança eletrônica
            </p>
          </div>

          {/* Team Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <img 
                  src={teamImage}
                  alt="João Vitor Campos Morais e Joyce de Camargo Vieira - CEOs da Eletric Energy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* João Vitor */}
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">João Vitor Campos Morais</h3>
                    <p className="text-primary font-semibold">CEO & Técnico Especialista</p>
                  </div>
                  <a 
                    href="#" 
                    className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                    aria-label="LinkedIn de João Vitor"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Especialista em sistemas elétricos industriais e segurança eletrônica, 
                  com certificações em NR-10 e ampla experiência em projetos de grande porte.
                </p>
              </div>

              {/* Joyce */}
              <div className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Joyce de Camargo Vieira</h3>
                    <p className="text-accent font-semibold">CEO & Diretora de Operações</p>
                  </div>
                  <a 
                    href="#" 
                    className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn de Joyce"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Responsável pela gestão estratégica e operacional, garantindo excelência 
                  no atendimento e qualidade em todos os projetos da Eletric Energy.
                </p>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex-1 h-px bg-border" />
                <div className="text-sm text-muted-foreground">
                  Liderança comprometida com a excelência
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
