import { ArrowRight, FileText, CheckCircle2, AlertTriangle, HelpCircle, Download } from "lucide-react";
import { useState } from "react";

export function Admissions() {
  const [activeStep, setActiveStep] = useState(0);

  const admissionSteps = [
    {
      title: "1. Obtain Form",
      desc: "Pick up an entry packet directly from the campus registry office in Nsanja village, or request a digital copy via our official email pipeline."
    },
    {
      title: "2. Document Audit",
      desc: "Compile prior UNEB result slips (PLE or UCE), passport photos, birth certificates, and reference logs from previous administrative directors."
    },
    {
      title: "3. Review & Interview",
      desc: "Attend a structural placement dialogue with our academic panel to assess student competencies and determine placement inside club frameworks."
    },
    {
      title: "4. Verification",
      desc: "Upon validation of your files, formal entry letters are issued alongside official school asset requirements and bank payment slips."
    }
  ];

  return (
    <div className="bg-brand-bg text-brand-dark min-h-screen pb-24 selection:bg-brand-tan/20">
      
      {/* 1. HERO HEADER BANNER */}
      <section className="bg-brand-dark text-brand-bg py-20 px-4 text-center relative border-b-4 border-brand-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-sage/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-tan/20 text-brand-tan text-xs font-black uppercase tracking-widest px-4 py-1 rounded-md">
            🎓 Entry & Registration Portals
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none">
            Enroll At Kojja SSS
          </h1>
          <p className="text-sm sm:text-base text-brand-bg/75 max-w-xl mx-auto font-medium leading-relaxed">
            We operate transparent, competency-based entry tracks aligned with the Ministry of Education standards. Secure a spot in our upcoming academic term.
          </p>
        </div>
      </section>

      {/* 2. PROCEDURAL ENTRY TRACKS (INTERACTIVE GRID) */}
      <section className="max-w-5xl mx-auto px-4 pt-16 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest bg-brand-peach/25 text-brand-dark px-3 py-1 rounded-md">
            Registration Lifecycle
          </span>
          <h2 className="font-serif text-3xl font-black text-brand-dark uppercase tracking-tight">
            The Admissions Pipeline
          </h2>
          <div className="w-12 h-0.5 bg-brand-peach mx-auto rounded-full" />
        </div>

        {/* Step Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((step, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-6 border-2 rounded-3xl transition-all cursor-pointer select-none flex flex-col justify-between ${
                activeStep === idx 
                  ? "bg-brand-dark text-brand-bg border-brand-dark shadow-lg scale-[1.02]" 
                  : "bg-brand-bg text-brand-dark border-brand-dark/10 hover:border-brand-dark/40"
              }`}
            >
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-black uppercase tracking-tight leading-none">
                  {step.title}
                </h3>
                <p className={`text-xs font-medium leading-relaxed ${activeStep === idx ? "text-brand-bg/85" : "text-brand-dark/70"}`}>
                  {step.desc}
                </p>
              </div>
              <div className="pt-4 flex justify-end">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                  activeStep === idx ? "bg-brand-tan text-brand-dark" : "bg-brand-dark/10 text-brand-dark/60"
                }`}>
                  {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VERIFICATION FILES & CRITERIA RESTRUCTURING */}
      <section className="max-w-5xl mx-auto px-4 pt-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Required Files Checklist */}
        <div className="md:col-span-7 bg-brand-bg border-2 border-brand-dark rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-brand-dark/10 pb-4">
            <FileText className="w-5 h-5 text-brand-sage" />
            <h3 className="font-serif text-xl font-black text-brand-dark uppercase tracking-tight">
              Essential Filing Checklist
            </h3>
          </div>

          <p className="text-xs text-brand-dark/70 font-medium">
            Please make sure all original copies are neatly arranged inside a single document wallet when delivering files to the Nsanja campus office:
          </p>

          <ul className="space-y-3 p-0 list-none text-xs font-semibold text-brand-dark/90">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
              <span>Official UNEB Certificate or PLE Result Slips (for O-Level entry)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
              <span>Valid UCE Result Slips / Performance Logs (for A-Level entry cycles)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
              <span>Three (3) recent passport-sized photos with a clear white background</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
              <span>Valid National Identification card copy or Birth Certificate metrics</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
              <span>Signed behavioral evaluation log from your immediate past institution</span>
            </li>
          </ul>

          {/* Prompt Asset download block */}
          <div className="pt-4 border-t border-brand-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] text-brand-dark/60 font-medium">Need a printed guidelines layout reference?</span>
            <button className="bg-brand-dark text-brand-bg hover:bg-brand-peach hover:text-brand-dark border-0 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-pointer transition-colors flex items-center gap-2">
              <Download className="w-3.5 h-3.5" /> Requirements.pdf
            </button>
          </div>
        </div>

        {/* Regulatory Financial Safeguards Clause */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-brand-peach/10 border-2 border-brand-peach/30 p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-brand-dark">
              <AlertTriangle className="w-5 h-5 text-brand-dark shrink-0" />
              <h4 className="text-sm font-black uppercase tracking-tight">Financial Controls Policy</h4>
            </div>
            <p className="text-xs text-brand-dark/85 font-medium leading-relaxed">
              In complete alignment with community dialogue agreements, Kojja SSS enforces fully transparent fee structures. 
            </p>
            <p className="text-xs text-brand-dark/75 font-medium leading-relaxed">
              All statutory school charges must be paid directly via the school's bank portal or official mobile infrastructure. Tuition metrics are fixed per entry term to ensure student retention and protect parents from ad-hoc operational adjustments.
            </p>
          </div>

          {/* Quick FAQ item mini-node */}
          <div className="bg-brand-sage/5 border-2 border-brand-sage/20 p-6 rounded-3xl space-y-2">
            <div className="flex items-center gap-2 text-brand-dark">
              <HelpCircle className="w-4 h-4" />
              <h4 className="text-xs font-black uppercase tracking-wide">Mid-Term Transfers?</h4>
            </div>
            <p className="text-[11px] text-brand-dark/80 font-medium leading-relaxed">
              We process international or local transfers midway through terms if the student's portfolio clears standard verification and a slot is open within their technical track.
            </p>
          </div>
        </div>

      </section>

      {/* 4. FOOTER VISIT PROMPT CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 mt-24">
        <div className="bg-brand-tan text-brand-dark border-4 border-brand-dark rounded-3xl p-8 text-center space-y-4 shadow-xl relative overflow-hidden">
          <h3 className="font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight max-w-xl mx-auto leading-none">
            Ready to Begin the Registration Interview?
          </h3>
          <p className="text-xs font-medium text-brand-dark/90 max-w-md mx-auto leading-relaxed">
            Reach out to our information desk to secure an inspection tour or reserve a specific panel interview date on our calendar.
          </p>
          <div className="pt-2">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-brand-dark text-brand-bg text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl no-underline hover:bg-brand-bg hover:text-brand-dark transition-all border-0 shadow"
            >
              Contact Admissions Registrar <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}