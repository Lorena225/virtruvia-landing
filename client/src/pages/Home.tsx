/**
 * Matrícula EAD — Landing Page de Alta Conversão
 * Certificação por Competência — Art. 41 da Lei nº 9.394/96
 * Design: Clean & Bold | Azul #00458A + Vermelho #FF0000 | Mobile First
 */
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Animation Helper ─── */
function Fade({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Course Data ─── */
const COURSES = [
  { name: "Técnico em Açúcar e Álcool", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Administração", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Agricultura", img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Agrimensura", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Agropecuária", img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Contabilidade", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Edificações", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Eletroeletrônica", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Eletromecânica", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Eletrônica", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Eletrotécnica", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Mecânica Industrial", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Meio Ambiente", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Mineração", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Petróleo e Gás", img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Química", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Refrigeração e Climatização", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Secretário Escolar", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Segurança do Trabalho", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Telecomunicações", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=260&fit=crop&auto=format" },
  { name: "Técnico em Transações Imobiliárias", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=260&fit=crop&auto=format" },
];

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  { text: "Consegui promoção interna quatro meses após o início do curso técnico. As mentorias de carreira foram decisivas para conquistar a vaga.", name: "Diego Moura", role: "Analista de Operações" },
  { text: "Passei de técnica júnior para sênior em seis meses. O conteúdo prático me deixou pronta para o mercado.", name: "Camila Ribeiro", role: "Técnica em Segurança" },
  { text: "A plataforma é direta, as aulas são objetivas e os fóruns me ajudaram a resolver problemas reais da fábrica.", name: "Bruno Leal", role: "Supervisor de Produção" },
  { text: "Consegui migrar para manutenção industrial e hoje atuo com automação graças ao acompanhamento dos tutores.", name: "Henrique Duarte", role: "Técnico em Eletrotécnica" },
  { text: "Equipe próxima, formação robusta e tecnologia de ponta. Atingi minhas metas em tempo recorde com apoio dos mentores.", name: "Juliana Batista", role: "Coordenadora Administrativa" },
  { text: "Os simulados e plantões de dúvidas me deram confiança para assumir projetos estratégicos sem medo.", name: "Larissa Nogueira", role: "Analista de Projetos" },
];

/* ─── FAQ Data ─── */
const FAQS = [
  {
    q: "O diploma é igual ao de quem fez o curso presencial?",
    a: "Sim. Não existe distinção legal. O seu diploma é de Técnico de Nível Médio, com validade nacional e dá direito ao registro no conselho de classe da mesma forma que um curso de 2 anos.",
  },
  {
    q: "E se eu não for aprovado na avaliação teórica?",
    a: "Não se preocupe. Você terá acesso a simulados e suporte para entender os pontos de melhoria e realizar outra prova. O nosso foco é validar sua competência, não criar barreiras.",
  },
  {
    q: "Como sei se minha experiência será aceita?",
    a: "Nossa equipe de consultores faz uma pré-análise gratuita. Se você trabalha na área há pelo menos 2 anos, as chances de você ter o perfil para a lei são altíssimas.",
  },
  {
    q: "O pagamento é feito antes ou depois da análise?",
    a: "A análise documental e o suporte inicial são para garantir sua elegibilidade. Você só avança para as etapas de certificação com a segurança de que seu perfil se enquadra na Lei.",
  },
];

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=556130261085&text=Ol%C3%A1%2C+venho+do+site+Matr%C3%ADcula+EaD+e+quero+mais+informa%C3%A7%C3%B5es+sobre+os+Cursos+EaD.&type=phone_number&app_absent=0";

/* ─── CTA Button ─── */
function CTAButton({ text, className = "", id }: { text: string; className?: string; id?: string }) {
  const scrollToForm = () => {
    document.getElementById("kommo-form")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      id={id}
      onClick={scrollToForm}
      className={`bg-[#FF0000] hover:bg-[#cc0000] active:bg-[#aa0000] text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wide text-sm ${className}`}
    >
      {text}
    </button>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <div
      className="min-h-screen bg-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <CoursesSection />
      <VantagensSection />
      <ComoFuncionaSection />
      <ProcessoSection />
      <OrgaosSection />
      <ProvaSection />
      <FAQSection />
      <FormSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}

/* ═══════════════════════════════════════════
   ANNOUNCEMENT BAR
   ═══════════════════════════════════════════ */
function AnnouncementBar() {
  return (
    <div className="bg-[#00458A] text-white text-center py-2.5 px-4 text-sm font-medium">
      Matrículas 100% digitais: Faça agora mesmo a sua inscrição.
    </div>
  );
}

/* ═══════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════ */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <a href="https://matriculaead.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <img
              src="https://matriculaead.com.br/wp-content/uploads/2024/01/logo-matricula-ead.png"
              alt="Matrícula EAD"
              className="h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement("div");
                  fallback.className = "flex flex-col leading-none";
                  fallback.innerHTML = `<span class="text-[#00458A] font-black text-xl tracking-tight">Matrícula</span><span class="text-[#FF0000] font-bold text-xs tracking-widest uppercase">EAD</span>`;
                  parent.appendChild(fallback);
                }
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {[["#cursos", "Cursos"], ["#vantagens", "Vantagens"], ["#como-funciona", "Como Funciona"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} className="text-gray-600 hover:text-[#00458A] font-medium text-sm transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex bg-[#FF0000] hover:bg-[#cc0000] text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors uppercase tracking-wide"
            >
              FALE AGORA
            </a>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4 space-y-3">
            {[["#cursos", "Cursos"], ["#vantagens", "Vantagens"], ["#como-funciona", "Como Funciona"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block text-gray-700 font-medium py-2">
                {label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block bg-[#FF0000] text-white text-center font-bold py-3 px-6 rounded-lg mt-2 uppercase tracking-wide">
              FALE AGORA
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero_worker.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00458A]/95 via-[#00458A]/80 to-[#00458A]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          <Fade>
            <span className="inline-block bg-white/15 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
              Certificação por Competência · Art. 41 — Lei nº 9.394/96
            </span>
          </Fade>

          <Fade delay={0.05}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-5">
              Seus anos de trabalho duro podem valer um{" "}
              <span className="text-[#FF6B6B]">Diploma Técnico Reconhecido.</span>
            </h1>
          </Fade>

          <Fade delay={0.1}>
            <p className="text-lg md:text-xl text-white/85 font-medium mb-4 leading-relaxed">
              Chega de perder vagas, promoções ou o respeito profissional por não ter um diploma reconhecido!
            </p>
          </Fade>

          <Fade delay={0.15}>
            <p className="text-base text-white/70 leading-relaxed mb-10">
              A sua vivência de mercado tem valor legal, e através da Certificação por Competência amparada pelo{" "}
              <strong className="text-white">Art. 41 da Lei nº 9.394/96</strong>, nós avaliamos a sua documentação e o seu
              conhecimento prático. Um processo 100% online, seguro e direto ao ponto, feito para quem já tem a experiência
              de atuação e só precisa da chancela oficial para crescer na sua carreira.
            </p>
          </Fade>

          <Fade delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton text="Quero Validar Meu Tempo de Serviço" className="text-base" />
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 hover:border-white/80 text-white font-semibold py-4 px-8 rounded-lg transition-all text-center text-sm uppercase tracking-wide"
              >
                Falar com Consultor
              </a>
            </div>
          </Fade>

          {/* Trust badges */}
          <Fade delay={0.25}>
            <div className="flex flex-wrap gap-4 mt-10">
              {["✓ 100% Online", "✓ MEC Reconhecido", "✓ Validade Nacional", "✓ +7.000 Certificados"].map((badge) => (
                <span key={badge} className="text-white/80 text-sm font-medium flex items-center gap-1">
                  {badge}
                </span>
              ))}
            </div>
          </Fade>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white rounded-2xl p-5 shadow-2xl text-center max-w-[160px]">
          <div className="text-[#00458A] font-black text-3xl leading-none">7.000+</div>
          <div className="text-gray-500 text-xs mt-1 leading-snug">Profissionais Certificados</div>
          <div className="mt-3 bg-[#FF0000] text-white text-xs font-bold px-3 py-1 rounded-full">MEC</div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CURSOS
   ═══════════════════════════════════════════ */
function CoursesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const CARD_STEP = 280; // px per arrow click (≈ 1 card + gap)
  const SPEED = 0.55;    // pixels per animation frame (slow & smooth)

  // Duplicate list for seamless infinite loop
  const DOUBLED = [...COURSES, ...COURSES];

  const startAutoScroll = useCallback(() => {
    const step = () => {
      const track = trackRef.current;
      if (track && !isPausedRef.current) {
        track.scrollLeft += SPEED;
        // When we reach the midpoint (second copy starts), jump back silently
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      autoScrollRef.current = requestAnimationFrame(step);
    };
    autoScrollRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, [startAutoScroll]);

  const scrollManual = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    isPausedRef.current = true;
    track.scrollBy({ left: dir === "right" ? CARD_STEP * 3 : -CARD_STEP * 3, behavior: "smooth" });
    setTimeout(() => { isPausedRef.current = false; }, 2800);
  };

  return (
    <section id="cursos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Fade>
          <div className="text-center mb-12">
            <span className="text-[#FF0000] font-semibold text-xs tracking-widest uppercase">Mais de 20 opções</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#00458A] mt-2 mb-4">
              Encontre a sua área e conquiste o seu registro profissional.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Mais de 20 opções de formação técnica por competência com validade nacional. Deslize para o lado e escolha a sua:
            </p>
          </div>
        </Fade>

        {/* Carousel wrapper — relative for arrow positioning */}
        <div className="relative">

          {/* ← Arrow */}
          <button
            onClick={() => scrollManual("left")}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-1 md:-translate-x-4
              w-11 h-11 rounded-full bg-white border-2 border-[#00458A] text-[#00458A]
              flex items-center justify-center shadow-lg
              hover:bg-[#00458A] hover:text-white transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[#00458A] focus:ring-offset-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* → Arrow */}
          <button
            onClick={() => scrollManual("right")}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-1 md:translate-x-4
              w-11 h-11 rounded-full bg-white border-2 border-[#00458A] text-[#00458A]
              flex items-center justify-center shadow-lg
              hover:bg-[#00458A] hover:text-white transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-[#00458A] focus:ring-offset-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Soft fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-14 z-10
            bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-14 z-10
            bg-gradient-to-l from-gray-50 to-transparent" />

          {/* Scrollable track — no scrollbar */}
          <div
            ref={trackRef}
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
            onTouchStart={() => { isPausedRef.current = true; }}
            onTouchEnd={() => setTimeout(() => { isPausedRef.current = false; }, 2800)}
            className="overflow-x-auto pb-4 px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            <div className="flex gap-5" style={{ width: "max-content" }}>
              {DOUBLED.map((course, i) => (
                <div
                  key={`${course.name}-${i}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg
                    transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex-shrink-0"
                  style={{ width: 255 }}
                >
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={course.img}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00458A]/60 to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#FF0000] text-white text-xs font-bold px-2 py-1 rounded">
                      POR COMPETÊNCIA
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#00458A] text-sm mb-3 leading-snug">{course.name}</h3>
                    <span className="text-[#FF0000] font-semibold text-xs hover:text-[#cc0000] transition-colors">
                      SAIBA MAIS →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   VANTAGENS
   ═══════════════════════════════════════════ */
function VantagensSection() {
  const benefits = [
    {
      icon: "⚡",
      title: "Processo 100% Digital e Sem Enrolação",
      desc: "Esqueça as mensalidades intermináveis e a sala de aula. Nosso modelo é focado na avaliação da sua prática. Você envia seus documentos, realiza a prova de validação e acompanha tudo online, no seu ritmo e de onde estiver.",
    },
    {
      icon: "🤝",
      title: "Suporte Humano e Especializado",
      desc: "Nossa equipe de consultores entende a realidade do trabalhador brasileiro e pega na sua mão do primeiro contato até o momento em que o diploma chega até você. Auxiliamos em cada etapa da documentação.",
    },
    {
      icon: "🛡️",
      title: "Máxima Segurança e Validade Nacional",
      desc: "Trabalhamos com instituições parceiras com mais de 15 anos de credibilidade. Seu diploma técnico tem validação nacional, registro nos órgãos competentes e peso de ouro no seu currículo para você assumir cargos de confiança.",
    },
  ];

  return (
    <section id="vantagens" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Fade>
          <div className="text-center mb-16">
            <span className="text-[#FF0000] font-semibold text-xs tracking-widest uppercase">Por que nos escolher</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#00458A] mt-2 mb-4">
              Por que o Matrícula EAD é o caminho mais seguro para o seu Diploma?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Nossa estrutura foi desenhada para quem não tem tempo a perder e precisa de um parceiro confiável.
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <Fade key={b.title} delay={i * 0.1}>
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-all border border-gray-100 hover:border-[#00458A]/20 group">
                <div className="text-5xl mb-5">{b.icon}</div>
                <h3 className="text-xl font-black text-[#00458A] mb-4">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        {/* Image section */}
        <Fade delay={0.2}>
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/worker_team.jpg"
                alt="Equipe de trabalhadores brasileiros"
                className="rounded-2xl shadow-xl w-full object-cover h-80"
              />
            </div>
            <div>
              <span className="text-[#FF0000] font-semibold text-xs tracking-widest uppercase">Nossa Missão</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#00458A] mt-2 mb-4">
                Transformando experiência em reconhecimento oficial
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Milhões de brasileiros trabalham duro todos os dias sem o reconhecimento formal que merecem. O Matrícula EAD
                existe para mudar essa realidade, conectando a sua experiência prática ao diploma técnico que abre portas.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Processo 100% online e sem burocracia",
                  "Suporte especializado do início ao fim",
                  "Diploma com validade nacional e registro nos conselhos",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#00458A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COMO FUNCIONA
   ═══════════════════════════════════════════ */
function ComoFuncionaSection() {
  const requisitos = [
    { icon: "👤", title: "Mais de 18 anos", desc: "Maioridade legal para a certificação profissional" },
    { icon: "🎓", title: "Ensino Médio Completo", desc: "Apresentar o histórico ou certificado de conclusão" },
    { icon: "💼", title: "2 Anos de Experiência", desc: "Comprovar, no mínimo, dois anos de atuação prática na área desejada" },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Fade>
          <div className="text-center mb-12">
            <span className="text-[#FF0000] font-semibold text-xs tracking-widest uppercase">Entenda o processo</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#00458A] mt-2 mb-6">
              Como o seu tempo de serviço se transforma em um Diploma oficial?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              A legislação brasileira reconhece o seu esforço e garante o seu direito. A Lei determina que o tempo de serviço
              que você acumulou na prática tem o mesmo valor legal das horas de um aluno em uma sala de aula presencial.
            </p>
          </div>
        </Fade>

        {/* Art. 41 Box */}
        <Fade delay={0.1}>
          <div className="bg-[#00458A] text-white p-8 rounded-2xl mb-14 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">⚖️</div>
              <div>
                <h3 className="font-black text-lg mb-2">Art. 41 da Lei nº 9.394/96</h3>
                <p className="text-white/80 leading-relaxed">
                  A legislação brasileira permite que profissionais com experiência comprovada possam obter certificação técnica
                  através da avaliação de competências, reconhecendo sua vivência prática como equivalente à formação tradicional.
                </p>
              </div>
            </div>
          </div>
        </Fade>

        {/* Requisitos */}
        <Fade delay={0.15}>
          <h3 className="text-2xl font-black text-[#00458A] text-center mb-8">
            Apenas 3 critérios simples separam você do seu reconhecimento oficial.
          </h3>
        </Fade>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {requisitos.map((r, i) => (
            <Fade key={r.title} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-2 border-transparent hover:border-[#00458A]/20 transition-all">
                <div className="text-5xl mb-4">{r.icon}</div>
                <h4 className="text-xl font-black text-[#00458A] mb-2">{r.title}</h4>
                <p className="text-gray-500 text-sm">{r.desc}</p>
              </div>
            </Fade>
          ))}
        </div>

        <Fade delay={0.2}>
          <div className="text-center">
            <CTAButton text="Quero Validar Meu Tempo de Serviço" />
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROCESSO EM 3 ETAPAS
   ═══════════════════════════════════════════ */
function ProcessoSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Fade>
          <div className="text-center mb-14">
            <span className="text-[#FF0000] font-semibold text-xs tracking-widest uppercase">Passo a passo</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#00458A] mt-2">
              O seu caminho até o Diploma Técnico em apenas 3 etapas:
            </h2>
          </div>
        </Fade>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Etapa 1 */}
          <Fade>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#FF0000]">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#FF0000] text-white rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-[#00458A] mb-3">1ª Comprovação da Sua Experiência</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    É aqui que a sua vivência de mercado ganha valor oficial. Você fará a sua inscrição e enviará de forma
                    100% digital a documentação que prova o seu tempo de serviço.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <p className="text-[#00458A] font-bold text-sm mb-2">Como comprovar? Basta apresentar um dos formatos abaixo:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {[
                        "Carteira de Trabalho (CTPS)",
                        "Contrato Social ou documentação de MEI (se tiver negócio próprio)",
                        "Registro de Autônomo",
                        "Declaração de Experiência Profissional (com funções e período)",
                        "Certificados de cursos profissionalizantes da área",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#FF0000] font-bold mt-0.5">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* Etapa 2 */}
          <Fade delay={0.1}>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#00458A]">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#00458A] text-white rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#00458A] mb-3">2ª Validação do Seu Conhecimento</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Com a sua documentação de experiência aprovada, chegou a hora de chancelar o que você sabe. Para garantir
                    sua segurança, você terá acesso a algumas aulas e a um simulado preparatório antes de realizar a sua
                    avaliação oficial, que é 100% online.
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          {/* Etapa 3 */}
          <Fade delay={0.2}>
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#FF0000]">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#FF0000] text-white rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#00458A] mb-3">3ª Emissão do Seu Diploma Técnico</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Etapas concluídas, chegou a hora de ter o seu esforço reconhecido no papel. Você solicita o diploma de
                    forma simples no Portal do Aluno e nós emitimos em tempo recorde:{" "}
                    <strong className="text-[#00458A]">de 7 a 30 dias corridos.</strong> Sem enrolação. 🛡️
                  </p>
                  <div className="bg-[#00458A]/5 border border-[#00458A]/20 p-4 rounded-xl">
                    <p className="text-[#00458A] text-sm leading-relaxed">
                      <strong>Segurança e Respaldo (MEC/SISTEC):</strong> Seu documento não é apenas um papel, é a sua chancela
                      oficial. Com validade em todo o Brasil, ele é o passaporte definitivo para você dar entrada no seu
                      Conselho de Classe e passar a assinar como Técnico.
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm mt-3 font-medium">
                    ⏱️ O prazo para emissão do Diploma é de 10 a 40 dias.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Fade delay={0.3}>
          <div className="text-center mt-12">
            <CTAButton text="Quero analisar minha experiência" />
          </div>
        </Fade>

        {/* Image */}
        <Fade delay={0.1}>
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FF0000] font-semibold text-xs tracking-widest uppercase">Estude de onde estiver</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#00458A] mt-2 mb-4">
                100% online, no seu ritmo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Você não precisa parar de trabalhar para conquistar seu diploma. Todo o processo é feito de forma digital,
                sem precisar ir a uma escola ou enfrentar filas. Basta ter acesso à internet.
              </p>
            </div>
            <div>
              <img
                src="/images/worker_online.jpg"
                alt="Trabalhador estudando online"
                className="rounded-2xl shadow-xl w-full object-cover h-72"
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ÓRGÃOS DE VALIDAÇÃO
   ═══════════════════════════════════════════ */
function OrgaosSection() {
  const orgaos = [
    { sigla: "MEC", nome: "Ministério da Educação" },
    { sigla: "SISTEC", nome: "Sistema de Informações" },
    { sigla: "CFT", nome: "Conselho Federal Técnico" },
    { sigla: "Administração", nome: "Conselho de Administração" },
    { sigla: "MTE", nome: "Ministério do Trabalho" },
  ];

  return (
    <section className="py-16 bg-[#00458A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Fade>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white">Validade Nacional e Registro Garantido.</h2>
            <p className="text-white/70 mt-2">
              Instituições federais e conselhos de classe que garantem a validade nacional do seu diploma.
            </p>
          </div>
        </Fade>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {orgaos.map((o, i) => (
            <Fade key={o.sigla} delay={i * 0.05}>
              <div className="bg-white px-6 py-4 rounded-xl text-center min-w-[110px] hover:scale-105 transition-transform">
                <div className="text-xl font-black text-[#00458A]">{o.sigla}</div>
                <div className="text-xs text-gray-400 mt-1">{o.nome}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROVA SOCIAL
   ═══════════════════════════════════════════ */
function ProvaSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Fade>
          <div className="text-center mb-16">
            <span className="text-[#FF0000] font-semibold text-xs tracking-widest uppercase">Resultados reais</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#00458A] mt-2 mb-4">
              Junte-se a mais de 7.000 profissionais que pararam de perder oportunidades.
            </h2>
            <p className="text-gray-500 text-lg">
              Nós somos a ponte mais segura entre a sua experiência e o seu reconhecimento oficial.
            </p>
          </div>
        </Fade>

        {/* Números */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { num: "+ de 20", label: "Cursos a sua disposição!", bg: "bg-[#00458A]" },
            { num: "+ de 10", label: "Anos de experiência no Mercado", bg: "bg-[#003a75]" },
            { num: "+ 7.000", label: "Alunos certificados", bg: "bg-[#FF0000]" },
          ].map((stat, i) => (
            <Fade key={stat.num} delay={i * 0.1}>
              <div className={`${stat.bg} text-white p-10 rounded-2xl text-center shadow-lg`}>
                <div className="text-5xl font-black mb-2">{stat.num}</div>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </div>
            </Fade>
          ))}
        </div>

        {/* Depoimentos */}
        <Fade>
          <h3 className="text-2xl md:text-3xl font-black text-[#00458A] text-center mb-10">
            Conheça histórias reais de profissionais que transformaram sua carreira com o Matrícula EAD.
          </h3>
        </Fade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {TESTIMONIALS.map((t, i) => (
            <Fade key={t.name} delay={i * 0.07}>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#FF0000] hover:shadow-md transition-shadow">
                <div className="text-[#FF0000] text-3xl mb-3 font-serif">"</div>
                <p className="text-gray-700 italic leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00458A] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#00458A] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Image */}
        <Fade delay={0.1}>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <img
                src="/images/worker_diploma.jpg"
                alt="Trabalhador com diploma técnico"
                className="rounded-2xl shadow-xl w-full object-cover h-80"
              />
            </div>
            <div>
              <img
                src="/images/female_worker.jpg"
                alt="Profissional brasileira"
                className="rounded-2xl shadow-xl w-full object-cover h-80"
              />
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="text-center">
            <CTAButton text="Quero ser o próximo técnico certificado" className="text-base py-5 px-10" />
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════ */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <Fade>
          <div className="text-center mb-14">
            <span className="text-[#FF0000] font-semibold text-xs tracking-widest uppercase">Dúvidas frequentes</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#00458A] mt-2">Ficou com alguma dúvida?</h2>
          </div>
        </Fade>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <Fade key={i} delay={i * 0.07}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <button
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-bold text-[#00458A] text-base">{faq.q}</span>
                  <span
                    className={`text-[#FF0000] text-xl flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                )}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FORM SECTION (Kommo)
   ═══════════════════════════════════════════ */
function FormSection() {
  return (
    <section id="kommo-form" className="py-20 md:py-28 bg-[#00458A]">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <Fade>
          <span className="text-white/60 font-semibold text-xs tracking-widest uppercase">Comece agora</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">Comece Sua Jornada Agora</h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Preencha o formulário abaixo e um de nossos consultores entrará em contato para analisar sua experiência e mostrar
            como você pode conquistar seu diploma técnico reconhecido.
          </p>
        </Fade>

        {/* Kommo Form embed */}
        <Fade delay={0.1}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl p-2">
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1678979",hash:"f35e2f9b571e024e19fce8c6bf8c3d3e",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`,
              }}
            />
            <script
              id="amoforms_script_1678979"
              async
              src="https://forms.kommo.com/forms/assets/js/amoforms.js?1775926094"
            />
            <div id="amo-form-placeholder" className="min-h-[400px] flex items-center justify-center">
              <p className="text-gray-400 text-sm">Carregando formulário...</p>
            </div>
          </div>
        </Fade>

        <Fade delay={0.15}>
          <div className="mt-8">
            <p className="text-white/50 text-sm mb-4">Ou fale conosco diretamente via WhatsApp:</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              📱 Avaliar minha experiência agora
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-white font-black text-xl tracking-tight">Matrícula</span>
              <span className="text-[#FF0000] font-bold text-xs tracking-widest uppercase">EAD</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Matrícula EAD: Facilitando o acesso à educação técnica através do Art. 41 da Lei Federal nº 9.394/96.
              Certificados emitidos por instituições parceiras devidamente credenciadas pelo MEC e registradas no SISTEC.
            </p>
          </div>

          {/* Certificados */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Certificados</h4>
            <div className="flex flex-wrap gap-2">
              {["MEC", "SISTEC", "CFT", "Administração", "MTE"].map((selo) => (
                <span key={selo} className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider">
                  {selo}
                </span>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Contato</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a href="mailto:contato@matriculaead.com.br" className="hover:text-white transition-colors">
                  contato@matriculaead.com.br
                </a>
              </p>
              <p>
                <a href="tel:+556130261085" className="hover:text-white transition-colors">
                  (61) 3026-1085
                </a>
              </p>
              <p>Seg. a Sex. · 8h às 20h</p>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Redes Sociais</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "https://www.instagram.com/matricula_ead", label: "Instagram", icon: "📷" },
                { href: "https://www.facebook.com/matriculaead", label: "Facebook", icon: "📘" },
                { href: "https://www.youtube.com/@MatriculaEaD", label: "YouTube", icon: "▶️" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Matrícula EAD. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   WHATSAPP FLOATING BUTTON
   ═══════════════════════════════════════════ */
function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 px-5 rounded-full shadow-2xl hover:scale-105 transition-all duration-200"
      title="Fale conosco no WhatsApp"
    >
      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="text-sm hidden sm:inline">📱 Avaliar minha experiência agora</span>
    </a>
  );
}
