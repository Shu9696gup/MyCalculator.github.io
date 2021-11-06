console.log("shuhbam gupta")
let screen=document.getElementById('screen');

buttons=document.querySelectorAll('button');
let screenValue1='';
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='AC'){
            screen.innerText=" 0";
            screenValue1="";
            console.log(111)
        }
        else if(buttonText=='='){
            screen.innerText=eval(screenValue1);
            screenValue1=screen.innerText;
            console.log(112)
        }
        else if(buttonText=="&#928;"){
            buttonText=3.14;
            console.log(piiiii)
            screenValue1+=buttonText;
            screenValue=screenValue1;
            screen.innerText=screenValue1;
        }
       
        else if(buttonText=='+/-'){
            buttonText=screenValue1-2*screenValue1;
            screenValue1=buttonText;
            screenValue=screenValue1;
            screen.innerText=screenValue1;
        }
        else if(buttonText=='<-'){
            screenValue1=screenValue;
            screen.innerText=screenValue;
        }
        else{
            screenValue=screenValue1;
            screenValue1+=buttonText;
            
            screen.innerText=screenValue1;
           
        }
    })
}