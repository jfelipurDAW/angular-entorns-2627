// Una interficies defineix l'estructura d'un objecte
// QUALSEVOL OBJECTE de tipus Producte HA de tenir aquests camps

export interface Producte{
    id: number;
    nom: string;
    preu: number;
    estoc: number;
    categoria: string;
    // disponible: boolean;
    // descripció ?: string; //el ? vol dir que és opcional
}

