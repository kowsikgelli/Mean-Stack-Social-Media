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
  desc:any = ''
  pictureData:any;
  peopleYouMayKnow:any;
  friends:any;
  ngOnInit(): void {
    this.fetchUserFeed();
    this.fetchUnFollowingPeople();
    this.fetchCurrentUserFriends();
  }
  postData(event:any){
    this.desc = event.target.value;
  }

  fetchUserFeed(){
    this.postService.getUserFeed().subscribe((data)=>{
      if(data.success){
        this.posts = data.response
      }else{
        console.log(data)
      }
    })
  }

  fetchUnFollowingPeople(){
    this.postService.getUnFollowingPeople().subscribe(data=>{
      if(data.success){
        this.peopleYouMayKnow = data.response;
        console.log(data.response)
      }
    })
  }
  onPictureUpload(event:any){
    if(event.target.files.length>0){
      this.pictureData = event.target.files[0]
    }
  }

  fetchCurrentUserFriends(){
    this.postService.getCurrentUserFriends().subscribe(data=>{
      if(data.success){
        this.friends = data.response
        console.log(data.response)
      }
    })
  }
  submitPost(){
    const formData = new FormData();
    formData.append('desc',this.desc)
    if(this.pictureData){
      formData.append('postImage',this.pictureData)
    }
    this.postService.createPost(formData).subscribe(data=>{
      this.fetchUserFeed();
      console.log(data)
    })
    this.desc = ""
    this.pictureData = null
  }
}
