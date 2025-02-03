import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  posts: any[] = [];
  constructor(private mainService: MainService) {
    //this.getPosts();
  }
  getPosts() {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.mainService.getContacts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
    this.mainService.getHubSpotContacts().subscribe(data2 => {
      console.log(data2)
      })
    }
}
