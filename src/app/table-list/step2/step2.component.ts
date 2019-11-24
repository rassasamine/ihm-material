import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.scss"]
})
export class Step2Component implements OnInit {
  @Input() selected;
  @Output() selectedWithScore: EventEmitter<any>;

  scores = [0, 1, 2, 3, 4, 5];

  constructor() {
    this.selectedWithScore = new EventEmitter();
  }

  ngOnInit() {}

  updateScore(score, critereId) {
    this.selected.map(el => {
      if (el.id === critereId) {
        el.score = (score / 5) * 100;
      }
    });
  }

  onSubmit() {
    this.selectedWithScore.emit(this.selected);
  }
}
