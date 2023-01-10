let string="";
let buttons = document.querySelectorAll('.button');
function factorial(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}
function percentage(num){
    var result = num * 0.01;
    return result;
}
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
            string=""
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '!'){
            string = eval(string);
            if(Number(string)<=0){
                document.querySelector('input').value = "ERROR!";
            }
            else{
                string = factorial(string);
                document.querySelector('input').value = string;
            }
            string=""
        }
        else if(e.target.innerHTML == '%'){
            string = eval(string);
            string = percentage(string);
            document.querySelector('input').value = string;
            string=""
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})