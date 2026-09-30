import type { Locale } from '../i18n';

export interface HighlightItem {
  title: string;
  kana: string;
  description: string;
  image: string;
  alt: string;
  meta: string;
  objectPosition?: string;
}

export interface AccessModeContent {
  id: 'ropeway' | 'car' | 'hike';
  label: string;
  short: string;
  duration: string;
  difficulty: string;
  summary: string;
  steps: string[];
  note: string;
}

export interface InfoCard {
  label: string;
  title: string;
  main?: string;
  sub?: string;
  rows?: { label: string; value: string }[];
  text?: string;
}

export interface GuideContent {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { label: string; value: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    stats: { label: string; value: string }[];
    imageAlt: string;
    verticalLabel: string[];
  };
  highlights: {
    eyebrow: string;
    title: string;
    text: string;
    items: HighlightItem[];
  };
  plan: {
    eyebrow: string;
    title: string;
    text: string;
    noteLines: string[];
    modes: AccessModeContent[];
    ropewayImage: { title: string; text: string; alt: string };
    fare: {
      eyebrow: string;
      title: string;
      rows: { label: string; value: string }[];
      note: string;
      linkText: string;
    };
  };
  cost: {
    eyebrow: string;
    title: string;
    text: string;
    adultLabel: string;
    childLabel: string;
    ropewayLabel: string;
    options: { round: string; oneway: string; none: string };
    resultLabel: string;
    breakdownLabel: string;
    templeLabel: string;
    ropewayTerm: string;
    note: string;
    suffix: string;
  };
  course: {
    eyebrow: string;
    title: string;
    text: string;
    durationLabel: string;
    durationValue: string;
    startLabel: string;
    minuteUnit: string;
    steps: { minute: string; title: string; description: string }[];
    photo: { eyebrow: string; title: string; alt: string; items: string[] };
  };
  info: {
    eyebrow: string;
    title: string;
    text: string;
    cards: InfoCard[];
    official: { label: string; title: string; url: string }[];
    location: { eyebrow: string; title: string; note: string; linkText: string };
    ratingNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    text: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    description: string;
    photoNote: string;
    updateNote: string;
  };
}

const ja: GuideContent = {
  meta: {
    title: '地獄のぞき（鋸山 日本寺）｜千葉の絶景・拝観料とアクセスの観光ガイド',
    description:
      '千葉県・鋸山の日本寺境内にある地獄のぞき。断崖から房総の山並みと東京湾を見下ろす絶景展望台です。拝観時間9:00–16:00（最終入場15:00）、拝観料大人700円・小人400円、ロープウェー・徒歩・車での行き方、所要時間、モデルコース、よくある質問を日本語で案内します。',
  },
  hero: {
    eyebrow: '千葉・鋸山 日本寺',
    title: '地獄のぞき',
    lead: '岩壁の先に立ち、房総の山並みを見下ろす。',
    text: '鋸山の石切り場跡から張り出す、天空の展望台。ロープウェー、拝観料、歩き方まで、訪れる前に知りたいことを一つにまとめました。',
    primaryCta: '行き方を選ぶ',
    secondaryCta: '拝観案内を見る',
    stats: [
      { label: '拝観時間', value: '9:00–16:00' },
      { label: '最終入場', value: '15:00' },
      { label: '日本寺 拝観料', value: '大人 700円' },
      { label: '西口から', value: '徒歩 約8分' },
    ],
  },
  about: {
    eyebrow: 'About the cliff',
    title: '足もとに広がる、静かな地獄。',
    lead: '地獄のぞきは、鋸山の石切り場跡から張り出した岩盤の上に設けられた展望台です。',
    imageAlt: '鋸山山頂から見渡す金谷の町、東京湾、遠くの富士山',
    verticalLabel: ['海と山を見渡す', '房総の空'],
    paragraphs: [
      '眼下には房総半島の深い森。振り返れば東京湾と金谷の町。晴れて空気が澄む日には、海の向こうに富士山や三浦半島を望めます。',
      '写真で見る印象とは異なり、ここは日本寺の広大な境内の一部です。百尺観音、千五百羅漢、大仏へと続く石段を歩くことで、鋸山の景観と信仰の歴史が一つにつながります。',
    ],
    stats: [
      { label: '鋸山標高', value: '329m' },
      { label: '境内面積', value: '10万坪余' },
      { label: '開山', value: '約1300年前' },
      { label: 'おすすめ滞在', value: '2–3時間' },
    ],
  },
  highlights: {
    eyebrow: 'Three landscapes',
    title: '岩と祈りをめぐる。',
    text: '地獄のぞきだけで帰るのは、少し惜しい。山頂から大仏広場へ、鋸山ならではの三つの景観を訪ねてください。',
    items: [
      {
        title: '百尺観音',
        kana: 'ひゃくしゃくかんのん',
        description:
          '切り立つ採石場跡の岩壁に刻まれた、高さ約30mの観音像。静かな石の回廊を抜けた先に、圧倒的なスケールで現れます。',
        image: '/images/hyakushaku-kannon.webp',
        alt: '鋸山の採石場跡の岩壁に刻まれた百尺観音',
        meta: '西口から徒歩約4分',
        objectPosition: '50% 38%',
      },
      {
        title: '日本寺大仏',
        kana: 'にほんじだいぶつ',
        description:
          '薬師瑠璃光如来を表す磨崖仏。山の緑に抱かれた大仏広場は、地獄のぞきの緊張感とは対照的な穏やかさに満ちています。',
        image: '/images/nihonji-daibutsu.webp',
        alt: '緑の山肌に刻まれた日本寺大仏',
        meta: '東口から徒歩約2〜3分',
        objectPosition: '50% 52%',
      },
      {
        title: '石切り場跡',
        kana: 'いしきりばあと',
        description:
          '房州石を切り出した垂直の岩壁が、鋸山ならではの景観をつくります。自然と人の営みが重なった、山全体の記憶です。',
        image: '/images/nokogiriyama-quarry.webp',
        alt: '鋸山に残る高く垂直な採石場跡の岩壁',
        meta: '山頂エリア',
        objectPosition: '50% 42%',
      },
    ],
  },
  plan: {
    eyebrow: 'Plan your visit',
    title: 'あなたに合う、山頂への道。',
    text: '鋸山は、ロープウェー・車・徒歩で登れます。時間、体力、見たい場所によって、最適な入口が変わります。',
    noteLines: ['地獄のぞきは日本寺の境内です。', 'ロープウェー料金とは別に拝観料が必要です。'],
    modes: [
      {
        id: 'ropeway',
        label: 'ロープウェー',
        short: '初めての方に',
        duration: '山頂まで約4分',
        difficulty: '歩行：中',
        summary:
          '浜金谷駅から歩き、ロープウェーで一気に山頂へ。海の眺めも楽しめる、最もわかりやすい行き方です。',
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
        summary:
          '有料の鋸山登山自動車道で西口管理所近くへ。地獄のぞきと百尺観音を短時間で巡りたい方に向きます。',
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
        summary:
          '浜金谷方面から採石の歴史を感じる登山道へ。時間と装備に余裕がある日に選びたいルートです。',
        steps: [
          '浜金谷駅または金谷港から登山口へ',
          '車力道などの登山道を上る',
          '北口管理所から日本寺境内へ',
          '百尺観音・地獄のぞきを巡る',
        ],
        note: '天候、落石、通行止め情報を事前に確認し、滑りにくい靴と飲料を用意してください。',
      },
    ],
    ropewayImage: {
      title: '空と海を結ぶ、約4分。',
      text: 'ロープウェーからは金谷の町と東京湾を一望できます。',
      alt: '東京湾と金谷の町を背に山を上る鋸山ロープウェー',
    },
    fare: {
      eyebrow: 'ROPEWAY FARE',
      title: 'ロープウェー運賃',
      rows: [
        { label: '大人・片道', value: '650円' },
        { label: '大人・往復', value: '1,200円' },
        { label: '小児・片道', value: '320円' },
        { label: '小児・往復', value: '600円' },
      ],
      note: '通常期 9:00–17:00／冬季 9:00–16:00。荒天時は運休する場合があります。',
      linkText: '公式の運行情報を確認',
    },
  },
  cost: {
    eyebrow: 'Simple estimate',
    title: 'いくらかかる？',
    text: '日本寺の拝観料と、ロープウェーの基本運賃をすぐに試算できます。交通費・駐車料金は含みません。',
    adultLabel: '大人',
    childLabel: '小人・小児',
    ropewayLabel: 'ロープウェー',
    options: { round: '往復', oneway: '片道', none: '利用しない' },
    resultLabel: '基本料金の目安',
    breakdownLabel: '内訳',
    templeLabel: '日本寺',
    ropewayTerm: 'ロープウェー',
    note: '小人は日本寺4歳以上中学生未満、小児運賃は小学生が対象です。',
    suffix: '円',
  },
  course: {
    eyebrow: 'Suggested course',
    title: '初めてなら、90分の山頂散歩。',
    text: 'ロープウェーで往復し、百尺観音と地獄のぞきに絞る軽量コース。大仏まで下らないため、登り返しを抑えられます。',
    durationLabel: '所要時間 約60〜90分',
    durationValue: '60–90分',
    startLabel: 'START +',
    minuteUnit: '分',
    steps: [
      { minute: '00', title: '鋸山ロープウェー山頂駅', description: '東京湾の眺めを楽しみ、歩きやすい靴と飲み物を確認。' },
      { minute: '15', title: '日本寺 西口管理所', description: '拝観券を購入。ロープウェー券とは別料金です。' },
      { minute: '25', title: '百尺観音', description: '階段の手前を左へ。切り立つ岩壁と観音像を見上げます。' },
      { minute: '40', title: '地獄のぞき', description: '急な階段を上り、山頂展望台へ。混雑時は待ち時間を見込みます。' },
      { minute: '65', title: '山頂展望台・帰路', description: '海側の景色も眺め、余裕を持ってロープウェー駅へ戻ります。' },
    ],
    photo: {
      eyebrow: 'Photo tips',
      title: '断崖らしさを、一枚に。',
      alt: '横から見た地獄のぞきの岩場と展望柵',
      items: [
        '同行者に側面の展望場所から撮ってもらうと、張り出した岩の形が伝わります。',
        'スマートフォンの2倍前後を使うと、人物と崖の輪郭をすっきりまとめられます。',
        '柵から身を乗り出さず、前後の人と譲り合って短時間で撮影しましょう。',
      ],
    },
  },
  info: {
    eyebrow: 'Visitor information',
    title: '拝観前に、確認すること。',
    text: '山の天候、ロープウェーの運行、日本寺の最終入場は別々に確認するのが安心です。',
    cards: [
      {
        label: 'OPENING HOURS',
        title: '日本寺 拝観時間',
        main: '9:00–16:00',
        sub: '最終入場 15:00',
      },
      {
        label: 'ADMISSION',
        title: '日本寺 拝観料',
        rows: [
          { label: '大人', value: '700円' },
          { label: '小人', value: '400円' },
        ],
      },
      {
        label: 'FOOTWEAR',
        title: '歩きやすい靴で',
        text: '境内は階段が多く、一部に歩きづらい場所があります。雨の後は特に滑りにくい靴がおすすめです。',
      },
      {
        label: 'FACILITIES',
        title: '山内の設備',
        text: '日本寺境内の公衆トイレは大仏広場下の1か所。山頂駅や山麓駅の設備も先に利用すると安心です。',
      },
    ],
    official: [
      { label: 'OFFICIAL 01', title: '日本寺 拝観案内', url: 'https://www.nihonji.jp/%E6%8B%9D%E8%A6%B3%E6%99%82%E9%96%93-%E6%96%99%E9%87%91/' },
      { label: 'OFFICIAL 02', title: 'ロープウェー運行', url: 'https://www.mt-nokogiri.co.jp/pc/p040000.php' },
      { label: 'MAP', title: '地獄のぞきを開く', url: 'MAP' },
    ],
    location: {
      eyebrow: 'Location',
      title: '地獄のぞき 所在地',
      note: '山中の展望台です。車で直接到着する地点ではないため、ロープウェー・各管理所から徒歩で向かいます。',
      linkText: 'Google マップで開く',
    },
    ratingNote: 'Google マップの掲載情報を参照（2026年9月時点・参考値）。評価は変動します。',
  },
  faq: {
    eyebrow: 'Before you go',
    title: 'よくある質問',
    text: '山の中にある景勝地だからこそ、服装・時間・入口選びが大切です。',
    items: [
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
      {
        question: '所要時間はどのくらい見ておけばよいですか？',
        answer: 'ロープウェー往復と山頂エリアの散策で60〜90分が目安です。大仏や千五百羅漢まで歩く場合は、さらに1〜1.5時間ほど見ておくと安心です。',
      },
      {
        question: '東京から日帰りで行けますか？',
        answer: '日帰り圏内です。JR内房線の浜金谷駅からロープウェー山麓駅へ徒歩約8分でアクセスできます。公共交通の所要時間は運行状況により変わるため、出発前に時刻表をご確認ください。',
      },
    ],
  },
  footer: {
    description:
      '千葉県・鋸山、日本寺境内にある絶景展望台の非公式旅行案内です。運営状況・料金・通行情報は、訪問前に各公式サイトでご確認ください。',
    photoNote:
      '掲載写真は Wikimedia Commons の Creative Commons ライセンス作品を使用し、ウェブ表示用に縮小・トリミングしています。詳細な著作者・ライセンス情報は写真クレジットをご覧ください。',
    updateNote:
      '拝観時間・料金・ロープウェー運賃は公式情報をもとに随時確認しています。天候や施設都合により変更される場合があるため、訪問前に各公式サイトをご確認ください。',
  },
};

const en: GuideContent = {
  meta: {
    title: 'Jigoku Nozoki (View of Hell), Nokogiriyama Chiba | Visitor Guide',
    description:
      'Jigoku Nozoki ("View of Hell") is a cliff-edge lookout inside Nihon-ji temple on Mount Nokogiri, Chiba. Opening hours 9:00–16:00 (last entry 15:00), admission ¥700 for adults and ¥400 for children, plus ropeway, hiking and car access from Hamakanaya, a 60–90 minute model itinerary and FAQ for international visitors.',
  },
  hero: {
    eyebrow: 'Mount Nokogiri, Chiba — Nihon-ji Temple',
    title: 'Jigoku Nozoki',
    lead: 'Stand at the edge of the rock and look down over the Boso hills.',
    text: 'A lookout jutting out from the old quarry face of Mount Nokogiri. Ropeway access, admission, walking routes and everything else you want to know before you go — in one place.',
    primaryCta: 'Choose your route',
    secondaryCta: 'See visitor info',
    stats: [
      { label: 'Opening hours', value: '9:00–16:00' },
      { label: 'Last entry', value: '15:00' },
      { label: 'Nihon-ji admission', value: '¥700 adult' },
      { label: 'From west gate', value: '8 min walk' },
    ],
  },
  about: {
    eyebrow: 'About the cliff',
    title: 'A quiet hell, opening at your feet.',
    lead: 'Jigoku Nozoki is a viewing platform set on a rock shelf that projects out from the old quarry face of Mount Nokogiri.',
    imageAlt: 'View from the summit of Mount Nokogiri over Kanaya town, Tokyo Bay and distant Mount Fuji',
    verticalLabel: ['Sea and mountains', 'The sky of Boso'],
    paragraphs: [
      'Below you lie the deep forests of the Boso Peninsula. Turn around and Tokyo Bay and the town of Kanaya spread out. On clear days, when the air is crisp, Mount Fuji and the Miura Peninsula appear beyond the water.',
      'Unlike the photos suggest, this spot is part of the vast precinct of Nihon-ji temple. Walking the stone steps onward to the Hyaku-shaku Kannon, the 1,500 rakan statues and the Great Buddha ties the landscape of Mount Nokogiri together with its history of faith.',
    ],
    stats: [
      { label: 'Mount Nokogiri', value: '329 m' },
      { label: 'Temple grounds', value: 'over 100,000 tsubo' },
      { label: 'Founded', value: 'about 1,300 yrs ago' },
      { label: 'Suggested stay', value: '2–3 hours' },
    ],
  },
  highlights: {
    eyebrow: 'Three landscapes',
    title: 'Rock and prayer, in one loop.',
    text: 'It would be a shame to leave after the lookout alone. Follow the ridge from the summit down to the Great Buddha plaza for three landscapes found only on Mount Nokogiri.',
    items: [
      {
        title: 'Hyaku-shaku Kannon',
        kana: 'ひゃくしゃくかんのん',
        description:
          'A Kannon figure about 30 metres high, carved into the sheer wall of the old quarry. Past the quiet stone corridor it appears at overwhelming scale.',
        image: '/images/hyakushaku-kannon.webp',
        alt: 'The Hyaku-shaku Kannon carved into the quarry wall of Mount Nokogiri',
        meta: '4 min walk from the west gate',
        objectPosition: '50% 38%',
      },
      {
        title: 'Nihon-ji Great Buddha',
        kana: 'にほんじだいぶつ',
        description:
          'A rock-cut Buddha representing Yakushi Nyorai. Wrapped in the green of the mountain, the plaza around it feels calm — a contrast to the tension of Jigoku Nozoki.',
        image: '/images/nihonji-daibutsu.webp',
        alt: 'The Nihon-ji Great Buddha carved into a green mountainside',
        meta: '2–3 min walk from the east gate',
        objectPosition: '50% 52%',
      },
      {
        title: 'The old quarry',
        kana: 'いしきりばあと',
        description:
          'Vertical rock faces left by the cutting of Boshu stone create a landscape unique to Mount Nokogiri — the memory of a whole mountain where nature and human labour overlap.',
        image: '/images/nokogiriyama-quarry.webp',
        alt: 'Tall vertical quarry walls remaining on Mount Nokogiri',
        meta: 'Summit area',
        objectPosition: '50% 42%',
      },
    ],
  },
  plan: {
    eyebrow: 'Plan your visit',
    title: 'Pick the way up that suits you.',
    text: 'Mount Nokogiri can be climbed by ropeway, car or on foot. Your time, your legs and what you want to see all change the best gate to enter by.',
    noteLines: [
      'Jigoku Nozoki stands inside the Nihon-ji temple precinct.',
      'Temple admission is charged separately from the ropeway fare.',
    ],
    modes: [
      {
        id: 'ropeway',
        label: 'Ropeway',
        short: 'Best for first-timers',
        duration: 'About 4 min to the top',
        difficulty: 'Walking: moderate',
        summary:
          'Walk from Hamakanaya Station and ride the ropeway straight to the summit. The easiest route to follow, with sea views on the way.',
        steps: [
          '8 min walk from JR Hamakanaya Station to the base station',
          'Ride the ropeway to the summit station (about 4 min one way)',
          'Pay admission at the Nihon-ji west gate',
          'Continue past the Hyaku-shaku Kannon to Jigoku Nozoki',
        ],
        note: 'The walk from the summit station includes steps. Last entry to Nihon-ji is 15:00.',
      },
      {
        id: 'car',
        label: 'Car',
        short: 'To keep walking short',
        duration: 'Close to the west gate',
        difficulty: 'Walking: light–moderate',
        summary:
          'Take the toll Mount Nokogiri climbing road up to near the west gate office. Good if you want to see Jigoku Nozoki and the Hyaku-shaku Kannon in a short time.',
        steps: [
          'Use the Mount Nokogiri toll road',
          'Park near the summit',
          'Pay admission at the west gate office',
          'Climb a gentle slope and then steep steps',
        ],
        note: 'To see the Great Buddha as well, a split route — driving down and around to the east gate — saves energy.',
      },
      {
        id: 'hike',
        label: 'On foot',
        short: 'For a deeper mountain',
        duration: 'About 60 min up',
        difficulty: 'Walking: long',
        summary:
          'Take a trail from the Hamakanaya side that still breathes the history of stone cutting. Choose it on a day with time and proper gear.',
        steps: [
          'From Hamakanaya Station or Kanaya port to the trailhead',
          'Climb trails such as the Kurumamichi',
          'Enter the precinct via the north gate office',
          'Visit the Hyaku-shaku Kannon and Jigoku Nozoki',
        ],
        note: 'Check weather, rockfall and closures in advance, and bring grippy shoes and water.',
      },
    ],
    ropewayImage: {
      title: 'Four minutes joining sky and sea.',
      text: 'From the ropeway you look out over Kanaya town and Tokyo Bay.',
      alt: 'The Nokogiriyama ropeway climbing with Tokyo Bay and Kanaya town behind it',
    },
    fare: {
      eyebrow: 'ROPEWAY FARE',
      title: 'Ropeway fares',
      rows: [
        { label: 'Adult, one way', value: '¥650' },
        { label: 'Adult, round trip', value: '¥1,200' },
        { label: 'Child, one way', value: '¥320' },
        { label: 'Child, round trip', value: '¥600' },
      ],
      note: 'Usually 9:00–17:00; 9:00–16:00 in winter. Service may be suspended in bad weather.',
      linkText: 'Check official operating information',
    },
  },
  cost: {
    eyebrow: 'Simple estimate',
    title: 'What will it cost?',
    text: 'Estimate Nihon-ji admission plus the standard ropeway fare in seconds. Transport and parking are not included.',
    adultLabel: 'Adults',
    childLabel: 'Children',
    ropewayLabel: 'Ropeway',
    options: { round: 'Round trip', oneway: 'One way', none: 'Not using it' },
    resultLabel: 'Estimated basic cost',
    breakdownLabel: 'Breakdown',
    templeLabel: 'Nihon-ji',
    ropewayTerm: 'Ropeway',
    note: 'Child admission applies from age 4 up to junior high; the child fare on the ropeway applies to elementary school pupils.',
    suffix: ' yen',
  },
  course: {
    eyebrow: 'Suggested course',
    title: 'A 90-minute summit walk for first-timers.',
    text: 'A light course: ride the ropeway both ways and keep to the Hyaku-shaku Kannon and Jigoku Nozoki. You avoid the climb back up from the Great Buddha.',
    durationLabel: 'About 60–90 minutes',
    durationValue: '60–90 min',
    startLabel: 'START +',
    minuteUnit: 'min',
    steps: [
      {
        minute: '00',
        title: 'Nokogiriyama ropeway summit station',
        description: 'Enjoy the Tokyo Bay view and check your shoes and water.',
      },
      {
        minute: '15',
        title: 'Nihon-ji west gate office',
        description: 'Buy your admission ticket. It is separate from the ropeway ticket.',
      },
      {
        minute: '25',
        title: 'Hyaku-shaku Kannon',
        description: 'Turn left before the steps and look up at the sheer wall and the Kannon.',
      },
      {
        minute: '40',
        title: 'Jigoku Nozoki',
        description: 'Climb the steep steps up to the summit lookout. Allow extra time when busy.',
      },
      {
        minute: '65',
        title: 'Summit lookout and return',
        description: 'Take in the sea-side view too and head back to the ropeway with time to spare.',
      },
    ],
    photo: {
      eyebrow: 'Photo tips',
      title: 'Fit the cliff into one frame.',
      alt: 'The rock ledge and railing of Jigoku Nozoki seen from the side',
      items: [
        'Have someone photograph you from the side viewpoint — it conveys how the rock juts out.',
        'The 2x lens on a phone keeps both the person and the outline of the cliff tidy.',
        'Never lean out over the railing, and give way to others so everyone gets a short turn.',
      ],
    },
  },
  info: {
    eyebrow: 'Visitor information',
    title: 'Check before you enter.',
    text: 'Mountain weather, ropeway operation and Nihon-ji last entry are three separate things to confirm.',
    cards: [
      {
        label: 'OPENING HOURS',
        title: 'Nihon-ji opening hours',
        main: '9:00–16:00',
        sub: 'Last entry 15:00',
      },
      {
        label: 'ADMISSION',
        title: 'Nihon-ji admission',
        rows: [
          { label: 'Adult', value: '¥700' },
          { label: 'Child', value: '¥400' },
        ],
      },
      {
        label: 'FOOTWEAR',
        title: 'Wear shoes with grip',
        text: 'The precinct has many steps and a few awkward places. Shoes with good grip are especially advisable after rain.',
      },
      {
        label: 'FACILITIES',
        title: 'On the mountain',
        text: 'There is one public toilet in the precinct, below the Great Buddha plaza. It is wise to use the facilities at the summit or base station first.',
      },
    ],
    official: [
      { label: 'OFFICIAL 01', title: 'Nihon-ji visitor information', url: 'https://www.nihonji.jp/%E6%8B%9D%E8%A6%B3%E6%99%82%E9%96%93-%E6%96%99%E9%87%91/' },
      { label: 'OFFICIAL 02', title: 'Ropeway operation', url: 'https://www.mt-nokogiri.co.jp/pc/p040000.php' },
      { label: 'MAP', title: 'Open Jigoku Nozoki', url: 'MAP' },
    ],
    location: {
      eyebrow: 'Location',
      title: 'Where Jigoku Nozoki is',
      note: 'It is a lookout in the mountains, not a place you can drive right up to — reach it on foot from the ropeway or one of the gate offices.',
      linkText: 'Open in Google Maps',
    },
    ratingNote: 'Based on the Google Maps listing (September 2026, indicative). Ratings change over time.',
  },
  faq: {
    eyebrow: 'Before you go',
    title: 'Frequently asked questions',
    text: 'Because this viewpoint sits deep in the mountains, clothing, timing and choice of gate matter.',
    items: [
      {
        question: 'Do I still have to pay admission if I only want to see Jigoku Nozoki?',
        answer: 'Yes. Jigoku Nozoki lies within the Nihon-ji precinct, so Nihon-ji admission is required. A ropeway ticket does not include it.',
      },
      {
        question: 'Is it right next to the ropeway summit station?',
        answer: 'You walk from the summit station through the Nihon-ji west gate and up steps. Around 20 minutes is a good guide, but allow more when it is busy or if you walk slowly.',
      },
      {
        question: 'Can I see the Great Buddha on the same visit?',
        answer: 'Yes. Note that after descending from the summit area to the Great Buddha, returning to the west gate means climbing back up for 30–40 minutes. Keep time and energy in reserve.',
      },
      {
        question: 'Is it accessible with a wheelchair or pram?',
        answer: 'The steep steps make Jigoku Nozoki difficult. According to Nihon-ji, with assistance a wheelchair can reach the Great Buddha plaza area from the Great Buddha gate.',
      },
      {
        question: 'Is it worth going on a rainy day?',
        answer: 'The mist can be atmospheric, but stone steps and rock become slippery. The ropeway may also be suspended in strong wind or bad weather — check official information.',
      },
      {
        question: 'What time of day do you recommend?',
        answer: 'Mornings are best to avoid crowds. Since last entry is 15:00, plan to reach the summit side by about 14:00 at the latest.',
      },
      {
        question: 'How much time should I allow?',
        answer: 'Allow 60–90 minutes for a ropeway round trip plus the summit area. Walking on to the Great Buddha and the 1,500 rakan adds roughly another one to one and a half hours.',
      },
      {
        question: 'Can I visit as a day trip from Tokyo?',
        answer: 'Yes, it is within day-trip range. It is an 8-minute walk from JR Hamakanaya Station on the Uchibo Line to the ropeway base station. Journey times vary with the timetable, so check before you set out.',
      },
    ],
  },
  footer: {
    description:
      'An unofficial travel guide to the cliff-edge lookout inside Nihon-ji temple on Mount Nokogiri, Chiba. Please confirm operation, fees and closures on the official sites before visiting.',
    photoNote:
      'Photographs are Creative Commons works from Wikimedia Commons, resized and cropped for the web. See the photo credits page for authors and licences.',
    updateNote:
      'Opening hours, admission and ropeway fares are checked against official sources. They may change due to weather or temple circumstances, so confirm on the official sites before you visit.',
  },
};

const zh: GuideContent = {
  meta: {
    title: '地獄窺視（鋸山 日本寺）｜千葉絕景・參拜費與交通旅遊指南',
    description:
      '地獄窺視位於千葉縣鋸山日本寺境內，是自採石場斷崖突出的絕景觀景台。参拜時間 9:00–16:00（最後入場 15:00）、参拜費大人 700 日圓、小人 400 日圓，並整理鋸山纜車、濱金谷站步行與開車交通方式、所需時間、建議路線與常見問題。',
  },
  hero: {
    eyebrow: '千葉・鋸山 日本寺',
    title: '地獄窺視',
    lead: '站上岩壁前端，俯瞰房總連綿山巒。',
    text: '自鋸山採石場遺址突出的天空觀景台。纜車、參拜費、步行路線等出發前想知道的事，全部整理在一頁之中。',
    primaryCta: '選擇交通方式',
    secondaryCta: '查看參拜資訊',
    stats: [
      { label: '參拜時間', value: '9:00–16:00' },
      { label: '最後入場', value: '15:00' },
      { label: '日本寺參拜費', value: '大人 700日圓' },
      { label: '自西口', value: '步行 約8分' },
    ],
  },
  about: {
    eyebrow: 'About the cliff',
    title: '在腳下展開的，寂靜地獄。',
    lead: '地獄窺視是設於鋸山採石場遺址向外突出岩盤之上的觀景台。',
    imageAlt: '自鋸山山頂眺望金谷町、東京灣與遠方富士山',
    verticalLabel: ['望盡海與山', '房總的天空'],
    paragraphs: [
      '腳下是房總半島深邃的森林；回頭則是東京灣與金谷町。天氣晴朗、空氣澄澈時，還能望見海那頭的富士山與三浦半島。',
      '與照片給人的印象不同，這裡是日本寺遼闊境內的一部分。沿石階走向百尺觀音、千五百羅漢與大佛，鋸山的地景與信仰歷史便串連成一體。',
    ],
    stats: [
      { label: '鋸山標高', value: '329m' },
      { label: '境內面積', value: '10萬坪餘' },
      { label: '開山', value: '約1300年前' },
      { label: '建議停留', value: '2–3小時' },
    ],
  },
  highlights: {
    eyebrow: 'Three landscapes',
    title: '巡遊岩石與信仰。',
    text: '只看地獄窺視就離開，未免可惜。從山頂走向大佛廣場，造訪鋸山獨有的三種景觀吧。',
    items: [
      {
        title: '百尺觀音',
        kana: 'ひゃくしゃくかんのん',
        description: '刻在採石場遺址峭壁上的觀音像，高約30公尺。穿過寧靜的石廊後，以壓倒性的規模現身。',
        image: '/images/hyakushaku-kannon.webp',
        alt: '刻於鋸山採石場遺址岩壁的百尺觀音',
        meta: '自西口步行約4分',
        objectPosition: '50% 38%',
      },
      {
        title: '日本寺大佛',
        kana: 'にほんじだいぶつ',
        description: '表現藥師琉璃光如來的磨崖佛。被山間綠意環抱的大佛廣場，與地獄窺視的緊張感形成對比，寧靜而安詳。',
        image: '/images/nihonji-daibutsu.webp',
        alt: '刻於綠意山肌的日本寺大佛',
        meta: '自東口步行約2〜3分',
        objectPosition: '50% 52%',
      },
      {
        title: '採石場遺址',
        kana: 'いしきりばあと',
        description: '開採房州石留下的垂直岩壁，造就鋸山獨有的景觀。自然與人的勞動交疊，是整座山的記憶。',
        image: '/images/nokogiriyama-quarry.webp',
        alt: '鋸山殘留的高聳垂直採石場岩壁',
        meta: '山頂區域',
        objectPosition: '50% 42%',
      },
    ],
  },
  plan: {
    eyebrow: 'Plan your visit',
    title: '選擇適合你的登山路線。',
    text: '鋸山可搭纜車、開車或步行攀登。依時間、體力與想看的景點，最適合的入口也不同。',
    noteLines: ['地獄窺視位於日本寺境內。', '纜車費用之外，另需支付參拜費。'],
    modes: [
      {
        id: 'ropeway',
        label: '纜車',
        short: '適合初次造訪者',
        duration: '至山頂約4分',
        difficulty: '步行量：中',
        summary: '自濱金谷站步行，再搭纜車一口氣上到山頂。沿途還能欣賞海景，是最容易理解的路線。',
        steps: [
          '自JR濱金谷站步行約8分至山麓站',
          '搭纜車至山頂站（單程約4分）',
          '於日本寺西口辦理參拜受理',
          '經百尺觀音前往地獄窺視',
        ],
        note: '自山頂站至地獄窺視包含階梯。日本寺最後入場時間為15:00。',
      },
      {
        id: 'car',
        label: '開車',
        short: '想減少步行者',
        duration: '可接近西口',
        difficulty: '步行量：少〜中',
        summary: '利用收費的鋸山登山自動車道，直達西口管理所附近。適合想短時間巡遊地獄窺視與百尺觀音的人。',
        steps: [
          '利用鋸山登山自動車道（收費）',
          '前往山頂附近停車場',
          '於西口管理所辦理參拜受理',
          '走過緩坡與陡峭階梯向上',
        ],
        note: '若也要看大佛，先沿道路下到東口側再移動的分割路線較省力。',
      },
      {
        id: 'hike',
        label: '步行・登山',
        short: '深入品味山林',
        duration: '上坡約60分起',
        difficulty: '步行量：多',
        summary: '自濱金谷方向走上能感受採石歷史的登山道。適合時間與裝備都充裕的日子。',
        steps: [
          '自濱金谷站或金谷港前往登山口',
          '沿車力道等登山道上坡',
          '自北口管理所進入日本寺境內',
          '巡遊百尺觀音與地獄窺視',
        ],
        note: '請事先確認天候、落石與通行管制資訊，並準備防滑鞋與飲用水。',
      },
    ],
    ropewayImage: {
      title: '連結天空與海，約4分鐘。',
      text: '從纜車上可一望金谷町與東京灣。',
      alt: '以東京灣與金谷町為背景向上行駛的鋸山纜車',
    },
    fare: {
      eyebrow: 'ROPEWAY FARE',
      title: '纜車票價',
      rows: [
        { label: '大人・單程', value: '650日圓' },
        { label: '大人・來回', value: '1,200日圓' },
        { label: '兒童・單程', value: '320日圓' },
        { label: '兒童・來回', value: '600日圓' },
      ],
      note: '平常期 9:00–17:00／冬季 9:00–16:00。天候惡劣時可能停駛。',
      linkText: '確認官方運行資訊',
    },
  },
  cost: {
    eyebrow: 'Simple estimate',
    title: '需要多少錢？',
    text: '可立即試算日本寺參拜費與纜車基本票價。不含交通費與停車費。',
    adultLabel: '大人',
    childLabel: '小人・兒童',
    ropewayLabel: '纜車',
    options: { round: '來回', oneway: '單程', none: '不搭乘' },
    resultLabel: '基本費用估算',
    breakdownLabel: '明細',
    templeLabel: '日本寺',
    ropewayTerm: '纜車',
    note: '小人為日本寺4歲以上未滿中學生，兒童票價適用於小學生。',
    suffix: ' 日圓',
  },
  course: {
    eyebrow: 'Suggested course',
    title: '初次造訪，90分鐘山頂散步。',
    text: '纜車來回，聚焦百尺觀音與地獄窺視的輕量路線。不下到大佛，可減少回程上坡。',
    durationLabel: '所需時間 約60〜90分',
    durationValue: '60–90分',
    startLabel: 'START +',
    minuteUnit: '分',
    steps: [
      { minute: '00', title: '鋸山纜車山頂站', description: '欣賞東京灣景色，確認好走的鞋與飲用水。' },
      { minute: '15', title: '日本寺 西口管理所', description: '購買參拜券。與纜車票為不同費用。' },
      { minute: '25', title: '百尺觀音', description: '階梯前左轉。仰望峭壁與觀音像。' },
      { minute: '40', title: '地獄窺視', description: '爬上陡峭階梯前往山頂觀景台。人潮多時請預留等待時間。' },
      { minute: '65', title: '山頂觀景台・回程', description: '也欣賞海側景色，保留餘裕回到纜車站。' },
    ],
    photo: {
      eyebrow: 'Photo tips',
      title: '把斷崖收進一張照片。',
      alt: '從側面看地獄窺視的岩場與觀景護欄',
      items: [
        '請同行者從側面觀景處拍攝，較能傳達岩石突出的形狀。',
        '手機使用約2倍焦距，可讓人物與崖線輪廓更俐落。',
        '請勿將身體探出護欄，與前後遊客互相禮讓、短時間完成拍攝。',
      ],
    },
  },
  info: {
    eyebrow: 'Visitor information',
    title: '參拜前先確認的事。',
    text: '山區天候、纜車運行與日本寺最後入場時間，建議分別確認。',
    cards: [
      {
        label: 'OPENING HOURS',
        title: '日本寺 參拜時間',
        main: '9:00–16:00',
        sub: '最後入場 15:00',
      },
      {
        label: 'ADMISSION',
        title: '日本寺 參拜費',
        rows: [
          { label: '大人', value: '700日圓' },
          { label: '小人', value: '400日圓' },
        ],
      },
      {
        label: 'FOOTWEAR',
        title: '請穿好走的鞋',
        text: '境內階梯多，部分路段不易行走。雨後特別建議穿著防滑鞋。',
      },
      {
        label: 'FACILITIES',
        title: '山內設施',
        text: '日本寺境內的公廁位於大佛廣場下方一處。建議先利用山頂站或山麓站的設施。',
      },
    ],
    official: [
      { label: 'OFFICIAL 01', title: '日本寺 參拜資訊', url: 'https://www.nihonji.jp/%E6%8B%9D%E8%A6%B3%E6%99%82%E9%96%93-%E6%96%99%E9%87%91/' },
      { label: 'OFFICIAL 02', title: '纜車運行狀況', url: 'https://www.mt-nokogiri.co.jp/pc/p040000.php' },
      { label: 'MAP', title: '開啟地獄窺視', url: 'MAP' },
    ],
    location: {
      eyebrow: 'Location',
      title: '地獄窺視 所在地',
      note: '這是山中的觀景台，無法開車直達，請自纜車或各管理所步行前往。',
      linkText: '在 Google 地圖開啟',
    },
    ratingNote: '參考 Google 地圖資訊（2026年9月・參考值），評分會變動。',
  },
  faq: {
    eyebrow: 'Before you go',
    title: '常見問題',
    text: '正因是位於山中的景勝地，服裝、時間與入口的選擇格外重要。',
    items: [
      {
        question: '只想看地獄窺視，也需要參拜費嗎？',
        answer: '需要。地獄窺視位於日本寺境內，因此須支付日本寺參拜費。纜車票不含參拜費。',
      },
      {
        question: '從纜車山頂站很快就到嗎？',
        answer: '需自山頂站經日本寺西口，再爬階梯前往。約20分鐘為基準，請視人潮與體力保留餘裕。',
      },
      {
        question: '可以一併參觀大佛嗎？',
        answer: '可以。但自山頂區域下到大佛後，若返回西口需再上坡約30〜40分鐘。請預留時間與體力。',
      },
      {
        question: '輪椅或嬰兒車可以前往嗎？',
        answer: '前往地獄窺視有陡峭階梯，較為困難。依日本寺官方資訊，有人協助時可自大佛口利用輪椅至大佛廣場一帶。',
      },
      {
        question: '雨天也能盡興嗎？',
        answer: '霧中景色別具氛圍，但石階與岩場容易濕滑。強風或天候惡劣時纜車可能停駛，請確認官方資訊。',
      },
      {
        question: '建議的時段是？',
        answer: '想避開人潮建議上午前往。日本寺最後入場為15:00，最晚約14:00前抵達山頂側較安心。',
      },
      {
        question: '需要預留多少時間？',
        answer: '纜車來回加上山頂區域散步，約60〜90分鐘為基準。若還要走到大佛與千五百羅漢，建議再多預留1〜1.5小時。',
      },
      {
        question: '可以從東京當日往返嗎？',
        answer: '在當日往返範圍內。可搭乘JR內房線至濱金谷站，步行約8分鐘至纜車山麓站。公共交通所需時間會因運行狀況而異，出發前請確認時刻表。',
      },
    ],
  },
  footer: {
    description: '千葉縣鋸山、日本寺境內絕景觀景台的非官方旅遊指南。營運狀況、費用與通行資訊請於造訪前至各官方網站確認。',
    photoNote: '刊載照片採用 Wikimedia Commons 的 Creative Commons 授權作品，並為網頁顯示縮小、裁切。詳細作者與授權資訊請見圖片版權頁。',
    updateNote: '參拜時間、費用與纜車票價均依官方資訊隨時確認。可能因天候或設施因素變更，造訪前請至各官方網站確認。',
  },
};

export const guides: Record<Locale, GuideContent> = { ja, en, zh };

export function getGuide(locale: Locale): GuideContent {
  return guides[locale] ?? guides.ja;
}
