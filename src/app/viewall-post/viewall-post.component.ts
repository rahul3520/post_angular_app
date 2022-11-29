import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-post',
  templateUrl: './viewall-post.component.html',
  styleUrls: ['./viewall-post.component.css']
})
export class ViewallPostComponent {

  constructor(private api:ApiService)
  {
    api.fetchposts().subscribe(

      (response)=>
      {
        this.posts=response;
      }
    )

  }

  posts:any=[]

}
