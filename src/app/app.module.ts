import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {SomeComponent} from './some/some.component';
import {DateComponent} from './date/date.component';
import {FormsModule} from '@angular/forms';
import {GameComponent} from './game/game.component';
import {NewServiceService} from './new-service.service';
import { FieldComponent } from './field/field.component';
const appRoutes: Routes = [
  {path: '', component: GameComponent},
  {path: 'date', component: DateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent,
    DateComponent,
    GameComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
