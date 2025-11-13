import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Gerente de Facilities",
      company: "Indústria Metalúrgica XYZ",
      text: "A Eletric Energy transformou nossa infraestrutura elétrica. Profissionalismo e qualidade excepcionais. O sistema de CFTV instalado funciona perfeitamente.",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      role: "Proprietária",
      company: "Residencial",
      text: "Contratei para uma reforma elétrica completa em minha casa. Equipe muito profissional, pontual e o resultado superou minhas expectativas. Recomendo!",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      role: "Diretor de Operações",
      company: "Shopping Center Plaza",
      text: "Trabalham conosco há 5 anos na manutenção preventiva. Nunca tivemos problemas. O suporte 24h é fundamental para nosso negócio.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-card border border-accent/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-accent">Depoimentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O Que Nossos <span className="gradient-text-blue">Clientes</span> Dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Confiança construída através de resultados e relacionamentos de longo prazo
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-accent" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="relative z-10">
                  <div className="font-bold text-foreground group-hover:text-accent transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {testimonial.company}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-4 bg-card border border-primary/20 rounded-full">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-semibold">
                4.9/5.0 baseado em 250+ avaliações
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
