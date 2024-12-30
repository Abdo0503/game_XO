let turn ="X";
let title = document.querySelector(".title");
let box =[];
function win(num1,num2,num3) {
    title.innerHTML=`${box[num1]} is winner`
    document.getElementById("item"+num1).style.background="green";
    document.getElementById("item"+num2).style.background="green";
    document.getElementById("item"+num3).style.background="green";
    setInterval(function () {title.innerHTML+= "."},1000)
    setTimeout(function(){location.reload()},4000)
}
function winner() {
    for(let i =1 ; i < 10 ; i++){
        box[i] = document.getElementById("item" + i).innerHTML;
    } 
    if (box[1] ==box[2] && box[2]==box[3] && box[2] != "") {
    win(1,2,3)
    }else  if (box[4] ==box[5] && box[5]==box[6] && box[5] != "") {
        win(4,5,6)
    }else  if (box[7] ==box[8] && box[8]==box[9] && box[7] != "") {
        win(7,8,9)
    }else  if (box[1] ==box[4] && box[4]==box[7] && box[1] != "") {
        win(1,4,7)
    }else  if (box[2] ==box[5] && box[5]==box[8] && box[2] != "") {
        win(2,5,8)
    }else  if (box[3] ==box[6] && box[6]==box[9] && box[3] != "") {
        win(3,6,9)
    } else  if (box[1] ==box[5] && box[5]==box[9] && box[1] != "") {
        win(1,5,9)
    }else  if (box[3] ==box[5] && box[5]==box[7] && box[3] != "") {
        win(3,5,7)
    }
else {
        setInterval(function () {title.innerHTML= "Draw..."},16000)
        setTimeout(function(){location.reload()},20000)
    }
}
function game(id) {
    let item = document.getElementById(id);
    if (turn === "X" && item.innerHTML == "" ) {
        item.innerHTML = "X"
        turn = "O"
        title.innerHTML ="O"
    }else if(turn === "O" && item.innerHTML == ""){
        item.innerHTML = "O"
        turn = "X";
        title.innerHTML ="X";
    }
    winner();
}