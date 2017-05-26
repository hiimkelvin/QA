import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';
import { QuestionAnswerComponent } from './question/question-answer/question-answer.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'question', component: QuestionComponent, children: [
    	{path: '', component: QuestionListComponent},
    	{path: 'new', component: QuestionNewComponent},
        { path: 'show/:id', component: QuestionShowComponent },
        { path: 'answer/:id', component: QuestionAnswerComponent },
    ]},
];

export const routing = RouterModule.forRoot(APP_ROUTES);