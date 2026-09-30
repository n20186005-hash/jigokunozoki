import type { Locale } from '../i18n';

export type TopicSlug = 'access' | 'guide';

export const topicSlugs: TopicSlug[] = ['access', 'guide'];

export interface TopicBlock {
  heading: string;
  paragraphs?: string[];
  steps?: string[];
  rows?: { label: string; value: string }[];
}

export interface TopicContent {
  slug: TopicSlug;
  eyebrow: string;
  title: string;
  description: string;
  heading: string;
  lead: string;
  blocks: TopicBlock[];
  faq: { question: string; answer: string }[];
  relatedTitle: string;
  caution: string;
}

const access: Record<Locale, TopicContent> = {
  ja: {
    slug: 'access',
    eyebrow: 'Access',
    title: '地獄のぞきへの行き方｜浜金谷駅・鋸山ロープウェー・車・登山道',
    description:
      '千葉県・鋸山の地獄のぞきへの行き方を解説。JR浜金谷駅から鋸山ロープウェー山麓駅へ徒歩約8分、山頂駅から日本寺西口を経て地獄のぞきへ。車（鋸山登山自動車道・有料）、登山道、高速バスでのアクセスと所要時間の目安、最終入場15:00の注意点もまとめました。',
    heading: '地獄のぞきへの行き方',
    lead: '地獄のぞきは山中の展望台です。どの入口からも最後は徒歩になるため、時間と体力に合うルートを選ぶことが大切です。',
    blocks: [
      {
        heading: 'JR内房線 浜金谷駅から（ロープウェー）',
        steps: [
          'JR内房線 浜金谷駅で下車する（東京方面からは内房線・京葉線経由など複数の経路があります）',
          '鋸山ロープウェー山麓駅へ徒歩約8分',
          'ロープウェーで山頂駅へ（片道約4分）',
          '日本寺 西口管理所で拝観券を購入',
          '百尺観音を経て、急な階段を上り地獄のぞきへ（山頂駅から約20分が目安）',
        ],
      },
      {
        heading: '車・鋸山登山自動車道（有料）',
        steps: [
          '鋸山登山自動車道（有料）を利用して山頂方面へ',
          '山頂付近の駐車場に停める',
          '西口管理所で拝観券を購入',
          '緩やかな坂と急な階段を上り地獄のぞきへ',
        ],
      },
      {
        heading: '徒歩・登山道で登る',
        steps: [
          '浜金谷駅または金谷港から登山口へ向かう',
          '車力道などの登山道を登る（登り約60分〜）',
          '北口管理所から日本寺境内へ入る',
          '百尺観音・地獄のぞきを巡る',
        ],
      },
      {
        heading: '高速バス・東京湾アクアライン方面から',
        paragraphs: [
          '東京湾アクアライン経由の高速バスで房総方面へ向かう方法もあります。停留所や運行系統は変更されることがあるため、出発前に各社の時刻表と路線図をご確認ください。',
          '金谷港周辺は東京湾フェリーの発着にも近く、車と徒歩を組み合わせた周遊もしやすいエリアです。',
        ],
      },
      {
        heading: '所要時間の目安',
        rows: [
          { label: '浜金谷駅 → ロープウェー山麓駅', value: '徒歩 約8分' },
          { label: 'ロープウェー 山麓駅 → 山頂駅', value: '約4分' },
          { label: '山頂駅 → 日本寺西口 → 地獄のぞき', value: '徒歩 約20分' },
          { label: '車（鋸山登山自動車道）', value: '山頂付近の駐車場まで' },
          { label: '登山道（浜金谷側）', value: '登り 約60分〜' },
          { label: '山頂エリアの滞在', value: '60〜90分が目安' },
        ],
      },
      {
        heading: 'アクセス時の注意点',
        paragraphs: [
          '日本寺の最終入場は15:00です。午後からの到着は、見学できる範囲が限られます。',
          '強風や荒天時はロープウェーが運休する場合があります。山の天候と運行情報は別々に確認してください。',
          '地獄のぞきまで階段が続きます。雨の後は滑りにくい靴を選び、飲み物を携帯してください。',
        ],
      },
    ],
    faq: [
      {
        question: '東京から日帰りで行けますか？',
        answer: '日帰り圏内です。JR浜金谷駅からロープウェー山麓駅へ徒歩約8分でアクセスできます。所要時間は経路や運行状況により変わるため、出発前に時刻表をご確認ください。',
      },
      {
        question: '地獄のぞきのすぐ近くまで車で行けますか？',
        answer: 'いいえ。地獄のぞきは山中の展望台で、車で直接到着する地点ではありません。鋸山登山自動車道（有料）を利用して山頂付近の駐車場へ停め、そこから徒歩で向かいます。',
      },
      {
        question: 'ロープウェーと拝観料は別ですか？',
        answer: '別です。地獄のぞきは日本寺の境内にあるため、ロープウェーの乗車券とは別に日本寺の拝観料（大人700円・小人400円）が必要です。',
      },
      {
        question: '荒天時はどうなりますか？',
        answer: '強風や荒天時はロープウェーが運休する場合があります。登山道も落石や通行止めの情報が出ることがあるため、公式情報を確認のうえ計画してください。',
      },
      {
        question: 'どのルートが一番楽ですか？',
        answer: '歩行を抑えたい場合は、鋸山登山自動車道（有料）で山頂付近の駐車場へ向かうルートが短時間です。公共交通ならロープウェー利用が最もわかりやすく、山頂駅から約20分で地獄のぞきに着きます。',
      },
      {
        question: '登山道を歩く場合の注意は？',
        answer: '登り約60分〜を見込み、滑りにくい靴・飲料・雨具を用意してください。天候、落石、通行止め情報を事前に確認し、日没前に余裕を持って下山する計画を立てましょう。',
      },
    ],
    relatedTitle: '合わせて読みたい',
    caution: '所要時間は目安です。運行状況・道路状況・天候により変わるため、出発前に各公式サイトをご確認ください。',
  },
  en: {
    slug: 'access',
    eyebrow: 'Access',
    title: 'How to get to Jigoku Nozoki — Hamakanaya Station, Nokogiriyama Ropeway, car and trails',
    description:
      'How to reach Jigoku Nozoki on Mount Nokogiri, Chiba: an 8-minute walk from JR Hamakanaya Station to the ropeway base station, about 4 minutes up to the summit, then roughly 20 minutes through the Nihon-ji west gate. Also the toll climbing road, hiking trails, highway bus options, timings and the 15:00 last-entry rule.',
    heading: 'How to get to Jigoku Nozoki',
    lead: 'Jigoku Nozoki is a lookout deep in the mountain: whichever gate you start from, the last stretch is always on foot. Pick a route that suits your time and legs.',
    blocks: [
      {
        heading: 'From JR Hamakanaya Station (Uchibo Line) via the ropeway',
        steps: [
          'Get off at JR Hamakanaya Station on the Uchibo Line (several routings from Tokyo, e.g. via the Keiyo and Uchibo lines)',
          'Walk about 8 minutes to the Nokogiriyama ropeway base station',
          'Ride the ropeway to the summit station (about 4 minutes one way)',
          'Buy an admission ticket at the Nihon-ji west gate office',
          'Pass the Hyaku-shaku Kannon and climb the steep steps to Jigoku Nozoki (about 20 minutes from the summit station)',
        ],
      },
      {
        heading: 'By car — the toll Mount Nokogiri climbing road',
        steps: [
          'Take the toll Mount Nokogiri climbing road towards the summit',
          'Park in the car park near the summit',
          'Buy an admission ticket at the west gate office',
          'Walk up a gentle slope and then steep steps to Jigoku Nozoki',
        ],
      },
      {
        heading: 'On foot — the hiking trails',
        steps: [
          'Head to the trailhead from Hamakanaya Station or Kanaya port',
          'Climb trails such as the Kurumamichi (about 60 minutes up)',
          'Enter the temple precinct via the north gate office',
          'Visit the Hyaku-shaku Kannon and Jigoku Nozoki',
        ],
      },
      {
        heading: 'From Tokyo Bay Aqua-Line / by highway bus',
        paragraphs: [
          'Highway buses crossing the Tokyo Bay Aqua-Line also serve the Boso area. Stops and route numbers change, so check the operators’ timetables and route maps before you travel.',
          'The area around Kanaya port is also close to the Tokyo Bay Ferry terminal, which makes it easy to combine driving and walking in one loop.',
        ],
      },
      {
        heading: 'Timing guide',
        rows: [
          { label: 'Hamakanaya Station → ropeway base station', value: 'about 8 min walk' },
          { label: 'Ropeway base → summit station', value: 'about 4 min' },
          { label: 'Summit station → west gate → Jigoku Nozoki', value: 'about 20 min walk' },
          { label: 'Car (toll climbing road)', value: 'to the car park near the summit' },
          { label: 'Hiking trail (Hamakanaya side)', value: 'about 60 min up' },
          { label: 'Time in the summit area', value: '60–90 min as a guide' },
        ],
      },
      {
        heading: 'Things to check before you set off',
        paragraphs: [
          'Last entry to Nihon-ji is 15:00. Arriving in the afternoon limits how much you can see.',
          'The ropeway may be suspended in strong wind or bad weather. Check mountain weather and operating information separately.',
          'Steps continue all the way to Jigoku Nozoki. After rain, wear shoes with grip and carry water.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I visit as a day trip from Tokyo?',
        answer: 'Yes. It is an 8-minute walk from JR Hamakanaya Station to the ropeway base station. Journey times vary by routing and service, so check the timetable before you set off.',
      },
      {
        question: 'Can I drive right up to Jigoku Nozoki?',
        answer: 'No. It is a lookout in the mountains with no drop-off point. Use the toll Mount Nokogiri climbing road to the car park near the summit and continue on foot.',
      },
      {
        question: 'Is the ropeway ticket separate from the temple admission?',
        answer: 'Yes. Jigoku Nozoki stands inside the Nihon-ji precinct, so Nihon-ji admission (¥700 adults, ¥400 children) is charged in addition to the ropeway fare.',
      },
      {
        question: 'What happens in bad weather?',
        answer: 'The ropeway may be suspended in strong wind or storms, and trails may be closed for rockfall. Check official information before finalising your plan.',
      },
      {
        question: 'Which route is easiest?',
        answer: 'To keep walking short, drive the toll climbing road to the car park near the summit. Using public transport, the ropeway is the most straightforward — about 20 minutes from the summit station to Jigoku Nozoki.',
      },
      {
        question: 'What should I know before hiking up?',
        answer: 'Allow about 60 minutes to climb, and bring grippy shoes, water and rain gear. Check weather, rockfall and closure notices, and plan to descend well before dusk.',
      },
    ],
    relatedTitle: 'Keep reading',
    caution: 'Times are approximate and change with service, road and weather conditions — confirm on the official sites before you travel.',
  },
  zh: {
    slug: 'access',
    eyebrow: 'Access',
    title: '地獄窺視交通方式｜濱金谷站・鋸山纜車・開車與登山路線',
    description:
      '前往千葉縣鋸山地獄窺視的交通方式整理：自JR濱金谷站步行約8分鐘至鋸山纜車山麓站，搭纜車約4分鐘至山頂站，再經日本寺西口步行約20分鐘抵達。另收錄收費登山自動車道、登山路線、高速巴士與東京灣渡輪方向，以及所需時間與15:00最後入場的注意事項。',
    heading: '地獄窺視的交通方式',
    lead: '地獄窺視是山中的觀景台，無論從哪個入口出發，最後都必須步行。請依時間與體力選擇合適路線。',
    blocks: [
      {
        heading: '自JR內房線 濱金谷站（搭乘纜車）',
        steps: [
          '於JR內房線濱金谷站下車（自東京方面可經內房線、京葉線等多種路徑）',
          '步行約8分鐘前往鋸山纜車山麓站',
          '搭乘纜車至山頂站（單程約4分鐘）',
          '於日本寺西口管理所購買參拜券',
          '經百尺觀音，爬上陡峭階梯前往地獄窺視（自山頂站約20分鐘）',
        ],
      },
      {
        heading: '開車・鋸山登山自動車道（收費）',
        steps: [
          '利用鋸山登山自動車道（收費）往山頂方向',
          '停放於山頂附近停車場',
          '於西口管理所購買參拜券',
          '走過緩坡與陡峭階梯前往地獄窺視',
        ],
      },
      {
        heading: '步行・登山路線',
        steps: [
          '自濱金谷站或金谷港前往登山口',
          '沿車力道等登山道上坡（約60分鐘起）',
          '自北口管理所進入日本寺境內',
          '巡遊百尺觀音與地獄窺視',
        ],
      },
      {
        heading: '自東京灣跨海公路・高速巴士方向',
        paragraphs: [
          '也可搭乘經東京灣跨海公路（Aqua-Line）前往房總方向的高速巴士。停靠站與路線系統可能變更，出發前請至各客運公司查詢時刻表與路線圖。',
          '金谷港周邊鄰近東京灣渡輪碼頭，適合結合開車與步行的周遊行程。',
        ],
      },
      {
        heading: '所需時間參考',
        rows: [
          { label: '濱金谷站 → 纜車山麓站', value: '步行 約8分' },
          { label: '纜車 山麓站 → 山頂站', value: '約4分' },
          { label: '山頂站 → 日本寺西口 → 地獄窺視', value: '步行 約20分' },
          { label: '開車（鋸山登山自動車道）', value: '至山頂附近停車場' },
          { label: '登山路線（濱金谷側）', value: '上坡 約60分起' },
          { label: '山頂區域停留', value: '約60〜90分' },
        ],
      },
      {
        heading: '交通上的注意事項',
        paragraphs: [
          '日本寺最後入場時間為15:00。若下午才抵達，可參觀範圍會受限。',
          '強風或天候惡劣時纜車可能停駛。山區天候與運行資訊請分別確認。',
          '前往地獄窺視沿途階梯多。雨後請穿防滑鞋並攜帶飲用水。',
        ],
      },
    ],
    faq: [
      {
        question: '可以從東京當日往返嗎？',
        answer: '在當日往返範圍內。可自JR濱金谷站步行約8分鐘至纜車山麓站。所需時間會因路徑與運行狀況而異，出發前請確認時刻表。',
      },
      {
        question: '可以開車直達地獄窺視旁嗎？',
        answer: '不行。地獄窺視是山中觀景台，沒有可直達的停車點。請利用鋸山登山自動車道（收費）至山頂附近停車場，再步行前往。',
      },
      {
        question: '纜車票與參拜費是分開的嗎？',
        answer: '是分開的。地獄窺視位於日本寺境內，除了纜車票，另需支付日本寺參拜費（大人700日圓・小人400日圓）。',
      },
      {
        question: '天候惡劣時怎麼辦？',
        answer: '強風或天候惡劣時纜車可能停駛，登山路線也可能因落石而封閉。請先確認官方資訊再安排行程。',
      },
      {
        question: '哪條路線最省力？',
        answer: '想減少步行，可開車走鋸山登山自動車道（收費）至山頂附近停車場。搭乘公共交通則以纜車最清楚，自山頂站約20分鐘可達地獄窺視。',
      },
      {
        question: '走登山路線要注意什麼？',
        answer: '請預留上坡約60分鐘以上，並準備防滑鞋、飲用水與雨具。事先確認天候、落石與通行管制，並在天黑前保留充足時間下山。',
      },
    ],
    relatedTitle: '延伸閱讀',
    caution: '所需時間僅供參考，會因運行、道路與天候狀況而變動，出發前請至各官方網站確認。',
  },
};

const guide: Record<Locale, TopicContent> = {
  ja: {
    slug: 'guide',
    eyebrow: 'Visitor guide',
    title: '地獄のぞきの拝観ガイド｜拝観料・拝観時間・持ち物・注意点',
    description:
      '地獄のぞき（鋸山 日本寺）の拝観ガイド。拝観時間9:00–16:00（最終入場15:00）、拝観料大人700円・小人400円、ロープウェー運賃、所要時間、持ち物と服装、雨天時の注意、撮影マナーまで解説します。',
    heading: '地獄のぞきの拝観ガイド',
    lead: '断崖の展望台は、日本寺の境内にあります。拝観の仕組みと山歩きの準備を知っておくと、当日の判断がずっと楽になります。',
    blocks: [
      {
        heading: '拝観時間と最終入場',
        paragraphs: [
          '日本寺の拝観時間は9:00–16:00、最終入場は15:00です。地獄のぞきは境内の山頂エリアにあるため、この時間内に往復する計画を立てます。',
          'ロープウェーの運行時間は季節で変わります（通常期 9:00–17:00／冬季 9:00–16:00）。寺とロープウェーの時間は別々に確認してください。',
        ],
      },
      {
        heading: '拝観料とロープウェー運賃',
        rows: [
          { label: '日本寺 拝観料（大人）', value: '700円' },
          { label: '日本寺 拝観料（小人）', value: '400円' },
          { label: 'ロープウェー（大人・片道／往復）', value: '650円／1,200円' },
          { label: 'ロープウェー（小児・片道／往復）', value: '320円／600円' },
        ],
      },
      {
        heading: '持ち物と服装',
        steps: [
          '滑りにくい靴（石段・岩場が多く、雨の後は特に滑ります）',
          '飲み物（山頂エリアの自販機・売店は限られます）',
          '雨具と羽織るもの（山頂は風が強く、体感温度が下がります）',
          '小銭（拝観料・運賃の支払いに現金を使う場合があります）',
          '両手が空く荷物（階段と撮影で手を使います）',
        ],
      },
      {
        heading: '境内の歩き方',
        steps: [
          '西口管理所で拝観券を購入する',
          '百尺観音まで緩やかな石段を上る（西口から約4分）',
          '急な階段を上り、地獄のぞきの展望台へ',
          '時間と体力に余裕があれば、大仏・千五百羅漢方面へ下る',
        ],
      },
      {
        heading: '混雑とおすすめの時間帯',
        paragraphs: [
          '混雑を避けるなら午前中がおすすめです。週末や紅葉時期は山頂エリアが混み合い、展望台で待ち時間が発生します。',
          '最終入場が15:00のため、遅くとも14:00頃までに山頂側へ到着する計画が安心です。',
        ],
      },
      {
        heading: '安全とマナー',
        steps: [
          '柵から身を乗り出さない（足場は断崖です）',
          '強風時・雨天時は無理をしない（石段と岩場が滑りやすくなります）',
          '展望台は譲り合い、撮影は短時間で済ませる',
          '登山道を歩く場合は、落石と通行止め情報を事前に確認する',
        ],
      },
    ],
    faq: [
      {
        question: '所要時間はどのくらい見ておけばよいですか？',
        answer: 'ロープウェー往復と山頂エリアの散策で60〜90分が目安です。大仏や千五百羅漢まで歩く場合は、さらに1〜1.5時間ほど見ておくと安心です。',
      },
      {
        question: '高所が苦手でも大丈夫ですか？',
        answer: '足もとが透けて見える断崖の展望台です。怖さを感じる方は、無理に岩の先へ進まず、手前の展望スペースから景色を楽しむだけでも十分に雰囲気を味わえます。',
      },
      {
        question: '雨の日でも楽しめますか？',
        answer: '霧の景色は幻想的ですが、石段や岩場が滑りやすくなります。強風や荒天時はロープウェーが運休する場合もあるため、公式情報を確認してください。',
      },
      {
        question: '子どもや高齢の家族と一緒でも行けますか？',
        answer: '階段が多いため、歩行に不安がある場合は無理のない計画を。大仏広場付近までは比較的なだらかで、介助があれば車いす利用も可能とされています（日本寺公式案内）。',
      },
      {
        question: 'トイレや休憩場所はありますか？',
        answer: '日本寺境内の公衆トイレは大仏広場下の1か所です。山頂駅や山麓駅の設備も先に利用しておくと安心です。',
      },
      {
        question: '三脚や自撮り棒は使えますか？',
        answer: '展望台は場所が限られ、混雑時は譲り合いが必要です。三脚の使用は周囲の迷惑になる場合があるため、混雑時は手持ち撮影に切り替えるのがおすすめです。',
      },
    ],
    relatedTitle: '合わせて読みたい',
    caution: '拝観時間・料金・運行状況は変更される場合があります。最新情報は各公式サイトでご確認ください。',
  },
  en: {
    slug: 'guide',
    eyebrow: 'Visitor guide',
    title: 'Visiting Jigoku Nozoki — admission, opening hours, what to bring and safety notes',
    description:
      'A practical guide to Jigoku Nozoki at Nihon-ji temple, Mount Nokogiri: opening hours 9:00–16:00 (last entry 15:00), admission ¥700 for adults and ¥400 for children, ropeway fares, how long to allow, what to wear, wet-weather advice and photography etiquette.',
    heading: 'Visiting Jigoku Nozoki',
    lead: 'The cliff lookout sits inside the Nihon-ji precinct. Knowing how admission works and how to prepare for the mountain makes decisions on the day much easier.',
    blocks: [
      {
        heading: 'Opening hours and last entry',
        paragraphs: [
          'Nihon-ji is open 9:00–16:00, with last entry at 15:00. Jigoku Nozoki is in the summit area of the precinct, so plan to get there and back within those hours.',
          'Ropeway hours change with the season (usually 9:00–17:00; 9:00–16:00 in winter). Check the temple and the ropeway separately.',
        ],
      },
      {
        heading: 'Admission and ropeway fares',
        rows: [
          { label: 'Nihon-ji admission (adult)', value: '¥700' },
          { label: 'Nihon-ji admission (child)', value: '¥400' },
          { label: 'Ropeway (adult, one way / round trip)', value: '¥650 / ¥1,200' },
          { label: 'Ropeway (child, one way / round trip)', value: '¥320 / ¥600' },
        ],
      },
      {
        heading: 'What to bring and wear',
        steps: [
          'Shoes with grip: there are many stone steps and rock surfaces, slippery especially after rain',
          'Water: vending machines and shops in the summit area are limited',
          'Rain gear and a layer: it is windy at the top and the apparent temperature drops',
          'Some coins: admission and fares may be paid in cash',
          'A bag that leaves your hands free: you will use them on the steps and for photos',
        ],
      },
      {
        heading: 'Walking through the precinct',
        steps: [
          'Buy an admission ticket at the west gate office',
          'Climb gentle stone steps to the Hyaku-shaku Kannon (about 4 minutes from the west gate)',
          'Climb the steep steps up to the Jigoku Nozoki lookout',
          'If you have time and energy, descend towards the Great Buddha and the 1,500 rakan',
        ],
      },
      {
        heading: 'Crowds and the best time of day',
        paragraphs: [
          'Mornings are best to avoid crowds. At weekends and during the autumn colours the summit area gets busy and queues form at the lookout.',
          'Because last entry is 15:00, plan to reach the summit side by about 14:00 at the latest.',
        ],
      },
      {
        heading: 'Safety and etiquette',
        steps: [
          'Never lean out over the railing — the ground beyond it is a cliff',
          'Do not push on in strong wind or rain: stone steps and rock become slippery',
          'Share the lookout and keep photo stops short',
          'If you use the trails, check rockfall and closure notices in advance',
        ],
      },
    ],
    faq: [
      {
        question: 'How long should I allow?',
        answer: 'Allow 60–90 minutes for a ropeway round trip plus the summit area. Walking on to the Great Buddha and the 1,500 rakan adds roughly another one to one and a half hours.',
      },
      {
        question: 'Is it suitable if I am afraid of heights?',
        answer: 'It is a cliff-edge platform where you can see straight down. If that feels like too much, you can stay at the viewpoint before the tip and still enjoy the atmosphere.',
      },
      {
        question: 'Is it worth going on a rainy day?',
        answer: 'The mist can be atmospheric, but stone steps and rock become slippery. The ropeway may also be suspended in strong wind or bad weather — check official information.',
      },
      {
        question: 'Can I go with children or older family members?',
        answer: 'There are many steps, so plan within your limits if walking is a concern. The area around the Great Buddha plaza is comparatively gentle and, with assistance, wheelchair users can reach it from the Great Buddha gate (per Nihon-ji).',
      },
      {
        question: 'Are there toilets or places to rest?',
        answer: 'There is one public toilet in the precinct, below the Great Buddha plaza. It is wise to use the facilities at the summit or base station first.',
      },
      {
        question: 'Can I use a tripod or selfie stick?',
        answer: 'Space at the lookout is limited and you need to share it. A tripod can get in the way, so switch to handheld shots when it is busy.',
      },
    ],
    relatedTitle: 'Keep reading',
    caution: 'Opening hours, fees and operation may change. Please confirm the latest information on the official sites.',
  },
  zh: {
    slug: 'guide',
    eyebrow: 'Visitor guide',
    title: '地獄窺視參拜指南｜參拜費・參拜時間・攜帶物品與注意事項',
    description:
      '地獄窺視（鋸山 日本寺）參拜指南：參拜時間 9:00–16:00（最後入場 15:00）、參拜費大人 700 日圓・小人 400 日圓、鋸山纜車票價、所需時間、服裝與攜帶物品、雨天注意事項與攝影禮儀。',
    heading: '地獄窺視參拜指南',
    lead: '斷崖觀景台位於日本寺境內。先了解參拜方式與登山準備，當天的判斷會輕鬆許多。',
    blocks: [
      {
        heading: '參拜時間與最後入場',
        paragraphs: [
          '日本寺參拜時間為 9:00–16:00，最後入場 15:00。地獄窺視位於境內山頂區域，請安排在時間內往返。',
          '纜車運行時間隨季節變動（平常期 9:00–17:00／冬季 9:00–16:00）。寺方與纜車的時間請分別確認。',
        ],
      },
      {
        heading: '參拜費與纜車票價',
        rows: [
          { label: '日本寺 參拜費（大人）', value: '700日圓' },
          { label: '日本寺 參拜費（小人）', value: '400日圓' },
          { label: '纜車（大人・單程／來回）', value: '650／1,200日圓' },
          { label: '纜車（兒童・單程／來回）', value: '320／600日圓' },
        ],
      },
      {
        heading: '服裝與攜帶物品',
        steps: [
          '防滑鞋（石階與岩場多，雨後特別容易滑）',
          '飲用水（山頂區域的自動販賣機與賣店有限）',
          '雨具與一件外套（山頂風大，體感溫度較低）',
          '零錢（參拜費與車資有時僅能現金支付）',
          '能空出雙手的背包（爬階梯與拍照都需要用手）',
        ],
      },
      {
        heading: '境內步行動線',
        steps: [
          '於西口管理所購買參拜券',
          '沿緩坡石階上至百尺觀音（自西口約4分）',
          '爬上陡峭階梯，前往地獄窺視觀景台',
          '時間與體力充裕者，可再下往大佛・千五百羅漢方向',
        ],
      },
      {
        heading: '人潮與建議時段',
        paragraphs: [
          '想避開人潮建議上午前往。週末與紅葉季山頂區域容易擁擠，觀景台可能需排隊。',
          '由於最後入場為15:00，最晚約14:00前抵達山頂側較為安心。',
        ],
      },
      {
        heading: '安全與禮儀',
        steps: [
          '請勿將身體探出護欄（護欄之外即為斷崖）',
          '強風或雨天請勿勉強（石階與岩場容易濕滑）',
          '觀景台請互相禮讓，攝影盡量短時間完成',
          '行走登山路線時，請事先確認落石與通行管制資訊',
        ],
      },
    ],
    faq: [
      {
        question: '需要預留多少時間？',
        answer: '纜車來回加上山頂區域散步，約60〜90分鐘為基準。若還要走到大佛與千五百羅漢，建議再多預留1〜1.5小時。',
      },
      {
        question: '有懼高症也可以去嗎？',
        answer: '這裡是可直視腳下的斷崖觀景台。若感到害怕，不必勉強走到岩端，在前端的觀景處也能充分感受氛圍。',
      },
      {
        question: '雨天也能盡興嗎？',
        answer: '霧中景色別具氛圍，但石階與岩場容易濕滑。強風或天候惡劣時纜車可能停駛，請確認官方資訊。',
      },
      {
        question: '可以帶小孩或年長家人同行嗎？',
        answer: '階梯較多，若對步行有疑慮請安排不勉強的行程。大佛廣場一帶地勢較平緩，依日本寺官方資訊，有人協助時輪椅也可前往。',
      },
      {
        question: '有廁所或休息處嗎？',
        answer: '日本寺境內公廁位於大佛廣場下方一處。建議先利用山頂站或山麓站的設施。',
      },
      {
        question: '可以使用腳架或自拍棒嗎？',
        answer: '觀景台空間有限，人多時需互相禮讓。使用腳架可能造成他人困擾，建議人潮多時改以手持拍攝。',
      },
    ],
    relatedTitle: '延伸閱讀',
    caution: '參拜時間、費用與運行狀況可能變更，最新資訊請至各官方網站確認。',
  },
};

export const topics: Record<TopicSlug, Record<Locale, TopicContent>> = { access, guide };

export function getTopic(slug: TopicSlug, locale: Locale): TopicContent {
  return topics[slug]?.[locale] ?? topics[slug].ja;
}
