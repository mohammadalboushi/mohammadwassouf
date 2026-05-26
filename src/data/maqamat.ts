import { Maqam, MaqamFamily, Rhythm, Lesson } from '../types/music';

// Main Arabic Maqam Families
export const maqamFamilies: MaqamFamily[] = [
  {
    id: 'bayati',
    name: 'العائلة البياتية',
    color: '#3B82F6', // Blue
    mainMaqam: 'bayati',
    description: 'من أهم العائلات في الموسيقى العربية، تتميز بالنغمة الرابعة المنخفضة',
    characteristics: ['الرابع منخفض', 'استقرار على الدرجة الخامسة', 'حزن عميق']
  },
  {
    id: 'rast',
    name: 'العائلة الراستية',
    color: '#F59E0B', // Gold
    mainMaqam: 'rast',
    description: 'أساس الموسيقى العربية، يُعتبر أب الماقات',
    characteristics: ['الأساس الأول', 'النغمة الرابعة نصف低了', 'بهجة وسرور']
  },
  {
    id: 'hijaz',
    name: 'العائلة الحجازية',
    color: '#EF4444', // Red
    mainMaqam: 'hijaz',
    description: 'من أقدم الماقات، له طابع ديني وشجي',
    characteristics: ['حجازي', 'النغمة الثانية عالية', 'طابع تراجيدي']
  },
  {
    id: 'kurd',
    name: 'العائلة الكردية',
    color: '#10B981', // Green
    mainMaqam: 'kurd',
    description: 'ينحدر من roots في كردستان والعراق',
    characteristics: ['النغمة الرابعة عالية', 'حزن عميق', 'انتشار واسع']
  },
  {
    id: 'nahawand',
    name: 'العائلة النهاوندية',
    color: '#8B5CF6', // Purple
    mainMaqam: 'nahawand',
    description: 'مأخوذ من الموسيقى الهندية، طابع رومانسي',
    characteristics: ['غربيو', 'حزن رقيق', 'انتقالات سلسة']
  },
  {
    id: 'saba',
    name: 'العائلة الصابية',
    color: '#EC4899', // Pink
    mainMaqam: 'saba',
    description: 'أقدم الماقات، طابع tragedy و mourning',
    characteristics: ['الثاني منخفض جداً', 'حزن شديد', 'شجن']
  },
  {
    id: 'sikah',
    name: 'العائلة السيكاهية',
    color: '#06B6D4', // Cyan
    mainMaqam: 'sikah',
    description: 'من الماقات المهمة، له استخدامات خاصة',
    characteristics: ['النغمة الثالثة عالية', 'تأثير on emotions', 'flexible']
  },
  {
    id: 'ajam',
    name: 'العائلة العجمية',
    color: '#F97316', // Orange
    mainMaqam: 'ajam',
    description: 'مأخوذ من الموسيقى التركية والفارسية',
    characteristics: ['major-like', 'بهجة', 'سهولة التعلم']
  }
];

// Comprehensive Maqam Database
export const maqamat: Maqam[] = [
  // ==================== RAST FAMILY ====================
  {
    id: 'rast',
    name: 'راست',
    family: 'rast',
    origin: 'العراق',
    scale: {
      degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ', 'د', 'هـ'],
      intervals: [0, 2, 4, 5, 7, 9, 10],
      quarterTones: [{ note: 'و♭', cents: 50, name: 'الرابع راست' }],
      tonic: 'ج'
    },
    description: 'يُعتبر أصل الماقات جميعاً. أسسه僧侣 عراقيون في القرون الوسطى. يتميز بجماله وقدرته على التعبير عن مختلف المشاعر.',
    emotionalCharacter: 'بهجة، سعادة، عظمة، فخر',
    branches: [
      {
        name: 'راست نهاوند',
        scale: { degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ', 'د♭', 'هـ'], intervals: [0, 2, 4, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'من أشهر فروع الراست',
        emotionalCharacter: 'حزن رقيق'
      },
      {
        name: 'راست عجم',
        scale: { degrees: ['ج', 'د', 'هـ', 'و', 'جـ', 'د', 'هـ'], intervals: [0, 2, 4, 5, 7, 9, 10], quarterTones: [], tonic: 'ج' },
        description: 'دمج الراست مع العجم',
        emotionalCharacter: 'بهجة مع حزن'
      },
      {
        name: 'راست كارون',
        scale: { degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 4, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'فرع عراقي قديم',
        emotionalCharacter: 'شجن عميق'
      }
    ],
    modulations: [
      { targetMaqam: 'nawri', description: 'من خلال spenta dominant' },
      { targetMaqam: 'bayati', description: 'من خلال fourth degree' },
      { targetMaqam: 'hijaz', description: 'من خلال tonic modulation' }
    ],
    historicalOrigin: {
      period: 'القرن العاشر الميلادي',
      region: 'العراق',
      description: 'طوره僧侣 الموسيقى في Baghdad. يُعتقد أنه derivated من المقياس الفارسي القديم.',
      notableCompositions: ['مقام راست', 'سماع راست', 'نغم راست']
    },
    relatedMaqamat: ['nawri', 'rast_shanan', 'saba', 'bayati'],
    audioDemos: [
      { title: 'مقام راست', description: 'عرض توضيحي للمقام', duration: '5:00' },
      { title: 'سماع راست', description: 'سماع صباحي', duration: '8:30' }
    ],
    teachingPriority: 'beginner'
  },

  // ==================== BAYATI FAMILY ====================
  {
    id: 'bayati',
    name: 'بياتي',
    family: 'bayati',
    origin: 'مصر',
    scale: {
      degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ', 'د', 'هـ♭'],
      intervals: [0, 2, 4, 5, 7, 9, 10],
      quarterTones: [
        { note: 'و♭', cents: 50, name: 'الرابع بياتي' },
        { note: 'هـ♭', cents: 50, name: 'السابع بياتي' }
      ],
      tonic: 'ج'
    },
    description: 'من أشهر الماقات وأكثرها استخداماً. نشأ في مصر وطوره الشيخ أبو العلا محمد.',
    emotionalCharacter: 'حزن عميق، شجن، عاطفة قوية',
    branches: [
      {
        name: 'بياتي شوقي',
        scale: { degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 4, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'فرع شوقي',
        emotionalCharacter: 'حزن مع أمل'
      },
      {
        name: 'بياتي مكشوف',
        scale: { degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ', 'د', 'هـ'], intervals: [0, 2, 4, 5, 7, 9, 10], quarterTones: [], tonic: 'ج' },
        description: 'بياتي بدون منخفض في السابع',
        emotionalCharacter: 'حزن أقل حدة'
      },
      {
        name: 'بياتي عربان',
        scale: { degrees: ['ج', 'د♭', 'هـ♭', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 1, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'نسخة modulate',
        emotionalCharacter: 'غموض'
      },
      {
        name: 'صخري',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و♭', 'جـ', 'د', 'هـ♭'], intervals: [0, 2, 3, 5, 7, 9, 10], quarterTones: [], tonic: 'ج' },
        description: 'من فروع البياتي',
        emotionalCharacter: 'قوة وصراحة'
      },
      {
        name: 'مخالف',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'فرع مهم جداً',
        emotionalCharacter: 'dramatic'
      }
    ],
    modulations: [
      { targetMaqam: 'huzam', description: 'من خلال sixth degree' },
      { targetMaqam: 'saba', description: 'من خلال fourth degree' },
      { targetMaqam: 'kurd', description: 'من خلال second degree' }
    ],
    historicalOrigin: {
      period: 'القرن التاسع عشر الميلادي',
      region: 'مصر',
      description: 'طوره الشيخ أبو العلا محمد وأصبح أساس الموسيقى المصرية الحديثة.',
      notableCompositions: ['أبو العلا', 'على بالي', 'مقام بياتي']
    },
    relatedMaqamat: ['sukkar', 'sahih', 'mukhulif', 'sakhri'],
    audioDemos: [
      { title: 'أبو العلا', description: 'لأحمد بخيت', duration: '6:00' },
      { title: 'مقام بياتي', description: 'عرض تعليمي', duration: '4:00' }
    ],
    teachingPriority: 'beginner'
  },

  // ==================== HIJAZ FAMILY ====================
  {
    id: 'hijaz',
    name: 'حجاز',
    family: 'hijaz',
    origin: 'الحجاز',
    scale: {
      degrees: ['ج', 'د♭', 'هـ', 'و♭', 'جـ', 'د♭', 'هـ'],
      intervals: [0, 1, 4, 5, 7, 8, 11],
      quarterTones: [
        { note: 'د♭', cents: -50, name: 'الثاني حجازي' },
        { note: 'و♭', cents: 50, name: 'الرابع حجازي' }
      ],
      tonic: 'ج'
    },
    description: 'من أقدم الماقات وأشهرها. له طابع ديني وتراجيدي.',
    emotionalCharacter: 'حزن شديد، خشوع، عظمة إلهية',
    branches: [
      {
        name: 'حجاز كار',
        scale: { degrees: ['ج', 'د♭', 'هـ', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 1, 4, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'حجاز مع سابع منخفض',
        emotionalCharacter: 'حزن عميق جداً'
      },
      {
        name: 'حجاز دال',
        scale: { degrees: ['ج', 'د♭', 'هـ♭', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 1, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'نسخة modulate',
        emotionalCharacter: 'غموض حزين'
      },
      {
        name: 'حجاز كورد',
        scale: { degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 4, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'دمج حجاز مع كردي',
        emotionalCharacter: 'حزن مع tension'
      },
      {
        name: 'نهاوند حجاز',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'دمج حجاز مع نهاوند',
        emotionalCharacter: 'dramatic'
      }
    ],
    modulations: [
      { targetMaqam: 'saba', description: 'من خلال tonic' },
      { targetMaqam: 'nahawand', description: 'من خلال fourth degree' },
      { targetMaqam: 'kurd', description: 'من خلال interval' }
    ],
    historicalOrigin: {
      period: 'القرن الثامن الميلادي',
      region: 'الحجاز',
      description: 'يرتبط بالخطوط الدينية الإسلامية. استُخدم في موسيقى الحضرة.',
      notableCompositions: ['حجاز', 'نوب，玄奘', 'سلام']
    },
    relatedMaqamat: ['hijaz_kar', 'saba', 'kurd', 'nahawand'],
    audioDemos: [
      { title: 'حجاز', description: 'سماع ديني', duration: '10:00' },
      { title: 'سلام', description: 'مقام حجاز', duration: '7:00' }
    ],
    teachingPriority: 'beginner'
  },

  // ==================== KURD FAMILY ====================
  {
    id: 'kurd',
    name: 'كرد',
    family: 'kurd',
    origin: 'كردستان والعراق',
    scale: {
      degrees: ['ج', 'د', 'هـ♭', 'و', 'جـ', 'د♭', 'هـ♭'],
      intervals: [0, 2, 3, 5, 7, 8, 10],
      quarterTones: [
        { note: 'هـ♭', cents: 50, name: 'الثالث كرد' },
        { note: 'د♭', cents: 50, name: 'السادس كرد' }
      ],
      tonic: 'ج'
    },
    description: 'ينحدر من الموسيقى الكردية القديمة. طابعه حزين وعاطفي.',
    emotionalCharacter: 'حزن عميق، عاطفة، هوية',
    branches: [
      {
        name: 'كرد شاني',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'فرع مهم',
        emotionalCharacter: 'حزن حاد'
      },
      {
        name: 'كرد هندي',
        scale: { degrees: ['ج', 'د♭', 'هـ♭', 'و', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 1, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'تأثير هندي',
        emotionalCharacter: 'exotic'
      },
      {
        name: 'بياتي Kurd',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'دمج بياتي مع كرد',
        emotionalCharacter: 'dramatic'
      }
    ],
    modulations: [
      { targetMaqam: 'bayati', description: 'من خلال fourth degree' },
      { targetMaqam: 'hijaz', description: 'من خلال interval' },
      { targetMaqam: 'saba', description: 'من خلال second degree' }
    ],
    historicalOrigin: {
      period: 'القرن الحادي عشر الميلادي',
      region: 'كردستان',
      description: 'ينحدر من التقاليد الموسيقية الكردية. انتشر في كل الشرق.',
      notableCompositions: ['كرار', 'كرد شاني', 'ملات']
    },
    relatedMaqamat: ['kurd_shanan', 'hijaz', 'bayati', 'saba'],
    audioDemos: [
      { title: 'كرار', description: 'مقام كردي', duration: '5:00' }
    ],
    teachingPriority: 'intermediate'
  },

  // ==================== NAHAWAND FAMILY ====================
  {
    id: 'nahawand',
    name: 'نهاوند',
    family: 'nahawand',
    origin: 'الهند',
    scale: {
      degrees: ['ج', 'د', 'هـ♭', 'و', 'جـ', 'د', 'هـ♭'],
      intervals: [0, 2, 3, 5, 7, 9, 10],
      quarterTones: [
        { note: 'هـ♭', cents: 50, name: 'الثالث نهاوند' }
      ],
      tonic: 'ج'
    },
    description: 'مأخوذ من الموسيقى الهندية. طابعه رومانسي وحالم.',
    emotionalCharacter: 'حزن رقيق، عاطفة، رومانسية',
    branches: [
      {
        name: 'نهاوند مكشوف',
        scale: { degrees: ['ج', 'د', 'هـ', 'و', 'جـ', 'د', 'هـ'], intervals: [0, 2, 4, 5, 7, 9, 11], quarterTones: [], tonic: 'ج' },
        description: 'نهاوند بدون quarter tones',
        emotionalCharacter: 'حزن خفيف'
      },
      {
        name: 'نهاوند مع حجاز',
        scale: { degrees: ['ج', 'د♭', 'هـ♭', 'و', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 1, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'دمج نهاوند مع حجاز',
        emotionalCharacter: 'dramatic tragic'
      },
      {
        name: 'أدوار',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'فرع مهم',
        emotionalCharacter: 'عاطفة عميقة'
      }
    ],
    modulations: [
      { targetMaqam: 'bayati', description: 'من خلال fourth degree' },
      { targetMaqam: 'rast', description: 'من خلال tonic' },
      { targetMaqam: 'hijaz', description: 'من through dominant' }
    ],
    historicalOrigin: {
      period: 'القرن الخامس عشر الميلادي',
      region: 'الهند',
      description: 'دخل العالم العربي عبر التبادل الثقافي مع الهند.',
      notableCompositions: ['نهاوند', 'أدوار', 'ملالي']
    },
    relatedMaqamat: ['nahawand_mukashraf', 'hijaz', 'bayati'],
    audioDemos: [
      { title: 'نهاوند', description: 'مقام رومانسي', duration: '6:00' }
    ],
    teachingPriority: 'intermediate'
  },

  // ==================== SABA FAMILY ====================
  {
    id: 'saba',
    name: 'صباح',
    family: 'saba',
    origin: 'العراق',
    scale: {
      degrees: ['ج', 'د♭', 'هـ', 'و♭', 'جـ♭', 'د♭', 'هـ'],
      intervals: [0, 1, 4, 5, 6, 8, 11],
      quarterTones: [
        { note: 'د♭', cents: -50, name: 'الثاني صباحي' },
        { note: 'جـ♭', cents: -25, name: 'الخامس صباحي' }
      ],
      tonic: 'ج'
    },
    description: 'من أقدم الماقات. طابعه tragedy و mourning. يستخدم في الجنازات.',
    emotionalCharacter: 'حزن شديد جداً، شجن، mourning',
    branches: [
      {
        name: 'صباح شاني',
        scale: { degrees: ['ج', 'د♭', 'هـ', 'و♭', 'جـ♭', 'د♭', 'هـ♭'], intervals: [0, 1, 4, 5, 6, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'فرع tragic',
        emotionalCharacter: 'حزن لا يُحتمل'
      },
      {
        name: 'حسيني',
        scale: { degrees: ['ج', 'د♭', 'هـ♭', 'و♭', 'جـ♭', 'د♭', 'هـ♭'], intervals: [0, 1, 3, 5, 6, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'نسخة mourning',
        emotionalCharacter: 'حداد'
      },
      {
        name: 'بيزلي',
        scale: { degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ♭', 'د♭', 'هـ♭'], intervals: [0, 2, 4, 5, 6, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'اسم عثماني',
        emotionalCharacter: 'غموض'
      }
    ],
    modulations: [
      { targetMaqam: 'hijaz', description: 'من خلال tonic' },
      { targetMaqam: 'kurd', description: 'من through fourth' },
      { targetMaqam: 'bayati', description: 'من خلال modulation' }
    ],
    historicalOrigin: {
      period: 'القرن التاسع الميلادي',
      region: 'العراق',
      description: 'أحد أقدم الماقات. استخدم في مراسم الحداد.',
      notableCompositions: ['صباح', 'حسيني', 'نياح']
    },
    relatedMaqamat: ['saba_shanan', 'hijaz', 'kurd', 'husayni'],
    audioDemos: [
      { title: 'صباح', description: 'مقام Mourning', duration: '8:00' }
    ],
    teachingPriority: 'advanced'
  },

  // ==================== SIKAH FAMILY ====================
  {
    id: 'sikah',
    name: 'سيكاه',
    family: 'sikah',
    origin: 'تركيا',
    scale: {
      degrees: ['ج', 'د', 'هـ♭', 'و', 'جـ♭', 'د', 'هـ♭'],
      intervals: [0, 2, 3, 5, 6, 9, 10],
      quarterTones: [
        { note: 'هـ♭', cents: 50, name: 'الثالث سيكاه' }
      ],
      tonic: 'ج'
    },
    description: 'من الماقات المهمة جداً. له استخدامات خاصة في الموسيقى.',
    emotionalCharacter: 'غموض، عمق، spiritual',
    branches: [
      {
        name: 'سيكاه زرك',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و♭', 'جـ♭', 'د♭', 'هـ♭'], intervals: [0, 2, 3, 5, 6, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'فرع مهم',
        emotionalCharacter: 'غموض عميق'
      },
      {
        name: 'حجاز سيكاه',
        scale: { degrees: ['ج', 'د♭', 'هـ', 'و♭', 'جـ♭', 'د', 'هـ♭'], intervals: [0, 1, 4, 5, 6, 9, 10], quarterTones: [], tonic: 'ج' },
        description: 'دمج حجاز مع سيكاه',
        emotionalCharacter: 'dramatic'
      },
      {
        name: 'سيكاه راست',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و♭', 'جـ', 'د', 'هـ♭'], intervals: [0, 2, 3, 5, 7, 9, 10], quarterTones: [], tonic: 'ج' },
        description: 'دمج سيكاه مع راست',
        emotionalCharacter: 'قوة'
      }
    ],
    modulations: [
      { targetMaqam: 'hijaz', description: 'من خلال fourth degree' },
      { targetMaqam: 'rast', description: 'من through tonic' },
      { targetMaqam: 'bayati', description: 'من through fifth' }
    ],
    historicalOrigin: {
      period: 'القرن السادس عشر الميلادي',
      region: 'تركيا',
      description: 'دخل الموسيقى العربية من خلال التأثير العثماني.',
      notableCompositions: ['سيكاه', 'زرك', 'ششعار']
    },
    relatedMaqamat: ['sikah_zirk', 'hijaz', 'rast'],
    audioDemos: [
      { title: 'سيكاه', description: 'مقام روحي', duration: '7:00' }
    ],
    teachingPriority: 'advanced'
  },

  // ==================== AJAM FAMILY ====================
  {
    id: 'ajam',
    name: 'عجم',
    family: 'ajam',
    origin: 'فارس/تركيا',
    scale: {
      degrees: ['ج', 'د', 'هـ', 'و', 'جـ', 'د', 'هـ'],
      intervals: [0, 2, 4, 5, 7, 9, 11],
      quarterTones: [],
      tonic: 'ج'
    },
    description: 'مأخوذ من الموسيقى التركية والفارسية. سهل التعلم.',
    emotionalCharacter: 'بهجة، سعادة، يسر',
    branches: [
      {
        name: 'عجم مكشوف',
        scale: { degrees: ['ج', 'د', 'هـ', 'و', 'جـ', 'د', 'هـ'], intervals: [0, 2, 4, 5, 7, 9, 11], quarterTones: [], tonic: 'ج' },
        description: 'النسخة الأصلية',
        emotionalCharacter: 'بهجة'
      },
      {
        name: 'أوجة',
        scale: { degrees: ['ج', 'د♭', 'هـ♭', 'و♭', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 1, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'نسخة تركية',
        emotionalCharacter: 'عظمة'
      },
      {
        name: 'مخمل',
        scale: { degrees: ['ج', 'د', 'هـ♭', 'و', 'جـ', 'د♭', 'هـ♭'], intervals: [0, 2, 3, 5, 7, 8, 10], quarterTones: [], tonic: 'ج' },
        description: 'فرع rare',
        emotionalCharacter: 'elegant'
      }
    ],
    modulations: [
      { targetMaqam: 'rast', description: 'من through tonic' },
      { targetMaqam: 'bayati', description: 'من through fourth' },
      { targetMaqam: 'nahawand', description: 'من through interval' }
    ],
    historicalOrigin: {
      period: 'القرن السادس عشر الميلادي',
      region: 'فارس/تركيا',
      description: 'دخل الموسيقى العربية من خلال التبادل الثقافي مع الامبراطورية العثمانية.',
      notableCompositions: ['أوجة', 'مخمل', 'سلطان']
    },
    relatedMaqamat: ['awja', 'mukhammas', 'rast'],
    audioDemos: [
      { title: 'أوجة', description: 'مقام عثماني', duration: '6:00' }
    ],
    teachingPriority: 'beginner'
  },

  // Additional important maqamat
  {
    id: 'maqam_ush',
    name: 'مقام عوش',
    family: 'rast',
    origin: 'العراق',
    scale: {
      degrees: ['ج', 'د', 'هـ', 'و♭', 'جـ', 'د♭', 'هـ♭'],
      intervals: [0, 2, 4, 5, 7, 8, 10],
      quarterTones: [],
      tonic: 'ج'
    },
    description: 'مقام عراقي قديم جداً. يستخدم في الموسيقى التقليدية.',
    emotionalCharacter: 'حزن عميق، أصالة',
    branches: [],
    modulations: [],
    historicalOrigin: {
      period: 'القرن الثامن عشر',
      region: 'العراق',
      description: 'من أقدم المقامات العراقية.',
      notableCompositions: ['عوش', 'سماعي عوش']
    },
    relatedMaqamat: ['rast', 'saba'],
    audioDemos: [],
    teachingPriority: 'advanced'
  }
];

// Arabic Rhythms (Iqa'at)
export const rhythms: Rhythm[] = [
  {
    id: 'maqam_rast',
    name: 'رقصة راست',
    arabicName: 'رقصة راست',
    pattern: '1 2 3 1 2 3',
    count: 10,
    description: 'من أكثر الإيقاعات استخداماً. سريع وحيوي.',
    usage: 'الرقص، الموسيقى السريعة',
    examples: ['رقصة راست', 'دوالي']
  },
  {
    id: 'samai_thaqil',
    name: 'سماعي ثقيل',
    arabicName: 'سماعي ثقيل',
    pattern: '1 2 3 1 2',
    count: 10,
    description: 'إيقاع بطيء و majesty. يُستخدم في الموسيقى الكلاسيكية.',
    usage: 'الموسيقى الكلاسيكية، المقامات',
    examples: ['سماعي', 'تركي']
  },
  {
    id: 'samai_dawr',
    name: 'سماعي دور',
    arabicName: 'سماعي دور',
    pattern: '1 2 1 2 1',
    count: 8,
    description: 'إيقاع دوار متوسط السرعة.',
    usage: 'الموسيقى المصرية',
    examples: ['دور', 'سماعي']
  },
  {
    id: 'fox_rast',
    name: 'فوكس راست',
    arabicName: 'فوكس راست',
    pattern: '1 2 3 1 2',
    count: 8,
    description: 'إيقاع حديث广泛应用于.',
    usage: 'الموسيقى الحديثة',
    examples: ['فوكس', 'موسيقى حديثة']
  },
  {
    id: 'sharqi',
    name: 'شرقي',
    arabicName: 'شرقي',
    pattern: '1 2 1 2 3 1',
    count: 10,
    description: 'إيقاع شرقي مميز.',
    usage: 'الرقص الشرقي',
    examples: ['شرقي', 'راقصة']
  },
  {
    id: 'malfoof',
    name: 'مضفور',
    arabicName: 'مضفور',
    pattern: '1 2 1 2 1 2',
    count: 12,
    description: 'إيقاع معقد وجميل.',
    usage: 'الموسيقى المتقدمة',
    examples: ['مضفور', 'تركي']
  }
];

// Educational Lessons
export const lessons: Lesson[] = [
  {
    id: 'basics-1',
    title: 'مقدمة في الموسيقى العربية',
    category: 'basics',
    duration: '30 دقيقة',
    difficulty: 1,
    description: 'تعرف على أساسيات الموسيقى العربية والماقات.',
    topics: ['ما هو المقام', 'العائلة الموسيقية', 'الأنصاف والأرباع']
  },
  {
    id: 'basics-2',
    title: 'التنغيم العربي',
    category: 'basics',
    duration: '45 دقيقة',
    difficulty: 2,
    description: 'تعلم التنغيم العربي quarter tones.',
    topics: ['النغمة العربية', 'الأنصاف النغمة', 'الأرباع النغمة', 'التنغيم العملي']
  },
  {
    id: 'basics-3',
    title: 'مقام راست للمبتدئين',
    category: 'basics',
    duration: '60 دقيقة',
    difficulty: 2,
    description: 'تعلم مقام راست من الألف إلى الياء.',
    topics: ['هيكل الراست', 'التنازلات', 'الفروع', 'التطبيق']
  },
  {
    id: 'intermediate-1',
    title: 'العائلة البياتية',
    category: 'intermediate',
    duration: '75 دقيقة',
    difficulty: 3,
    description: 'تعمق في دراسة العائلة البياتية.',
    topics: ['بياتي', 'صخري', 'مخالف', 'التنقل بين الفروع']
  },
  {
    id: 'intermediate-2',
    title: 'العائلة الحجازية',
    category: 'intermediate',
    duration: '60 دقيقة',
    difficulty: 3,
    description: 'دراسة متقدمة للعائلة الحجازية.',
    topics: ['حجاز', 'حجاز كار', 'التعبير العاطفي', 'التطبيق']
  },
  {
    id: 'advanced-1',
    title: 'نظرية التنقل',
    category: 'advanced',
    duration: '90 دقيقة',
    difficulty: 4,
    description: 'تعلم التنقل بين الماقات modulation.',
    topics: ['أساسيات التنقل', 'نقاط التحول', 'التنقل العملي', 'أمثلة تطبيقية']
  },
  {
    id: 'advanced-2',
    title: 'المائيات المتقدمة',
    category: 'advanced',
    duration: '120 دقيقة',
    difficulty: 5,
    description: 'دراسة deep للمائيات rare.',
    topics: ['صباح', 'سيكاه', 'المائيات المعقدة', 'التطبيق المتقدم']
  }
];

// Helper functions
export function getMaqamById(id: string): Maqam | undefined {
  return maqamat.find(m => m.id === id);
}

export function getMaqamatByFamily(familyId: string): Maqam[] {
  return maqamat.filter(m => m.family === familyId);
}

export function getMaqamFamily(familyId: string): MaqamFamily | undefined {
  return maqamFamilies.find(f => f.id === familyId);
}

export function searchMaqamat(query: string): Maqam[] {
  const lowercaseQuery = query.toLowerCase();
  return maqamat.filter(m =>
    m.name.toLowerCase().includes(lowercaseQuery) ||
    m.description.toLowerCase().includes(lowercaseQuery) ||
    m.family.toLowerCase().includes(lowercaseQuery)
  );
}

export function getLessonsByCategory(category: 'basics' | 'intermediate' | 'advanced'): Lesson[] {
  return lessons.filter(l => l.category === category);
}

export const quarterToneExplanations = {
  '50': 'نصف低了 (نصف درجة منخفضة)',
  '-50': 'نصف عالية (نصف درجة عالية)',
  '25': 'ربع低了 (ربع درجة منخفضة)',
  '-25': 'ربع عالية (ربع درجة عالية)',
  '75': 'ثلاثة أرباع低了'
};