import { QuestionService } from './question/question.service';
import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';
import { QuestionAnswerComponent } from './question/question-answer/question-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionComponent,
    QuestionNewComponent,
    QuestionListComponent,
    QuestionShowComponent,
    QuestionAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
