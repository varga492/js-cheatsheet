let thisIsANumber = 5; /* =érték definiálás, feltételeknél == vagy === használunk. == értékek egyenlőek, === érték mellett a típus is egyenlő */
let thisIsAString = `Hello`;
let thisIsABoolean = true;
let thisIsNull = null;
let thisIsUndefined; /* ha kiírjuk hogy undefined akkor is ugyanez lesz*/
/*console.log(0/0);  //van egy hatodik primitív is a NaN(not a number) */

/*console.log(typeof thisIsANumber);
console.log(typeof thisIsAString);
console.log(typeof thisIsABoolean);
console.log(typeof thisIsANull);
console.log(typeof NaN);*/

/*functions*/

thisIsAFunction();
/*thisIsAlsoAFunction /* ha egy függvényt változóként hozunk létre akkor inicializálás előtt nem ehet lefuttatni, mert egy változót csak a definiálása után működik*/


function thisIsAFunction (/*ez a paraméterlista */){
    /*ez a rész a függvény törzse*/
    console.log(`thisIsAFunction called let's go ${thisIsABoolean}`)  /*template literal:fontos kifejezés rákeresni! */
}

const thisIsAlsoAFunction = function (){
    console.log(`it works`)
} /* ha változóként adjuk meg a függvényt nem feltétlen kell már pluszban elnevezni */

const ThisIsAFunctionToo = () => {/* ezt hívjuk arrowfunctionnek*/ /* */
    console.log(`this is working too`)
}

const duplicate = x => 2*x; /* az arrowfunction segít rövidíteni a kódot pl. ha egy paraméteres a függvény akkor nem kell () amikor definiáljuk */

console.log(duplicate(128))

(function () {
    console.log();
})()/* ezzel a módszerrel sehol máshol nem érhető el a függvény (plusz a függvényünk anonim lett) és azonnal meg is hívjuk */


