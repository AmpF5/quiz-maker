import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Answer, Question} from 'src/models/question';

interface QuizResult {
  answers: Question[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})


export class QuizComponent implements OnInit {
  @Input({required: true}) questions!: Question[];
  @Input({required: true}) title: string = '';


  protected currentQuestion!: Question;
  protected isEditMode = false;
  private userAnswers: QuizResult = {answers: []};

  private answer: Answer | null = null;
  private currentIndex = 0;
  constructor(private cd: ChangeDetectorRef) {
   
  }

  ngOnInit(): void {
    this.currentIndex = 0;
    this.currentQuestion = structuredClone(this.questions[0]);
    this.cd.markForCheck;
  }


  protected nextQuestionProceed() {
    this.addAnswer()
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex]
    this.cd.markForCheck();
    console.log(this.userAnswers);
    
  }

  // protected previousQuestionProceed() {
  //   this.currentIndex--;
  //   this.currentQuestion = this.questions[this.currentIndex]
  //   this.cd.markForCheck();
  // }

  protected markAnswerAsChecked(answer: Answer) {
    this.answer = structuredClone(answer);
  }

  private addAnswer() {
    this.userAnswers.answers.push({
      content: this.currentQuestion.content,
      //TODO add marked answer
      answers: structuredClone(this.currentQuestion.answers)
    });
  }
}
