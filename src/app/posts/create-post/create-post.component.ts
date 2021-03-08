import { Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post }  from '../post.model';
import { PostsService } from '../posts.service';


@Component ({
  selector:'app-create-post',
  templateUrl:'./create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePost{

 userName = 'defaultuser';
 serious= ' end of create post component';


enteredTitle = '';
enteredContent ='';
@Output() postCreated= new EventEmitter<Post> ();

constructor(public postsService : PostsService){
// this constroctor method does the Dependency Injection
}
onAddPost(form :NgForm){
  if (form.invalid){ return;}   // for not accepting the empty post
const post :Post = {
  title: form.value.title,
  content : form.value.content};

this.postCreated.emit(post);

this.onAddButton();

this.postsService.addPost(form.value.title,form.value.content);
form.resetForm();
}
  onAddButton(){
     this.userName= 'Mr. '+' admin ';
     this.serious= this.enteredTitle +' '+ this.enteredContent;
 }

}



