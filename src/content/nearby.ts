import type { Locale } from '../i18n';

export const nearbySlugs = ['nihonji-daibutsu', 'hyakushaku-kannon', 'nokogiriyama-ropeway', 'nokogiriyama-quarry'] as const;
export type NearbySlug = (typeof nearbySlugs)[number];

type Copy = { name: string; tagline: string; intro: string; history: string; highlights: string[]; route: string[]; photo: string; faq: { q: string; a: string }[] };
export type NearbyPlace = {
  slug: NearbySlug; image: string; map: string; official: string; location: string; operator: string;
  copy: Record<Locale, Copy>;
};

const temple = 'https://www.nihonji.jp/';
const templeArea = 'https://www.nihonji.jp/%E5%A2%83%E5%86%85%E6%A1%88%E5%86%85/';
const ropeway = 'https://www.mt-nokogiri.co.jp/';
const maps = (name: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' 千葉県 鋸山')}`;

export const nearbyPlaces: NearbyPlace[] = [
  {
    slug: 'nihonji-daibutsu', image: '/images/nihonji-daibutsu.webp', map: maps('日本寺 大仏'), official: templeArea,
    location: '千葉県安房郡鋸南町元名184-4・日本寺境内', operator: '日本寺',
    copy: {
      ja: { name: '日本寺大仏', tagline: '鋸山の中腹で出会う石仏', intro: '地獄のぞきと同じ日本寺境内にある大仏は、山頂の展望台とは違う静かな参拝体験ができる場所です。境内は広く、高低差もあります。', history: '日本寺は行基によって開かれたと伝えられる古刹です。大仏は薬師瑠璃光如来を表し、鋸山の岩肌と寺院の長い歴史を一緒に感じられます。', highlights: ['石造の大仏の大きさと岩壁との関係を観察する', '境内の樹木と参道の静けさを味わう', '山頂エリアとの標高差を考えて時間を確保する'], route: ['大仏口方面の入口と開門情報を確認する', '大仏前で参拝し、周囲の岩肌を観察する', '体力と閉門時刻に余裕があれば山頂方面へ進む'], photo: '大仏の正面から全体像を収め、周囲の樹木も入れると大きさが伝わります。', faq: [{ q: '地獄のぞきからすぐですか？', a: '同じ境内ですが高低差と階段があります。往復時間を十分に見込みましょう。' }, { q: '拝観料は別ですか？', a: '日本寺の境内にあるため、拝観条件は日本寺の公式案内をご確認ください。' }] },
      en: { name: 'Nihon-ji Daibutsu', tagline: 'A monumental Buddha on Mount Nokogiri', intro: 'The great stone Buddha sits within the same Nihon-ji grounds as Jigoku Nozoki, but offers a quieter experience below the summit. The large hillside precinct has substantial changes in elevation.', history: 'Nihon-ji traces its founding tradition to the monk Gyoki. The image represents Yakushi Nyorai, the Medicine Buddha, set against the mountain’s exposed stone.', highlights: ['Notice the scale of the carved Buddha against the rock', 'Take in the wooded approach and quieter temple atmosphere', 'Allow for the elevation difference from the summit lookout'], route: ['Check the Daibutsu-side entrance and visiting hours', 'Visit the statue and observe its stone setting', 'Continue uphill only if time and energy allow'], photo: 'Frame the full statue with surrounding trees to communicate its scale.', faq: [{ q: 'Is it right beside Jigoku Nozoki?', a: 'Both are inside Nihon-ji, but steep paths and stairs separate them. Allow ample walking time.' }, { q: 'Is there a separate ticket?', a: 'Check Nihon-ji’s official admission rules for the temple grounds.' }] },
      zh: { name: '日本寺大佛', tagline: '鋸山山腰的巨型石佛', intro: '日本寺大佛與地獄窺視同在日本寺境內，但位於較低的山腰，適合安排較安靜的參拜與石雕觀察。境內廣闊且有明顯高低差。', history: '日本寺相傳由行基開創，寺內大佛為藥師琉璃光如來。石佛與鋸山岩壁相映，也呈現寺院的悠久歷史。', highlights: ['從石像與岩壁對比感受雕刻尺度', '觀察參道樹林與寺院空間', '預留山頂到大佛區的上下坡時間'], route: ['先確認大佛口入口與開放資訊', '參拜大佛並觀察周圍石壁', '有足夠體力與時間再往山頂方向移動'], photo: '從正面拍攝完整大佛，保留周邊樹木作為比例。', faq: [{ q: '距離地獄窺視很近嗎？', a: '同在日本寺境內，但有階梯及高低差，需預留往返步行時間。' }, { q: '需要另外買票嗎？', a: '請依日本寺官方的境內參拜與入場規則安排。' }] },
    },
  },
  {
    slug: 'hyakushaku-kannon', image: '/images/hyakushaku-kannon.webp', map: maps('百尺観音 日本寺'), official: templeArea,
    location: '千葉県安房郡鋸南町元名184-4・日本寺山頂エリア', operator: '日本寺',
    copy: {
      ja: { name: '百尺観音', tagline: '石切場の壁に刻まれた観音像', intro: '百尺観音は日本寺の山頂エリアにある巨大な磨崖仏です。地獄のぞきへ向かう途中の見どころとして、切り立った石壁に囲まれた空間そのものを楽しめます。', history: '鋸山には房州石の採石の歴史があり、百尺観音は岩壁を生かした石仏として知られます。自然の崖と人の手による石の加工を見比べられます。', highlights: ['垂直な岩壁と観音像の輪郭', '周囲の石切場を思わせる地形', '参拝する人の動線を妨げない観察位置'], route: ['日本寺西口または北口の案内を確認', '百尺観音の前で岩壁と像を観察', '階段を進み地獄のぞきへ向かう'], photo: '岩壁の高さが伝わるように、像と周囲の岩を一緒に構図に入れましょう。', faq: [{ q: '地獄のぞきと一緒に回れますか？', a: '山頂エリアの代表的な見どころで、徒歩で組み合わせやすい場所です。' }, { q: '歩きやすい道ですか？', a: '階段が続き、雨天後は滑りやすい場所もあります。歩きやすい靴をおすすめします。' }] },
      en: { name: 'Hyakushaku Kannon', tagline: 'A monumental relief carved into a rock face', intro: 'Hyakushaku Kannon is a monumental cliff-carved figure in the summit section of Nihon-ji. It is a natural stop along a visit to Jigoku Nozoki.', history: 'Mount Nokogiri has a long history of quarrying Boshu stone. Here, the carved image and tall rock walls make that human-shaped landscape particularly vivid.', highlights: ['Compare the figure’s outline with the vertical cliff', 'Look for traces of the mountain’s worked stone surfaces', 'Keep the worship area clear for visitors'], route: ['Confirm the west or north entrance to Nihon-ji', 'Pause at the Kannon and study the cliff face', 'Continue by the stairs to Jigoku Nozoki'], photo: 'Include the surrounding wall to show the height of the sculpture.', faq: [{ q: 'Can I combine it with Jigoku Nozoki?', a: 'Yes. Both are highlights of the summit area, connected by walking paths.' }, { q: 'Is the path easy?', a: 'Expect stairs and potentially slippery stone after rain. Wear grippy footwear.' }] },
      zh: { name: '百尺觀音', tagline: '刻於高聳石壁的觀音像', intro: '百尺觀音位於日本寺山頂區，是前往地獄窺視途中值得停留的巨大磨崖佛。周圍高聳的岩壁也值得細看。', history: '鋸山曾長期開採房州石。百尺觀音結合石壁雕刻與人工切削地景，能從中觀察採石與宗教文化的交會。', highlights: ['比較觀音輪廓與垂直岩壁的尺度', '觀察岩壁上的人工加工痕跡', '參觀時保留禮佛者的通行空間'], route: ['確認日本寺西口或北口的進入方式', '在觀音前觀察石雕與岩壁', '沿階梯繼續走向地獄窺視'], photo: '將完整石像與兩側岩壁一同入鏡，更能表現高度。', faq: [{ q: '可以和地獄窺視一起參觀嗎？', a: '可以，兩者同屬山頂區的代表看點，適合安排步行串聯。' }, { q: '步道容易走嗎？', a: '沿途有階梯，雨後石面可能濕滑，建議穿防滑鞋。' }] },
    },
  },
  {
    slug: 'nokogiriyama-ropeway', image: '/images/nokogiriyama-ropeway.webp', map: 'https://www.google.com/maps/search/?api=1&query=%E9%8B%B8%E5%B1%B1%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%83%BC%E5%B1%B1%E9%BA%93%E9%A7%85%20%E5%8D%83%E8%91%89%E7%9C%8C%E5%AF%8C%E6%B4%A5%E5%B8%82%E9%87%91%E8%B0%B74052-1', official: ropeway,
    location: '〒299-1861 千葉県富津市金谷4052-1・鋸山ロープウェー山麓駅', operator: '鋸山ロープウェー株式会社',
    copy: {
      ja: { name: '鋸山ロープウェー', tagline: '東京湾を眺めながら山頂へ', intro: '浜金谷駅から徒歩でアクセスできる鋸山ロープウェー。山麓駅と山頂駅を結び、山上の展望や日本寺散策への入口になります。', history: '鋸山の険しい地形を空中から見る交通手段です。山頂駅の展望エリアと日本寺の地獄のぞきは別の施設で、拝観条件も異なります。', highlights: ['車窓から見える東京湾と房総の山並み', '山頂駅展望台からの眺め', '運休や最終便の案内を先に確認'], route: ['JR浜金谷駅から山麓駅へ徒歩で向かう', '運行状況と往復・片道券を確認', '山頂駅で展望し、日本寺西口方面へ歩く'], photo: '晴天なら山頂側から湾と車両を同じ画角に入れると路線が伝わります。', faq: [{ q: '地獄のぞきまで直行しますか？', a: 'いいえ。山頂駅から日本寺の入口を経て、さらに徒歩で向かいます。' }, { q: '強風でも動きますか？', a: '運休する場合があります。公式の当日運行案内をご確認ください。' }] },
      en: { name: 'Nokogiriyama Ropeway', tagline: 'A scenic ride above Tokyo Bay', intro: 'A short walk from Hamakanaya Station, the ropeway connects the foot and summit of Mount Nokogiri and is a practical starting point for a visit to Nihon-ji.', history: 'The aerial route reveals the steep topography of the mountain. The summit station viewpoint and the Jigoku Nozoki lookout inside Nihon-ji are separate attractions with different admission arrangements.', highlights: ['Tokyo Bay and the Boso hills from the cabin', 'Panoramas from the summit station', 'Check last departures and service suspensions'], route: ['Walk from JR Hamakanaya Station to the base', 'Check operating status and ticket options', 'Enjoy the summit viewpoint, then walk toward Nihon-ji west gate'], photo: 'On a clear day, include the cabin and bay together to show the setting.', faq: [{ q: 'Does it stop at Jigoku Nozoki?', a: 'No. From the summit station, enter Nihon-ji and continue on foot.' }, { q: 'Does it run in strong wind?', a: 'Service can be suspended. Check the operator’s same-day notices.' }] },
      zh: { name: '鋸山纜車', tagline: '從空中欣賞東京灣與鋸山', intro: '鋸山纜車山麓站可從 JR 濱金谷站步行抵達，纜車連接山麓與山頂，是前往日本寺及觀景區的常見交通方式。', history: '纜車讓旅客從空中理解鋸山陡峭地形。山頂站的展望區與日本寺境內的地獄窺視分屬不同設施，參觀條件亦不同。', highlights: ['車廂視角的東京灣與房總山景', '山頂站展望台', '事先確認末班車與停駛公告'], route: ['從 JR 濱金谷站步行至山麓站', '確認運行狀況與車票種類', '山頂站賞景後步行前往日本寺西口'], photo: '晴天可將纜車與東京灣拍在同一構圖中。', faq: [{ q: '纜車會直接抵達地獄窺視嗎？', a: '不會。抵達山頂站後仍須步行進入日本寺境內。' }, { q: '強風時正常運行嗎？', a: '可能停駛，請查看營運單位當日公告。' }] },
    },
  },
  {
    slug: 'nokogiriyama-quarry', image: '/images/nokogiriyama-quarry.webp', map: maps('鋸山 石切場跡 岩舞台'), official: 'https://nokogiriyama.jp/information/trailway/',
    location: '千葉県富津市金谷・車力道から石切場跡（岩舞台）周辺', operator: '登山道・採石遺構（区間ごとに管理主体が異なる）',
    copy: {
      ja: { name: '鋸山の石切場跡', tagline: '房州石が残した産業景観', intro: '鋸山北側の登山道周辺には、房州石の採石によって形づくられた切り立つ岩壁や石切場跡が点在します。地獄のぞきとは異なる産業史の視点で山を歩けます。', history: '房州石は房総の建築や土木に使われてきた石材です。切り出された壁面や運搬経路をたどると、山の姿が人の営みによって変わったことが分かります。', highlights: ['直線的な切削面と自然岩の違い', '石材を運んだ道の勾配と地形', '道標・通行規制を守って見学する'], route: ['浜金谷側から当日の通行可能な登山口を確認', '指定された登山道を進み石切場跡を観察', '体力と時刻に応じて折り返すか山頂へ進む'], photo: '岩壁の規則的な切削面と植生を対比して撮影。立入禁止区域には入らないでください。', faq: [{ q: '日本寺の中ですか？', a: '採石遺構は主に鋸山の登山道周辺に点在し、境内の見学とは経路が異なります。' }, { q: '初心者でも歩けますか？', a: '階段や急坂があり、区間によって難易度が異なります。最新の通行情報を確認してください。' }] },
      en: { name: 'Mount Nokogiri Quarry Remains', tagline: 'A landscape shaped by Boshu stone', intro: 'The walking trails on the Kanaya side of Mount Nokogiri pass historic quarry faces and steep walls left by stone extraction. This offers a different lens on the mountain from the Jigoku Nozoki viewpoint.', history: 'Boshu stone was used in building and civil works around the region. Cut faces and former transport routes show how quarrying reshaped the mountain.', highlights: ['Compare straight-cut faces with natural rock', 'Notice the gradients of former stone-carrying routes', 'Follow trail signs and closure notices'], route: ['Check which trailheads on the Hamakanaya side are open', 'Walk marked paths past quarry traces', 'Turn back or continue toward the summit according to conditions'], photo: 'Contrast the geometric rock faces with returning vegetation, without entering restricted areas.', faq: [{ q: 'Is this inside Nihon-ji?', a: 'Quarry remains are spread across mountain trails, with access routes different from the temple grounds.' }, { q: 'Is it beginner-friendly?', a: 'Some routes include steep slopes and steps. Check current trail conditions before setting out.' }] },
      zh: { name: '鋸山採石場遺跡', tagline: '房州石塑造的產業地景', intro: '鋸山金谷側登山路線周圍保留多處採石切面與岩壁，能從產業史角度理解這座山，與地獄窺視的觀景體驗不同。', history: '房州石曾用於房總地區建築與土木工程。觀察岩壁切面及舊有搬運路徑，可以看出採石活動如何改變山體。', highlights: ['比較筆直人工切面與天然岩層', '注意運石路線的坡度與地形', '遵守登山標示及封閉區域公告'], route: ['確認濱金谷側當日可通行的登山入口', '沿指定步道觀察採石遺構', '依體力與時間原路返回或前往山頂'], photo: '將規則岩壁與重新生長的植物一起入鏡，不要進入禁止區域。', faq: [{ q: '採石場遺跡在日本寺內嗎？', a: '遺跡主要分布在鋸山登山道附近，與寺院境內的參觀路線不同。' }, { q: '適合登山新手嗎？', a: '部分路段有陡坡與階梯，請先確認步道開放狀況。' }] },
    },
  },
];

export function getNearby(slug: string): NearbyPlace | undefined { return nearbyPlaces.find((place) => place.slug === slug); }
