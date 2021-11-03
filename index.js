console.log("shuhbam gupta")
let screen=document.getElementById('screen');

buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='AC'){
            screen.innerText=" ";
            screenValue="";
            console.log(111)
        }
        else if(buttonText=='='){
            screen.innerText=eval(screenValue);
            screenValue=screen.innerText;
            console.log(112)
        }
        else if(buttonText=="&#928;"){
            buttonText=3.14;
            console.log(piiiii)
            screenValue+=buttonText;
            screen.innerText=screenValue;
        }
       
        else if(buttonText=='+/-'){
            buttonText=screenValue-2*screenValue;
            screenValue=buttonText;
            screen.innerText=screenValue;
        }

        else{
            screenValue+=buttonText;
            screen.innerText=screenValue;
           
        }
    })
}