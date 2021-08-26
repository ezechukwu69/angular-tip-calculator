import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppSummaryComponent } from './app-summary/app-summary.component';
import { AppComponent } from './app.component';
import { RightAlignTextComponent } from './components/right-align-text/right-align-text.component';
import { SummaryTitleComponent } from './components/summary-title/summary-title.component';
import { InputsComponent } from './inputs/inputs.component';
import { CalculatorService } from './services/calculator.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AppSummaryComponent,
    InputsComponent,
    SummaryTitleComponent,
    RightAlignTextComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
