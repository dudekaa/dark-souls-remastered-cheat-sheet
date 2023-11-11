export interface UserSettings {
  current: string;
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
