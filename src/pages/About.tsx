import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Play, BookOpen, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-l from-[#D4AF37]/10 via-transparent to-transparent">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gold-text">الموسيقى العربية</span>
          </h1>
          <p className="text-xl text-[#a1a1aa] mb-4">
            رحلة عبر التاريخ والثقافة
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Section 1: What is Arabic Music */}
        <section className="card p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Music className="text-[#D4AF37]" />
            ما هي الموسيقى العربية؟
          </h2>
          <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
            <p>
              الموسيقى العربية هي تراث موسيقي غني يمتد لآلاف السنين، يتجذر في الثقافات
              العربية من الخليج إلى المحيط. تتميز بنظام فريد من التنغيمات الدقيقة
              التي تُعرف بـ "الأنصاف والأرباع"، مما يُعطيها جمالاً وتميزاً لا يُشبه
              أي نمط موسيقي آخر في العالم.
            </p>
            <p>
              تعتمد الموسيقى العربية بشكل أساسي على نظام المقامات، وهو نظام مُعقد
              من النغمات والعلاقات بينها. كل مقام له طابعه الخاص الذي يُثير مشاعر
              محددة ويُناسب سياقات معينة.
            </p>
          </div>
        </section>

        {/* Section 2: Maqam System */}
        <section className="card p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className="text-[#D4AF37]" />
            نظام المقامات
          </h2>
          <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
            <p>
              المقام هو الأساس الذي تُبنى عليه الموسيقى العربية. يُشبه المقام النطاق
              الموسيقي (scale) في الموسيقى الغربية، لكنه أكثر تعقيداً ومرونة.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#0a0a0f] rounded-xl p-6">
                <h3 className="font-bold text-[#D4AF37] mb-3">الأنصاف النغمة</h3>
                <p className="text-sm text-[#71717a]">
                  تقع بين النغمات الكاملة، وتُعطي المرونة في التعبير الموسيقي.
                  مثلاً: بين الدو والري يوجد نصفان.
                </p>
              </div>
              <div className="bg-[#0a0a0f] rounded-xl p-6">
                <h3 className="font-bold text-[#3B82F6] mb-3">أرباع النغمة</h3>
                <p className="text-sm text-[#71717a]">
                  نغمات تقع في منتصف المسافة بين درجتين كاملتين.
                  هذه سمة مميزة للموسيقى العربية.
                </p>
              </div>
            </div>

            <p className="mt-6">
              كل مقام له "جذر" (الدرجة الأولى) ودرجة " Dominant" (غالباً الخامسة)
              ودرجة "dominant فرعية". هذه الدرجات تُحدد شخصية المقام وطريقة استخدامه.
            </p>
          </div>
        </section>

        {/* Section 3: Historical Journey */}
        <section className="card p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Play className="text-[#D4AF37]" />
            رحلة تاريخية
          </h2>
          <div className="relative pr-8 border-r-2 border-[#1f1f2e]">
            {[
              {
                period: 'القرن السابع',
                title: 'النشأة',
                description: 'تطورت الموسيقى العربية مع انتشار الإسلام،受影响 من الموسيقى البيزنطية والفارسية.'
              },
              {
                period: 'القرن الثامن - العاشر',
                title: 'العصر الذهبي',
                description: 'ازدهرت الموسيقى في بغداد وعُدت مركزاً عالمياً للموسيقى. برز علماء مثل الأصمعي وابن سينا.'
              },
              {
                period: 'القرن الثاني عشر',
                title: 'التأثير الفارسي',
                description: 'جاء التأثير الفارسي بقوة، مما أثرى نظام المقامات وأدخل مقامات جديدة.'
              },
              {
                period: 'القرن التاسع عشر',
                title: 'العصر العثماني',
                description: 'تطورت الموسيقى في مصر ولبنان. برز الشيخ أبو العلا محمد الذي وضع أساس الموسيقى الحديثة.'
              },
              {
                period: 'القرن العشرون',
                title: 'العصر الحديث',
                description: 'دخلت الآلات الغربية والأوركسترا. برز فنانون مثل محمد عبد الوهاب وأم كلثوم.'
              },
            ].map((item, idx) => (
              <div key={idx} className="mb-8 relative">
                <div className="absolute -right-[36px] w-4 h-4 rounded-full bg-[#D4AF37]" />
                <span className="text-xs text-[#D4AF37] font-semibold">{item.period}</span>
                <h3 className="font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-[#71717a]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Main Families */}
        <section className="card p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Users className="text-[#D4AF37]" />
            العائلات الموسيقية الكبرى
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'راست', desc: 'أساس الموسيقى العربية، يرمز للعظمة والبهجة' },
              { name: 'بياتي', desc: 'من أشهر الماقات، طابعه الحزين والعاطفي' },
              { name: 'حجاز', desc: 'طابع ديني وتراجيدي، من أقدم الماقات' },
              { name: 'كرد', desc: 'ينحدر من كردستان، حزن عميق وعاطفة' },
              { name: 'نهاوند', desc: 'مأخوذ من الهند، طابع رومانسي' },
              { name: 'صباح', desc: 'أقدم الماقات، يُستخدم في mourning' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-[#0a0a0f] rounded-xl">
                <h4 className="font-bold text-[#D4AF37] mb-1">{item.name}</h4>
                <p className="text-sm text-[#71717a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">ابدأ رحلتك</h2>
          <p className="text-[#71717a] mb-6">
            استكشف المكتبة الشاملة للماقات العربية
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/library" className="btn btn-primary">
              المكتبة
            </Link>
            <Link to="/lessons" className="btn btn-secondary">
              الدروس التعليمية
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}