import React from 'react';
import { Link } from 'react-router-dom';
import { MaqamFamily } from '../../types/music';

interface FamilyCardProps {
  family: MaqamFamily;
  maqamCount: number;
}

export default function FamilyCard({ family, maqamCount }: FamilyCardProps) {
  return (
    <Link
      to={`/library?family=${family.id}`}
      className="block card p-6 group"
      style={{ '--family-color': family.color } as React.CSSProperties}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-2xl font-bold"
        style={{ backgroundColor: `${family.color}20`, color: family.color }}
      >
        {family.name.charAt(0)}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
        {family.name}
      </h3>

      <p className="text-[#71717a] text-sm mb-4 line-clamp-2">
        {family.description}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#71717a]">{maqamCount} مقام</span>
        <span
          className="family-badge"
          style={{ backgroundColor: `${family.color}20`, color: family.color }}
        >
          {family.mainMaqam}
        </span>
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          boxShadow: `0 0 40px ${family.color}20`,
          pointerEvents: 'none'
        }}
      />
    </Link>
  );
}