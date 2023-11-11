import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from "../local-storage.service";
import { HideCompletedButtonComponent } from "../hide-completed-button/hide-completed-button.component";
import {
  NgbCollapse,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from "@ng-bootstrap/ng-bootstrap";
import { CollapsableListComponent } from "../collapsable-list/collapsable-list.component";
import { DataService } from "../data.service";
import { EncodeFragmentPipe } from "../encode-fragment.pipe";

@Component({
  selector: 'app-playthrough-page',
  standalone: true,
  imports: [
    CommonModule,
    HideCompletedButtonComponent,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbCollapse,
    CollapsableListComponent,
    EncodeFragmentPipe,
  ],
  templateUrl: './playthrough-page.component.html',
  styleUrl: './playthrough-page.component.scss',
})
export class PlaythroughPageComponent implements OnInit {
  get data() {
    return DataService.data;
  }

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    // FIXME themes
    const userData = this.localStorage.userSettings;
  }
}
