import { MapPin, Phone, Mail, Clock, Send, ShieldAlert, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-brand-bg text-brand-dark min-h-screen pb-24 selection:bg-brand-tan/20">
      
      {/* 1. HERO HEADER CONTAINER */}
      <section className="bg-brand-dark text-brand-bg py-20 px-4 text-center relative border-b-4 border-brand-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-peach/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-peach/20 text-brand-peach text-xs font-black uppercase tracking-widest px-4 py-1 rounded-md">
            📍 Campus Communication Hub
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none">
            Connect With Kojja SSS
          </h1>
          <p className="text-sm sm:text-base text-brand-bg/75 max-w-xl mx-auto font-medium leading-relaxed">
            Have questions about admissions, enrollment cycles, community dialogues, or technical club frameworks? Reach out directly to our administrative desk.
          </p>
        </div>
      </section>

      {/* 2. CORE INFORMATION GRID */}
      <section className="max-w-6xl mx-auto px-4 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Visual Info Nodes */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest bg-brand-sage/20 text-brand-dark px-3 py-1 rounded-md">
              Office Locations
            </span>
            <h2 className="font-serif text-3xl font-black tracking-tight text-brand-dark leading-none">
              Reach Us Directly
            </h2>
            <p className="text-xs text-brand-dark/75 font-medium leading-relaxed">
              Our main administration office handles prospective tours, registry verification, and parental dialogue logs during standard weekday routines.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Location Block */}
            <div className="flex gap-4 p-5 bg-brand-dark/5 rounded-2xl border-2 border-brand-dark/10">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-bg flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-brand-dark">Campus Address</h4>
                <p className="text-xs text-brand-dark/80 font-semibold leading-relaxed">
                  Nsanja Village, Katosi Road,<br />
                  Ntenjeru Sub-county, Mukono District, Uganda
                </p>
              </div>
            </div>

            {/* Calling Details Block */}
            <div className="flex gap-4 p-5 bg-brand-dark/5 rounded-2xl border-2 border-brand-dark/10">
              <div className="w-10 h-10 rounded-xl bg-brand-tan text-brand-dark flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-brand-dark">Direct Phone Line</h4>
                <p className="text-xs text-brand-dark/80 font-bold tracking-wide">
                  +256 (0) 123 456789
                </p>
                <p className="text-[10px] text-brand-dark/60 font-medium">Available during administrative hours</p>
              </div>
            </div>

            {/* Email Registry Block */}
            <div className="flex gap-4 p-5 bg-brand-dark/5 rounded-2xl border-2 border-brand-dark/10">
              <div className="w-10 h-10 rounded-xl bg-brand-peach text-brand-dark flex items-center justify-center shrink-0 shadow-md">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-brand-dark">Digital Inquiries</h4>
                <p className="text-xs text-brand-dark/80 font-bold lowercase tracking-normal">
                  info@kojja-sss.edu
                </p>
                <p className="text-[10px] text-brand-dark/60 font-medium">Standard reply matrix inside 48 business hours</p>
              </div>
            </div>

            {/* Hours Node */}
            <div className="flex gap-4 p-5 bg-brand-dark/5 rounded-2xl border-2 border-brand-dark/10">
              <div className="w-10 h-10 rounded-xl bg-brand-sage text-brand-dark flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-wider text-brand-dark">Gate Cycles</h4>
                <p className="text-xs text-brand-dark/80 font-semibold">
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>
                <p className="text-xs text-brand-dark/80 font-semibold">
                  Saturday: 9:00 AM – 1:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Modern Input Message Canvas */}
        <div className="lg:col-span-7 bg-brand-bg border-2 border-brand-dark rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Aesthetic Geometric Accents */}
          <div className="absolute top-0 right-0 w-32 h-4 bg-brand-peach" />
          <div className="absolute bottom-0 left-0 w-4 h-32 bg-brand-sage" />

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-black text-brand-dark uppercase tracking-tight">Send a Direct Message</h3>
                <p className="text-xs text-brand-dark/70 font-medium">Your inquiry will route straight into our central registrar directory.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/70 block">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g., John Mugisha"
                    className="w-full bg-brand-dark/5 border-2 border-brand-dark/20 rounded-xl px-4 py-3 text-xs font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-tan transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/70 block">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="e.g., +256 700 000000"
                    className="w-full bg-brand-dark/5 border-2 border-brand-dark/20 rounded-xl px-4 py-3 text-xs font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-tan transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/70 block">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-brand-dark/5 border-2 border-brand-dark/20 rounded-xl px-4 py-3 text-xs font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-tan transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/70 block">Topic / Department *</label>
                <select className="w-full bg-brand-dark/5 border-2 border-brand-dark/20 rounded-xl px-4 py-3 text-xs font-medium text-brand-dark focus:outline-none focus:border-brand-tan transition-colors cursor-pointer appearance-none">
                  <option>General Admissions Inquiry</option>
                  <option>Patriotism Program & Community Affairs</option>
                  <option>Financial Registry & Fees</option>
                  <option>Mundo Cooperante Scholars Pipeline</option>
                  <option>Other Institutional Issues</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/70 block">Message Details *</label>
                <textarea 
                  rows={5} 
                  required
                  placeholder="Please state your message or inquiry clearly here..."
                  className="w-full bg-brand-dark/5 border-2 border-brand-dark/20 rounded-xl px-4 py-3 text-xs font-medium text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-tan transition-colors resize-none"
                />
              </div>

              {/* Safety notice info clause */}
              <div className="flex gap-2.5 bg-brand-sage/10 p-3 rounded-xl border border-brand-sage/30 text-[10px] text-brand-dark/80 font-medium leading-normal">
                <ShieldAlert className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                <span><strong>Security Notice:</strong> All official parent-school adjustments, data logging parameters, or fee balancing must be executed in person on campus with standard receipts.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-dark text-brand-bg text-xs font-black uppercase tracking-widest py-4 rounded-xl hover:bg-brand-peach hover:text-brand-dark transition-colors border-0 cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                Dispatch Inquiry <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            /* SUCCESS FEEDBACK DISPATCH CANVAS */
            <div className="py-16 text-center space-y-4 max-w-sm mx-auto">
              <div className="w-16 h-16 rounded-full bg-brand-sage/20 text-brand-dark flex items-center justify-center mx-auto shadow-inner animate-bounce">
                <CheckCircle className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="font-serif text-2xl font-black text-brand-dark uppercase tracking-tight">Message Dispatched</h3>
              <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
                Thank you. Your request log has been assigned to the Registrar’s office framework. We will review details against institutional guides and respond promptly.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-black uppercase tracking-widest text-brand-tan hover:text-brand-dark transition-colors bg-transparent border-0 cursor-pointer underline pt-2"
              >
                Submit another message
              </button>
            </div>
          )}

        </div>

      </section>

    </div>
  );
}