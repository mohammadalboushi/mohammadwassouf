import React from 'react';
import { Link } from 'react-router-dom';
import { maqamFamilies, maqamat, lessons, getMaqamatByFamily } from '../data/maqamat';
import FamilyCard from '../components/Maqam/FamilyCard';
import MaqamCard from '../components/Maqam/MaqamCard';
import { ArrowLeft, Music, BookOpen, Play, Star } from 'lucide-react';

export default function Home() {
  // Get featured maqamat (beginner level)
  const featuredMaqamat = maqamat
    .filter(m => m.teachingPriority === 'beginner')
    .slice(0, 4);

  // Get recent lessons
  const recentLessons = lessons.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#D4AF37]/5 via-transparent to-[#3B82F6]/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          {/* Logo & Title */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] mb-6 shadow-2xl animate-glow">
              <span className="text-4xl font-bold text-[#0a0a0f]">م</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              <span className="gold-text">محمد وسوف</span>
            </h1>
            <p className="text-xl text-[#a1a1aa] mb-2">
              منصة تعليمية للموسيقى العربية والماقات
            </p>
            <p className="text-[#71717a]">
              تعلم أسرار الموسيقى العربية من الأساس إلى الاحتراف
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in stagger-1">
            <div className="card p-4 text-center">
              <div className="text-3xl font-bold gold-text mb-1">{maqamFamilies.length}</div>
              <div className="text-sm text-[#71717a]">عائلة موسيقية</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-3xl font-bold blue-text mb-1">{maqamat.length}</div>
              <div className="text-sm text-[#71717a]">مقام رئيسي</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-3xl font-bold text-[#10B981] mb-1">
                {maqamat.reduce((acc, m) => acc + m.branches.length, 0)}
              </div>
              <div className="text-sm text-[#71717a]">فرع ومقام فرعي</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-3xl font-bold text-[#EC4899] mb-1">{lessons.length}</div>
              <div className="text-sm text-[#71717a]">درس تعليمي</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in stagger-2">
            <Link to="/library" className="btn btn-primary">
              <Library size={20} />
              استكشف المكتبة
            </Link>
            <Link to="/lessons" className="btn btn-secondary">
              <BookOpen size={20} />
              ابدأ التعلم
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Music className="text-[#D4AF37]" />
                ما المقام؟
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-4">
                المقام الموسيقي هو النظام الذي يُشكّل أساس الموسيقى العربية. يُعتبر المقام
                أساس البناء الموسيقي في العالم العربي، ويتكون من سلسلة من النغمات
                (درجات) مرتبة بطريقة معينة تُعطي كل مقام طابعه الخاص.
              </p>
              <p className="text-[#a1a1aa] leading-relaxed">
                تتضمن الماقات العربية نظاماً فريداً من التنغيمات الدقيقة تُسمى "الأنصاف
                والأرباع"، والتي تُعطي الموسيقى العربية جمالها وتميزها عن غيرها.
              </p>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Star className="text-[#D4AF37]" />
                لماذا محمد وسوف؟
              </h2>
              <ul className="space-y-3 text-[#a1a1aa]">
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>مكتبة شاملة تضم أهم الماقات العربية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>شرح تفصيلي للفروع والعلاقات</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>دروس متدرجة من المبتدئ إلى المحترف</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>تفسيرات موسيقية دقيقة ومعلومات تاريخية</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maqam Families */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">العائلات الموسيقية</h2>
              <p className="text-[#71717a]">اكتشف العائلات الرئيسية للماقات العربية</p>
            </div>
            <Link
              to="/library"
              className="flex items-center gap-2 text-[#D4AF37] hover:underline"
            >
              عرض الكل
              <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maqamFamilies.map((family, idx) => (
              <div key={family.id} className={`animate-fade-in stagger-${idx + 1}`}>
                <FamilyCard family={family} maqamCount={getMaqamatByFamily(family.id).length} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Maqamat */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">الماقات الأساسية</h2>
              <p className="text-[#71717a]">ابدأ رحلتك مع أشهر الماقات</p>
            </div>
            <Link
              to="/library"
              className="flex items-center gap-2 text-[#D4AF37] hover:underline"
            >
              عرض الكل
              <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMaqamat.map((maqam, idx) => (
              <div key={maqam.id} className={`animate-fade-in stagger-${idx + 1}`}>
                <MaqamCard maqam={maqam} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Preview */}
      <section className="py-16 px-6 bg-gradient-to-t from-transparent via-[#3B82F6]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">الدروس التعليمية</h2>
              <p className="text-[#71717a]">تعلم خطوة بخطوة مع دروسنا المنظمة</p>
            </div>
            <Link
              to="/lessons"
              className="flex items-center gap-2 text-[#D4AF37] hover:underline"
            >
              عرض الكل
              <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentLessons.map((lesson, idx) => (
              <Link
                key={lesson.id}
                to={`/lessons/${lesson.id}`}
                className={`card p-6 group animate-fade-in stagger-${idx + 1}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center
                    ${lesson.category === 'basics' ? 'bg-green-500/20 text-green-400' : ''}
                    ${lesson.category === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                    ${lesson.category === 'advanced' ? 'bg-red-500/20 text-red-400' : ''}
                  `}>
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold group-hover:text-[#D4AF37] transition-colors">
                      {lesson.title}
                    </h3>
                    <span className="text-sm text-[#71717a]">{lesson.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-[#71717a] mb-4 line-clamp-2">
                  {lesson.description}
                </p>

                <div className="flex items-center gap-2">
                  {lesson.topics.slice(0, 2).map((topic, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-[#1f1f2e] rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1f1f2e]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
              <span className="text-xl font-bold text-[#0a0a0f]">م</span>
            </div>
            <div className="text-right">
              <h3 className="font-bold gold-text">محمد وسوف</h3>
              <p className="text-sm text-[#71717a]">تعليم الموسيقى العربية</p>
            </div>
          </div>
          <p className="text-[#71717a] text-sm">
            منصة تعليمية شاملة للموسيقى العربية والماقات
          </p>
          <p className="text-[#71717a] text-xs mt-4">
            © 2024 جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </div>
  );
}

function Library(props: any) {
  return null;
}