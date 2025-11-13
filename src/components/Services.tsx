import { Zap, Factory, FileText, CheckCircle, Video, Bell, Lock, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Manutenção Elétrica Residencial",
      description: "Instalações, reparos e manutenção preventiva para sua residência com segurança e qualidade.",
      color: "orange"
    },
    {
      icon: Factory,
      title: "Manutenção Elétrica Industrial",
      description: "Soluções completas para indústrias, garantindo continuidade operacional e eficiência energética.",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Projetos Elétricos",
      description: "Desenvolvimento de projetos elétricos completos, seguindo todas as normas técnicas vigentes.",
      color: "orange"
    },
    {
      icon: CheckCircle,
      title: "Instalações e Inspeções",
      description: "Instalações profissionais e inspeções técnicas detalhadas para garantir segurança total.",
      color: "blue"
    },
    {
      icon: Video,
      title: "CFTV / Sistemas de Câmeras",
      description: "Instalação de sistemas de circuito fechado de TV com tecnologia de ponta e monitoramento remoto.",
      color: "orange"
    },
    {
      icon: Bell,
      title: "Alarmes e Sensores",
      description: "Sistemas de alarme inteligentes com sensores de última geração para máxima proteção.",
      color: "blue"
    },
    {
      icon: Lock,
      title: "Automação e Controle de Acesso",
      description: "Soluções em automação residencial e controle de acesso para empresas e condomínios.",
      color: "orange"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-card border border-accent/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-accent">Nossos Serviços</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Soluções <span className="gradient-text-blue">Completas</span> Para Você
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Do residencial ao industrial, oferecemos serviços especializados em elétrica e segurança eletrônica
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-8 bg-card border rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                  service.color === 'orange' 
                    ? 'border-primary/20 hover:border-primary hover-glow-orange' 
                    : 'border-accent/20 hover:border-accent hover-glow-blue'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl mb-4 transition-all duration-300 ${
                  service.color === 'orange'
                    ? 'bg-primary/10 group-hover:bg-primary/20'
                    : 'bg-accent/10 group-hover:bg-accent/20'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === 'orange' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  service.color === 'orange'
                    ? 'group-hover:text-primary'
                    : 'group-hover:text-accent'
                }`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  service.color === 'orange' ? 'bg-primary' : 'bg-accent'
                }`} />
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Todos os serviços incluem garantia e suporte técnico especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
