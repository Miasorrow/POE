/** ******************************************************************************************
 *                                            !Typages
 * 
 *  ************************************************************************************************
 * 
 *? Plus besoin de ;
 *! devdocs.io
 */

 /** Type testing
  * @author Manon <manon@gmail.com>
  * @version 1.0.0
  * - string, number, boolean, array and Date type
  * @version 1.0.1
  * - Map, Set
  */

export class Type {
    /**
     * @var {string} lastname of any guy or gal
     * explicite dans les noms d'attributs
     * pas mettre trop de commentaires
     * méthodes avec nom explicite
     * public est pas obligatoire
     */
    public lastname: string = ""

    /**
     * @var { number } age of the cap'tain
     */

    public age : number = 0
    public childrenNumber : Number = 0;

    /**
     * avec is ou has qqchose c'est pour les booleans
     */
    public isMale : boolean = false

    /**
     *! tableau mettre un s a l'attributs
     *? premiere methode java 2eme C
     *? Les types avec une minuscule priminitif string number bool
     *? Les types avec maj type class objet
     */
    public skills : Array<string> = []

    public madSkills : string[] = []

    /**
     *! Date Chiant à définir
     * Moment.js librairie pour les dates
     */

    public birthDate : Date = new Date()

}
