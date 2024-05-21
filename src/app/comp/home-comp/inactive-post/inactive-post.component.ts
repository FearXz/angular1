import { Component } from '@angular/core';
import { postObject } from '../../../interfaces/interfaces';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  inactivePost!: postObject[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((data) => {
      this.inactivePost = data.posts.filter((post: postObject) => !post.active);
      console.log(this.inactivePost);
    });
  }
}
