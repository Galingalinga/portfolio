
import React from 'react';
import { Project } from '../types';

interface HotspotProps {
  project: Project;
  onClick: (project: Project) => void;
}

const Hotspot: React.FC<HotspotProps> = ({ project, onClick }) => {
  return (
    <button
      onClick={() => onClick(project)}
      style={{
        top: project.top,
        left: project.left,
        width: '4.5%', // 調整熱區大小以精確覆蓋藍莓
        paddingBottom: '4.5%',
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer group transition-all pointer-events-auto"
      aria-label={`查看專案：${project.title}`}
    >
      {/* 靜態的懸停外圈提示，不再閃爍 */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#7189FF]/60 group-hover:bg-[#7189FF]/10 transition-all duration-300 scale-110" />
      
      {/* 內層靜態亮色塊，僅在滑鼠移入時顯示 */}
      <div className="absolute inset-0 rounded-full bg-[#7189FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default Hotspot;
