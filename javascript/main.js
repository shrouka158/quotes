

function randomQuote(){

var x = Math.floor(Math.random() *10)



switch(x){
    case 0:
     document.getElementById("demo").innerHTML="You only live once, but if you do it right, once is enough.― Mae West"
    break;
     case 1:
      document.getElementById("demo").innerHTML="It is better to be hated for what you are than to be loved for what you are not."
      break;
      case 2:
      document.getElementById("demo").innerHTML="“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”"
      break;
      case 3:
       document.getElementById("demo").innerHTML="Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”"
       break;
   
       case 4:
       document.getElementById("demo").innerHTML="The only true wisdom is in knowing you know nothing.”"
       break;
       case 5:
       document.getElementById("demo").innerHTML="“Count your age by friends, not years. Count your life by smiles, not tears.”"
       break;
       case 6:
       document.getElementById("demo").innerHTML="Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely."
       break;
       case 7:
       document.getElementById("demo").innerHTML="Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”"
       break;
       case 8:
       document.getElementById("demo").innerHTML="I like the night. Without the dark, we'd never see the stars."
       break;
       case 9:
       document.getElementById("demo").innerHTML="For every minute you are angry you lose sixty seconds of happiness.”"
}
 
 return(x)
}






