import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";
import { PlaythroughData } from "../interfaces";
import { EncodeFragmentPipe } from "../encode-fragment.pipe";

@Component({
  selector: 'app-collapsable-list',
  standalone: true,
  imports: [CommonModule, NgbCollapse, EncodeFragmentPipe],
  templateUrl: './collapsable-list.component.html',
  styleUrl: './collapsable-list.component.scss',
})
export class CollapsableListComponent {
  @Input() data: PlaythroughData = {} as PlaythroughData;
  @Input() options = {
    isCollapsed: false,
  };
  @Input() journey = 0;
}
