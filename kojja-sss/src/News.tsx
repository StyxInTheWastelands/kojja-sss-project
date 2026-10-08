import { Calendar, User, ArrowRight, Video, ExternalLink, Newspaper } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  videoUrl?: string;
  category: "Institutional" | "Community" | "Patriotism" | "Partnerships";
}

export function News() {
  const articles: Article[] = [
    {
      id: "1",
      category: "Institutional",
      title: "Kojja SSS Launches Modern ICT and Visual Resource Library",
      date: "June 2, 2026",
      author: "Academic Registrar",
      image: "/news1.jpg",
      excerpt: "Expanding local digital infrastructure with a brand-new computing suite designed to support self-directed practical student projects.",
      content: "As part of our commitment to breaking away from rigid historical educational structures, Kojja SSS has officially unveiled its newly refurbished ICT center. The space provides collaborative workstations, high-speed terminal resources, and a specialized visual media lab to ensure our students graduate with relevant structural technical expertise."
    },
    {
      id: "2",
      category: "Community",
      title: "Annual Agricultural Exhibition Showcases Practical Student Innovations",
      date: "May 24, 2026",
      author: "Vocational Dept.",
      image: "/news2.jpg",
      excerpt: "Students present advanced agricultural techniques and livestock management models to local farming committees.",
      content: "This year's student-led agricultural exhibition drew in parents, local leaders, and framework inspectors. Moving beyond textbooks, our vocational students demonstrated sustainable farming frameworks, small-scale animal husbandry strategies, and modern agribusiness logistics designed to bring immediate value back into Mukono district."
    },
    {
      id: "3",
      category: "Institutional",
      title: "Outstanding Educator Profile: Transforming Kojja SSS Through Practical Agribusiness",
      date: "May 18, 2026",
      author: "Editorial Team",
      image: "/news3.png",
      excerpt: "In our ongoing search for exceptional educators, we profile the head of the 'Bonna Basome' program at Kojja SSS, who is revolutionizing the campus image.",
      content: "In our search for outstanding educators who push past standard limitations, we profile the leadership driving the 'Bonna Basome' initiative right here at Kojja Secondary School. Through an innovative hands-on livestock rearing and farming curriculum, they have fundamentally uplifted the school’s environment and reputation—turning standard classroom hours into vibrant, high-yield practical training ecosystems."
    },
    {
      id: "4",
      category: "Community",
      title: "Administrative Council Addresses Nsanja Community Dialogue",
      date: "May 11, 2026",
      author: "Board of Governors",
      image: "/news4.png",
      videoUrl: "https://youtu.be/YLatfyZtbFI?si=_BiLvw8J0FkvOJW1",
      excerpt: "Deputy RDC Hassan Kasibante meets with administration at Nsanja village to review fee guidelines and establish transparent parent communications.",
      content: "Following concerns raised by community members in Nsanja village, Katosi, Mukono regarding student retention schedules and extra fee balances, Deputy RDC Kasibante Hassan engaged with school officials. The administration has clarified its tuition framework and committed to solidifying financial safeguards, ensuring students remain stably enrolled without disruption."
    },
    {
      id: "5",
      category: "Patriotism",
      title: "Presidential Initiative: 376 Kojja SSS Students Graduate with Civic Patriotism Certificates",
      date: "May 04, 2026",
      author: "Patriotism Club",
      videoUrl: "https://youtu.be/Vnpow2HIh9I?si=IIGtNnUUMTNKE1yd",
      excerpt: "Responding to national security concerns in Mukono, Kojja SSS commissions 376 students into the national civic security framework to build regional peace.",
      content: "In alignment with the Ministry of Education's new competency-based curriculum designed for self-employment and talent optimization, Kojja Secondary School hosted a major commissioning ceremony. Following recent security challenges in Mukono district, 376 out of 1,592 total students successfully completed intensive civic orientation, passing out with Patriotism Certificates aimed at maintaining local law, personal safety, and national unity."
    },
    {
      id: "6",
      category: "Partnerships",
      title: "Mundo Cooperante Mission Focuses on School Retention & Preventing Teenage Pregnancy",
      date: "April 28, 2026",
      author: "Guidance Office",
      image: "/students2.jpg",
      excerpt: "A review of international support pipelines protecting girls' academic pathways and leadership opportunities on campus.",
      content: "Last week, international representatives from Mundo Cooperante visited supported female scholars at Kojja SSS. The interactive roundtable sessions focused directly on improving terminal academic marks, cementing high school retention metrics, and executing active peer-led programs to prevent teenage pregnancies. Together, we stand behind the right to be a girl."
    }
  ];

  return (
    <div className="bg-brand-bg text-brand-dark min-h-screen pb-24 selection:bg-brand-tan/20">
      
      {/* HEADER HERO AREA */}
      <section className="bg-brand-dark text-brand-bg py-20 px-4 text-center relative overflow-hidden border-b-4 border-brand-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-sage/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-tan/20 text-brand-tan text-xs font-black uppercase tracking-widest px-4 py-1 rounded-md">
            <Newspaper className="w-3.5 h-3.5" /> Institutional Dispatch
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none">
            News & Campus Chronicles
          </h1>
          <p className="text-sm sm:text-base text-brand-bg/75 max-w-xl mx-auto font-medium leading-relaxed">
            Stay up to date with official circulars, student breakthroughs, national program achievements, and our ongoing community dialogues.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-brand-bg border-2 border-brand-dark rounded-3xl overflow-hidden shadow-md flex flex-col h-full group hover:shadow-xl transition-all"
            >
              
              {/* Image Frame or Fallback Geometric Block */}
              {article.image ? (
                <div className="w-full aspect-[16/10] bg-brand-dark overflow-hidden border-b-2 border-brand-dark relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-brand-dark text-brand-bg text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">
                    {article.category}
                  </span>
                </div>
              ) : (
                <div className="w-full aspect-[16/10] bg-brand-sage/10 border-b-2 border-brand-dark flex flex-col justify-between p-4 relative">
                  <span className="bg-brand-dark text-brand-bg text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md self-start shadow-sm">
                    {article.category}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-brand-sage/20 flex items-center justify-center text-brand-dark self-center">
                    <Newspaper className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="w-full h-1 bg-brand-sage/30 rounded" />
                </div>
              )}

              {/* Text Meta Content Area */}
              <div className="p-6 flex flex-col flex-1 space-y-3">
                
                {/* Meta Timeline Tags */}
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-wider text-brand-dark/50">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-brand-sage" /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-brand-peach" /> {article.author}
                  </span>
                </div>

                {/* Title and Excerpt */}
                <h3 className="font-serif text-lg font-black tracking-tight text-brand-dark leading-tight group-hover:text-brand-tan transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-brand-dark/80 font-medium leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                {/* Expanded Core Text Content Detail (Simulating Accordion or Context Block) */}
                <div className="pt-3 border-t border-brand-dark/10 text-[11px] text-brand-dark/70 font-medium leading-normal italic bg-brand-dark/[0.02] p-3 rounded-xl">
                  {article.content}
                </div>

                {/* Video URL CTA Handler if available */}
                {article.videoUrl && (
                  <a 
                    href={article.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-peach text-brand-dark text-[10px] font-black uppercase tracking-widest py-2.5 px-4 rounded-xl no-underline border border-brand-dark hover:bg-brand-dark hover:text-brand-bg transition-colors shadow-sm"
                  >
                    <Video className="w-3.5 h-3.5" /> Watch Broadcast Report <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER BULLETINS CALLOUT */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="bg-brand-tan/10 border-2 border-brand-dark p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-black text-brand-dark uppercase tracking-tight">Have an official campus notice to submit?</h4>
            <p className="text-xs text-brand-dark/70 font-medium">Reach out directly to the administrator desk to process certified club records.</p>
          </div>
          <a 
            href="/contact" 
            className="shrink-0 bg-brand-dark text-brand-bg text-xs font-black uppercase tracking-widest px-5 py-3.5 rounded-xl no-underline hover:bg-brand-peach hover:text-brand-dark transition-colors flex items-center gap-2"
          >
            Submit Media Request <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}