import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Users, BookOpen, Target, Calendar } from "lucide-react";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // High-quality localized photography assets from public folder
  const carouselImages = [
    {
      url: "/hero1.jpg",
      caption: "Empowering analytical mindsets through scientific discovery"
    },
    {
      url: "/hero2.jpg",
      caption: "Interactive modern classroom engagement cycles"
    },
    {
      url: "/hero3.jpg",
      caption: "Collaborative teamwork and technical leadership skills"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-24 pb-24 bg-brand-bg text-brand-dark overflow-x-hidden selection:bg-brand-tan/20">
      
      {/* 1. ASYMMETRIC SPLIT HERO WITH EMBEDDED GLASSMORPHIC LAYER */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-4 pt-12 lg:pt-0 border-b border-brand-sage/20">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Glassmorphic Floating Text Architecture */}
          <div className="lg:col-span-6 bg-brand-dark/5 backdrop-blur-md border border-brand-dark/10 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl relative z-20">
            <div className="inline-flex items-center gap-2 bg-brand-peach text-brand-dark text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              ⚡ Admissions Loop Open
            </div>

            {/* Bubble-Style Ultra Bold Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl font-black text-brand-dark tracking-tighter leading-[0.95]">
              SHAPING <br />
              <span className="text-brand-tan inline-block bg-brand-dark border-2 border-brand-tan px-4 py-1 my-1 rounded-2xl uppercase tracking-tight font-black shadow-md">
                MINDS,
              </span> <br />
              BUILDING FUTURES
            </h1>

            <p className="text-base text-brand-dark/90 font-medium leading-relaxed max-w-xl">
              Welcome to Kojja SSS. We throw out stiff traditional templates to deliver energetic, practical academic infrastructure that crafts true local leaders.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate("/admissions")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-dark text-brand-bg text-sm font-black uppercase tracking-wider px-8 py-4 rounded-2xl hover:bg-brand-tan hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer border-0 group"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Balanced Structural Image Carousel Frame */}
          <div className="lg:col-span-6 relative w-full max-w-xl mx-auto group/carousel">
            
            {/* Artistic Geometric Canvas Stack Underlay */}
            <div className="absolute inset-0 bg-brand-sage rounded-3xl translate-x-4 translate-y-4 shadow-lg opacity-40 group-hover/carousel:translate-x-2 group-hover/carousel:translate-y-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-brand-peach rounded-3xl -translate-x-2 -translate-y-2 shadow-sm opacity-15" />
            
            {/* Native Aspect Image Mount Box */}
            <div className="relative aspect-[4/3] w-full bg-brand-dark text-brand-bg rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-dark">
              <img 
                src={carouselImages[currentSlide].url} 
                alt="Kojja SSS Campus Asset" 
                className="w-full h-full object-cover transition-transform duration-700"
              />
              
              {/* Light Vignette Shield Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              
              {/* Top Command Bar (Floating Navigation Controls) */}
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-xl bg-brand-bg text-brand-dark border-2 border-brand-dark flex items-center justify-center hover:bg-brand-peach hover:text-brand-bg transition-colors shadow-md cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 stroke-3" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-xl bg-brand-bg text-brand-dark border-2 border-brand-dark flex items-center justify-center hover:bg-brand-peach hover:text-brand-bg transition-colors shadow-md cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 stroke-3" />
                </button>
              </div>

              {/* Bottom Subtle Dashboard Indicators */}
              <div className="absolute bottom-4 left-6 z-20 flex gap-1.5">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? "w-5 bg-brand-tan" : "w-1.5 bg-brand-bg/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. SCHOOL STATISTICS GRID BAR */}
      <section className="container mx-auto max-w-5xl px-4">
        <div className="bg-brand-dark text-brand-bg rounded-3xl p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-peach/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-1">
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-brand-tan">94%</h3>
            <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-brand-bg/65">UNEB Pass Rate</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-brand-peach">450+</h3>
            <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-brand-bg/65">Active Enrolment</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-brand-sage">24</h3>
            <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-brand-bg/65">Expert Instructors</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-brand-bg">15+</h3>
            <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-brand-bg/65">Technical Workshops</p>
          </div>
        </div>
      </section>

      {/* 3. EXTENDED LAYOUT CONTENT BLOCK: PRINCIPAL'S ADDRESS */}
      <section className="py-12 px-4 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Principal Portrait Frame */}
        <div className="lg:col-span-5 relative h-[360px] w-full max-w-sm mx-auto lg:max-w-none group/principal">
          <div className="absolute inset-0 bg-brand-tan rounded-2xl rotate-2 opacity-20 group-hover/principal:rotate-1 transition-transform" />
          <div className="absolute inset-0 bg-brand-dark rounded-2xl border-4 border-brand-dark overflow-hidden shadow-xl">
            <img 
              src="/principal.png" 
              alt="Mr. Isaac Kirenzi - Head Teacher" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block text-[10px] font-black uppercase tracking-widest bg-brand-sage/20 text-brand-dark px-3 py-1 rounded-md">
            Leadership Statement
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tight leading-none text-brand-dark">
            Welcome from the Desk of the Head Teacher
          </h2>
          <div className="w-16 h-0.5 bg-brand-tan rounded-full" />
          <p className="text-base text-brand-dark/85 font-medium leading-relaxed">
            At Kojja SSS, we view secondary education as an incubation tank for character, technical capability, and ultimate social responsibility. Our students don’t just memorize static equations; they explore technical skills, solve problems through local community workflows, and build an ethical mindset that prepares them to immediately transform society.
          </p>
          <div className="pt-2">
            <h5 className="text-sm font-black text-brand-dark uppercase tracking-wide">Mr. Isaac Kirenzi</h5>
            <p className="text-xs font-bold text-brand-sage uppercase tracking-wider">Head Teacher / Governing Council Chairman</p>
          </div>
        </div>

      </section>

      {/* 4. EXTENDED LAYOUT CONTENT BLOCK: ACADEMIC CORE INITIATIVES */}
      <section className="py-16 bg-brand-sage/10 border-y border-brand-sage/20 px-4">
        <div className="container mx-auto max-w-5xl space-y-12">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Our Core Institutional Focus
            </h2>
            <p className="text-xs sm:text-sm font-medium text-brand-dark/70 uppercase tracking-widest">
              What sets our academic experience apart from other traditional schools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1 */}
            <div className="bg-brand-bg border-4 border-brand-dark rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-transform shadow-md">
              <div className="w-12 h-12 bg-brand-tan text-brand-dark rounded-xl border-2 border-brand-dark flex items-center justify-center">
                <BookOpen className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-black tracking-tight uppercase text-brand-dark">Rigorous Analytics</h4>
              <p className="text-sm font-medium text-brand-dark/80 leading-relaxed">
                Full delivery of the Uganda National Curriculum enhanced with deep analytical software training models and computational physics.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-brand-bg border-4 border-brand-dark rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-transform shadow-md">
              <div className="w-12 h-12 bg-brand-peach text-brand-dark rounded-xl border-2 border-brand-dark flex items-center justify-center">
                <Target className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-black tracking-tight uppercase text-brand-dark">Vocational Skills</h4>
              <p className="text-sm font-medium text-brand-dark/80 leading-relaxed">
                Hands-on alignment with contemporary agricultural machinery workflows, industrial electricity frameworks, and wood technological design metrics.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-brand-bg border-4 border-brand-dark rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-transform shadow-md">
              <div className="w-12 h-12 bg-brand-sage text-brand-dark rounded-xl border-2 border-brand-dark flex items-center justify-center">
                <Users className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-black tracking-tight uppercase text-brand-dark">Ethical Framework</h4>
              <p className="text-sm font-medium text-brand-dark/80 leading-relaxed">
                A structured everyday corporate assembly schedule built to nurture deep corporate governance, personal discipline, and civic contribution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. COMMUNITY NEWS EVENTS MODULE */}
      <section className="container mx-auto max-w-5xl px-4 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-brand-dark pb-4">
          <div>
            <h2 className="font-serif text-3xl font-black text-brand-dark tracking-tight uppercase">Campus News Board</h2>
            <p className="text-xs font-bold text-brand-sage uppercase tracking-widest mt-0.5">Stay up to date with active happenings</p>
          </div>
          <button 
            onClick={() => navigate("/news")}
            className="self-start sm:self-center inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-tan hover:text-brand-dark transition-colors border-2 border-transparent hover:border-brand-dark px-3 py-1.5 rounded-xl bg-transparent cursor-pointer font-bold"
          >
            Explore All Bulletins <Calendar className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Bulletin Item 1: ICT Club Launch */}
          <div className="flex flex-col sm:flex-row gap-5 items-start bg-brand-sage/5 border-2 border-brand-sage/30 rounded-2xl p-5 hover:border-brand-dark transition-colors h-full">
            <div className="w-full sm:w-28 h-28 bg-brand-dark rounded-xl border border-brand-dark overflow-hidden shrink-0 shadow-sm">
              <img 
                src="/news1.jpg" 
                alt="ICT Club Digital Training" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-peach uppercase tracking-widest">Digital Innovation</span>
              <h4 className="text-lg font-black text-brand-dark tracking-tight leading-snug">Kojja Secondary School Launches ICT Club</h4>
              <p className="text-xs font-medium text-brand-dark/75 leading-relaxed">
                In an exciting step forward for campus technology, our new ICT club has officially rolled out transformative digital training programs designed to build modern tech expertise.
              </p>
            </div>
          </div>

          {/* Bulletin Item 2: World Vision DREAMS Challenge */}
          <div className="flex flex-col sm:flex-row gap-5 items-start bg-brand-sage/5 border-2 border-brand-sage/30 rounded-2xl p-5 hover:border-brand-dark transition-colors h-full">
            <div className="w-full sm:w-28 h-28 bg-brand-dark rounded-xl border border-brand-dark overflow-hidden shrink-0 shadow-sm">
              <img 
                src="/news2.jpg" 
                alt="World Vision DREAMS Launch Day" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black text-brand-tan uppercase tracking-widest">Student Support</span>
              <h4 className="text-lg font-black text-brand-dark tracking-tight leading-snug">Empowering Girls to Stay in School</h4>
              <p className="text-xs font-medium text-brand-dark/75 leading-relaxed">
                Partnering with World Vision through the DREAMS Innovation Challenge, Kojja SS implements peer-led early warning systems, safety friends, and safe school contracts.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}