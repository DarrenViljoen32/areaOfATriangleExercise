//Area of a Triangle

//function to calculate the area of a triangle
function area(){
    let enterBase = document.getElementsByTagName(`input`)[0].value;
    let enterHeight = document.getElementsByTagName(`input`)[1].value;

    //validation. must be a number
    let text;
     if(isNaN(enterBase || enterHeight)){
         text = `Input not valid. Please enter a number.`;
     }else{
         text = ``;
     }
     document.getElementsByTagName(`p`)[2].innerText = text;

     //calculation
     let result = 1/2 * enterBase * enterHeight;
     return document.getElementsByTagName(`input`)[2].value = `${result.toFixed(2)}cm\xB2`;
}