import { Clock, Shield, Award, HeadphonesIcon } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Equipe pronta para atender suas necessidades com agilidade e pontualidade.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "Todos os nossos serviços possuem garantia e seguem os mais altos padrões de qualidade.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Award,
      title: "Técnicos Certificados",
      description: "Profissionais qualificados e certificados com anos de experiência no mercado.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte 24h",
      description: "Atendimento disponível 24 horas para emergências e suporte técnico.",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Nossas Vantagens</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por Que Escolher a <span className="gradient-text-orange">Eletric Energy</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compromisso com excelência, segurança e satisfação do cliente em cada projeto
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover-scale">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-primary/10 rounded-full transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text-orange mb-2">ISO 9001</div>
              <div className="text-sm text-muted-foreground">Certificação de Qualidade</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-blue mb-2">NR-10</div>
              <div className="text-sm text-muted-foreground">Conformidade e Segurança</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-orange mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-blue mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Disponibilidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
