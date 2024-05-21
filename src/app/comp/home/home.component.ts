import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  postStatus: boolean | null = null;

  setPostStatus(status: boolean): void {
    if (this.postStatus == status) {
      this.postStatus = null;
      return;
    }
    this.postStatus = status;
  }
}
