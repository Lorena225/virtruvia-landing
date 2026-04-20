import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, BarChart3, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Mercado Sustentável - Landing Page
 * Design: Modernismo Regenerativo
 * Paleta: Creme, Verde Profundo, Amarelo Quente, Marrom Terroso
 * Tipografia: Fraunces (títulos) + IBM Plex Sans (corpo)
 */

interface CounterProps {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

function Counter({ end, label, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary">
              Mercado Sustentável
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#premissa"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Premissa
            </a>
            <a
              href="#plataforma"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Plataforma
            </a>
            <a
              href="#valor"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Valor
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-hero relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663524735229/7VZrbgvEkBw5UCKGFyTxdy/hero-biodiversity-EA7ntaHenFeM5XhumGAgXu.webp"
            alt="Biodiversidade Brasileira"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="eyebrow">
              Mercado Sustentável · Est. 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Do Brasil para o mundo que está nascendo.
            </h1>
            <p className="subtitle mb-8 max-w-xl">
              Somos a plataforma brasileira de comércio eletrônico dedicada
              exclusivamente à economia de impacto. A ponte entre o produtor
              responsável e o consumidor consciente.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Começar Agora <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm text-muted-foreground">
          <p>Role para continuar</p>
          <div className="mt-2 animate-bounce">↓</div>
        </div>
      </section>

      {/* Premissa Section */}
      <section
        id="premissa"
        data-animate
        className={`section-content container max-w-6xl mx-auto ${
          visibleSections.has("premissa") ? "slide-up" : ""
        }`}
      >
        <div>
          <div className="eyebrow">01 — Premissa</div>
          <h2 className="text-4xl font-bold mb-6">
            A próxima década pertence a quem unir escala comercial, rastreamento
            auditável e regeneração verificável.
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            O mundo deixou de aceitar promessas. Reguladores na Europa, Estados
            Unidos e Ásia exigem rastreabilidade detalhada. Fundos e grandes
            compradores querem evidências auditáveis, não narrativas de
            marketing. O consumidor saiu da era do greenwashing.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Construímos o Mercado Sustentável a partir do Brasil porque nenhum
            outro país reúne, ao mesmo tempo, a maior biodiversidade do planeta,
            a matriz elétrica mais limpa entre as grandes economias, a
            agricultura familiar mais capilarizada e o saber tradicional mais
            profundo.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <p className="text-sm text-muted-foreground">
              biomas brasileiros que sustentam uma paleta produtiva impossível de
              replicar
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">0,5%</div>
            <p className="text-sm text-muted-foreground">
              do lucro líquido destinado fixamente ao Projeto Regenera Brasil
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <p className="text-sm text-muted-foreground">
              de redução nas tarifas de frete pela consolidação da operação
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">
              dos produtos certificados pelo Selo Cadeia Sustentável antes da
              venda
            </p>
          </div>
        </div>
      </section>

      {/* Plataforma Section */}
      <section
        id="plataforma"
        data-animate
        className={`bg-white py-20 ${
          visibleSections.has("plataforma") ? "fade-in" : ""
        }`}
      >
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="eyebrow justify-center">02 — Plataforma</div>
            <h2 className="text-4xl font-bold mb-6">
              Quatro pilares operacionais, um único propósito.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Operamos como uma central de certificação, comercialização e
              capacitação dedicada exclusivamente à economia de impacto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Curadoria Ativa",
                description:
                  "Nenhum produto entra na plataforma sem passar pelo Selo Cadeia Sustentável, com critérios eliminatórios públicos e auditoria anual.",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Transparência Radical",
                description:
                  "Cada ficha técnica detalha origem, remuneração da cadeia e impacto ambiental do produto.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Reinvestimento Estruturado",
                description:
                  "Parcela fixa do lucro líquido volta automaticamente para restauração de biomas e capacitação de produtores.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Logística Regenerativa",
                description:
                  "Estrutura descentralizada com última milha limpa nas capitais e pontos de retirada em comércios locais.",
              },
            ].map((pilar, i) => (
              <div
                key={i}
                className="p-8 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {pilar.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{pilar.title}</h3>
                <p className="text-muted-foreground">{pilar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fornecedor Section */}
      <section
        data-animate
        className={`section-content container max-w-6xl mx-auto ${
          visibleSections.has("fornecedor") ? "slide-up" : ""
        }`}
      >
        <div>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663524735229/7VZrbgvEkBw5UCKGFyTxdy/producer-hands-Nzuu2V2jDLGca5YV7ZDydf.webp"
            alt="Produtor com colheita"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div>
          <div className="eyebrow">03 — Portal do Fornecedor</div>
          <h2 className="text-4xl font-bold mb-6">
            Um painel completo para profissionalizar o negócio do produtor.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            O fornecedor parceiro não recebe apenas um canal de venda. Ele
            recebe um painel de controle integrado que o coloca no mesmo padrão
            de gestão de uma marca de grande porte.
          </p>

          <div className="space-y-4">
            {[
              "Centro de Documentação",
              "Rastreio de Cada Produto",
              "Histórico Completo de Vendas",
              "Insights e Relatórios de Mercado",
              "Academia Sustentável",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustentabilidade Section */}
      <section
        data-animate
        className={`bg-primary text-primary-foreground py-20 ${
          visibleSections.has("sustentabilidade") ? "fade-in" : ""
        }`}
      >
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="eyebrow text-primary-foreground/80">
                04 — Selo Cadeia Sustentável
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Um contrato público de conformidade, não uma promessa.
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                O Selo Cadeia Sustentável é a certificação privada que funciona
                como porta de entrada da plataforma, sujeita a auditoria anual e
                suspensão imediata em caso de descumprimento.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Ausência total de trabalho análogo à escravidão",
                "Desvinculação completa de desmatamento ilegal",
                "Ausência de condenações ambientais ativas",
                "Auditoria simplificada anual com suspensão imediata",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reinvestimento Section */}
      <section
        data-animate
        className={`section-content container max-w-6xl mx-auto ${
          visibleSections.has("reinvestimento") ? "slide-up" : ""
        }`}
      >
        <div>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663524735229/7VZrbgvEkBw5UCKGFyTxdy/forest-restoration-bvMxXkPFEnEWXWomwHvzoy.webp"
            alt="Restauração Florestal"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div>
          <div className="eyebrow">05 — Ciclo de Reinvestimento</div>
          <h2 className="text-4xl font-bold mb-6">
            Impacto que nasce dentro do modelo de negócio.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Quanto mais vendemos, mais floresta volta em pé e mais produtores se
            qualificam. Não é filantropia corporativa: é desenho financeiro que
            devolve parte do lucro ao sistema que o gerou.
          </p>

          <div className="grid gap-6">
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
              <div className="text-2xl font-bold text-accent mb-2">0,5%</div>
              <h4 className="font-bold mb-2">Projeto Regenera Brasil</h4>
              <p className="text-sm text-muted-foreground">
                Destinação fixa do lucro líquido para financiamento de projetos
                de restauração ativa dos biomas brasileiros.
              </p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-2">0,1%</div>
              <h4 className="font-bold mb-2">Academia Sustentável</h4>
              <p className="text-sm text-muted-foreground">
                Destinação para manutenção e expansão da plataforma educacional
                do produtor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valor Section */}
      <section
        id="valor"
        data-animate
        className={`bg-white py-20 ${visibleSections.has("valor") ? "fade-in" : ""}`}
      >
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="eyebrow justify-center">08 — Proposta de Valor</div>
            <h2 className="text-4xl font-bold mb-6">
              Ganhos mensuráveis para três públicos ao mesmo tempo.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Para Investidores",
                items: [
                  "Receita recorrente com margem superior",
                  "Dados proprietários do consumidor consciente",
                  "Exposição ao mercado global em transição",
                  "Acesso a capital paciente e fundos de impacto",
                ],
              },
              {
                title: "Para o Governo",
                items: [
                  "Formalização mensurável de cadeias rurais",
                  "Evidências auditáveis de conformidade",
                  "Dados agregados para política pública",
                  "Fonte de renda para agricultura familiar",
                ],
              },
              {
                title: "Para Fornecedores",
                items: [
                  "Painel completo de gestão integrado",
                  "Acesso direto ao consumidor consciente",
                  "Selo de credibilidade que aumenta conversão",
                  "Educação contínua pela Academia",
                ],
              },
            ].map((coluna, i) => (
              <div
                key={i}
                className="p-8 bg-background rounded-lg border border-border"
              >
                <h3 className="text-xl font-bold mb-6">{coluna.title}</h3>
                <ul className="space-y-4">
                  {coluna.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-accent font-bold">◆</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Uma janela histórica, mas finita.
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Regulação em vigor, capital em transição, consumidor pronto e
            produtor disponível. Quem estruturar a plataforma de referência da
            economia regenerativa brasileira ocupará posição análoga à das
            grandes plataformas de comércio eletrônico da década passada.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Investir Agora <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Documentação Completa
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">
                  Mercado Sustentável
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                A ponte entre o produtor responsável e o consumidor consciente.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Para Fornecedores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Para Consumidores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Para Investidores
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Impacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2026 Mercado Sustentável. Todos os direitos reservados. | Est.
              2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
