import { Component, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';

@Component({
  selector: 'app-blogcomp',
  templateUrl: './blogcomp.component.html',
  styleUrls: ['./blogcomp.component.css']
})
export class BlogcompComponent {

  @Input() arrArticles : Article[] = [];

  constructor() {
   
  }

 

}
