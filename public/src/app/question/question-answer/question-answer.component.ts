import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {
  question_id: String;
  question = {};

  constructor(
    private _route: ActivatedRoute,
    private _questionService: QuestionService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.question_id = param.id;
    })
    this.showQuestion(this.question_id);
    // console.log(this.user_id);  
  }

  showQuestion(id){
    // console.log(id);
    this._questionService.showQuestion(id)
    .then( current_question => this.question = current_question)
    .catch((err) => this._router.navigate(['/login']))
  }

  createAnswer(formData, message_id){
    this._questionService.createAnswer(formData.value, message_id)
      .then(() => this._router.navigate(['/question']))
      .catch((err) => this._router.navigate(['/login']))
    console.log(formData.value, message_id);
  }

}
