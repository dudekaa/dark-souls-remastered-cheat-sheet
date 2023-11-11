import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HideCompletedButtonComponent } from "./hide-completed-button/hide-completed-button.component";
import { LocalStorageService } from "./local-storage.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgbNavModule, HideCompletedButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dark\u00a0Souls\u00a0Remastered Cheat\u00a0Sheet';
  links = [
    { title: 'Playthrough', path: '/playthrough' },
    { title: 'Achievements', path: '/achievements' },
  ];
  navbarCollapsed = true;
  hideCompleted: boolean = false;

  constructor(public route: ActivatedRoute, private localStorage: LocalStorageService) {}

  ngOnInit() {
    const userData = this.localStorage.userSettings;

    this.hideCompleted = userData.profiles[userData.current].hide_completed;
  }

  public buttonHideCompletedClick(event: boolean) {
    if (event) {
      // hide completed
      console.log('hide completed tasks');
    } else {
      // reset filter
      console.log('show all tasks');
    }
  }
}
