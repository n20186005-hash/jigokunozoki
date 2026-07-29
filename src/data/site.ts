export interface Highlight {
  title: string;
  kana: string;
  description: string;
  image: string;
  alt: string;
  meta: string;
  objectPosition?: string;
}

export interface AccessMode {
  id: 'ropeway' | 'car' | 'hike';
  label: string;
  short: string;
  duration: string;
  difficulty: string;
  summary: string;
  steps: string[];
  note: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const jigokuNozokiLocation = {
  name: '地獄のぞき',
  alternateName: 'Jigoku Nozoki (View of Hell)',
  postalCode: '299-1901',
  addressRegion: '千葉県',
  addressLocality: '安房郡鋸南町',
  streetAddress: '元名184-4 日本寺内',
  fullAddress: '〒299-1901 千葉県安房郡鋸南町元名184-4',
  locationNote: '鋸山 日本寺境内・山頂エリア',
  latitude: 35.1592647,
  longitude: 139.8331931,
  googleMapsUrl:
    'https://www.google.com/maps/place/Jigoku+Nozoki+(View+of+Hell)/@35.1592647,139.8306182,17z/data=!3m1!4b1!4m6!3m5!1s0x60181b1f196494a7:0x48209df71f2df7bc!8m2!3d35.1592647!4d139.8331931!16s%2Fg%2F1tr7cr_0?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8939819944367!2d139.8331931!3d35.15926470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60181b1f196494a7%3A0x48209df71f2df7bc!2sJigoku%20Nozoki%20(View%20of%20Hell)!5e0!3m2!1szh-CN!2stw!4v1785298082142!5m2!1szh-CN!2stw',
} as const;

export const highlights: Highlight[] = [
  {
    title: '百尺観音',
    kana: 'ひゃくしゃくかんのん',
    description: '切り立つ採石場跡の岩壁に刻まれた、高さ約30mの観音像。静かな石の回廊を抜けた先に、圧倒的なスケールで現れます。',
    image: '/images/hyakushaku-kannon.webp',
    alt: '鋸山の採石場跡の岩壁に刻まれた百尺観音',
    meta: '西口から徒歩約4分',
    objectPosition: '50% 38%',
  },
  {
    title: '日本寺大仏',
    kana: 'にほんじだいぶつ',
    description: '薬師瑠璃光如来を表す磨崖仏。山の緑に抱かれた大仏広場は、地獄のぞきの緊張感とは対照的な穏やかさに満ちています。',
    image: '/images/nihonji-daibutsu.webp',
    alt: '緑の山肌に刻まれた日本寺大仏',
    meta: '東口から徒歩約2〜3分',
    objectPosition: '50% 52%',
  },
  {
    title: '石切り場跡',
    kana: 'いしきりばあと',
    description: '房州石を切り出した垂直の岩壁が、鋸山ならではの景観をつくります。自然と人の営みが重なった、山全体の記憶です。',
    image: '/images/nokogiriyama-quarry.webp',
    alt: '鋸山に残る高く垂直な採石場跡の岩壁',
    meta: '山頂エリア',
    objectPosition: '50% 42%',
  },
];

export const accessModes: AccessMode[] = [
  {
    id: 'ropeway',
    label: 'ロープウェー',
    short: '初めての方に',
    duration: '山頂まで約4分',
    difficulty: '歩行：中',
    summary: '浜金谷駅から歩き、ロープウェーで一気に山頂へ。海の眺めも楽しめる、最もわかりやすい行き方です。',
    steps: [
      'JR浜金谷駅から山麓駅へ徒歩約8分',
      'ロープウェーで山頂駅へ（片道約4分）',
      '日本寺・西口で拝観受付',
      '百尺観音を経て地獄のぞきへ',
    ],
    note: '山頂駅から地獄のぞきまでは階段を含みます。日本寺の最終入場は15:00です。',
  },
  {
    id: 'car',
    label: '車',
    short: '歩行を抑えたい方に',
    duration: '西口近くまで',
    difficulty: '歩行：少〜中',
    summary: '有料の鋸山登山自動車道で西口管理所近くへ。地獄のぞきと百尺観音を短時間で巡りたい方に向きます。',
    steps: [
      '鋸山登山自動車道（有料）を利用',
      '山頂付近の駐車場へ',
      '西口管理所で拝観受付',
      '緩やかな坂と急な階段を上る',
    ],
    note: '大仏も見る場合は、いったん道路を下り東口側へ移動する分割ルートが体力を抑えやすいです。',
  },
  {
    id: 'hike',
    label: '徒歩・登山',
    short: '山を深く味わう',
    duration: '登り約60分〜',
    difficulty: '歩行：多',
    summary: '浜金谷方面から採石の歴史を感じる登山道へ。時間と装備に余裕がある日に選びたいルートです。',
    steps: [
      '浜金谷駅または金谷港から登山口へ',
      '車力道などの登山道を上る',
      '北口管理所から日本寺境内へ',
      '百尺観音・地獄のぞきを巡る',
    ],
    note: '天候、落石、通行止め情報を事前に確認し、滑りにくい靴と飲料を用意してください。',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: '地獄のぞきだけを見る場合も拝観料は必要ですか？',
    answer: 'はい。地獄のぞきは日本寺の境内にあるため、日本寺の拝観料が必要です。ロープウェーの乗車券には拝観料は含まれません。',
  },
  {
    question: 'ロープウェー山頂駅からすぐに着きますか？',
    answer: '山頂駅から日本寺西口を通り、階段を上って向かいます。目安は約20分ですが、混雑や体力によって余裕をみてください。',
  },
  {
    question: '大仏まで一緒に見られますか？',
    answer: '見学できます。ただし山頂エリアから大仏へ下った後、西口へ戻る場合は30〜40分ほどの登り返しが必要です。時間と体力に余裕を持ちましょう。',
  },
  {
    question: '車いすやベビーカーで行けますか？',
    answer: '地獄のぞきまでは急な階段があるため困難です。日本寺公式案内では、介助があれば大仏口から大仏広場付近まで車いす利用が可能とされています。',
  },
  {
    question: '雨の日でも楽しめますか？',
    answer: '霧の景色は幻想的ですが、石段や岩場が滑りやすくなります。強風や荒天時はロープウェーが運休する場合もあるため、公式情報を確認してください。',
  },
  {
    question: 'おすすめの時間帯は？',
    answer: '混雑を避けるなら午前中がおすすめです。日本寺は15:00が最終入場のため、遅くとも14:00頃までに山頂側へ到着する計画が安心です。',
  },
];
