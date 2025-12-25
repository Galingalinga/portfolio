
import React, { useState } from 'react';
import { Palette as PaletteIcon, RotateCcw, X, Check } from 'lucide-react';

interface PaletteProps {
    colors: string[];
    onChange: (index: number, color: string) => void;
    onReset: () => void;
    onThemeSelect?: (colors: string[]) => void;
}

const PRESET_COLORS = [
    '#C1CEFE', '#E6E6FA', '#F0F8FF', '#F5FFFA',
    '#FFDAB9', '#FFF0F5', '#FFF9C4', '#FFECB3',
    '#624CAB', '#3E2D20', '#FFFFFF', '#000000'
];

const THEMES = [
    { name: '預設', colors: ['#C1CEFE', '#C1CEFE', '#C1CEFE'] },
    { name: '薰衣草', colors: ['#E6E6FA', '#D8BFD8', '#624CAB'] },
    { name: '晨曦', colors: ['#FFF9C4', '#FFECB3', '#C1CEFE'] },
    { name: '午夜', colors: ['#2C3E50', '#34495E', '#1B2631'] },
    { name: '薄荷', colors: ['#F5FFFA', '#E0F2F1', '#B2DFDB'] }
];

const Palette: React.FC<PaletteProps> = ({ colors, onChange, onReset, onThemeSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="relative flex flex-col items-start gap-4 font-sans">
            {/* 展開的面板 */}
            {isOpen && (
                <div className="absolute left-0 bottom-full mb-4 bg-white/95 backdrop-blur-lg p-5 rounded-3xl shadow-2xl border border-[#758ECD]/30 w-[240px] sm:w-64 animate-in slide-in-from-bottom-5 duration-300 z-50 overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-[#3E2D20] tracking-wide">背景調色盤</h3>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setActiveIndex(null);
                            }}
                            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-black/5"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* 亮點：三點切換 */}
                    <div className="flex justify-between items-center mb-6 bg-gray-50/80 p-2 rounded-2xl border border-gray-100">
                        {colors.map((color, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center border-2 ${activeIndex === index ? 'border-[#624CAB] scale-110 shadow-md ring-4 ring-[#624CAB]/10' : 'border-white hover:border-gray-200'}`}
                                style={{ backgroundColor: color }}
                            >
                                {activeIndex === index && <Check size={20} className={index === 2 && color === '#000000' ? 'text-white' : 'text-white mix-blend-difference'} />}
                                <span className="absolute -bottom-5 text-[10px] font-bold text-gray-400 uppercase">
                                    {index === 0 ? '上' : index === 1 ? '中' : '下'}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* 顏色選擇網格 (當點選某一點時顯示) */}
                    {activeIndex !== null && (
                        <div className="mb-6 animate-in fade-in zoom-in-95 duration-200">
                            <p className="text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest px-1">選擇顏色</p>
                            <div className="grid grid-cols-4 gap-2">
                                {PRESET_COLORS.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => onChange(activeIndex, color)}
                                        className={`w-full aspect-square rounded-full border-2 transition-transform active:scale-90 ${colors[activeIndex] === color ? 'border-[#624CAB] scale-105' : 'border-white'}`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 快捷主題 */}
                    <div className="mb-6">
                        <p className="text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest px-1">快捷主題</p>
                        <div className="flex flex-wrap gap-2">
                            {THEMES.map(theme => (
                                <button
                                    key={theme.name}
                                    onClick={() => {
                                        if (onThemeSelect) {
                                            onThemeSelect(theme.colors);
                                        } else {
                                            theme.colors.forEach((c, i) => onChange(i, c));
                                        }
                                    }}
                                    className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[11px] font-bold text-gray-600 hover:bg-[#624CAB] hover:text-white hover:border-[#624CAB] transition-all active:scale-95"
                                >
                                    {theme.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-gray-100 mb-4" />

                    <button
                        onClick={() => {
                            onReset();
                            setActiveIndex(null);
                        }}
                        className="flex items-center gap-2 text-xs text-[#624CAB] hover:text-[#7189FF] font-bold transition-colors w-full justify-center py-2 rounded-xl hover:bg-[#624CAB]/5"
                    >
                        <RotateCcw size={14} />
                        重置所有顏色
                    </button>
                </div>
            )}

            {/* 開關按鈕 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${isOpen
                    ? 'bg-[#624CAB] text-white rotate-90 scale-110'
                    : 'bg-white text-[#624CAB] hover:scale-110 hover:bg-[#F0F4FF] ring-1 ring-black/5'
                    }`}
                title="自訂背景色彩"
            >
                <PaletteIcon size={24} />
            </button>
        </div>
    );
};

export default Palette;
