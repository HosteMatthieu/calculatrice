class BaseCalculator{
    constructor(){
        this.screen=document.getElementById('screen')
        this.result=document.getElementById('result')
        this.history=[]
    }

    //fonction qui va ecrire les caractères sur lesquelles on clique dans le input
    //prend en paramètre une value qui correspond au caractère sur lequel on clique
    addToScreen(value){
        this.screen.value+=value;
        this.result.value="";
    }

    //fonction qui calcul et affiche le résultat
    resultScreen(){
        var resultat=eval(this.screen.value);
        this.history.push(this.screen.value)
        this.result.value=resultat;
        this.screen.value="";
    }
    
    //fonction qui vide le screen
    clearAllScreen(){
        this.screen.value="";
    }

    //fonction qui va uniquement supprimer le dernier élément 
    clearLastNumber(){
        var valueScreen=this.screen.value;
        var lengthScreen=valueScreen.length;
        this.screen.value = valueScreen.substring(0,lengthScreen-1);
    }

    backHistory(){
        let elem=this.history.pop()
        if(elem!=undefined){
        this.screen.value=elem;            
        }
    }
}

let calculator=new BaseCalculator
