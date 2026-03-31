/**
 * VirtruvIA — Apresentação Comercial
 * Design: Clean, premium, azul institucional como protagonista.
 * Imagens: Renascença + Futurismo/IA, fluidas e integradas.
 * Tom: Humano, estratégico, brasileiro. Sem termos de IA, sem dashes.
 */

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ─── CDN Assets ─── */
const LOGO_DARK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/logo-dark-transparent_307fc080.png";
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/logo-white_05b641bd.png";

const IMG_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/hero-renaissance-ai-cLrMUwQm7BNWBHhHGb8wLX.webp";
const IMG_STRATEGY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/renaissance-strategy-5PoVgzGuZBbrbzJBmpEYEf.webp";
const IMG_BLUEPRINT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/method-blueprint-A5VhKZefct7X38NZ76ysRf.webp";
const IMG_VISION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/vision-future-cG8yS5QbWCnkVTB9MWuHMG.webp";
const IMG_COLUMN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/brand-architecture-QrYxvLJiCYEWE4ALkuCQ5b.webp";

/* ─── Animation Helpers ─── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children, delay = 0, direction = "left", className = "" }: { children: React.ReactNode; delay?: number; direction?: "left" | "right"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const x = direction === "left" ? -40 : 40;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ManifestoSection />
      <DiagnosticSection />
      <DifferentialsSection />
      <MethodSection />
      <SolutionsSection />
      <ResultsSection />
      <QuoteSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO — Impactful, with Renaissance+AI bust image
   ═══════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 pt-10 md:pt-14 px-6 md:px-12 lg:px-20"
      >
        <img src={LOGO_DARK} alt="VirtruvIA" className="h-10 md:h-14 w-auto" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div style={{ opacity: textOpacity }} className="py-12 md:py-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-azure-deep text-xs tracking-[0.35em] uppercase mb-8"
            >
              Branding & Marketing Estratégico
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-display text-charcoal text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.12] tracking-tight"
            >
              Marcas fortes não{" "}
              <br className="hidden md:block" />
              disputam atenção.
              <span className="block text-azure-deep mt-3">Ocupam espaço.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="origin-left"
            >
              <div className="w-16 h-[2px] bg-bronze my-10" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="font-serif text-charcoal/60 text-base md:text-lg leading-[1.9] max-w-lg"
            >
              Construímos marcas com posicionamento claro, identidade coerente e estratégia que se mede em resultados. Para empresas que entendem que marca é patrimônio, não detalhe.
            </motion.p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            style={{ y: imgY }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative"
            >
              <img
                src={IMG_HERO}
                alt="Renascença encontra o futuro"
                className="w-full max-w-[520px] h-auto rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 pb-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-azure-deep/25"
        />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   MANIFESTO — Shortened, impactful
   ═══════════════════════════════════════════════════ */
function ManifestoSection() {
  return (
    <section className="py-28 md:py-36 bg-[#f4f6f8]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Sobre nós</p>
              <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-10">
                O Renascimento das Marcas
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-body text-charcoal/75 text-base md:text-[1.05rem] leading-[2] mb-8">
                Empresas valiosas ainda são vestidas com linguagens frágeis. Marcas promissoras, reduzidas a fórmulas que o mercado já cansou de ver. A forma como uma marca aparece define o valor que o mercado aceita pagar, o tipo de cliente que ela atrai e o espaço que ela ocupa na memória de quem importa.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-body text-charcoal/75 text-base md:text-[1.05rem] leading-[2]">
                A VirtruvIA existe para mudar isso. Nosso trabalho vive na convergência entre leitura humana profunda, pensamento estratégico e precisão analítica. Porque design sem estratégia é decoração cara. E estratégia sem sensibilidade produz marcas corretas, mas esquecíveis.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.3}>
              <img
                src={IMG_STRATEGY}
                alt="Estratégia e conhecimento"
                className="w-full rounded-sm"
              />
              <p className="font-serif text-azure-deep/50 text-lg italic leading-relaxed mt-8 text-center">
                "Onde a estética termina sem estratégia, começa o desperdício."
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   DIAGNOSTIC — The pain point
   ═══════════════════════════════════════════════════ */
function DiagnosticSection() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <SlideIn direction="left">
            <img
              src={IMG_VISION}
              alt="Do clássico ao digital"
              className="w-full rounded-sm"
            />
          </SlideIn>

          {/* Content */}
          <div>
            <FadeIn>
              <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">O Diagnóstico</p>
              <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
                Sua empresa é melhor do que parece?
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="font-body text-charcoal/75 text-base leading-[2] mb-6">
                Muitos negócios sólidos enfrentam uma distorção silenciosa: o mercado simplesmente não enxerga o valor que a empresa já entrega. Quando a percepção fica abaixo da realidade, o negócio vira refém de comparação por preço.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-body text-charcoal/75 text-base leading-[2] mb-10">
                O concorrente cobra mais caro e fecha antes. A proposta precisa de justificativa a cada reunião. A marca não sustenta o peso do que foi construído. Essa é a dor que diagnosticamos e corrigimos.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Estratégica", desc: "Onde sua marca realmente compete" },
                  { label: "Perceptual", desc: "Como o mercado vê você de verdade" },
                  { label: "Narrativa", desc: "O que sua comunicação diz por você" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="w-8 h-[2px] bg-azure-deep mb-4" />
                    <p className="font-display text-charcoal text-sm font-semibold mb-1">{item.label}</p>
                    <p className="font-body text-charcoal/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   DIFFERENTIALS — What sets VirtruvIA apart
   ═══════════════════════════════════════════════════ */
function DifferentialsSection() {
  return (
    <section className="py-28 md:py-36 bg-azure-deep">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="font-body text-bronze-light text-xs tracking-[0.35em] uppercase mb-6">O Que Nos Diferencia</p>
              <h2 className="font-display text-white text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
                Não somos uma agência de posts. Somos arquitetos de percepção.
              </h2>
              <p className="font-body text-white/60 text-base leading-[2]">
                O mercado brasileiro de branding se divide entre agências tradicionais que ignoram dados e agências digitais que reduzem tudo a templates. A VirtruvIA ocupa o espaço entre eles: pensamento estratégico com rigor analítico, sensibilidade humana com precisão de dados.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Diagnóstico, não achismo",
                  desc: "Todo projeto começa com leitura real do mercado, da concorrência e da percepção pública. Aqui, decisão se baseia em dados, não em gosto pessoal."
                },
                {
                  title: "Posicionamento com estrutura",
                  desc: "Território de marca, arquitetura de mensagem, identidade verbal e visual integradas. Não entregamos peças soltas. Entregamos sistemas."
                },
                {
                  title: "Semiótica aplicada",
                  desc: "Lemos sinais, símbolos e códigos de percepção. Entendemos como o mercado interpreta cada escolha visual e verbal que a sua marca faz."
                },
                {
                  title: "Construção de legado",
                  desc: "Não fazemos marcas para o trimestre. Construímos presença que resiste ao tempo, acumula valor e protege o patrimônio do negócio."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group">
                    <div className="w-8 h-[2px] bg-bronze mb-5" />
                    <h3 className="font-display text-white text-base font-semibold mb-3">{item.title}</h3>
                    <p className="font-body text-white/50 text-sm leading-[1.9]">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   METHOD — Clean steps with blueprint image
   ═══════════════════════════════════════════════════ */
function MethodSection() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
          <div>
            <FadeIn>
              <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Nosso Método</p>
              <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
                Diagnóstico antes de execução. Sempre.
              </h2>
              <p className="font-body text-charcoal/70 text-base leading-[2]">
                Nenhum projeto avança sem leitura real de onde a marca está e onde ela deveria estar. Usamos pensamento estratégico, semiótica e análise aprofundada para dar forma a marcas que sabem quem são, o que prometem e para onde querem crescer.
              </p>
            </FadeIn>
          </div>
          <SlideIn direction="right">
            <img
              src={IMG_BLUEPRINT}
              alt="Método estratégico"
              className="w-full rounded-sm"
            />
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {[
            {
              step: "01",
              title: "Diagnóstico Estratégico",
              desc: "Auditoria de percepção, mapeamento de territórios de marca desocupados e análise da distorção entre valor real e valor percebido."
            },
            {
              step: "02",
              title: "Reposicionamento",
              desc: "Definição do posicionamento estratégico, arquitetura de marca, narrativa institucional e sistema de mensagens."
            },
            {
              step: "03",
              title: "Identidade & Sistema",
              desc: "Identidade visual completa, sistema de aplicação, diretrizes de uso e manual de implementação."
            },
            {
              step: "04",
              title: "Operação Contínua",
              desc: "Consistência operacional, conteúdo estratégico, presença digital e governança de marca no longo prazo."
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group">
                <span className="font-display text-azure-deep/15 text-6xl font-medium block mb-4 group-hover:text-azure-deep/30 transition-colors duration-500">
                  {item.step}
                </span>
                <div className="w-8 h-[2px] bg-azure-deep mb-5" />
                <h3 className="font-display text-charcoal text-lg font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-charcoal/55 text-sm leading-[1.8]">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SOLUTIONS — Three products, harmonious light cards
   ═══════════════════════════════════════════════════ */
function SolutionsSection() {
  return (
    <section className="py-28 md:py-36 bg-[#f4f6f8]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Soluções</p>
            <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
              Nossas Soluções
            </h2>
            <p className="font-body text-charcoal/65 text-base leading-[2]">
              Cada solução foi desenhada para um momento específico da jornada de uma marca. Não trabalhamos com pacotes genéricos. Trabalhamos com arquitetura estratégica sob medida.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Solution 1: Consultoria */}
          <FadeIn delay={0}>
            <div className="group bg-white border border-charcoal/6 p-10 h-full flex flex-col hover:border-azure-deep/20 hover:shadow-lg hover:shadow-azure-deep/5 transition-all duration-500">
              <div className="mb-8">
                <span className="font-body text-azure-deep text-xs tracking-[0.2em] uppercase">Reestruturação</span>
                <h3 className="font-display text-2xl font-medium text-charcoal mt-3 mb-2">
                  Consultoria Estratégica de Marca
                </h3>
                <p className="font-serif text-charcoal/40 text-sm italic">Para quem precisa corrigir a fundação</p>
              </div>
              <div className="w-full h-[1px] bg-charcoal/8 mb-8" />
              <div className="flex-1">
                <p className="font-body text-charcoal/60 text-sm leading-[1.9] mb-6">
                  Diagnóstico estratégico completo, reposicionamento de marca, arquitetura de mensagem e identidade visual que sustenta o valor real do negócio.
                </p>
                <div className="space-y-3">
                  {["Auditoria de percepção e diagnóstico", "Posicionamento e arquitetura de marca", "Narrativa institucional e sistema de mensagens", "Identidade visual completa e diretrizes"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-azure-deep/30 rounded-full mt-1.5 shrink-0" />
                      <span className="font-body text-charcoal/50 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-charcoal/6">
                <p className="font-body text-charcoal/30 text-xs tracking-wider uppercase">Projeto único</p>
              </div>
            </div>
          </FadeIn>

          {/* Solution 2: Posicionamento Contínuo (Featured) */}
          <FadeIn delay={0.1}>
            <div className="group bg-white border-2 border-azure-deep/20 p-10 h-full flex flex-col hover:border-azure-deep/40 hover:shadow-xl hover:shadow-azure-deep/8 transition-all duration-500 relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-azure-deep" />
              <div className="mb-8">
                <span className="font-body text-bronze text-xs tracking-[0.2em] uppercase">Posicionamento</span>
                <h3 className="font-display text-2xl font-medium text-charcoal mt-3 mb-2">
                  Estruturação & Posicionamento Contínuo
                </h3>
                <p className="font-serif text-charcoal/40 text-sm italic">Para quem precisa de consistência estratégica</p>
              </div>
              <div className="w-full h-[1px] bg-charcoal/8 mb-8" />
              <div className="flex-1">
                <p className="font-body text-charcoal/60 text-sm leading-[1.9] mb-6">
                  Posicionamento estratégico contínuo, estruturação de marca e estratégias de construção de presença. Acompanhamento mensal para garantir que a percepção do mercado acompanhe o crescimento real do negócio.
                </p>
                <div className="space-y-3">
                  {["Posicionamento estratégico e estruturação de marca", "Estratégias de construção e fortalecimento de presença", "Planejamento editorial e narrativa de autoridade", "Governança de marca e alinhamento de equipe", "Monitoramento de percepção e ajustes contínuos"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-azure-deep/40 rounded-full mt-1.5 shrink-0" />
                      <span className="font-body text-charcoal/50 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-charcoal/8">
                <p className="font-body text-azure-deep/50 text-xs tracking-wider uppercase">Acompanhamento mensal</p>
              </div>
            </div>
          </FadeIn>

          {/* Solution 3: Operação */}
          <FadeIn delay={0.2}>
            <div className="group bg-white border border-charcoal/6 p-10 h-full flex flex-col hover:border-azure-deep/20 hover:shadow-lg hover:shadow-azure-deep/5 transition-all duration-500">
              <div className="mb-8">
                <span className="font-body text-azure-deep text-xs tracking-[0.2em] uppercase">Operação</span>
                <h3 className="font-display text-2xl font-medium text-charcoal mt-3 mb-2">
                  Operação Contínua de Marketing
                </h3>
                <p className="font-serif text-charcoal/40 text-sm italic">Para quem já tem estrutura e precisa de consistência</p>
              </div>
              <div className="w-full h-[1px] bg-charcoal/8 mb-8" />
              <div className="flex-1">
                <p className="font-body text-charcoal/60 text-sm leading-[1.9] mb-6">
                  Gestão estratégica completa de marketing, criação de conteúdo com profundidade, presença digital qualificada e governança de marca no dia a dia.
                </p>
                <div className="space-y-3">
                  {["Gestão estratégica e planejamento editorial", "Conteúdo de autoridade para múltiplos canais", "Presença digital e distribuição qualificada", "Treinamento e governança de marca"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-azure-deep/30 rounded-full mt-1.5 shrink-0" />
                      <span className="font-body text-charcoal/50 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-charcoal/6">
                <p className="font-body text-charcoal/30 text-xs tracking-wider uppercase">Acompanhamento mensal</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   RESULTS — Tangible outcomes with column image
   ═══════════════════════════════════════════════════ */
function ResultsSection() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <FadeIn>
              <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Resultados</p>
              <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
                O que muda quando a marca encontra seu lugar
              </h2>
              <p className="font-body text-charcoal/65 text-base leading-[2] mb-10">
                Quando a percepção do mercado se alinha ao valor real do negócio, os efeitos aparecem onde mais importa.
              </p>
            </FadeIn>
            <SlideIn direction="left" delay={0.2}>
              <img
                src={IMG_COLUMN}
                alt="Arquitetura de marca"
                className="w-full max-w-[300px] rounded-sm hidden lg:block"
              />
            </SlideIn>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  area: "No bolso",
                  items: [
                    "Ticket médio mais alto com menos objeção de preço",
                    "Redução de descontos concedidos",
                    "Contratos fechados com mais velocidade",
                    "Entrada em mercados com percepção de autoridade"
                  ]
                },
                {
                  area: "No mercado",
                  items: [
                    "De opção comum para referência clara no segmento",
                    "Maior atração de talentos qualificados",
                    "Parcerias estratégicas com players maiores",
                    "Proteção contra concorrência por preço"
                  ]
                },
                {
                  area: "Na operação",
                  items: [
                    "Comunicação que escala sem perder identidade",
                    "Equipe alinhada com discurso único",
                    "Processos de decisão mais rápidos e claros",
                    "Governança de marca estruturada"
                  ]
                }
              ].map((group, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div>
                    <h3 className="font-display text-azure-deep text-xl font-semibold mb-5">{group.area}</h3>
                    <div className="w-10 h-[2px] bg-bronze mb-5" />
                    <div className="space-y-4">
                      {group.items.map((item, j) => (
                        <p key={j} className="font-body text-charcoal/55 text-sm leading-[1.8]">{item}</p>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   QUOTE — Centered, impactful
   ═══════════════════════════════════════════════════ */
function QuoteSection() {
  return (
    <section className="py-24 md:py-32 bg-[#f4f6f8]">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <FadeIn>
          <div className="w-12 h-[2px] bg-bronze mx-auto mb-12" />
          <p className="font-serif text-azure-deep text-2xl md:text-3xl lg:text-[2.25rem] italic leading-[1.5] mb-8">
            "Presença não se improvisa. Se arquiteta."
          </p>
          <div className="w-12 h-[2px] bg-bronze mx-auto" />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CTA — Schedule meeting
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-28 md:py-36 bg-azure-deep relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <FadeIn>
          <p className="font-body text-bronze-light text-xs tracking-[0.35em] uppercase mb-6">Próximo Passo</p>
          <h2 className="font-display text-white text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.2] mb-8">
            Vamos conversar sobre o futuro da sua marca?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-body text-white/55 text-base leading-[2] mb-12 max-w-xl mx-auto">
            Agende uma reunião de apresentação. Sem compromisso, sem pressão. Uma conversa estratégica para entender onde sua marca está, onde deveria estar e como podemos construir essa ponte juntos.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="#agendar"
            className="inline-flex items-center justify-center font-body text-sm text-azure-deep bg-white hover:bg-white/90 transition-all duration-300 px-10 py-4 tracking-wider uppercase group"
          >
            Agendar reunião de apresentação
            <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FOOTER — Minimal
   ═══════════════════════════════════════════════════ */
function FooterSection() {
  return (
    <footer className="py-14 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={LOGO_WHITE} alt="VirtruvIA" className="h-8 w-auto opacity-60" />
          <p className="font-body text-white/25 text-xs tracking-wider">
            VirtruvIA &copy; {new Date().getFullYear()}. Branding & Marketing Estratégico.
          </p>
        </div>
      </div>
    </footer>
  );
}
