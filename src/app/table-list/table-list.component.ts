import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.css"]
})
export class TableListComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  criteres = [
    { id: "1", value: "1", score: "100%" },
    { id: "2", value: "2", score: "80%" },
    { id: "3", value: "3", score: "60%" },
    { id: "4", value: "4", score: "40%" },
    { id: "5", value: "5", score: "20%" },
    { id: "6", value: "6", score: "0%" }
  ];

  selected;

  constructor(private _formBuilder: FormBuilder) {}

  updateSelected(selected) {
    this.selected = selected;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }
}
