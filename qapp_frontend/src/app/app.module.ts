import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultComponent } from './components/result/result.component';
import { QuizService } from './services/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
