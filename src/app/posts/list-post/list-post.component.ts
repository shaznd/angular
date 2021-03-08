import { Component, Input, OnDestroy, OnInit} from  "@angular/core";
import { Post }  from '../post.model';
import { PostsService } from "../posts.service";
import {Subscription} from 'rxjs';


@Component({
selector: 'app-post-list',
templateUrl: './list-post.component.html'

})

export class ListPostComponent implements OnInit, OnDestroy{
/**
  posts =[
    {title: 'first title', content: 'first content'},
    {title: 'second title', content: 'scond content'},
    {title: 'thiird title', content: ' third content'},
    {title: 'forth title', content: 'forth content'}
   ]
*/
@Input() posts: Post []= [];
private postsSub : Subscription;

postsService : PostsService
constructor(postsService: PostsService ){

}
  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
  ngOnInit(){
    this.posts = this. postsService.getPosts();
  this.postsSub=this.postsService.getPostUpdateListener().subscribe(
    (posts: Post[])=>{ this.posts = posts}
  ); }
}
