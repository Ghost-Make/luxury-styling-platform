export function Footer() {
  return (
    <footer className="w-full py-20 px-8 md:px-16 border-t border-white/5 bg-midnight-obsidian relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* Logo/Name */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-black tracking-tighter text-midnight-ivory uppercase leading-none">
            gayathri <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">sreekumar</span>
          </h3>
          <p className="text-[9px] uppercase tracking-[0.4em] text-midnight-ivory/30 mt-3 font-black">
            Personal Stylist & Image Consultant
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/40">
          <a href="#about-me" className="hover:text-midnight-champagne transition-colors">About</a>
          <a href="#services" className="hover:text-midnight-champagne transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-midnight-champagne transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-midnight-champagne transition-colors">Contact</a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto text-center mt-20 text-[9px] font-black uppercase tracking-[0.3em] text-midnight-ivory/20">
        gayathrisreekumar.com All rights reserved. © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
