import { Observable } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { PostService } from '../post.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { EditorInstance, EditorOption } from 'angular-markdown-editor';
import { MarkdownService } from 'ngx-markdown';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  //atributos markdown editor
  bsEditorInstance: EditorInstance;
  markdownText: string;
  showEditor = true;
  templateForm: FormGroup;
  editorOptions: EditorOption;

  //atributos firebase

  titulo: string;
  imagem: string = null;
  // conteudo: string;

  // tslint:disable-next-line:no-inferrable-types
  buttonText: string = 'Criar Post';

  private uploadPercent: Observable<number>;
  private dowloadURL: Observable<string>;

  constructor(
    private auth: AuthService,
    private postService: PostService,
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private markdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      onFullscreenExit: (e) => this.hidePreview(e),
      onShow: (e) => this.bsEditorInstance = e,
      parser: (val) => this.parse(val)
    };
    // put the text completely on the left to avoid extra white spaces
    this.markdownText =
      `### Markdown example
  ---
  This is an **example** where we bind a variable to the \`markdown\` component that is also bind to the editor.
  #### example.component.ts
  \`\`\`javascript
  function hello() {
    alert('Hello World');
  }
  \`\`\`
  #### example.component.html
  \`\`\`html
  <textarea [(ngModel)]="markdown"></textarea>
  <markdown [data]="markdown"></markdown>
  \`\`\``;

    this.buildForm(this.markdownText);
    this.onFormChanges();

  }

  createPost() {
    console.log(this.titulo);
    const data = {
      autor: this.auth.authState.displayName || this.auth.authState.email,
      autorId: this.auth.currentUserId,
      titulo: this.titulo,
      imagem: this.imagem,
      conteudo: this.markdownText,
      publicacao: new Date()
    };

    console.log(data);

    this.postService.create(data);

    this.titulo = '';
    this.markdownText = '';
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

  buildForm(markdownText) {
    this.templateForm = this.fb.group({
      titulo: ['', Validators.required],
      body: [markdownText],
      isPreview: [true]
    });
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  hidePreview(e) {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }


  showFullScreen(isFullScreen: boolean) {
    if (this.bsEditorInstance && this.bsEditorInstance.setFullscreen) {
      this.bsEditorInstance.showPreview();
      this.bsEditorInstance.setFullscreen(isFullScreen);
    }
  }


  parse(inputValue: string) {
    const markedOutput = this.markdownService.compile(inputValue.trim());
    this.highlight();

    return markedOutput;
  }


  onFormChanges(): void {
    this.templateForm.valueChanges.subscribe(formData => {
      if (formData) {
        this.markdownText = formData.body;
        this.titulo = formData.titulo;

      }
    });
  }


}
