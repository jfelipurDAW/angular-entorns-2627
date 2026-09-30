// PART A: Interfície
export class Joc {
    private static idCounter = 0;

    id: number;
    nom: string;
    descripcio ?: string;
    preu: number;
    hores_jugades: number;
    disponible: boolean;

    constructor(nom: string, preu: number, descripcio ?: string) {
        this.id = Joc.nextValue();
        this.nom = nom;
        this.preu = preu;
        this.hores_jugades = 0;
        this.disponible = true;

        if (descripcio) {
            this.descripcio = descripcio;
        }
    }

    // Mètodes normals
    static nextValue(): number {
        return Joc.idCounter++;
    }

    getInfo(): string {
        return `ID: ${this.id} - Nom: ${this.nom} - Preu: ${this.preu} - Hores jugades: ${this.hores_jugades} - Disponible: ${this.disponible}\n`;
    }

    // GETTERS AND SETTERS
    getId(): number {
        return this.id;
    }

    getNom(): string {
        return this.nom;
    }

    getPreu(): number {
        return this.preu;
    }
    
    getHoresJugades(): number {
        return this.hores_jugades;
    }

    getDisponible(): boolean {
        return this.disponible;
    }

    setNom(nom: string): void {
        this.nom = nom;
    }

    setPreu(preu: number): void {
        this.preu = preu;
    }

    setHoresJugades(hores: number): void {
        this.hores_jugades = hores;
    }

    setDisponible(disponible: boolean): void {
        this.disponible = disponible;
    }
}