
import React, { useState, useCallback } from 'react';
import { PROJECTS, BACKGROUND_IMAGE_URL } from './constants';
import { Project } from './types';
import Hotspot from './components/Hotspot';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#C1CEFE] overflow-hidden flex flex-col font-handwritten selection:bg-[#7189FF] selection:text-white">
      
      {/* 背景圖層 - 確保鋪滿全螢幕 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out z-0"
        style={{ 
          backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
          backgroundPosition: 'center center'
        }}
      />

      {/* 互動與文字內容層 */}
      <div className="relative flex-grow flex items-center justify-center z-10">
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          
          {/* 標題區域 */}
          <div className="absolute top-[8%] left-0 w-full px-4 text-center pointer-events-none flex flex-col items-center justify-center z-10">
            <h1 className="garden-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest animate-in slide-in-from-top duration-1000">
              <span className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">GALING'S VIBE CODING</span>
              <span className="leafy-garden ml-3 drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">GARDEN</span>
            </h1>
          </div>

          {/* 藍莓互動熱區 - 加入 pointer-events-none 避免阻擋頁腳 */}
          <div className="absolute inset-0 z-20 pointer-events-none">
             {PROJECTS.map((project) => (
               <Hotspot 
                 key={project.id} 
                 project={project} 
                 onClick={handleOpenProject} 
               />
             ))}
          </div>
        </div>
      </div>

      {/* 頁腳 */}
      <Footer />

      {/* 彈出式專案卡片 */}
      <ProjectModal 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default App;
