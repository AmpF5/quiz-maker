import { Component } from '@angular/core';
import { Question, testQuestions } from 'src/models/question';

@Component({
  selector: 'app-pharmacology',
  templateUrl: './pharmacology.component.html',
  styleUrls: ['./pharmacology.component.scss']
})
export class PharmacologyComponent {
  protected testQuestions = testQuestions;
}
