import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(public postService : PostService) { }
  posts:any;
  userNameOfAPost:any
  ngOnInit(): void {
    this.postService.getUserFeed().subscribe((data)=>{
      if(data.success){
        this.posts = data.response
      }else{
        console.log(data)
      }
    })
    console.log(this.userNameOfAPost)
  }

}
