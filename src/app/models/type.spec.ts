import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    expect(new Type()).toBeTruthy();
  })

    //* attributs = valeur
    //* maMaison = new MaisonAPartirDuPlan()
    //* taMaison = new MaisonAPartirDuPlan()
    //* taMaison.crepis = 'bleu'
    //* taMaison.adresse = 'la rue du pet de licorne'
    //* laMaisonDAnneClaire : Hutte = new Hutte()
    //* laMaisonDAnneClaire = new Hutte()
    //! la maison c'est l'objet le plan c'est la classe
    //! valeur des attributs des objets sont uniques 
    //! attributs peuvent être ou sont les mêmes, les valeurs sont différentes

  it (`Should give an empty string for lastname attribut`, ()=> {
    const object= new Type() //!Instancie dans type la classe Type

    expect(object.lastname).toEqual('')

  })

  // Test de date

  it ('Should give a date instance for birthdate', () =>{
    const objet = new Type()
    expect(objet.birthDate).toBeInstanceOf(Date)
  })
})
