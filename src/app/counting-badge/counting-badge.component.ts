import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counting-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counting-badge.component.html',
  styleUrl: './counting-badge.component.scss',
})
export class CountingBadgeComponent {
  @Input() have = 0;
  @Input() total = 1;
}
