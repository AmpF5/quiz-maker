import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { config } from 'src/environment/environment';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PharmacologyComponent } from './main-menu/pharmacology/pharmacology.component';
import { QuizComponent } from './shared/quiz/quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';


const PRIMEMODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  ButtonModule,
  InputTextareaModule,
  RadioButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TopBarComponent,
    PharmacologyComponent,
    QuizComponent,
    
  ],
  imports: [
    PRIMEMODULES,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(config.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
