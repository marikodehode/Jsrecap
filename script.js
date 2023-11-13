///oppgave1: Konsoll logg ""Hello World!"::
console.log("Hello World!")


///oppgave1.2:  Definer to variabler som er to forskjellige tall. Definer de slik at det skal være mulig å sette en ny verdi til variablene senere. Konsoll log hva verdiene er slik: "variabel1 = VERDI1" og "variabel2 = VERDI2":: 
let variabel1 = 1;
let variabel2 = 2;
console.log("variabel1 = VERDI" + variabel1)
console.log("variabel2 = VERDI" + variabel2)


///oppgave1.3: Konsoll log dette: "Hello world! The sum of my two variables is:  SUM"::
console.log("Hello world! The sum of my two variables is: ", variabel1 + variabel2)


///oppgave1.4:  Øk verdien på den første variabelen med en. Ikke bruk tall for å få til dette.....hvilke operator kombinasjon kan man bruke for å få til dette? Konsoll log hva verdien er nå::
variabel1 ++;
console.log(variabel1);


///oppgave1.5: Reduser verdien på den andre variabelen med en. Ikke bruk tall for å få til dette.....hvilke operator kombinasjon kan man bruke for å få til dette? Konsoll log hva verdien er nå::
variabel2 --;
console.log(variabel2);


///oppgave1.6: Del verdien på den andre variabelen med seg selv. Ikke bruk tall for å få til dette.....hvilke operator kombinasjon kan man bruke for å få til dette? Konsoll log hva verdien er nå::
let variabel3 = 1;
let variabel4 = variabel1;
variabel4 /= variabel4;
console.log(variabel4);


///oppgave2: Lag en kode som konsoll logger noe tilfeldig (f.eks fra et array eller en random number generator)::
let randomNumber = (Math.random()*5) + 1
let roundedNumber = Math.round (randomNumber)
if(roundedNumber >3) {
    console.log("Nummeret er " + roundedNumber)
}else{
    console.log("åå Nummeret ble" + roundedNumber)
}


///oppgave3: Lag en funksjon som konsoll logger en string::
function textTilLogg(text){
    console.log(text);}
    textTilLogg("Kommer denne stringen i loggen?")


///oppgave3: Lag en arrow syntax funksjon som konsoll logger en string::
const textTilLoggTo = (text) => {
    console.log(text);
};
textTilLoggTo("Kommer denne arrowstringen i loggen?")


///oppgave3.2: Lag en funksjon som konsoll logger noe tilfeldig (du kan bruke koden fra oppgave 2 inne i funksjonen)::
function getRandomNumber(maxNumber) {
    return console.log(Math.round(Math.random() * maxNumber + 1))
}
getRandomNumber(1000)


///oppgave3.3: Lag en funksjon som bruker if/else. Konsoll log resultatet::
let bilettPris;
let age = 16;
if (age >= 16) {
  bilettPris = 100;
} else {
  bilettPris = 90;
}
console.log(`bilettprisen for personen er: ${bilettPris} `)


///oppgave3.4: Lag en funksjon som bruker loops. Konsoll log resultatet::
function beregnSum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum+=i;
    }
    console.log("Summen av tallene fra 1 til 10 er: ", sum);
}
beregnSum();


///oppgave3.5: Lag en funksjon som bruker switch/case. Konsoll log resultatet::
function karakter(eksamen) {
    let begrunnelse;
  
    switch (eksamen) {
      case "A":
        begrunnelse = "A fordi du er superflink!";
        break;
      case "B":
        begrunnelse = "B fordi du er flink!";
        break;
      case "C":
        begrunnelse = "C fordi du er flink men kan bli bedre";
        break;
      default:
        begrunnelse = "D vi må ta en lengre prat";
    }
    console.log(begrunnelse);
  }
  
  karakter("A"); 
  karakter("B");
  karakter("C") 
  karakter("D"); 



///oppgave4:Lag en funksjon som kan reversere ord. Konsoll log resultatet::
function returnerOrd(betingelse) {
    if (betingelse) {
      return "Dette er sant";
    } else {
      return "Dette er usant";
    }
  }
  console.log(returnerOrd(true));
  console.log(returnerOrd(false));



///oppgave5: Lag en funksjon som kan doble verdiene i et array. Konsoll log resultatet::
  function dobleVerdier(arr) {
    const dobletArray = arr.map((verdi) => verdi * 2);
    return dobletArray;
  }
  const tallArray = [1, 2, 3, 4, 5];
  const dobledeTall = dobleVerdier(tallArray);
  console.log(dobledeTall);


///oppgave6:Lag en funksjon som genererer tilfeldige passord. Konsoll log resultatet::

function genererTilfeldigPassord(length) {
    const karakterer = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:";<>,.?/';
    let passord = '';
  
    for (let i = 0; i < length; i++) {
      const tilfeldigIndeks = Math.floor(Math.random() * karakterer.length);
      passord += karakterer.charAt(tilfeldigIndeks);
    }
    return passord;
  }
 
  const tilfeldigPassord = genererTilfeldigPassord(12);
  console.log(tilfeldigPassord);


  //7: Lag en unødvendig komplisert funksjon som gjør noe som hadde trengtes veldig lite kode å få til. Jo mer komplisert jo bedre. Men den skal fungere.... Denne ble jeg veldig usikker på.