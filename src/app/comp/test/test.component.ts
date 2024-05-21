import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { postObject } from '../../interfaces/interfaces';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  testoFetchato: postObject[] | undefined = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts(); /* .subscribe((data) => {
      this.testoFetchato = data.posts;
    }); */
    this.testoFetchato = this.dataService.object?.posts;
  }
}
