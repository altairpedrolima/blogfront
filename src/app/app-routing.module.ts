import { PostNewComponent } from './posts/post-new/post-new.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'posts/:id', component: PostDetailComponent},
  { path: 'new', component: PostNewComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true} // debigging purpose only

    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
