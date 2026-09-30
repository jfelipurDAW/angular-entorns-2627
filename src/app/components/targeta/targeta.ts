/* Aquest fitxer conté la lògica: propietats, mètodes, gettes, etc. */
import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-targeta', // PER USAR-LO AL HTML d'altres components, com una etiqueta html personalitzada
  imports: [],
  templateUrl: './targeta.html',
  styleUrl: './targeta.css',
})

export class Targeta {
  nom : String = 'Ordinador';
  preu : number = 1299;
  estoc : number = 5;

  producte : Producte = {
    id: 1,
    nom: 'Ordinador',
    preu: 1299,
    estoc: 5,
    categoria: 'Informàtica',
  };


/* Getter --> és un tipus especial de propietat calculada. En lloc de guardar un valor, el CALCULA cada cop que s'accedeix. 

get nomDelGetter(): TipusRetorn {
  return valorCalculat;
}

Al TEMPLATE s'usa com una PROPIETAT, sense parentesit: {{ nomDelGetter }}
*/

  get preuProducte(): number {
    return this.producte.preu;
  }

  get estocProducte(): number {
    return this.producte.estoc;
  }

  get categoriaProducte(): string {
    return this.producte.categoria;
  }

  get estatDisponibilitat(): string {
    if (this.producte.estoc > 0 && this.producte.estoc < 5) {
      return 'Últimes unitats';
    }
    
    return this.producte.estoc > 0 ? 'Disponible' : 'No disponible';
  }

}
/*
INTERPOLACIÓ DE DADES
Permet connectar les dades del TS amb l'HTML
Permet incrustar expressions TypeScript dins del propi HTML; Angular avalua l'expressió i mostra el resultat com a text.

{{ nomPropietat }} --> mostra el valor d'una propietat de la classe
{{ 2 + 3 }} --> mostra 5
{{ text.toUpperCase() }} --> mostra el text en majúscules
 {{ edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat' }} --> Operador ternari

*/