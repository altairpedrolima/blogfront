import { AuthService } from './../../core/auth.service';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  titulo: string;
  imagem: string = null;
  conteudo: string;

  constructor(private auth: AuthService, private postService: PostService) { }

  ngOnInit() {
  }


  createPost() {
    const data = {
      autor: this.auth.authState.displayName || this.auth.authState.email,
      autorId: this.auth.currentUserId,
      titulo: this.titulo,
      imagem: this.imagem,
      conteudo: this.conteudo,
      publicacao: new Date()
    };
    this.postService.create(data);

  }


}
