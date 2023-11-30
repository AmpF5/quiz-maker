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
  protected isEditMode = false
  protected isQuizCompleted = false;

  private userAnswers: QuizResult = {answers: []};
  private currentIndex = 0;

  constructor(private cd: ChangeDetectorRef) {
   
  }

  ngOnInit(): void {
    this.currentIndex = 0;
    this.currentQuestion = structuredClone(this.questions[0]);
    this.cd.markForCheck;
  }

  get isLastQuestion() {
    return this.currentIndex === this.questions.length - 1;
  }

  get isFirstQuestion() {
    return this.currentIndex === 0;
  }

  protected markAnswerAsChecked(answer: Answer) {
    this.currentQuestion.answers.forEach(x => {
      x.isSelected = false;
    });
    answer.isSelected = true;
    this.cd.markForCheck();
  }

  protected nextQuestionProceed() {
    this.addAnswer()
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex]
    this.cd.markForCheck();
  }

  protected previousQuestionProceed() {
    this.currentIndex--;
    this.currentQuestion = this.questions[this.currentIndex]
    this.userAnswers.answers.pop();
    this.cd.markForCheck();
  }
  
  protected completeQuiz() {
    this.isQuizCompleted = true;
    this.cd.markForCheck();
  }


  private addAnswer() {
    this.userAnswers.answers.push({
      content: this.currentQuestion.content,
      answers: structuredClone(this.currentQuestion.answers)
    });
  }
}
