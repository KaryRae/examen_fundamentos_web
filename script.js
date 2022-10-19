function alerta() {
    alert("This game is supported on Linux");
}

function buy() {
    const counterBuy =document.querySelector('#counter');
    let num = counterBuy.innerHTML;
    num ++;

    counterBuy.innerHTML= num;

}