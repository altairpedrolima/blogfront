
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LayoutModule } from '@angular/cdk/layout';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { PostsModule } from './posts/posts.module';
import { MarkdownModule } from 'ngx-markdown';
import { LayoutComponent } from './layout/layout.component';
import { NavigationModule } from './navigation/navigation.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    LayoutComponent

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CoreModule,
    SharedModule,
    NavigationModule,
    PostsModule,
    AngularFireModule.initializeApp(environment.firebase, 'blog-all'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
