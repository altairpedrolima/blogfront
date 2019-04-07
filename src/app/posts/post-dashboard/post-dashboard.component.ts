import { Observable } from 'rxjs';
import { AuthService } from './../../core/auth.service';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  titulo: string;
  imagem: string = null;
  conteudo: string;

  // tslint:disable-next-line:no-inferrable-types
  buttonText: string = 'Criar Post';

  private uploadPercent: Observable<number>;
  private dowloadURL: Observable<string>;

  constructor(
    private auth: AuthService,
    private postService: PostService,
    private storage: AngularFireStorage
  ) { }

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
    this.titulo = '';
    this.conteudo = '';
    this.buttonText = 'Post criado';
    setTimeout(() => (this.buttonText = 'Criar Post'), 3000);

  }

  uploadImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    const fileRef = this.storage.ref(path);
    if (file.type.split('/')[0] !== 'image') {
      return alert('Somente arquivos de imagens');
    } else {
      const task = this.storage.upload(path, file);
      this.dowloadURL = fileRef.getDownloadURL();
      this.uploadPercent = task.percentageChanges();
      console.log('Imagem carregada.');
      this.dowloadURL.subscribe(url => this.imagem = url);

    }

  }


}
