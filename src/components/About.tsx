import { Shield, Award, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança em Primeiro Lugar",
      description: "Todos os nossos serviços seguem rigorosos padrões de segurança e normas técnicas."
    },
    {
      icon: Award,
      title: "Certificações e Qualidade",
      description: "Equipe altamente qualificada com certificações reconhecidas no mercado."
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "Mais de 15 anos atendendo residências, indústrias e comércio com excelência."
    },
    {
      icon: Zap,
      title: "Tecnologia de Ponta",
      description: "Utilizamos os equipamentos mais modernos para garantir eficiência e durabilidade."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Sobre a Eletric Energy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sua Parceira em <span className="gradient-text-orange">Energia e Segurança</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos especialistas em soluções elétricas completas e sistemas de segurança eletrônica, 
              oferecendo serviços de alta qualidade para residências, indústrias e estabelecimentos comerciais.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover-glow-orange"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-accent">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Compromisso com excelência e segurança em cada projeto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
