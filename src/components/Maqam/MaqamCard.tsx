import React from 'react';
import { Link } from 'react-router-dom';
import { Maqam } from '../../types/music';
import { getMaqamFamily } from '../../data/maqamat';
import { ChevronLeft, Music2, Users } from 'lucide-react';

interface MaqamCardProps {
  maqam: Maqam;
}

export default function MaqamCard({ maqam }: MaqamCardProps) {
  const family = getMaqamFamily(maqam.family);

  return (
    <Link
      to={`/maqam/${maqam.id}`}
      className="block card p-5 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
            {maqam.name}
          </h3>
          {family && (
            <span
              className="family-badge mt-1 inline-block"
              style={{
                backgroundColor: `${family.color}20`,
                color: family.color
              }}
            >
              {family.name}
            </span>
          )}
        </div>
        <ChevronLeft className="text-[#71717a] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" size={20} />
      </div>

      {/* Scale Preview */}
      <div className="flex gap-1 mb-4">
        {maqam.scale.degrees.map((note, idx) => (
          <div
            key={idx}
            className={`
              w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold
              ${idx === 0 ? 'bg-[#D4AF37] text-[#0a0a0f]' : 'bg-[#1f1f2e] text-[#a1a1aa]'}
            `}
          >
            {note}
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-[#71717a] mb-4 line-clamp-2">
        {maqam.description.substring(0, 100)}...
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-[#71717a]">
        <div className="flex items-center gap-1">
          <Music2 size={14} />
          <span>{maqam.branches.length} فرع</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} />
          <span>{maqam.relatedMaqamat.length} ذو صلة</span>
        </div>
        <span className={`
          px-2 py-1 rounded-full
          ${maqam.teachingPriority === 'beginner' ? 'bg-green-500/20 text-green-400' : ''}
          ${maqam.teachingPriority === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
          ${maqam.teachingPriority === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
          ${maqam.teachingPriority === 'master' ? 'bg-purple-500/20 text-purple-400' : ''}
        `}>
          {maqam.teachingPriority === 'beginner' ? 'مبتدئ' :
           maqam.teachingPriority === 'intermediate' ? 'متوسط' :
           maqam.teachingPriority === 'advanced' ? 'متقدم' : 'احترافي'}
        </span>
      </div>
    </Link>
  );
}