import { Component, OnInit } from '@angular/core';
import { question } from '@_shared/data/question'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  question=question;
  constructor() { }

  ngOnInit() {
  }

}
