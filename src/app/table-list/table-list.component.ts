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
    {
      id: "1",
      value: "Incitation",
      score: "0",
      definition:
        "moyens mis en œuvre pour amener les utilisateurs à effectuer des actions spécifiques qu'il s'agisse d'entrée de données ou autre",
      question: "L'interface est-elle facile a utiliser ?"
    },
    {
      id: "2",
      value: "Groupement",
      score: "0",
      definition:
        "organisation visuelle de l'information pour illustrer une relation de classe de type appartenance/ distinction par: la localisation",
      question: "Les elements de l’interface sont regrouper ? "
    },
    {
      id: "3",
      value: "Feed-back",
      score: "0",
      definition:
        "Concerne les reponses de l’ordinateur consecutives aux actions des utilisateurs. L’ordinateur devrait repondre, dans des délais brefs",
      question: "Est-ce que l’interface a un temps de réponse acceptable ? "
    },
    {
      id: "4",
      value: "Lisibilité",
      score: "0",
      definition:
        "Caracteristuqyes lexicales de presentation des informations à l’ecran pouvant entraver ou faciliter la lecture de celles-ci",
      question: "Est t-il lisible ?"
    },
    {
      id: "5",
      value: "Brièveté",
      score: "0",
      definition:
        "Concision: Concerne la charge de travail au niveau Perspective et mnésique à la fois pour les éléments individuels d'entrée ou de sortie action minimal: les séquence d'entrée c'est-à-dire les suites d'actions nécessaires à l'atteinte d'un but à l'accomplissement d'une tâche ",
      question: "Utilise t-il des mots specifiques ? "
    },
    {
      id: "6",
      value: "Densité informations",
      score: "0",
      definition:
        "ce critère concerne la charge de travail du.de vue perspective et mnésique pour des ensembles d'éléments et non pour items.",
      question: "Est – il charger d’information ?"
    },

    {
      id: "7",
      value: "Action explicite",
      score: "0",
      definition:
        "concerne la relation pouvant exister entre le fonctionnement de l'application et les actions des utilisateurs cette relation doit être explicite c'est-à-dire que le système doit exécuter seulement les opérations demandées par l'utilisateur et pas d'autres opérations et ce, au moment où il les demande. ",
      question: "Il exécute seulement les taches données?"
    },
    {
      id: "8",
      value: "Contrôle utilisateur",
      score: "0",
      definition:
        "l'utilisateur doit toujours avoir la main pouvoir contrôler le déroulement des traitements informatiques en cours ces actions devraient être anticipées et des options appropriées devrait être fournie pour chaque cas",
      question: "Est-ce que l’utilisateur a la main sur l’application"
    },
    {
      id: "9",
      value: "Flexibilité",
      score: "0",
      definition:
        "concerne les moyens mis à la disposition des utilisateurs pour personnaliser les interfaces afin de rendre compte de leur stratégie où habitudes de travail et des exigences de la tâche ",
      question: "Est-t-il flexible ? "
    },
    {
      id: "10",
      value: "Prise en compte de l'expérience des utilisateurs",
      score: "0",
      definition:
        "concerne les moyens mis en œuvre pour respecter le niveau d'expérience de l'utilisateur ",
      question: "Il respecte le niveau d’expérience utilisateur ?"
    },
    {
      id: "11",
      value: "Prévention des erreurs",
      score: "0",
      definition:
        "Ce critère concerne les moyens servant à détecter et prévenir les erreurs d'entrée de données ou commande ou les actions aux conséquences néfastes",
      question: "Il prévoie les erreurs ? "
    },
    {
      id: "12",
      value: "Qualité des messages d'erreur",
      score: "0",
      definition:
        "Concerne la pertinence la facilité de lecture et l'exactitude de l'information donnée aux utilisateurs sur la nature des erreurs commises et sur les actions à entreprendre pour les corriger",
      question: "Les messages d’erreurs sont-ils compréhensibles ? "
    },
    {
      id: "13",
      value: "Correction des erreurs",
      score: "0",
      definition:
        "concerne les moyens mis à la disposition des utilisateurs pour leur permettre de corriger les erreurs",
      question: "Peut-il proposer des méthodes pour corriger les erreurs ?"
    },
    {
      id: "14",
      value: "Homogénéité",
      score: "0",
      definition:
        "concerne la façon avec laquelle les choix de conception de l'interface sont conservées pour des contextes identiques et sont différents pour des contextes différents",
      question: "L'interface est-elle homogène avec d’autre interface ?"
    },
    {
      id: "15",
      value: "Signification des codes et dénominations",
      score: "0",
      definition:
        "Ce critère concerne l'adéquation entre l'objet où l'information affichée où entrée, et son référent.",
      question: "Est-il adéquat ?"
    },
    {
      id: "16",
      value: "Compatibilité",
      score: "0",
      definition:
        "concerne l'accord pour voir exister entre les caractéristiques des utilisateurs et des tâches d'une part et l'organisation des sorties des entrées et du dialogue d'une application donner d'autre part la compatibilité concerne également le degré de similitude entre divers environnement ou applications",
      question: "Est-il compatible ?"
    }
  ];

  selected;
  avg;

  constructor(private _formBuilder: FormBuilder) {}

  updateSelected(selected) {
    this.selected = selected;
    this.calculateAvg();
  }

  calculateAvg() {
    let m = 0;
    let i = 0;
    this.selected.map(el => {
      i++;
      m += +el.score;
    });
    this.avg = m / i;
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
