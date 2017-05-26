import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css']
})
export class QuestionShowComponent implements OnInit {
  question_id: String;
  question = {};

  constructor(
    private _route: ActivatedRoute,
    private _questionService: QuestionService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.question_id = param.id;
    })
    this.showQuestion(this.question_id);
    // console.log(this.user_id);  
  }

  showQuestion(id){
    console.log(id);
    this._questionService.showQuestion(id)
    .then( current_question => this.question = current_question)
    .catch( err => console.log(err))
  }

}
