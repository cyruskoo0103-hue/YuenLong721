// 定義數據介面 (Type Definitions)
export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  icon?: 'alert' | 'police' | 'train' | 'attack';
  imageUrl?: string;
  youtubeId?: string;
}

export interface TestimonyData {
  id: string;
  role: string;
  name: string;
  quote: string;
}

export interface VerdictData {
  id: string;
  defendant: string; // 被控人
  charge: string;    // 控罪
  result: string;    // 判刑/狀態
  status: 'guilty' | 'not-guilty' | 'pending';
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string; // Image URL or YouTube ID
  caption: string;
}

// ==========================================
// 數據內容
// ==========================================

// 將所有圖片連結集中於此，方便替換
export const IMAGES = {
  HERO_BG: 'https://picsum.photos/1920/1080?grayscale&blur=2',
  GATHERING: 'https://thecollectivehk.com/wp-content/uploads/2023/10/Screenshot-2023-10-31-at-7.08.13-PM.png', 
  CHAOS: 'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/82830642_169559614394232_1504087853318012928_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FX40-wkcD3cQ7kNvwGcJkEL&_nc_oc=AdlHr5whuErcTXCtzp9dkbHsnt7J_Z80hLp63kx70ZcvI17c-X4A9o0ik-uXNRXPcT0&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=ybjpuU0rNvJcDk1AqIHooQ&oh=00_AfnCF4BuFEWj7_jUGdwKVqa-iuxbwGirLVlc6OfJkDlcEQ&oe=6962409B', 
  POLICE_LIGHTS: 'https://images1.epochhk.com/pictures/371871/721%E8%AA%BF%E9%A0%AD%E8%AD%A6_%E7%B6%B2%E5%9C%96@900x600.jpg', 
  SUBWAY_INTERIOR: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Yuen_Long_Station_White_Tee_people_attack_citizen_in_platform_20190721.png',
  EMPTY_STATION: 'https://picsum.photos/800/600?grayscale',
  SHATTERED: 'https://picsum.photos/800/600?blur=2',
  CCTV: 'https://picsum.photos/800/600?grayscale&blur=1',
  FEAR: 'https://picsum.photos/800/600?grayscale&contrast=1',
  AFTERMATH: 'https://picsum.photos/800/600?sepia=1',
};

const VIDEOS = {
  VIDEO_1: 'aG5DG3YepCE', // 鏗鏘集
  VIDEO_2: 'hhZUgWm8z9A', // 經緯線
  VIDEO_3: '5xmgZ1IFXJs', // 現場見證
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'e1',
    time: '18:00',
    title: '白衣人聚集',
    description: '傍晚時分，數百名身穿白衣的人士開始在元朗鳳筱北街一帶聚集。網上流傳片段顯示他們手持藤條、木棍及國旗，情緒高漲。雖然有區議員及市民多次向警方報案，但警方未有即時採取行動驅散。',
    icon: 'alert',
    imageUrl: IMAGES.GATHERING, 
  },
  {
    id: 'e2',
    time: '22:40',
    title: '首次衝入車站',
    description: '大批白衣人手持武器衝入元朗西鐵站付費區及大堂，無差別襲擊途人及記者。現場尖叫聲此起彼落，地面留有血跡。部分市民試圖用雨傘抵擋但無效。',
    icon: 'attack',
    youtubeId: VIDEOS.VIDEO_2,
  },
  {
    id: 'e3',
    time: '22:52',
    title: '警員到場後離開',
    description: '兩名軍裝警員抵達元朗西鐵站大堂。當時白衣人仍在發動襲擊，但警員未有介入制止，隨即轉身離開現場。警方事後解釋是因為「裝備不足」及需要等待增援。',
    icon: 'police',
    imageUrl: IMAGES.POLICE_LIGHTS,
  },
  {
    id: 'e4',
    time: '23:15',
    title: '月台與車廂襲擊',
    description: '白衣人衝上月台，強行拉開列車車門，湧入車廂襲擊乘客。市民在密閉空間內無處可逃，跪地求饒仍遭毆打。這次襲擊造成多人受傷，包括孕婦及立法會議員。',
    icon: 'attack',
    youtubeId: VIDEOS.VIDEO_1,
  },
  {
    id: 'e5',
    time: '00:00',
    title: '防暴警察姍姍來遲',
    description: '襲擊發生後超過一小時，大批防暴警察終於抵達元朗站。然而，當時大部分施襲的白衣人已經散去，警方並未在現場拘捕任何白衣人。',
    icon: 'police',
    imageUrl: IMAGES.CHAOS,
  }
];

export const testimonies: TestimonyData[] = [
  {
    id: 't1',
    role: '見證者',
    name: '市民 A',
    quote: '當時我在大堂，看到那群白衣人衝過來見人就打。我聽到有人尖叫，看到地上有血，那一刻我真的以為自己會死在這裡。為何報警也沒有人來？我們被遺棄了。'
  },
  {
    id: 't2',
    role: '記者',
    name: '記者 B',
    quote: '我在直播期間被人從後襲擊，攝影機也被打爛。即使我表明了記者身份，他們依然沒有停手。這是我做記者以來感到最無力的一刻，鏡頭記錄了暴力，卻無法阻止它。'
  },
  {
    id: 't3',
    role: '傷者',
    name: '傷者 C',
    quote: '我的背部被藤條打得皮開肉綻。身體的傷口會癒合，但心理的陰影至今揮之不去。每當看到穿白衫的人或類似的新聞，當晚的恐懼就會再次浮現。'
  }
];

export const verdicts: VerdictData[] = [
  {
    id: 'v1',
    defendant: '鄧懷琛',
    charge: '暴動罪、串謀有意圖而傷人罪',
    result: '監禁 7 年',
    status: 'guilty'
  },
  {
    id: 'v2',
    defendant: '吳偉南',
    charge: '暴動罪、串謀有意圖而傷人罪',
    result: '監禁 4 年',
    status: 'guilty'
  },
  {
    id: 'v3',
    defendant: '林觀良',
    charge: '暴動罪',
    result: '監禁 4 年 8 個月',
    status: 'guilty'
  },
  {
    id: 'v4',
    defendant: '林啟明',
    charge: '暴動罪',
    result: '監禁 4 年 8 個月',
    status: 'guilty'
  },
  {
    id: 'v5',
    defendant: '王志榮',
    charge: '暴動罪',
    result: '罪名不成立 (證據不足)',
    status: 'not-guilty'
  }
];

export const mediaGalleryItems: MediaItem[] = [
  {
    id: 'm1',
    type: 'video',
    url: VIDEOS.VIDEO_1,
    caption: '鏗鏘集：721元朗黑夜 (香港電台)'
  },
  {
    id: 'm2',
    type: 'image',
    url: IMAGES.EMPTY_STATION,
    caption: '案發地點：元朗西鐵站月台層'
  },
  {
    id: 'm3',
    type: 'image',
    url: IMAGES.SHATTERED,
    caption: '現場遺留的破碎痕跡'
  },
  {
    id: 'm4',
    type: 'video',
    url: VIDEOS.VIDEO_3,
    caption: '鏗鏘集：7.21 尋找身在現場的人'
  },
  {
    id: 'm5',
    type: 'image',
    url: IMAGES.CCTV,
    caption: '閉路電視紀錄了當晚的真空期'
  },
  {
    id: 'm6',
    type: 'image',
    url: IMAGES.SUBWAY_INTERIOR,
    caption: '列車車廂：市民最後的避難所'
  },
  {
    id: 'm7',
    type: 'image',
    url: IMAGES.FEAR,
    caption: '恐懼與無助'
  },
  {
    id: 'm8',
    type: 'image',
    url: IMAGES.AFTERMATH,
    caption: '襲擊過後的混亂'
  }
];