
import React from 'react';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-6 text-center z-30 pointer-events-none">
      <div className="max-w-2xl mx-auto py-3 px-8 bg-white/80 backdrop-blur-md border border-[#C1CEFE] rounded-full shadow-lg shadow-[#758ECD]/10 inline-block pointer-events-auto">
        <p className="text-[#533E2D] font-sketch text-xs sm:text-sm flex items-center justify-center gap-1">
          <span className="mr-1">🫐 CONTACT GALING:</span>
          {FOOTER_LINKS.map((link, idx) => (
            <React.Fragment key={link.name}>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-[#624CAB] hover:text-[#7189FF] underline underline-offset-4 transition-colors px-1"
              >
                {link.name}
              </a>
              {idx < FOOTER_LINKS.length - 1 ? <span className="text-[#758ECD] mx-1">|</span> : ''}
            </React.Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
