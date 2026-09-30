import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte as ProducteInterface } from './interfaces/producte'; //PER PODER USAR LA INTERFACE DE TIPUS PRODUCTE
import { Producte as ProducteClass } from './producte'; //IMPORTEM LA CLASSE PRODUCTE ASSIGNANT UN ALIAS
import { Joc } from './models/joc';
import { Targeta } from './components/targeta/targeta';
import { Profile } from './components/profile/profile';

// @ts-ignore: Angular's decorator transform may require tslib in the editor.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Targeta, Profile],
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
    estoc: 10,
    categoria: 'Informàtica',
    // disponible: true
  };

  productes: ProducteInterface[] = [
    {
      id: 2,
      nom: 'PC',
      preu: 999,
      estoc: 10,
      categoria: 'Informàtica',
      // disponible: true
    },
    {
      id: 3,
      nom: 'Portàtil',
      preu: 1200,
      estoc: 10,
      categoria: 'Informàtica',
      // disponible: false
    }
  ];


  // p1 = new ProducteClass('Teclat', 89.99);
  // p2 = new ProducteClass('Ratolí', 49.99);

  // constructor() {
  //   // AFEGIU UN MÈTODE A LA CLASSE PRODUCTE descripció QUE RETORNI UN STRING AMB NOM I PREM
  //   console.log(this.p1.toString());

  //   // MÈTODE decompte QUE RETORNI EL PREU AMB UN 10% DE REBAIXA
  //   console.log("Descompte de 10%: " + this.p1.descompte(10) + "€");
  
  //   // CREEU UN NOU PRODUCTE I MOSTREU-LO PER CONSOLA
  //   console.log(this.p2.toString());
  
  //   // CERQUEU LA MANERA DE MOSTRAR EL DESCOMPTE AMB UN POP-UP
  //   alert("Descompte de 10%: " + this.p1.descompte(10) + "€");
  // }
  
  // PART B: Dades mock i funcions
  joc1 = new Joc('Fortnite', 19.99, 'Shooter multijugador en tercera persona');
  joc2 = new Joc('Minecraft', 29.99, 'Sandbox de construcció basada en cubs');
  joc3 = new Joc('GTA IV', 79.99, 'Algun dia sortirà');
  joc4 = new Joc('Adventure', 1, 'Creat per Warren Robinett');
  joc5 = new Joc('Tetris', 29.99, 'Es juga millor a una NES');

  array_jocs: Joc[] = [this.joc1, this.joc2, this.joc3, this.joc4, this.joc5];

  constructor() {
    function getActius(array_jocs: Joc[]) : Joc[] {

      let llista: Joc[] = [];

      array_jocs.forEach(Joc => {
        if (Joc.getDisponible() == true) {
          llista.push(Joc);
        }
      });

      return llista;
    }

    getActius(this.array_jocs).forEach(Joc => {
      
    });
    console.log(getActius(this.array_jocs));

  }

}
