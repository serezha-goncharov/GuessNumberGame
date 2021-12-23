start.onclick = function(){
    guessYourNum(0,100);
}
function guessYourNum(min, max, mid = (min + max)/2){
    let stage = confirm(`Твое загаданное число больше чем ${Math.floor(+mid)}?`)
    if(stage == true){
        let range1 = {
            from: Math.floor(+mid),
            to: Math.floor(+max)
        }
        console.log(range1);
        console.log(Math.trunc(+mid));
        if( (range1.to - range1.from) == 1){
            alert(`Твое число ${range1.to}!`)
        }else{
            guessYourNum(range1.from, range1.to);
        }

    }else{
        let range2 = {
            from: Math.floor(+min),
            to: Math.floor(+mid)
        } 
        console.log(range2);
        console.log(Math.trunc(+mid));
        if( (range2.to - range2.from) == 1){
            alert(`Твое число ${range2.to}!`)
        }else{
            guessYourNum(range2.from, range2.to);
        }

    }
}


//Доработка - сделать диапазон динамическим: пользователь сам задает его
//Доработка - кол-во попыток, за которое программа угадает число

//Доработка если диапазон наподобие от 100 до 0
// Math.abs()



