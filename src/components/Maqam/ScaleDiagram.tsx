import React, { useState } from 'react';
import { Scale } from '../../types/music';
import { Music } from 'lucide-react';

interface ScaleDiagramProps {
  scale: Scale;
  highlightTonic?: boolean;
}

export default function ScaleDiagram({ scale, highlightTonic = true }: ScaleDiagramProps) {
  const [activeNote, setActiveNote] = useState<number | null>(null);

  // Arabic note names
  const noteNames: { [key: string]: string } = {
    'ج': 'دو',
    'د': 'ري',
    'هـ': 'مي',
    'و': 'فا',
    'جـ': 'صول',
    'د♭': 'ري低了',
    'هـ♭': 'مي低了',
    'و♭': 'فا低了',
    'جـ♭': 'صول低了',
  };

  const getNoteColor = (note: string, index: number) => {
    if (scale.quarterTones.some(qt => qt.note === note)) {
      return 'border-2 border-dashed border-[#D4AF37] bg-[#D4AF37]/10';
    }
    return 'bg-[#1f1f2e]';
  };

  return (
    <div className="card p-6">
      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Music size={20} className="text-[#D4AF37]" />
        المقياس
      </h4>

      {/* Scale visualization */}
      <div className="scale-diagram mb-6">
        {scale.degrees.map((note, idx) => (
          <div
            key={idx}
            onClick={() => setActiveNote(activeNote === idx ? null : idx)}
            className={`
              scale-note cursor-pointer
              ${getNoteColor(note, idx)}
              ${idx === 0 && highlightTonic ? 'ring-2 ring-[#D4AF37] bg-[#D4AF37]/20' : ''}
              ${activeNote === idx ? 'scale-110 bg-[#3B82F6]/20' : ''}
            `}
          >
            <span className={`text-lg font-bold ${idx === 0 ? 'text-[#D4AF37]' : 'text-white'}`}>
              {note}
            </span>
            <span className="text-[10px] text-[#71717a]">
              {idx + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Note details */}
      {activeNote !== null && (
        <div className="bg-[#0a0a0f] rounded-xl p-4 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-[#D4AF37]">
              الدرجة {activeNote + 1}
            </span>
            <span className="text-2xl font-bold">{scale.degrees[activeNote]}</span>
          </div>
          <div className="text-sm text-[#a1a1aa]">
            الفترة: {scale.intervals[activeNote]} نصف低了
          </div>
          {scale.quarterTones.find(qt => qt.note === scale.degrees[activeNote]) && (
            <div className="mt-2 text-sm text-[#D4AF37]">
              🎵 {scale.quarterTones.find(qt => qt.note === scale.degrees[activeNote])?.name}
            </div>
          )}
        </div>
      )}

      {/* Quarter tones legend */}
      {scale.quarterTones.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#1f1f2e]">
          <h5 className="text-sm font-semibold text-[#71717a] mb-2">الأنصاف والأرباع:</h5>
          <div className="flex flex-wrap gap-2">
            {scale.quarterTones.map((qt, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 rounded-lg text-sm"
              >
                <span className="text-[#D4AF37] font-bold">{qt.note}</span>
                <span className="text-[#a1a1aa]">{qt.name}</span>
                <span className="text-[#71717a]">({qt.cents} cents)</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tonic indicator */}
      <div className="mt-4 flex items-center gap-2 text-sm text-[#71717a]">
        <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span>
        <span>Tonic (الجذر): {scale.tonic}</span>
      </div>
    </div>
  );
}