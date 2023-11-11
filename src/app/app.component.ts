import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgbNavModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dark-souls-remastered-cheat-sheet';
  links = [
    { title: 'Playthrough', path: '/playthrough', fragment: 'one' },
    { title: 'Achievements', path: '/achievements', fragment: 'two' }
  ];

constructor(public route: ActivatedRoute) {}
}
