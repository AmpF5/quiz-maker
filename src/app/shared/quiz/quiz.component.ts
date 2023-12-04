import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
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

  constructor(private cd: ChangeDetectorRef, private quizService: QuizService) {
   
  }

  ngOnInit(): void {
    this.currentIndex = 0;
    this.currentQuestion = this.questions[0];
    this.cd.markForCheck;
    
  }

  get isLastQuestion(): boolean {
    return this.currentIndex === this.questions.length - 1;
  }

  get isFirstQuestion(): boolean {
    return this.currentIndex === 0;
  }

  get correctAnswers(): number {
    return this.questions.flatMap(x => x.answers).filter(x => x.isCorrect && x.isSelected).length;
  }
  
  get percentCorrectAnswers(): string {
    return ((this.questions.flatMap(x => x.answers).filter(x => x.isCorrect && x.isSelected).length / this.questions.length)*100).toFixed(0);
  }

  protected markAnswerAsChecked(answer: Answer) {
    this.currentQuestion.answers.forEach(x => {
      x.isSelected = false;
    });
    answer.isSelected = true;
    this.cd.markForCheck();
  }

  protected changeCorrectAnswer(answer: Answer) {
    this.currentQuestion.answers.forEach(x => {
      x.isCorrect = false;
    });
    answer.isCorrect = true;
    this.cd.markForCheck();
  }

  protected previousQuestionProceed() {
    this.currentIndex--;
    this.currentQuestion = this.questions[this.currentIndex]
    this.cd.markForCheck();
  }
  
  protected nextQuestionProceed() {
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex];
    this.cd.markForCheck();
  }

  protected completeQuiz() {
    this.isQuizCompleted = true;
    this.cd.markForCheck();
  }

  protected batchData() {
    this.quizService.addBatchData(this.questions, 'pharmacology');
  }

  protected editMode() {
    this.isEditMode = true;
    this.cd.markForCheck();
  }

  protected cancelEditMode() {
    this.isEditMode = false;
    this.cd.markForCheck();
  }

  protected saveEditedData() {
    const { id, ...questionWithOutId} = this.currentQuestion;
    this.quizService.updateData(questionWithOutId, this.currentQuestion.id!, 'pharmacology')
    this.isEditMode = false;
    this.cd.markForCheck();
  }

}
