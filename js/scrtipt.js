var age;

age = 12;
var userNumber = [];

for(userNumber = 0; userNumber<10;userNumber++){

    console.log(userNumber);
    
}

var i;
var user = [];
for (i=0;i<10;i++){

user[i] = userNumber[i] + 2;

console.log(user);


}


//Objekt - definiujemy obiekt 

var czlowiek = {

wzrost: 168,
kolorOczu: 'niebieskie',
kolorSkory: 'bialy',

umyjDupsko: function(){

    console.log('mysje duspko');

},

jedzSamochodem: function(){

    console.log('jade sobie w pizdu');
}

}

console.log(czlowiek);

var nowyElement = document.createElement("p");

var tresc = document.createTextNode("Tekst nowego elementu");

nowyElement.appendChild(tresc);

  var click =  document.getElementById("test");

  click.addEventListener("click",function () {



  }, false);


  
  





