import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoFull from "@/assets/logo-full.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logoFull} 
              alt="Eletric Energy Logo" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-muted-foreground leading-relaxed">
              Soluções completas em energia e segurança eletrônica para residências, 
              indústrias e comércio.
            </p>
            <div className="flex gap-3 pt-4">
              <a 
                href="#" 
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors hover-scale"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors hover-scale"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors hover-scale"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors hover-scale"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Manutenção Elétrica Residencial",
                "Manutenção Elétrica Industrial",
                "Projetos Elétricos",
                "CFTV e Segurança",
                "Automação e Controle"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#contato" },
                { label: "Blog", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://wa.me/5515996570260?text=Ol%C3%A1!%20%F0%9F%91%8B%20Aqui%20%C3%A9%20da%20Eletric%20Energy.%20Como%20posso%20ajudar%20voc%C3%AA%20hoje%3F%20Precisando%20de%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20el%C3%A9trica%20ou%20seguran%C3%A7a%20eletr%C3%B4nica%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    (15) 99657-0260
                  </a>
                  <div className="text-sm text-muted-foreground">WhatsApp disponível</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:eletricenergy14@gmail.com"
                    className="text-foreground break-all hover:text-accent transition-colors"
                  >
                    eletricenergy14@gmail.com
                  </a>
                  <div className="text-sm text-muted-foreground">Resposta em 24h</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-foreground">Pilar do Sul, SP</div>
                  <div className="text-sm text-muted-foreground">Atendemos toda região</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Eletric Energy. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
