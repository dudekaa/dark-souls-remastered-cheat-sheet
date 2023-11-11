import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from "../local-storage.service";
import { HideCompletedButtonComponent } from "../hide-completed-button/hide-completed-button.component";
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-playthrough-page',
  standalone: true,
  imports: [CommonModule, HideCompletedButtonComponent, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
  templateUrl: './playthrough-page.component.html',
  styleUrl: './playthrough-page.component.scss',
})
export class PlaythroughPageComponent implements OnInit {
  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    // this.localStorage.user = {
    //   name: 'aaa',
    //   surname: 'bbb'
    // }
    console.log(this.localStorage.user);

    const userData = this.localStorage.userSettings;
  }
}
