import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  public blogDetailLinkVariable = '/posts/:id';

  constructor(private postService: PostService, public auth: AuthService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this.posts);
  }

}
