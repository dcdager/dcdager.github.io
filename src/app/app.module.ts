import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogcompComponent } from './components/blogcomp/blogcomp.component';
import { FormBlogComponent } from './components/form-blog/form-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogcompComponent,
    FormBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
