import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    // eslint-disable-next-line no-control-regex
    const appTitle = 'Dark\u00a0Souls\u00a0Remastered Cheat\u00a0Sheet'.replace(/[^\x00-\xFF]/g, '');
    if (title !== undefined) {
      this.title.setTitle(`${title} - ${appTitle}`);
    }
  }
}
