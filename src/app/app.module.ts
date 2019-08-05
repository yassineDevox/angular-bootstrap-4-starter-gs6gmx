import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { FillPipe } from './comment/fill.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CommentComponent, FillPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
