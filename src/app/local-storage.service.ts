import { Injectable } from '@angular/core';
import { UserSettings } from "./interfaces";

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly SETTINGS_KEY = 'userSettings';

  constructor() { }

  public get userSettings(): UserSettings {
    const rawData = localStorage.getItem(this.SETTINGS_KEY);

    if (rawData === null) {
      // throw new Error('Can\'t read user settings');
      return ({
        current: 'Default Profile',
        profiles: {
          'Default Profile': {
            checklistData: {},
            collapsed: {},
            current_tab: 'playthrough',
            hide_completed: false,
            journey: 1,
            hidden_categories: {},
          },
        },
      });
    }

    return JSON.parse(rawData);
  }

  public set userSettings(value: UserSettings) {
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(value));
  }

  public get user(): User {
    // @ts-expect-error temporary
    return JSON.parse(localStorage.getItem('user'));
  }

  public set user(value: User) {
    localStorage.setItem('user', JSON.stringify(value));
  }

  public updateHideCompleted(state: boolean) {
    const data = {
      ...this.userSettings,
      profiles: {
        ...this.userSettings.profiles,
      },
    };
    data.profiles[data.current].hide_completed = state;

    this.userSettings = data;
  }

  public updateCurrentPage(page: string) {
    const data = {
      ...this.userSettings,
      profiles: {
        ...this.userSettings.profiles,
      },
    };
    data.profiles[data.current].current_tab = page;

    this.userSettings = data;
  }
}

export class User {
  public name: string = '';
  public surname: string = '';
}
