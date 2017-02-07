import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {

  private dScore:number = 0;

  constructor(private appService:AppService) {
    this.dScore = appService.score;
  }

  ngOnInit() {
  }

}
