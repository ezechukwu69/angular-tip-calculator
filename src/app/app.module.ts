import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppSummaryComponent } from './app-summary/app-summary.component';
import { AppComponent } from './app.component';
import { RightAlignTextComponent } from './components/right-align-text/right-align-text.component';
import { SummaryTitleComponent } from './components/summary-title/summary-title.component';
import { InputsComponent } from './inputs/inputs.component';
import { CalculatorService } from './services/calculator.service';


@NgModule({
  declarations: [
    AppComponent,
    AppSummaryComponent,
    InputsComponent,
    SummaryTitleComponent,
    RightAlignTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
