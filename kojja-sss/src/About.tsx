import { Shield, Target, Lightbulb, Heart, ArrowRight, Award, GraduationCap, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

export function About() {
  const navigate = useNavigate();

  return (
    <div className="space-y-24 pb-24 bg-brand-bg text-brand-dark overflow-x-hidden selection:bg-brand-tan/20">
      
      {/* 1. GEOMETRIC HERO INTEGRATING ABOUT1.JPG */}
      <section className="pt-12 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-brand-sage/20 pb-16">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-sage/20 text-brand-dark text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
            🌱 Institutional Identity
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-black text-brand-dark tracking-tighter leading-[0.95]">
            REDEFINING WHAT A <br />
            <span className="text-brand-bg inline-block bg-brand-dark px-4 py-1 my-1 rounded-2xl uppercase tracking-tight font-black shadow-md">
              SECONDARY
            </span> <br />
            EDUCATION CAN BE
          </h1>
          <p className="text-base sm:text-lg text-brand-dark/80 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed pt-2">
            Kojja SSS was founded on a simple disruptive principle: that school shouldn't just prepare you to pass exams, it should equip you to confidently build the future of your community.
          </p>
        </div>

        {/* Right Column: Protected Image Canvas with Balanced Geometric Plates */}
        <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none group">
          {/* Decorative Background Blocks to Balance White Space */}
          <div className="absolute inset-0 bg-brand-peach rounded-3xl rotate-3 opacity-40 group-hover:rotate-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-brand-sage rounded-3xl -rotate-2 opacity-30 group-hover:rotate-0 transition-transform duration-300" />
          
          {/* Framed Image Container to Keep Resolution Crisp */}
          <div className="relative aspect-[4/3] bg-brand-dark rounded-3xl border-4 border-brand-dark overflow-hidden shadow-2xl">
            <img 
              src="/about1.jpg" 
              alt="Kojja Institutional Learning Environment" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>

      {/* 2. OUR PURPOSE & ACADEMIC REVOLUTION SPLIT */}
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4 space-y-3">
          <div className="inline-block text-[10px] font-black uppercase tracking-widest bg-brand-peach/25 text-brand-dark px-3 py-1 rounded-md">
            Our Purpose
          </div>
          <h2 className="font-serif text-3xl font-black tracking-tight text-brand-dark leading-none">
            Nurturing Capabilities
          </h2>
          <div className="w-16 h-0.5 bg-brand-peach rounded-full" />
        </div>

        <div className="md:col-span-8 space-y-6">
          <p className="text-base text-brand-dark/85 font-medium leading-relaxed">
            We intentionally break away from rigid, legacy models. By blending the strict academic standards of the Uganda National Curriculum with dynamic technical clubs, digital fluency initiatives, and peer-led protective leadership models, we make space for true potential to flourish.
          </p>

          {/* Quick Value Points (Replacing Time Metrics) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3 items-center bg-brand-dark/5 p-4 rounded-xl border border-brand-dark/10">
              <GraduationCap className="w-5 h-5 text-brand-dark shrink-0" />
              <span className="text-xs font-black uppercase tracking-wide">National Curriculum Excellence</span>
            </div>
            <div className="flex gap-3 items-center bg-brand-dark/5 p-4 rounded-xl border border-brand-dark/10">
              <Award className="w-5 h-5 text-brand-dark shrink-0" />
              <span className="text-xs font-black uppercase tracking-wide">Practical Vocational Mastery</span>
            </div>
          </div>
        </div>

      </section>

      {/* 3. EDITORIAL CAMPUS PHOTO MOSAIC */}
      <section className="bg-brand-dark text-brand-bg py-16 px-4 border-y-4 border-brand-dark">
        <div className="container mx-auto max-w-5xl space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-bg/20 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-tan">Campus Life Grid</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tight text-brand-bg">
                The Student Experience Inside Kojja SS
              </h2>
            </div>
            <p className="text-xs font-medium text-brand-bg/70 max-w-xs leading-relaxed">
              A snapshot of standard interactive cycles across our academic spaces, collaborative clubs, and community assemblies.
            </p>
          </div>

          {/* Dynamic Graphic Mosaic Case */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Image Box 1: Tall Aspect */}
            <div className="relative aspect-[4/5] bg-brand-bg rounded-2xl overflow-hidden border-2 border-brand-bg/20 group shadow-lg">
              <img 
                src="/students1.jpg" 
                alt="Students Collaboration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white">
                Academic Engagement
              </span>
            </div>

            {/* Image Box 2: Square Aspect */}
            <div className="relative aspect-square sm:aspect-auto sm:h-full bg-brand-bg rounded-2xl overflow-hidden border-2 border-brand-bg/20 group shadow-lg">
              <img 
                src="/students2.jpg" 
                alt="Campus Leadership" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white">
                Peer Leadership Support
              </span>
            </div>

            {/* Image Box 3: Wide/Standard Aspect across columns */}
            <div className="sm:col-span-2 lg:col-span-1 relative aspect-[4/3] lg:aspect-[4/5] bg-brand-bg rounded-2xl overflow-hidden border-2 border-brand-bg/20 group shadow-lg">
              <img 
                src="/students3.jpg" 
                alt="Technical Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white">
                Practical Workshop Layouts
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUE PILLARS */}
      <section className="container mx-auto max-w-5xl px-4 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl font-black text-brand-dark uppercase tracking-tight">Our Core Anchors</h2>
          <div className="w-12 h-0.5 bg-brand-sage mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="bg-brand-sage/5 border-2 border-brand-sage/20 p-6 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-lg bg-brand-sage/20 flex items-center justify-center text-brand-dark">
              <Shield className="w-4 h-4 stroke-[3]" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-brand-dark">Safe Culture</h4>
            <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
              Enforcing protected safe contracts, safety friends, and robust peer-led early warning accountability pipelines.
            </p>
          </div>

          <div className="bg-brand-peach/5 border-2 border-brand-peach/20 p-6 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-lg bg-brand-peach/20 flex items-center justify-center text-brand-dark">
              <Lightbulb className="w-4 h-4 stroke-[3]" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-brand-dark">Innovation Flow</h4>
            <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
              Providing modern digital infrastructure and active ICT club frameworks to build relevant technical competency.
            </p>
          </div>

          <div className="bg-brand-tan/10 border-2 border-brand-tan/30 p-6 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-lg bg-brand-tan/30 flex items-center justify-center text-brand-dark">
              <Target className="w-4 h-4 stroke-[3]" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-brand-dark">True Focus</h4>
            <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
              Prioritizing conceptual academic infrastructure that translates instantly to professional performance indicators.
            </p>
          </div>

          <div className="bg-brand-dark/5 border-2 border-brand-dark/15 p-6 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-lg bg-brand-dark/10 flex items-center justify-center text-brand-dark">
              <Heart className="w-4 h-4 stroke-[3]" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-brand-dark">Community Impact</h4>
            <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
              Molding citizens dedicated to generating actual sustainable value inside local and national arenas.
            </p>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION FOR PROSPECTIVE VISITORS */}
      <section className="container mx-auto max-w-4xl px-4">
        <div className="bg-brand-peach text-brand-dark rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border-4 border-brand-dark shadow-xl">
          <div className="absolute -top-12 -left-12 w-36 h-36 bg-white/20 rounded-full blur-2xl pointer-events-none" />
          
          <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tight max-w-xl mx-auto leading-none">
            Want to See Our Creative Academic Culture in Action?
          </h2>
          <p className="text-sm font-medium max-w-md mx-auto text-brand-dark/90 leading-relaxed">
            Our campus gates are regularly open for guided tours, dialogue forums, and structural technical exhibitions. Come see the difference firsthand.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-brand-dark text-brand-bg text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-brand-tan hover:text-brand-dark transition-colors border-0 cursor-pointer shadow-md"
            >
              Schedule Campus Visit
            </button>
            <button
              onClick={() => navigate("/admissions")}
              className="bg-brand-bg text-brand-dark text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-brand-tan transition-all border-2 border-brand-dark cursor-pointer flex items-center justify-center gap-2"
            >
              Explore Entry Cycles <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}