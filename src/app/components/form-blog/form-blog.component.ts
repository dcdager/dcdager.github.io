import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';

@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css']
})
export class FormBlogComponent {
  title : string = "";
  atext : string = "";
  afecha : string = "";
  aurl : string = "";
  
  @Output() articuloenviado: EventEmitter<Article>;

  constructor() {
    this.articuloenviado = new EventEmitter;
  }

  guardar ():void {
    let article : Article = {
      titulo: this.title,
      texto: this.atext,
      fecha: this.afecha,
      url: this.aurl
    }
    this.articuloenviado.emit(article)
    
    this.title = "";
    this.atext = "";
    this.afecha = "";
    this.aurl = "";

  }

}
