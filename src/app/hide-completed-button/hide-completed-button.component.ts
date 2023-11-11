import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from "../local-storage.service";

@Component({
  selector: 'app-hide-completed-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hide-completed-button.component.html',
  styleUrl: './hide-completed-button.component.scss',
})
export class HideCompletedButtonComponent implements OnInit {
  @Input() completedState: boolean = false;
  iconClass = 'bi-eye-fill';
  buttonClass = 'btn-primary';

  @Output() hideCallback = new EventEmitter<boolean>();

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    if (this.completedState) {
      this.iconClass = 'bi-eye-slash-fill';
      this.buttonClass = 'btn-secondary';
    }
  }

  public buttonClick() {
    this.completedState = !this.completedState;
    this.localStorage.updateHideCompleted(this.completedState);
    if (this.completedState) {
      // hide completed
      this.iconClass = 'bi-eye-slash-fill';
      this.buttonClass = 'btn-secondary';

      this.hideCallback.emit(true);
    } else {
      // reset filter
      this.iconClass = 'bi-eye-fill';
      this.buttonClass = 'btn-primary';

      this.hideCallback.emit(false);
    }
  }
}
