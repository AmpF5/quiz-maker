import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Question, testQuestions } from 'src/models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  @Input({required: true}) questions: Question[] = testQuestions;
  @Input({required: true}) title: string = '';


  protected currentQuestion: Question = this.questions[0];
 
  constructor(private cd: ChangeDetectorRef) {
    
  }
}
