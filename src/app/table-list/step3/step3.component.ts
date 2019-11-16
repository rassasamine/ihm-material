import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-step3",
  templateUrl: "./step3.component.html",
  styleUrls: ["./step3.component.scss"]
})
export class Step3Component implements OnInit {
  @Input() selected;

  constructor() {}

  ngOnInit() {}
}
