import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, ArrowUpRight, GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-dark antialiased">
      
      {/* HEADER NAVBAR */}
      <header className="bg-brand-bg/90 backdrop-blur-md border-b border-brand-sage/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-6xl py-4 flex items-center justify-between">
          
          {/* Logo Frame */}
          <Link to="/" className="flex items-center gap-3 no-underline group">
            <div className="w-10 h-10 bg-brand-tan text-brand-bg rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-[1.02]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-black uppercase tracking-wider text-brand-dark leading-none mb-1">
                Kojja SSS
              </span>
              <span className="text-[10px] font-bold text-brand-sage uppercase tracking-widest leading-none">
                Secondary School Setup
              </span>
            </div>
          </Link>

          {/* Links Row */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase font-bold tracking-widest relative py-1.5 transition-colors no-underline ${
                    active ? "text-brand-tan" : "text-brand-dark/70 hover:text-brand-tan"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-tan rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/admissions" 
              className="inline-flex items-center gap-1.5 bg-brand-dark text-brand-bg text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-brand-tan transition-colors no-underline shadow-sm"
            >
              Admissions <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-dark hover:bg-brand-sage/10 rounded-xl transition-colors border-0 bg-transparent cursor-pointer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-sage/20 bg-brand-bg absolute top-full left-0 w-full shadow-xl">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase font-bold tracking-wider py-2.5 border-b border-brand-sage/10 no-underline ${
                    isActive(link.path) ? "text-brand-tan" : "text-brand-dark/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center bg-brand-dark text-brand-bg text-xs font-bold uppercase tracking-widest py-3 rounded-xl no-underline"
              >
                Admissions Portal
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* CORE CONTENT CONTENT ROUTER PORTAL */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* PREMIUM INSTITUTIONAL FOOTER */}
      <footer className="bg-brand-dark text-brand-bg border-t-4 border-brand-dark pt-16 pb-8 relative overflow-hidden">
        
        {/* Soft geometric layout underlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-peach/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-tan/5 rounded-full blur-2xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10 relative z-10">
          
          {/* Main Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-tan text-brand-dark rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg font-black uppercase tracking-wider text-brand-bg">
                Kojja SSS
              </span>
            </div>
            <p className="text-xs text-brand-bg/70 max-w-sm font-medium leading-relaxed">
              Delivering innovative, practical secondary academic environments structured to foster digital competency, civic discipline, and local leadership.
            </p>
          </div>

          {/* Quick Shortcuts Links Grid */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-tan">Navigation</h4>
            <ul className="space-y-2.5 p-0 list-none">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-xs text-brand-bg/60 hover:text-brand-peach transition-colors no-underline font-bold uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/admissions" 
                  className="text-xs text-brand-bg/60 hover:text-brand-peach transition-colors no-underline font-bold uppercase tracking-wider"
                >
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Node */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-peach">Campus Contact</h4>
            <ul className="space-y-3 p-0 list-none text-xs font-medium text-brand-bg/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-tan shrink-0 mt-0.5" />
                <span>Kojja, Mukono District, Uganda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-tan shrink-0" />
                <span>+256 (0) 123 456789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-tan shrink-0" />
                <span className="lowercase">info@kojja-sss.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal and Copyright Base row */}
        <div className="container mx-auto max-w-6xl px-4 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-black uppercase tracking-widest text-brand-bg/40 relative z-10">
          <p>&copy; {new Date().getFullYear()} Kojja SSS. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-brand-bg/60 transition-colors cursor-pointer">Privacy Framework</span>
            <span className="hover:text-brand-bg/60 transition-colors cursor-pointer">MoES Guidelines</span>
          </div>
        </div>

      </footer>
    </div>
  );
}