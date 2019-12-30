import { Usuario } from 'src/app/models/usuario.model';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[]
  usuario: Usuario
  imgroute: string
  constructor(
    public _postService: PostService
  ) { 
    this.posts = [];
    this.usuario = null;
    this.imgroute = 'http://localhost:3000/img/usuarios/';
  }


  ngOnInit() {
    this._postService.cargarPost().subscribe((resp: any) =>{
      console.log(resp);
      
      this.posts = resp.posts;   
       
    })
  }

}
