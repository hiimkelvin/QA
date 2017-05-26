import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Array<any>

  constructor(
    private _questionService: QuestionService,
  ) { }

  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions(){
  	this._questionService.getQuestions()
  		.then( question => {
  			// console.log(this.questions);
  			this.questions = question})
  		.catch( response => console.log(response) )
  }


}
