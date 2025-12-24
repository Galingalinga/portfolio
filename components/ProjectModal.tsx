
import React from 'react';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#624CAB]/20 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-sm bg-white border-2 border-[#758ECD] rounded-3xl p-6 hand-drawn-shadow transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-[#C1CEFE] rounded-full transition-colors group"
        >
          <X size={20} className="text-[#624CAB] group-hover:scale-110 transition-transform" />
        </button>

        <div className="flex flex-col gap-4">
          <div className="w-full h-40 bg-[#C1CEFE]/30 rounded-2xl flex items-center justify-center border border-dashed border-[#758ECD] overflow-hidden">
            <img 
              src={`https://picsum.photos/seed/${project.id + 100}/400/300`} 
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#533E2D] leading-tight">
              {project.title}
            </h2>
            <p className="text-[#758ECD] font-sketch text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#624CAB] text-white rounded-full text-sm font-bold hover:bg-[#7189FF] transition-all hover:scale-[1.02] shadow-lg shadow-[#624CAB]/20"
          >
            造訪專案
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
