export interface UserSettings {
  current: string; // FIXME can be only one of defined profiles or 'Default Profile' when new
  profiles: { [key: string]: UserProfile };
}

export interface UserProfile {
  checklistData: { [key: string]: boolean };
  collapsed: { [key: string]: boolean };
  current_tab: string;
  hide_completed: boolean;
  journey: number;
  hidden_categories: { [key: string]: boolean };
}

export interface Data {
  playthrough: PlaythroughData[],
}

export interface PlaythroughData {
  title: string,
  url?: string,
  description?: string,
  items: PlaythroughItem[]
}
export interface PlaythroughItem {
  description: string;
  metadata: string[];
}
