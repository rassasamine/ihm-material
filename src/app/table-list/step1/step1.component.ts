import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { PdfMakeWrapper, Txt } from "pdfmake-wrapper";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"]
})
export class Step1Component implements OnInit {
  @Input() criteres;
  @Output() selected: EventEmitter<any>;
  selectedCriterias = [];
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.selected = new EventEmitter();
  }

  initForm() {
    this.addForm = this.fb.group({
      name: [null, [Validators.required]],
      definition: [null, [Validators.required]],
      question: [null, [Validators.required]]
    });
  }

  generatePDF(details = false) {
    const pdf: PdfMakeWrapper = new PdfMakeWrapper();
    pdf.info({
      title: "Liste des criteres",
      author: "Omar Challouf",
      subject:
        "Interface de consultation des critères et heuristiques d'évalation"
    });
    pdf.pageMargins([40, 60, 40, 60]);
    this.selectedCriterias.map((el, index) => {
      pdf.add(`${index}) `);
      pdf.add(new Txt(el.value).bold().end);
      pdf.add(pdf.ln(1));
      if (details) {
        pdf.add(`Définition: ${el.definition}`);
        pdf.add(pdf.ln(1));
        pdf.add(`Question relative: ${el.question}`);
        pdf.add(pdf.ln(3));
      }
    });
    pdf.create().download("Liste des criteres");
  }

  checkStatus(critereId) {
    const crt = this.criteres.filter(el => el.id === critereId);
    let exist = false;
    this.selectedCriterias.map(el => {
      if (el.id === crt[0].id) {
        exist = true;
      }
    });
    if (exist) {
      this.selectedCriterias = this.selectedCriterias.filter(
        el => el.id !== crt[0].id
      );
    } else {
      this.selectedCriterias.push(crt[0]);
    }
  }

  addCriteria() {
    const newCriteria = {
      id: this.criteres.length,
      value: this.addForm.get("name").value,
      score: "0",
      definition: this.addForm.get("definition").value,
      question: this.addForm.get("question").value
    };
    this.criteres.push(newCriteria);
  }

  resetForm() {
    this.addForm.reset();
  }

  onSubmit() {
    this.selected.emit(this.selectedCriterias);
  }

  ngOnInit() {
    this.initForm();
  }
}
