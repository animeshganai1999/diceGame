var number1 = Math.floor(Math.random()*6);
var number2 = Math.floor(Math.random()*6);
number1++;
number2++;
var str_name1 = "images/dice"+number1+".png";
var str_name2 = "images/dice"+number2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",str_name1);
document.getElementsByClassName("img2")[0].setAttribute("src",str_name2);
if(number1 > number2){
    document.querySelector("h1").innerHTML = "<i class='fas fa-flag-checkered'></i> Player 1 wins!";
    
}else if(number2 > number1){
    document.querySelector("h1").innerHTML = "Player 2 wins! <i class='fas fa-flag-checkered'></i>";
}else{
    document.querySelector("h1").innerHTML = "<i class='fas fa-flag-checkered'></i> Match draw! <i class='fas fa-flag-checkered'></i>";
}
