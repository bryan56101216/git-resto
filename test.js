/* if(confirm("voulez vous exécuter le code javascrip de cette page?")){
        alert("le code a été bien exécuté!");
        var a=prompt("veuillez entrer un nombre"),b=prompt("veuillez entrer un deuxième nombre"),result;
        result=parseInt(a)+parseInt(b);
        alert(result);
    }
    var a=parseInt(prompt("quel age avez-vous?"));
    if(1<=a && a<=6){
        alert("vous etes un enfant");
    }
     if(7<=a && a<=11){
        alert("vous etes un enfant qui a atteint l'age de la raison");
    }
     if(12<=a && a<=17){
        alert("vous etes un adolescent");
    }
     if(18<=a && a<=120){
        alert("vous etes un adulte");4
    }
    if(a=>123){
        alert("merde tu es encore vivant a 123 ans?")
    }
 var a=2,b=5,c=6,m;
  if(a< b && a<c){
    alert(a);
  }
  if(b<a && b<c){
    alert(b);
  }
  if(c<a && c<b){
    alert(c);
  }
m=(a+b+c)/3;
alert(m);
var lien="je mange bien", s=lien.split(" ");
alert(lien);
alert(s);
var m=s.join("-");
alert(m);
var prenom,i=0,
prenoms=[];

while(i<3){
    prenom=prompt("entrer un prenom: ")
    prenoms.push(prenom);
    i++;
}
alert(prenoms.join(" "))
var div = document.getElementById("divtest");
alert(div);
var divs = document.getElementsByName("div");
for( var i=0, c=divs.length;i<c;i++){
  alert('Element n ' +(i+1)+ ':'+divs[i]);
  var div= document.getElementById("divtest");
  alert(div.innerHTML);
  var a=5,b=6;
  if(a==b){
    alert("les nombres sont égaux");
  }
 var paragraph= document.getElementById("para");
 var first= paragraph.firstChild;
 var last= paragraph.lastChild;
 alert(first.nodeName.toLocaleLowerCase());
 alert(last.nodeName.toLocaleLowerCase());*/
 const burger= document.getElementById("menu-burger");
 const rows = document.getElementById("row2");
 burger.addEventListener("click", () => {
  rows.classList.toggle("active");
});

document.body.onload=function(){
  const nbr=3;
  let p=0;
  const carrousel= document.querySelectorAll(".row9");
  const carrousel1= document.querySelectorAll(".row10");
  const container= document.querySelectorAll(".container1")
  const prev = document.querySelectorAll("#prev");
  const next = document.querySelectorAll("#next");
  const div = document.querySelectorAll(".row9a");

for (let index = 0; index < 2; index++) {
  
  next[index].onclick=function(){
  p--;
    container[index].style.transform="translateX("+p*435+"px)";
     div[index].style.transition="all 0.5s ease";
    afficherMasque();
  }
   prev[index].onclick=function(){
  p++;
   container[index].style.transform="translateX("+p*435+"px)";
    div[index].style.transition="all 0.5s ease";
    afficherMasque();
    
    }
    function afficherMasque(){
      if(p==0)
        prev[index].style.visibility="hidden";
      else
        prev[index].style.visibility ="visible";
      if(p==-nbr)
        next[index].style.visibility="hidden";
      else
        next[index].style.visibility ="visible";

    }


  afficherMasque();
  }
  }



