import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question, testQuestions } from 'src/models/question';

@Component({
  selector: 'app-pharmacology',
  templateUrl: './pharmacology.component.html',
  styleUrls: ['./pharmacology.component.scss']
})
export class PharmacologyComponent implements OnInit{
  protected questions: any | null = null;
  // protected questions = testQuestions;

  constructor(private quizService: QuizService) {
  }


  ngOnInit(): void {
    this.quizService.getData('pharmacology')
      .subscribe({
        next: value => {
          value.forEach(x => {
          })
          this.questions = value;
          console.log(value);
        },
        error: err => {
          console.error(err);
        }
    });
  }
}
