/**
 * VirtruvIA — Apresentação Comercial Premium
 * Paleta: #8B847D (stone) | #B07345 (bronze) | #DBC2B4 (nude) | #859BA4 (blue)
 * Tom: sofisticado, estratégico, humano, claro, premium
 * Estrutura: Hero > Para Quem > Diagnóstico > Diferencial > Método > Soluções > Resultados > CTA
 */

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ─── CDN Assets ─── */
const LOGO_DARK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/logo-dark-transparent_307fc080.png";
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/logo-white_05b641bd.png";

const IMG_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/v3-hero-3k6cpFcuEfakktHVdLUMWf.webp";
const IMG_DIAGNOSIS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/v3-diagnosis-c5HH2NhD2eJBELu7Edazug.webp";
const IMG_METHOD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/v3-method-nb5249KgjJJ4mu2n2Yg5Sh.webp";
const IMG_RESULTS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663180812128/mSLj88L6JcEvM5nxpGCtTt/v3-results-Cf98tWF7v56W7XqikfCZAQ.webp";

/* ─── Animation Helpers ─── */
function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Arrow Icon ─── */
function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-warm-white overflow-x-hidden">
      <HeroSection />
      <ForWhomSection />
      <DiagnosticSection />
      <DifferentialSection />
      <MethodSection />
      <SolutionsSection />
      <ResultsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

/* ═══════════════════════════════════════════
   1. HERO — Impacto imediato, clareza comercial
   ═══════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col bg-warm-white overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 pt-10 md:pt-12 px-6 md:px-12 lg:px-20"
      >
        <img src={LOGO_DARK} alt="VirtruvIA" className="h-10 md:h-12 w-auto" />
      </motion.div>

      {/* Content Grid */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Text — 5 cols */}
          <motion.div style={{ opacity: textOpacity }} className="lg:col-span-5 py-16 md:py-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="label-sm text-bronze mb-8"
            >
              Branding & Marketing Estratégico
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="heading-xl text-charcoal text-[2.5rem] md:text-[3.2rem] lg:text-[3.6rem]"
            >
              Marcas fortes não
              <br />disputam atenção.
              <span className="block text-blue-brand mt-2">Ocupam espaço.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="origin-left"
            >
              <div className="accent-line my-8" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="body-lg text-stone-brand max-w-md mb-10"
            >
              Posicionamento, identidade e estratégia para empresas que querem ser percebidas pelo valor que realmente entregam.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              href="#agendar"
              className="inline-flex items-center gap-3 bg-charcoal text-warm-white px-8 py-4 label-sm tracking-[0.2em] hover:bg-charcoal-light transition-colors duration-300 group"
            >
              Agendar reunião
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Hero Image — 7 cols */}
          <motion.div
            style={{ y: imgY }}
            className="lg:col-span-7 relative"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              src={IMG_HERO}
              alt="Proporção, estratégia e visão"
              className="w-full h-auto lg:max-h-[85vh] object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-stone-brand/30"
        />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   2. PARA EMPRESAS QUE... — Reconhecimento
   ═══════════════════════════════════════════ */
function ForWhomSection() {
  const symptoms = [
    "Entrega mais valor do que o mercado percebe",
    "Compete por preço quando deveria competir por percepção",
    "Tem uma comunicação que não reflete a maturidade do negócio",
    "Sente que a marca não sustenta o peso do que já construiu",
    "Precisa de consistência, não de mais peças soltas",
    "Quer atrair clientes pelo posicionamento, não pelo desconto",
  ];

  return (
    <section className="py-24 md:py-32 bg-nude-light">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <Fade>
          <p className="label-sm text-bronze mb-5">Para quem é</p>
          <h2 className="heading-lg text-charcoal text-2xl md:text-3xl lg:text-[2.2rem] max-w-2xl mb-14">
            Para empresas que sabem que são melhores do que parecem.
          </h2>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {symptoms.map((item, i) => (
            <Fade key={i} delay={i * 0.06}>
              <div className="flex items-start gap-4 py-3 border-b border-stone-brand/10">
                <div className="w-1.5 h-1.5 rounded-full bg-bronze mt-2.5 shrink-0" />
                <p className="body-md text-charcoal/75">{item}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   3. DIAGNÓSTICO — O problema central
   ═══════════════════════════════════════════ */
function DiagnosticSection() {
  return (
    <section className="py-0 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Image — full bleed left */}
          <Fade className="relative min-h-[400px] lg:min-h-[600px]">
            <img
              src={IMG_DIAGNOSIS}
              alt="Do clássico ao contemporâneo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Fade>

          {/* Content — right */}
          <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-20 md:py-28">
            <div className="max-w-lg">
              <Fade>
                <p className="label-sm text-bronze mb-5">O diagnóstico</p>
                <h2 className="heading-lg text-charcoal text-2xl md:text-3xl lg:text-[2.2rem] mb-8">
                  Sua empresa é melhor do que parece?
                </h2>
              </Fade>

              <Fade delay={0.1}>
                <p className="body-lg text-stone-brand mb-8">
                  Quando a percepção do mercado fica abaixo da realidade, o negócio perde valor todos os dias. O concorrente cobra mais e fecha antes. A proposta precisa de justificativa a cada reunião. A marca não sustenta o que foi construído.
                </p>
              </Fade>

              <Fade delay={0.2}>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  {[
                    { label: "Posicionamento", desc: "Onde sua marca realmente compete" },
                    { label: "Percepção", desc: "Como o mercado enxerga você" },
                    { label: "Narrativa", desc: "O que sua comunicação diz por você" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="w-6 h-[2px] bg-blue-brand mb-3" />
                      <p className="font-display text-charcoal text-sm font-semibold mb-1">{item.label}</p>
                      <p className="text-stone-brand/70 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   4. DIFERENCIAL — O que nos diferencia
   ═══════════════════════════════════════════ */
function DifferentialSection() {
  return (
    <section className="py-24 md:py-32 bg-[#2C2C2C]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left — Statement */}
          <div className="lg:col-span-5">
            <Fade>
              <p className="label-sm text-bronze-light mb-5">O que nos diferencia</p>
              <h2 className="heading-lg text-warm-white text-2xl md:text-3xl lg:text-[2.2rem] mb-8">
                Não entregamos peças. Entregamos direção.
              </h2>
              <p className="body-lg text-warm-white/50">
                A VirtruvIA une branding, estratégia e sensibilidade humana para construir marcas com estrutura, consistência e valor percebido real. Pensamos presença de longo prazo, não campanha do mês.
              </p>
            </Fade>
          </div>

          {/* Right — 4 pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                {
                  title: "Diagnóstico real",
                  desc: "Todo projeto começa com leitura do mercado, da concorrência e da percepção pública. Decisão baseada em dados, não em gosto pessoal."
                },
                {
                  title: "Posicionamento com estrutura",
                  desc: "Território de marca, arquitetura de mensagem, identidade verbal e visual integradas. Sistemas completos, não peças soltas."
                },
                {
                  title: "Sensibilidade estratégica",
                  desc: "Lemos sinais, símbolos e códigos de percepção. Entendemos como o mercado interpreta cada escolha que a sua marca faz."
                },
                {
                  title: "Construção de valor",
                  desc: "Construímos presença que resiste ao tempo, acumula valor e protege o patrimônio do negócio no longo prazo."
                }
              ].map((item, i) => (
                <Fade key={i} delay={i * 0.08}>
                  <div>
                    <div className="w-6 h-[2px] bg-bronze mb-4" />
                    <h3 className="font-display text-warm-white text-base font-semibold mb-2">{item.title}</h3>
                    <p className="body-md text-warm-white/40">{item.desc}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   5. MÉTODO — 4 etapas, visual elegante
   ═══════════════════════════════════════════ */
function MethodSection() {
  return (
    <section className="py-0 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Content */}
          <div className="lg:col-span-7 px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <Fade>
              <p className="label-sm text-bronze mb-5">Nosso método</p>
              <h2 className="heading-lg text-charcoal text-2xl md:text-3xl lg:text-[2.2rem] max-w-lg mb-16">
                Diagnóstico antes de execução. Sempre.
              </h2>
            </Fade>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-14">
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  desc: "Auditoria de percepção, mapeamento de territórios desocupados e análise da distorção entre valor real e percebido."
                },
                {
                  step: "02",
                  title: "Reposicionamento",
                  desc: "Posicionamento estratégico, arquitetura de marca, narrativa institucional e sistema de mensagens."
                },
                {
                  step: "03",
                  title: "Identidade e Sistema",
                  desc: "Identidade visual completa, sistema de aplicação, diretrizes de uso e manual de implementação."
                },
                {
                  step: "04",
                  title: "Operação Contínua",
                  desc: "Consistência operacional, conteúdo estratégico, presença digital e governança de marca."
                }
              ].map((item, i) => (
                <Fade key={i} delay={i * 0.08}>
                  <div className="group">
                    <span className="font-display text-nude/80 text-5xl font-medium block mb-3 group-hover:text-blue-brand/20 transition-colors duration-500">
                      {item.step}
                    </span>
                    <div className="w-6 h-[2px] bg-bronze mb-4" />
                    <h3 className="font-display text-charcoal text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="body-md text-stone-brand/70">{item.desc}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>

          {/* Image — right */}
          <Fade className="lg:col-span-5 relative min-h-[400px] lg:min-h-0 order-first lg:order-last">
            <img
              src={IMG_METHOD}
              alt="Estrutura e proporção"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   6. SOLUÇÕES — 3 ofertas claramente diferentes
   ═══════════════════════════════════════════ */
function SolutionsSection() {
  return (
    <section className="py-24 md:py-32 bg-nude-light">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <Fade>
          <p className="label-sm text-bronze mb-5">Soluções</p>
          <h2 className="heading-lg text-charcoal text-2xl md:text-3xl lg:text-[2.2rem] max-w-xl mb-6">
            Cada momento da marca pede uma solução diferente.
          </h2>
          <p className="body-lg text-stone-brand max-w-xl mb-16">
            Três caminhos claros, desenhados para estágios diferentes de maturidade. Sem pacotes genéricos.
          </p>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Oferta 1 */}
          <Fade delay={0}>
            <div className="bg-warm-white border border-stone-brand/8 p-8 lg:p-10 h-full flex flex-col hover:border-bronze/25 hover:shadow-lg hover:shadow-bronze/5 transition-all duration-500">
              <div className="mb-6">
                <p className="label-sm text-blue-brand mb-3">Projeto</p>
                <h3 className="heading-md text-charcoal text-xl mb-2">
                  Diagnóstico e Reposicionamento
                </h3>
                <p className="font-serif text-stone-brand/60 text-sm italic">Para quem precisa corrigir a base</p>
              </div>

              <div className="w-full h-[1px] bg-stone-brand/8 mb-6" />

              <p className="body-md text-stone-brand/80 mb-6">
                Reestruturação completa: do diagnóstico ao novo posicionamento, narrativa e identidade visual.
              </p>

              <div className="flex-1 space-y-2.5 mb-8">
                {["Auditoria de percepção e mercado", "Posicionamento e arquitetura de marca", "Narrativa institucional", "Identidade visual e diretrizes"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-bronze mt-2 shrink-0" />
                    <span className="text-stone-brand/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-stone-brand/6 flex items-center justify-between">
                <p className="label-sm text-stone-brand/40 tracking-[0.2em]">Projeto único</p>
                <a href="#agendar" className="text-bronze text-sm font-medium hover:text-charcoal transition-colors flex items-center gap-2 group">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Fade>

          {/* Oferta 2 — Destaque */}
          <Fade delay={0.08}>
            <div className="bg-warm-white border-2 border-blue-brand/20 p-8 lg:p-10 h-full flex flex-col hover:border-blue-brand/40 hover:shadow-xl hover:shadow-blue-brand/5 transition-all duration-500 relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-brand" />

              <div className="mb-6">
                <p className="label-sm text-bronze mb-3">Mensal</p>
                <h3 className="heading-md text-charcoal text-xl mb-2">
                  Direção Contínua de Marca
                </h3>
                <p className="font-serif text-stone-brand/60 text-sm italic">Para quem precisa de consistência estratégica</p>
              </div>

              <div className="w-full h-[1px] bg-stone-brand/8 mb-6" />

              <p className="body-md text-stone-brand/80 mb-6">
                Posicionamento, estruturação e acompanhamento contínuo para que a percepção do mercado acompanhe o crescimento real.
              </p>

              <div className="flex-1 space-y-2.5 mb-8">
                {["Posicionamento e estruturação de marca", "Estratégias de construção de presença", "Planejamento editorial e narrativa", "Governança e alinhamento de equipe", "Monitoramento e ajustes contínuos"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-blue-brand mt-2 shrink-0" />
                    <span className="text-stone-brand/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-stone-brand/8 flex items-center justify-between">
                <p className="label-sm text-blue-brand/50 tracking-[0.2em]">Acompanhamento mensal</p>
                <a href="#agendar" className="text-blue-brand text-sm font-medium hover:text-charcoal transition-colors flex items-center gap-2 group">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Fade>

          {/* Oferta 3 */}
          <Fade delay={0.16}>
            <div className="bg-warm-white border border-stone-brand/8 p-8 lg:p-10 h-full flex flex-col hover:border-bronze/25 hover:shadow-lg hover:shadow-bronze/5 transition-all duration-500">
              <div className="mb-6">
                <p className="label-sm text-blue-brand mb-3">Mensal</p>
                <h3 className="heading-md text-charcoal text-xl mb-2">
                  Operação Estratégica de Presença
                </h3>
                <p className="font-serif text-stone-brand/60 text-sm italic">Para quem já tem estratégia e precisa de execução</p>
              </div>

              <div className="w-full h-[1px] bg-stone-brand/8 mb-6" />

              <p className="body-md text-stone-brand/80 mb-6">
                Gestão completa de marketing, conteúdo com profundidade e presença digital qualificada no dia a dia.
              </p>

              <div className="flex-1 space-y-2.5 mb-8">
                {["Planejamento editorial estratégico", "Conteúdo de autoridade multicanal", "Presença digital e distribuição", "Governança de marca operacional"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-bronze mt-2 shrink-0" />
                    <span className="text-stone-brand/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-stone-brand/6 flex items-center justify-between">
                <p className="label-sm text-stone-brand/40 tracking-[0.2em]">Acompanhamento mensal</p>
                <a href="#agendar" className="text-bronze text-sm font-medium hover:text-charcoal transition-colors flex items-center gap-2 group">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   7. RESULTADOS — O que muda
   ═══════════════════════════════════════════ */
function ResultsSection() {
  return (
    <section className="py-0 bg-warm-white">
      {/* Full-width image banner */}
      <Fade>
        <div className="relative h-[280px] md:h-[360px] overflow-hidden">
          <img
            src={IMG_RESULTS}
            alt="Construção de valor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent flex items-center">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 w-full">
              <p className="label-sm text-bronze-light mb-4">Resultados</p>
              <h2 className="heading-lg text-warm-white text-2xl md:text-3xl lg:text-[2.2rem] max-w-lg">
                O que muda quando a marca encontra seu lugar.
              </h2>
            </div>
          </div>
        </div>
      </Fade>

      {/* Results grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
          {[
            {
              area: "Percepção e Autoridade",
              color: "bg-blue-brand",
              items: [
                "De opção comum para referência no segmento",
                "Atração natural de clientes e talentos qualificados",
                "Parcerias estratégicas com players maiores",
                "Proteção contra concorrência por preço"
              ]
            },
            {
              area: "Comercial e Preço",
              color: "bg-bronze",
              items: [
                "Ticket médio mais alto com menos objeção",
                "Redução de descontos concedidos",
                "Contratos fechados com mais velocidade",
                "Entrada em mercados com percepção de autoridade"
              ]
            },
            {
              area: "Operação e Consistência",
              color: "bg-stone-brand",
              items: [
                "Comunicação que escala sem perder identidade",
                "Equipe alinhada com discurso único",
                "Decisões de marca mais rápidas e claras",
                "Governança de marca estruturada"
              ]
            }
          ].map((group, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div>
                <div className={`w-8 h-[2px] ${group.color} mb-5`} />
                <h3 className="font-display text-charcoal text-lg font-semibold mb-6">{group.area}</h3>
                <div className="space-y-4">
                  {group.items.map((item, j) => (
                    <p key={j} className="body-md text-stone-brand/70">{item}</p>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   8. CTA FINAL — Forte, confiante, premium
   ═══════════════════════════════════════════ */
function CTASection() {
  return (
    <section id="agendar" className="py-28 md:py-36 bg-[#2C2C2C] relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <Fade>
          <p className="label-sm text-bronze-light mb-5">Próximo passo</p>
          <h2 className="heading-lg text-warm-white text-2xl md:text-3xl lg:text-[2.5rem] mb-8">
            Vamos conversar sobre o futuro da sua marca?
          </h2>
        </Fade>

        <Fade delay={0.1}>
          <p className="body-lg text-warm-white/45 mb-12 max-w-xl mx-auto">
            Uma conversa estratégica para entender onde sua marca está, onde deveria estar e como construir essa ponte. Sem compromisso, sem pressão.
          </p>
        </Fade>

        <Fade delay={0.2}>
          <a
            href="#agendar"
            className="inline-flex items-center gap-3 bg-warm-white text-charcoal px-10 py-4 label-sm tracking-[0.2em] hover:bg-nude-light transition-colors duration-300 group"
          >
            Agendar reunião de apresentação
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER — Minimal
   ═══════════════════════════════════════════ */
function FooterSection() {
  return (
    <footer className="py-12 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <img src={LOGO_WHITE} alt="VirtruvIA" className="h-7 w-auto opacity-50" />
          <p className="text-warm-white/20 text-xs tracking-wider">
            VirtruvIA &copy; {new Date().getFullYear()}. Branding & Marketing Estratégico.
          </p>
        </div>
      </div>
    </footer>
  );
}
