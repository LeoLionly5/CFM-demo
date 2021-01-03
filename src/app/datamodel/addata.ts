export class Addata{
    id: number;
    nom : string;
    prenom : string;
    date_de_naissance : string;
    numero_de_telephone: string;
    type_d_adresse: string;
    voie: string;
    rue: string;
    numero: string;
    ville: string;
    cp: string;
    pays: string;
    commentaire: string;


    constructor(id: number, 
        nom : string,
        prenom : string,
        date_de_naissance : string,
        numero_de_telephone: string,
        type_d_adresse: string,
        voie: string,
        rue: string,
        numero: string,
        ville: string,
        cp: string,
        pays: string,
        commentaire: string){

        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.date_de_naissance = date_de_naissance;
        this.numero_de_telephone = numero_de_telephone;
        this.type_d_adresse = type_d_adresse;
        this.voie = voie;
        this.rue = rue;
        this.numero = numero;
        this.ville = ville;
        this.cp = cp;
        this.pays = pays;
        this.commentaire = commentaire
    }
}