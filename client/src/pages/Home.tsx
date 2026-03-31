/**
 * VirtruvIA Landing Page
 * Design: Clean, premium, light. Single page, no navigation menu.
 * Mandamentos: Vazio sagrado, hierarquia tipográfica, logo como selo, cada elemento justifica o preço, consistência sobre invenção.
 * Colors: Azul #859BA4 (institucional), Bronze #B07345 (acento max 20%), Nude #DBC2B4 (respiro), Pedra #8B847D (apoio).
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ─── CDN Assets ─── */
const LOGO_DARK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/logo-dark_82c9752f.png";
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/VirtruvIASemFundo1_63c362f2.png";
const HERO_SCULPTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/hero-sculpture-clean-fka7d7EwVMYpqxt9BxpVcw.webp";
const HANDS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/detail-hands-dto3Pto5sStJ5dniEtmN3h.webp";
const SCULPTURE_MODERN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/sculpture-modern-46NgvuUUpp6NTtAojzwSkv.webp";
const SCULPTURE_PHONE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/sculpture-phone_f94c4a02.png";

/* ─── Animation Helpers ─── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
  const x = direction === "left" ? -50 : 50;
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

/* ─── Thin Bronze Line ─── */
function BronzeLine({ className = "" }: { className?: string }) {
  return <div className={`w-16 h-[1px] bg-bronze my-8 ${className}`} />;
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <HeroSection />
      <ManifestoSection />
      <DifferentialsSection />
      <ProblemSection />
      <MethodSection />
      <SolutionsSection />
      <PersonasSection />
      <ResultsSection />
      <QuoteSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO — Logo centered, massive whitespace, sculpture
   ═══════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden bg-cream">
      {/* Top bar with logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-10 pt-12 md:pt-16 px-6 md:px-12 lg:px-20"
      >
        <img src={LOGO_DARK} alt="VirtruvIA" className="h-12 md:h-16 w-auto" />
      </motion.div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <motion.div style={{ opacity }} className="py-16 md:py-0">
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
              className="font-display text-charcoal text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.15] tracking-tight"
            >
              Marcas fortes não{" "}
              <br className="hidden md:block" />
              disputam atenção.
              <span className="block text-bronze mt-2">Ocupam espaço.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <BronzeLine className="my-10" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="font-serif text-stone-brand text-base md:text-lg leading-[1.9] max-w-lg italic"
            >
              Construímos marcas com posicionamento claro, identidade coerente e estratégia mensurável. Para empresas que entendem que marca é um ativo de valor, não um detalhe estético.
            </motion.p>
          </motion.div>

          {/* Sculpture */}
          <motion.div
            style={{ y: imgY }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              src={HERO_SCULPTURE}
              alt="Escultura clássica"
              className="w-[280px] md:w-[340px] lg:w-[400px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 pb-12 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-stone-brand/30"
        />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   MANIFESTO — Editorial, clean
   ═══════════════════════════════════════════════════ */
function ManifestoSection() {
  return (
    <section className="py-32 md:py-44 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <FadeIn>
          <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Manifesto</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-charcoal text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.2] mb-16">
            O Renascimento das Marcas
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <p className="font-body text-charcoal/80 text-base md:text-[1.05rem] leading-[2] mb-8">
                Há um esgotamento silencioso no mercado. Empresas valiosas são vestidas com linguagens frágeis, e marcas promissoras são reduzidas a fórmulas repetidas. Decisões de comunicação ainda são tomadas como se estética fosse apenas ornamento, e presença fosse apenas volume.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-body text-charcoal/80 text-base md:text-[1.05rem] leading-[2] mb-8">
                A forma como uma marca aparece redefine o valor que o mercado aceita pagar por ela, o tipo de cliente que ela atrai e o lugar que ela ocupa na memória coletiva. A VirtruvIA nasce em oposição a esse empobrecimento. Não existimos para produzir ruído elegante, métricas ocas ou promessas de palco. Existimos para restaurar proporção, inteligência e verdade.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="font-body text-charcoal/80 text-base md:text-[1.05rem] leading-[2]">
                Design sem estratégia é decoração cara. Estratégia sem sensibilidade humana produz marcas tecnicamente corretas, mas espiritualmente esquecíveis. O nosso trabalho está na convergência entre leitura humana profunda, pensamento estratégico e precisão analítica.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <FadeIn delay={0.5}>
              <p className="font-serif text-azure-deep/60 text-xl md:text-2xl italic leading-relaxed text-center lg:text-left">
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
   DIFFERENTIALS — What sets VirtruvIA apart
   ═══════════════════════════════════════════════════ */
function DifferentialsSection() {
  return (
    <section className="py-28 md:py-36 bg-nude/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">O Que Nos Diferencia</p>
              <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
                Não somos uma agência de posts. Somos arquitetos de percepção.
              </h2>
              <p className="font-body text-charcoal/70 text-base leading-[2]">
                O mercado brasileiro de branding se divide entre agências tradicionais que ignoram dados e "agências digitais" que reduzem tudo a templates. A VirtruvIA ocupa o espaço entre eles: pensamento estratégico com rigor analítico, sensibilidade humana com precisão de dados.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: "Diagnóstico, não achismo",
                  desc: "Cada projeto começa com leitura real do mercado, da concorrência e da percepção pública. Decisões baseadas em dados, não em gosto pessoal."
                },
                {
                  title: "Posicionamento com estrutura",
                  desc: "Território de marca, arquitetura de mensagem, identidade verbal e visual integradas. Não entregamos peças soltas, entregamos sistemas."
                },
                {
                  title: "Semiótica aplicada",
                  desc: "Lemos sinais, símbolos e códigos de percepção. Entendemos como o mercado interpreta cada escolha visual e verbal da sua marca."
                },
                {
                  title: "Construção de legado",
                  desc: "Não fazemos marcas para o trimestre. Construímos presença que resiste ao tempo, que acumula valor e que protege o patrimônio do negócio."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group">
                    <div className="w-8 h-[1px] bg-bronze mb-5" />
                    <h3 className="font-display text-charcoal text-base font-semibold mb-3">{item.title}</h3>
                    <p className="font-body text-stone-brand text-sm leading-[1.9]">{item.desc}</p>
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
   PROBLEM — Diagnosis, with hands image
   ═══════════════════════════════════════════════════ */
function ProblemSection() {
  return (
    <section className="py-32 md:py-44 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <SlideIn direction="left">
            <div className="relative">
              <img
                src={HANDS_IMG}
                alt="Conexão entre estratégia e execução"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </SlideIn>

          {/* Content */}
          <div>
            <FadeIn>
              <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">O Diagnóstico</p>
              <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
                Sua empresa é melhor<br />do que parece?
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="font-body text-charcoal/75 text-base leading-[2] mb-6">
                Muitos negócios sólidos enfrentam uma distorção silenciosa: o mercado não enxerga com clareza o valor que a empresa já entrega. Quando a percepção chega abaixo da realidade, o negócio vira refém de comparação por preço.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-body text-charcoal/75 text-base leading-[2] mb-12">
                O concorrente cobra mais caro e fecha antes. A proposta precisa de justificativa a cada reunião. A marca não sustenta o peso do que foi construído. Essa é a dor que diagnosticamos e corrigimos.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: "Estratégica", desc: "Onde sua marca realmente compete" },
                  { label: "Perceptual", desc: "Como o mercado realmente vê você" },
                  { label: "Narrativa", desc: "O que sua comunicação realmente diz" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="w-8 h-[1px] bg-bronze mb-4" />
                    <p className="font-display text-charcoal text-sm font-semibold mb-1">{item.label}</p>
                    <p className="font-body text-stone-brand text-xs leading-relaxed">{item.desc}</p>
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
   METHOD — Clean steps, editorial
   ═══════════════════════════════════════════════════ */
function MethodSection() {
  return (
    <section className="py-32 md:py-44 bg-nude/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Nosso Método</p>
            <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
              Diagnóstico antes de execução. Sempre.
            </h2>
            <p className="font-body text-charcoal/75 text-base leading-[2]">
              Nenhum projeto avança sem leitura real de onde a marca está e onde ela deveria estar. Usamos pensamento estratégico, semiótica, dados e análise aprofundada para dar forma a marcas que sabem quem são, o que prometem e para onde querem crescer.
            </p>
          </FadeIn>
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
            <FadeIn key={i} delay={i * 0.12}>
              <div className="group">
                <span className="font-display text-azure/20 text-6xl font-medium block mb-4 group-hover:text-azure/40 transition-colors duration-500">
                  {item.step}
                </span>
                <div className="w-8 h-[1px] bg-bronze mb-5" />
                <h3 className="font-display text-charcoal text-lg font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-stone-brand text-sm leading-[1.8]">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SOLUTIONS — Three products, clean cards
   ═══════════════════════════════════════════════════ */
function SolutionsSection() {
  return (
    <section className="py-32 md:py-44 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Soluções</p>
            <h2 className="font-display text-cream text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
              As Soluções Virtruvia<span className="text-bronze">nas</span>
            </h2>
            <p className="font-body text-cream/60 text-base leading-[2]">
              Cada solução foi desenhada para um momento específico da jornada de uma marca. Não oferecemos pacotes genéricos. Oferecemos arquitetura estratégica sob medida.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Solution 1: Consultoria */}
          <FadeIn delay={0}>
            <div className="group border border-cream/8 p-10 h-full flex flex-col hover:border-bronze/20 transition-all duration-500">
              <div className="mb-8">
                <span className="font-body text-azure text-xs tracking-[0.2em] uppercase">Reestruturação</span>
                <h3 className="font-display text-2xl font-medium text-cream mt-3 mb-2">
                  Consultoria Estratégica de Marca
                </h3>
                <p className="font-serif text-cream/35 text-sm italic">Para quem precisa corrigir a fundação</p>
              </div>
              <div className="w-full h-[1px] bg-cream/8 mb-8" />
              <div className="flex-1">
                <p className="font-body text-cream/55 text-sm leading-[1.9] mb-6">
                  Diagnóstico estratégico completo, reposicionamento de marca, arquitetura de mensagem e identidade visual que sustenta o valor real do negócio.
                </p>
                <div className="space-y-3">
                  {["Auditoria de percepção e diagnóstico", "Posicionamento e arquitetura de marca", "Narrativa institucional e sistema de mensagens", "Identidade visual completa e diretrizes"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-bronze rounded-full mt-2 shrink-0" />
                      <span className="font-body text-cream/45 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-cream/8">
                <p className="font-body text-cream/25 text-xs tracking-wider uppercase">Projeto único</p>
              </div>
            </div>
          </FadeIn>

          {/* Solution 2: Posicionamento Contínuo (Recorrência) */}
          <FadeIn delay={0.12}>
            <div className="group border border-bronze/20 p-10 h-full flex flex-col hover:border-bronze/40 transition-all duration-500 relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-bronze" />
              <div className="mb-8">
                <span className="font-body text-bronze text-xs tracking-[0.2em] uppercase">Posicionamento</span>
                <h3 className="font-display text-2xl font-medium text-cream mt-3 mb-2">
                  Estruturação & Posicionamento Contínuo
                </h3>
                <p className="font-serif text-cream/35 text-sm italic">Para quem precisa de consistência estratégica</p>
              </div>
              <div className="w-full h-[1px] bg-cream/8 mb-8" />
              <div className="flex-1">
                <p className="font-body text-cream/55 text-sm leading-[1.9] mb-6">
                  Posicionamento estratégico contínuo, estruturação de marca e estratégias de construção de presença. Acompanhamento mensal para garantir que a percepção do mercado acompanhe o crescimento real do negócio.
                </p>
                <div className="space-y-3">
                  {["Posicionamento estratégico e estruturação de marca", "Estratégias de construção e fortalecimento de presença", "Planejamento editorial e narrativa de autoridade", "Governança de marca e alinhamento de equipe", "Monitoramento de percepção e ajustes contínuos"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-bronze rounded-full mt-2 shrink-0" />
                      <span className="font-body text-cream/45 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-cream/8">
                <p className="font-body text-cream/25 text-xs tracking-wider uppercase">Acompanhamento mensal</p>
              </div>
            </div>
          </FadeIn>

          {/* Solution 3: Operação Contínua */}
          <FadeIn delay={0.24}>
            <div className="group border border-cream/8 p-10 h-full flex flex-col hover:border-bronze/20 transition-all duration-500">
              <div className="mb-8">
                <span className="font-body text-azure text-xs tracking-[0.2em] uppercase">Operação</span>
                <h3 className="font-display text-2xl font-medium text-cream mt-3 mb-2">
                  Operação Contínua de Marketing
                </h3>
                <p className="font-serif text-cream/35 text-sm italic">Para quem já tem estrutura e precisa de consistência</p>
              </div>
              <div className="w-full h-[1px] bg-cream/8 mb-8" />
              <div className="flex-1">
                <p className="font-body text-cream/55 text-sm leading-[1.9] mb-6">
                  Gestão estratégica completa de marketing, criação de conteúdo com profundidade, presença digital qualificada e governança de marca no dia a dia.
                </p>
                <div className="space-y-3">
                  {["Gestão estratégica e planejamento editorial", "Conteúdo de autoridade para múltiplos canais", "Presença digital e distribuição qualificada", "Treinamento e governança de marca"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-bronze rounded-full mt-2 shrink-0" />
                      <span className="font-body text-cream/45 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-cream/8">
                <p className="font-body text-cream/25 text-xs tracking-wider uppercase">Acompanhamento mensal</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PERSONAS — For whom, with sculpture
   ═══════════════════════════════════════════════════ */
function PersonasSection() {
  return (
    <section className="py-32 md:py-44 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: sculpture + intro */}
          <div className="lg:col-span-4">
            <FadeIn>
              <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Para Quem</p>
              <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
                Você se reconhece?
              </h2>
              <p className="font-body text-charcoal/70 text-base leading-[2] mb-10">
                Atendemos empresas que já validaram produto ou serviço no mercado, mas sentem que a marca deixou de acompanhar o crescimento do negócio.
              </p>
            </FadeIn>
            <SlideIn direction="left" delay={0.3}>
              <img
                src={SCULPTURE_PHONE}
                alt="Clássico encontra o contemporâneo"
                className="w-full max-w-[280px] h-auto object-contain hidden lg:block"
              />
            </SlideIn>
          </div>

          {/* Right: personas */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {[
                {
                  title: "O Fundador Subvalorizado",
                  desc: "Empresa boa que parece comum. O produto é sólido, a operação consistente, mas o mercado não enxerga isso com a mesma nitidez. A marca parece menor do que o negócio realmente é."
                },
                {
                  title: "A Empresa em Travessia",
                  desc: "Cresceu mais rápido do que a marca conseguiu acompanhar. Amadureceu por dentro, mas ainda parece imatura por fora. Mira contratos mais sofisticados, mas a identidade não sustenta a ambição."
                },
                {
                  title: "O Profissional em Escala",
                  desc: "Saiu do atendimento individual e montou estrutura com equipe. Tem excelência técnica indiscutível, mas a marca da empresa ainda é o nome dele. Quer que o negócio funcione como entidade."
                },
                {
                  title: "A Marca Digital no Teto",
                  desc: "Produto validado, mas presa no ciclo do tráfego pago. Cada cliente custa mais caro que o anterior. A marca não gera demanda orgânica porque não tem identidade forte."
                },
                {
                  title: "A Instituição de Ensino",
                  desc: "Reputação maior que a marca. Bons cursos, histórias reais de alunos transformados, mas a comunicação ainda diz escola comum. Quer ser percebida como referência."
                },
                {
                  title: "O Sucessor Familiar",
                  desc: "Passado sólido, futuro incerto. Precisa modernizar a empresa sem apagar o legado. A marca antiga limita negociações e afasta profissionais qualificados."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group py-8 border-b border-charcoal/8 first:pt-0 last:border-b-0">
                    <h3 className="font-display text-charcoal text-lg font-semibold mb-3 group-hover:text-azure-deep transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-body text-stone-brand text-sm leading-[1.9]">{item.desc}</p>
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
   RESULTS — Tangible outcomes
   ═══════════════════════════════════════════════════ */
function ResultsSection() {
  return (
    <section className="py-32 md:py-44 bg-nude/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <p className="font-body text-bronze text-xs tracking-[0.35em] uppercase mb-6">Resultados</p>
            <h2 className="font-display text-charcoal text-3xl md:text-4xl font-medium leading-[1.2] mb-8">
              O que muda quando a marca encontra seu lugar
            </h2>
            <p className="font-body text-charcoal/70 text-base leading-[2]">
              Quando a percepção do mercado se alinha ao valor real do negócio, os efeitos são concretos e mensuráveis.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
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
            <FadeIn key={i} delay={i * 0.12}>
              <div>
                <h3 className="font-display text-charcoal text-xl font-semibold mb-6">{group.area}</h3>
                <div className="w-10 h-[1px] bg-bronze mb-6" />
                <div className="space-y-4">
                  {group.items.map((item, j) => (
                    <p key={j} className="font-body text-stone-brand text-sm leading-[1.8]">{item}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   QUOTE — Full-width, centered
   ═══════════════════════════════════════════════════ */
function QuoteSection() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <FadeIn>
          <img
            src={SCULPTURE_MODERN}
            alt=""
            className="w-full max-w-md mx-auto aspect-[3/4] object-cover mb-16 opacity-70"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="font-serif text-azure-deep text-2xl md:text-3xl lg:text-4xl italic leading-[1.4] mb-8">
            "Presença não se improvisa. Se arquiteta."
          </p>
          <div className="w-12 h-[1px] bg-bronze mx-auto" />
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
    <section className="py-32 md:py-44 bg-azure-deep">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <FadeIn>
          <p className="font-body text-cream/50 text-xs tracking-[0.35em] uppercase mb-6">Próximo Passo</p>
          <h2 className="font-display text-cream text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.2] mb-8">
            Vamos conversar sobre o futuro da sua marca?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-body text-cream/60 text-base leading-[2] mb-12 max-w-xl mx-auto">
            Agende uma reunião de apresentação. Sem compromisso, sem pressão. Uma conversa estratégica para entender onde sua marca está, onde deveria estar e como podemos construir essa ponte juntos.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="#agendar"
            className="inline-flex items-center justify-center font-body text-sm text-azure-deep bg-cream hover:bg-white transition-all duration-300 px-10 py-4 tracking-wider uppercase group"
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
   FOOTER — Minimal, clean
   ═══════════════════════════════════════════════════ */
function FooterSection() {
  return (
    <footer className="py-16 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img src={LOGO_WHITE} alt="VirtruvIA" className="h-8 w-auto opacity-70" />
          <p className="font-body text-cream/30 text-xs tracking-wider">
            VirtruvIA &copy; {new Date().getFullYear()}. Branding & Marketing Estratégico.
          </p>
        </div>
      </div>
    </footer>
  );
}
