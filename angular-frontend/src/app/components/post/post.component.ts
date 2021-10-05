import { Component, OnInit ,Input} from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any
  userNameOfAPost:any

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getUserById(this.post.userId).subscribe(user=>{
      this.userNameOfAPost = user.message.username

    })
  }

}
