import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  providers: [PostService],
  imports: [SharedModule]
})
export class PostsModule { }
