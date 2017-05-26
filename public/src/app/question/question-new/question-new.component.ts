import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { QuestionService } from './../question.service';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {

  constructor(
    private _questionService: QuestionService, 
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  addQuestion(formData){
    console.log(formData);
    
  	this._questionService.addQuestion(formData.value)
  		.then( () => this.router.navigate(['/question']))
  		.catch( err => alert(err))
  }
}
