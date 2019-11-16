import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"]
})
export class Step1Component implements OnInit {
  @Input() criteres;
  @Output() selected: EventEmitter<any>;
  selectedCriterias = [];

  checkStatus(critereId) {
    const crt = this.criteres.filter(el => el.id === critereId);
    this.selectedCriterias.push(crt[0]);
  }

  constructor() {
    this.selected = new EventEmitter();
  }

  onSubmit() {
    this.selected.emit(this.selectedCriterias);
  }

  ngOnInit() {}
}
