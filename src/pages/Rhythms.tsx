import React from 'react';
import { rhythms } from '../data/maqamat';
import { Music, Clock, Play, ChevronLeft } from 'lucide-react';

export default function Rhythms() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gold-text">الإيقاعات العربية</span>
          </h1>
          <p className="text-[#71717a]">
            تعرف على أهم الإيقاعات العربية (الأعراق) المستخدمة في الموسيقى
          </p>
        </div>

        {/* Info card */}
        <div className="card p-6 mb-8 bg-gradient-to-l from-[#D4AF37]/10 to-transparent">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center">
              <Music className="text-[#0a0a0f]" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">ما هو الإيقاع؟</h2>
              <p className="text-[#71717a]">العرض الأساسي للإيقاعات العربية</p>
            </div>
          </div>
          <p className="text-[#a1a1aa] leading-relaxed">
            الإيقاع أو العِراق هو نظام زمني يُنظم الموسيقى العربية. يتكون من تسلسل منتظم
            من النقرات (ضربات) التي تُشكّل دورات متكررة. الإيقاعات العربية متنوعة وغنية،
            وتختلف في عدد النقرات وأوزانها، مما يُعطي كل إيقاع طابعه الخاص.
          </p>
        </div>

        {/* Rhythms grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rhythms.map((rhythm, idx) => (
            <div
              key={rhythm.id}
              className="card p-6 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{rhythm.arabicName}</h3>
                  <span className="text-[#71717a] text-sm">{rhythm.name}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold">{rhythm.count}</span>
                </div>
              </div>

              {/* Pattern visualization */}
              <div className="mb-4">
                <span className="text-sm text-[#71717a] mb-2 block">النمط:</span>
                <div className="flex gap-2">
                  {rhythm.pattern.split(' ').map((beat, i) => (
                    <div
                      key={i}
                      className={`
                        w-10 h-10 rounded-lg flex items-center justify-center font-bold
                        ${beat === '1' ? 'bg-[#D4AF37] text-[#0a0a0f]' : 'bg-[#1f1f2e] text-[#71717a]'}
                      `}
                    >
                      {beat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#a1a1aa] mb-4">
                {rhythm.description}
              </p>

              {/* Usage */}
              <div className="mb-4">
                <span className="text-xs text-[#71717a] mb-1 block">الاستخدام:</span>
                <span className="text-sm text-[#D4AF37]">{rhythm.usage}</span>
              </div>

              {/* Examples */}
              <div className="pt-4 border-t border-[#1f1f2e]">
                <span className="text-xs text-[#71717a] mb-2 block">أمثلة:</span>
                <div className="flex flex-wrap gap-2">
                  {rhythm.examples.map((example, i) => (
                    <span key={i} className="px-2 py-1 bg-[#0a0a0f] rounded-lg text-xs text-[#a1a1aa]">
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              {/* Play button */}
              <button className="w-full mt-4 btn btn-secondary">
                <Play size={18} />
                استمع للإيقاع
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 card p-8">
          <h2 className="text-2xl font-bold mb-6">ملاحظات مهمة</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#3B82F6]">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">الرقم 1 في النمط</h3>
                <p className="text-sm text-[#71717a]">
                  الرقم 1 يشير إلى النقرة القوية (الذبابة)، بينما الأرقام الأخرى
                  تمثل نقرات weaker.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#10B981]">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">الربط مع الماقات</h3>
                <p className="text-sm text-[#71717a]">
                  كل إيقاع يتناسب بشكل أفضل مع certain الماقات، لكن هذا ليس
                  قاعدة صارمة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}