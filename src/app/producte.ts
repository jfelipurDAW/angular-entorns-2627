export class Producte {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    // Mètodes normals

    toString() : String {
        return `${this.nom}  -  ${this.preu}€  -  ${this.getPreuIVA()}€`;
    }

    descompte(percentatge: number): number {
        return this.preu * (1 - percentatge / 100);
    }

    // GETTERS AND SETTERS
    getNom(): string {
        return this.nom;
    }

    getPreu(): number {
        return this.preu;
    }

    getPreuIVA(): number {
        return this.preu * 1.21; // 21% d'IVA
    }

    setNom(nom: string): void {
        this.nom = nom;
    }

    setPreu(preu: number): void {
        this.preu = preu;
    }

}