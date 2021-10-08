import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {MatDialog} from '@angular/material/dialog'
import { PostDeleteDialogComponent } from '../post-delete-dialog/post-delete-dialog.component';
import {FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any
  @Output() refreshFeed = new EventEmitter();
  userNameOfAPost:any
  noOfLikes:Number = 0
  user:any
  constructor(
    private postService:PostService,
    public dialog:MatDialog,
    private flashMessages: FlashMessagesService,
    ) { }

  ngOnInit(): void {
    this.postService.getUserById(this.post.userId).subscribe(user=>{
      this.userNameOfAPost = user.message.username
      this.user = user.message
    })
    this.setLikes()
  }

  openDialog(){
    const postDialogRef = this.dialog.open(PostDeleteDialogComponent);
    postDialogRef.afterClosed().subscribe(result=>{
      if(result==="true"){
        this.postService.deletePost(this.post._id).subscribe(data=>{
          if(!data.success){
            this.flashMessages.show(data.message,{cssClass:"alert-danger",timeout:5000})
          }
          this.refreshFeed.emit();
        })
      }
    })
  }
  setLikes(){
    this.postService.getLikes(this.post._id).subscribe(data=>{
      if(data.success){
        this.noOfLikes = data.response;
      }else{
        console.log(data)
      }
    })
  }
  likeordislike(){
    this.postService.likeordislike(this.post._id).subscribe(data=>{
      if(data.success){
        this.setLikes()
      }else{
        console.log(data)
      }
    })
  }

}
