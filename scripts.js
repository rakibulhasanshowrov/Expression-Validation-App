let validate=document.getElementById('validate')
let select=document.getElementById('choose')
let expression=document.getElementById('inputValue')
let r=document.getElementById('Result')



select.addEventListener('change',selectOption)
validate.addEventListener('click',checkExpression)

function selectOption(){
    return select.value
}
function timeOut(){
    setTimeout(function(){
        alert('Refreshing!!!!')
        location.reload();
    },1000)

}

function textValue(){
    if (expression.value===''){
        //displayError('Please Enter an Expression')
        return false
    }
       
    else{
        console.log(expression.value)
        return expression.value
    }
    
}
function displayResult(result,message){
    if (result === true) {
        r.style.color = 'green';
        r.style.fontWeight = "bold";
        r.style.fontSize = "1.5em"; 
        r.innerHTML = `Valid ${message}`;
      } 
      if (result === false){
        r.style.color = 'red';
        r.style.fontWeight = "bold";
        r.style.fontSize = "1.5em"; 
        r.innerHTML = `Invalid ${message}`;
      }
    timeOut()
        
    
}
function displayError(message){
    r.style.backgroundColor='Red'
    r.style.fontSize = "1.5em"; 
    r.innerHTML=message
    timeOut()
}



function checkExpression(e){
    //e.preventDefault()
console.log(select.value)
switch(select.value){
    case '':
        console.log('You have not select a Option Yet!')
        displayError('Select an Option!')
        break;
    case 'email':{
        let email=textValue()
        if (email==false){
            displayError("Enter An Expression")
            break
        }else
        {
        const emailRegex = /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/
        let result=emailRegex.test(email)
        displayResult(result,"email address")
        break;
        }
        
    } 
    case 'mnumber':{
        let mnumber=textValue()
        if (mnumber==false){
            displayError("Enter An Expression")
            break
        }else
        {
        console.log(mnumber)
        const numberRegex = /^(?:(?:\+|00)88|01)?\d{11}$/
        let result=numberRegex.test(mnumber)
        displayResult(result,"Mobile Number")
        break;
        }
    }  
    case 'postcode':{
        let pcode=textValue()
        if (pcode==false){
            displayError("Enter An Expression")
            break
        }else
        {
        const pcodeRegex = /^[0-9]{4}$/
        let result= pcodeRegex.test(pcode)
        displayResult(result,"post Code")
        break
        }
    } 
    case 'url':{
        let url=textValue()
        if (url==false){
            displayError("Enter An Expression")
            break
        }else
        {
        const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        let result= urlRegex.test(url)
        displayResult(result,"url address")
        break
        }
    } 
    case 'ip':{
        let ip=textValue()
        if (ip==false){
            displayError("Enter An Expression")
            break
        }else
        {
        const ipRegex = /^((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
        let result= ipRegex.test(ip)
        displayResult(result,"IPV4 address")
        break
        } 
    }
 }

}