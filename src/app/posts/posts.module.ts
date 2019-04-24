import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';

@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  providers: [PostService],
  imports: [
    SharedModule,
    MarkdownModule.forRoot({
      // loader: HttpClient, // optional, only if you use [src] attribute
       markedOptions: {
         provide: MarkedOptions,
         useValue: {
           gfm: true,
           tables: true,
           breaks: false,
           pedantic: false,
           sanitize: false,
           smartLists: true,
           smartypants: false,
         },
       },
     }),
     ReactiveFormsModule,
     AngularMarkdownEditorModule.forRoot({
       // add any Global Options/Config you might want
       // to avoid passing the same options over and over in each components of your App
       iconlibrary: 'glyph'
     })
  ]
})
export class PostsModule { }
