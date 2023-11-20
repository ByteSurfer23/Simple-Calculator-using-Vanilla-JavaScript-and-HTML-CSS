let input = document.getElementById('inputbox');// selects the input box so that input.value can be accessed to display elements 
// selecting the input box element by its id
let buttons = document.querySelectorAll('button');
// selecting all the buttons 
let string = "";
let arr = Array.from(buttons);//puts all button objects in an array 
/* here we pass every button's html element into a string and we use eval() function which converts the string of numbers and operands in to a mathematical expression which is then made to be the value of input by, input.value and is displayed*/
arr.forEach(button=>{
  button.addEventListener('click',(e)=>{//e is the event object
    if(e.target.innerHTML=='=')
      {
        string = eval(string);
        input.value = string;
      }
    else if(e.target.innerHTML == 'AC')
      {
        string="";
        input.value=string;
      }
    else if(e.target.innerHTML=='log')
      {
        
       input.value=Math.log(eval(string));
}
    else if(e.target.innerHTML=='DEL')
      {
        string = string.substring(0,string.length-1);
        input.value=string;
}

    else{
   string+=e.target.innerHTML;
    input.value=string;
    }
  });
});