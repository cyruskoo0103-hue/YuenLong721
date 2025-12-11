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