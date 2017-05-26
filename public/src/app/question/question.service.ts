import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  getCurrent(){
    return this._http.get('/api/current')
      .map( (messages:Response) => messages.json())
      .toPromise()
  }

  addQuestion(formData){
    console.log(formData);
    
    return this._http.post('/api/question', formData)
    .map( (questions: Response) => questions.json()).toPromise()
  }

  getQuestions(){
    return this._http.get('/api/question')
    .map( (questions: Response) => questions.json() )
    .toPromise();
  }

  showQuestion(id){
    // console.log(id);
    return this._http.get('/api/question/show/' + id)
    .map( (current_user: Response) => current_user.json())
    .toPromise() 
  }

  createAnswer(answer, id){
    // console.log(answer, id);
    return this._http.post('/api/answer/' + id, answer)
      .map( (response:Response) => response.json())
      .toPromise()
  }



}
