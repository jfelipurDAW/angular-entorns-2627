import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte as ProducteInterface } from './interfaces/producte'; //PER PODER USAR LA INTERFACE DE TIPUS PRODUCTE
import { Producte as ProducteClass } from './producte'; //IMPORTEM LA CLASSE PRODUCTE ASSIGNANT UN ALIAS

// @ts-ignore: Angular's decorator transform may require tslib in the editor.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

  //TIPUS BÀSICS
  nom: string = 'Angular';
  nom2: string = 'Larabel';
  versio : number = 20;
  actiu: boolean = true;

  colors : string[] = ['vermell', 'verd', 'blau'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];

  ciutat = 'Lleida'; //string
  codiP = 25605; //number

  //INTERFACES
  producte: ProducteInterface = {
    id: 1,
    nom: 'PC',
    preu: 999,
    disponible: true
  };

  productes: ProducteInterface[] = [
    {
      id: 2,
      nom: 'PC',
      preu: 999,
      disponible: true
    },
    {
      id: 3,
      nom: 'Portàtil',
      preu: 1200,
      disponible: false
    }
  ];


  p1 = new ProducteClass('Teclat', 89.99);
  p2 = new ProducteClass('Ratolí', 49.99);

  constructor() {
    // AFEGIU UN MÈTODE A LA CLASSE PRODUCTE descripció QUE RETORNI UN STRING AMB NOM I PREM
    console.log(this.p1.toString());

    // MÈTODE decompte QUE RETORNI EL PREU AMB UN 10% DE REBAIXA
    console.log("Descompte de 10%: " + this.p1.descompte(10) + "€");
  
    // CREEU UN NOU PRODUCTE I MOSTREU-LO PER CONSOLA
    console.log(this.p2.toString());
  
    // CERQUEU LA MANERA DE MOSTRAR EL DESCOMPTE AMB UN POP-UP
    alert("Descompte de 10%: " + this.p1.descompte(10) + "€");
  }


}
