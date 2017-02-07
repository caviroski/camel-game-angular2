import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PickerComponent } from './picker/picker.component';
import { ScoreComponent } from './score/score.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { PickerModule } from './picker/picker.module';

const appRoutes: Routes = [
  { path: 'picker', component: PickerComponent },
  { path: 'score', component: ScoreComponent },
  { path: '', redirectTo: '/picker', pathMatch: 'full' },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
