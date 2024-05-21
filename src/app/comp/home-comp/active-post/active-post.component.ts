import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { post, postObject } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  activePost!: postObject[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((data) => {
      this.activePost = data.posts.filter((post: postObject) => post.active);
      console.log(this.activePost);
    });
  }
}
