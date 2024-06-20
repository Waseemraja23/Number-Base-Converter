let input = document.getElementById("inputtxt");
let selec = document.getElementById("select");
let bon = document.getElementById("on");
let spa = document.getElementById("span");

bon.addEventListener('click',function(){
    let num = +input.value;
    let sel = +selec.value;
    console.log(num, sel);
    if(isNaN(num)){
        spa.textContent='Please enter a valid number';
        spa.style.color='red'
        spa.style.fontWeight='bold';
    }
    else{
        let conv = num.toString(sel);
        spa.textContent = conv.toUpperCase();
         spa.style.color='white';
         spa.style.fontWeight='bold';
    }
})

