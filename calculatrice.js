//fonction qui va ecrire les caractères sur lesquelles on clique dans le input
//prend en paramètre une value qui correspond au caractère sur lequel on clique
function addToScreen(value){
    //on ajoute au screen l'argument de la fonction
    document.getElementById('screen').value+=value;
    document.getElementById('result').value="";
}

//fonction qui vide le screen
function clearAllScreen(){
    document.getElementById('screen').value="";
}

//fonction qui va uniquement supprimer le dernier élément 
function clearLastNumber(){
    //On récupère l'expression
    var screen=document.getElementById('screen').value;
    //On récupère la longueur de l'expression
    var lengthScreen=screen.length;
    //Et on utilise substring avec lengthScreen-1 pour supprimer uniquement le dernier élément
    document.getElementById('screen').value = screen.substring(0,lengthScreen-1);
}

//fonction qui calcul et affiche le résultat
function resultScreen(){
    //calcul grâce à la fonction eval
    var resultat=eval(document.getElementById('screen').value);
    //gestion erreur quand resultat est pas définit
    if(resultat==undefined){
        document.getElementById('result').value="ERROR";
    }
    //Si pas d'erreurs on affiche le résultat de le input result
    else{
        document.getElementById('result').value=resultat;
    }
    //On vide screen
    document.getElementById('screen').value="";
}