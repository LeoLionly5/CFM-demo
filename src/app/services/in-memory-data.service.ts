import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Addata } from '../datamodel/addata';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Addata = [
      { id: 1, 
        nom : 'ZHOU',
        prenom : 'Leo',
        date_de_naissance : '05/08/1996',
        numero_de_telephone: '+33 6xxxxx',
        type_d_adresse: 'xxx',
        voie: 'xxx',
        rue: 'avenue Dr L',
        numero: '5',
        ville: 'Montrouge',
        cp: '92120',
        pays: 'France',
        commentaire: 'Bonjour!' },
      { id: 2, nom: 'Test2' },
    ];
    return {Addata};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(ads: Addata[]): Number {
  //   return ads.length > 0 ? Math.max(...ads.map(ads => ads.id)) + 1 : 11;
  // }
}