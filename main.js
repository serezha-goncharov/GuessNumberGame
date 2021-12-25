/*
Написать программу, которая угадывает число пользователя с помощью бинарного поиска. 
Пользователь загадывает число, а программа должна угадать его из диапазона.
Дипазон по умолчанию от 1 до 100. 
Программа должна подсчитывать кол-ва попыток, за которые она угадывает число из диапазона

Общий алгоритм отгадывания числа - Пользователь в уме загадывает число, а программа задает вопросы пользователю.

Например:
JS: Выбери диапазон, из которого я угадаю числа
JS: Загадай число от ${min} до ${max}
JS: Твое число min?
П:  > , < , =
. . .
JS: Ты загадал число ${min}!

Здесь важно написать хороший текст, чтобы было ощущение, что программа реально угадыватъ:

Блок1 - Правила/приветственный блок
{
    JS: Привет!
    JS: Давай с тобой сыграем в игру. Я буду отгадывать числа, которые ты загадаешь)
    JS: Ты сам выберешь min и max число, и внутри этого диапазона я найду твое число!
    JS: А тебе надо будет просто отвечать, что моя догадка больше, меньше или равна твоему числу.
    JS: P.S.: Просьба - пиши, пожалуйста🙏, целые числа и положительные. 
    JS: Не хочу, чтобы меня ставили в неловкую ситуацию. (-_-)
    JS: Надеюсь я понятно рассказал. Понятны правила?

    П:  Давай начнем!
    &&
    П:  Такс...расскажи еще раз попорядку.
}

Блок2 - Определение диапазона от пользователя
{
    JS: Здорово!
    JS: Пиши свой диапазон)

    П:  [Вводит ${min}]
    П:  [Вводит ${max}]

    JS: Ага, Понял.
    JS: Ну тогда начинаем =)
}

Блок3 Вопросы по определению числа
{
    JS: Твое число ${mid} ?
    JS: Сейчас угадаю...наверное ${mid} ?
    JS: Так так так...дай подумать...ммм ${mid} ? Верно?
    JS: Нет? Хм, пора напрячься! ${mid} ?
    JS: Вот это ${mid} ?
    JS: Это ${mid} ?
    JS: ${mid}? Угадал?
    JS: А сейчас? это твое число ${mid} ?
    JS: Оно ${mid} ?
    JS: Да серьезно, что ли?!...${mid} ?
    JS: Так! Это твое число - ${mid} ! ... Да?

    П:  Побольше чем мое >
    П:  Поменьше чем мое <
    П:  Это мое число =


Блок4 Число угадано
{
    JS: Изи бризи!
}
*/
let startButton = document.getElementById('start')
startButton.addEventListener('click', function(){
    document.getElementById('range__set__container').removeAttribute('hidden')
    startButton.setAttribute("disabled", "disabled");
})


let rangeOkButton = document.getElementById('range_OK')
let inputMin = document.getElementById('min')
let inputMax = document.getElementById('max')

rangeOkButton.addEventListener('click', function(){
    let rangeFrom = +inputMin.value
    let rangeTo = +inputMax.value
    let rangeSetMessage = document.getElementById('range__set__message')
    rangeSetMessage.innerText = `Your range is from ${rangeFrom} to ${rangeTo}`

    document.getElementById('number__guess__container').removeAttribute('hidden')
    rangeOkButton.setAttribute("disabled", "disabled");
    inputMin.setAttribute("disabled", "disabled");
    inputMax.setAttribute("disabled", "disabled");
    guessYourNum(--rangeFrom, rangeTo)
})

let greaterButton = document.getElementById('greater__button')
let lessButton = document.getElementById('less__button')
let counter=0
let stage = document.getElementById('number__guess__question')

function guessYourNum(min, max, mid = (min + max)/2){
    counter++
    stage.innerText = `Is your number bigger than ${Math.round(+mid)}?`
    
    greaterButton.addEventListener('click', function greaterButtonPressed(){
        let range1 = {
            from: Math.round(+mid),
            to: Math.round(+max)
        }
        if( (range1.to - range1.from) === 1){
            stage.innerText = `Your number is ${range1.to}! Easy breezy!`
        }else{
            guessYourNum(range1.from, range1.to);
        }
        return true;
    })
    
    lessButton.addEventListener('click', function lessButtonPressed(){
        let range2 = {
            from: Math.round(+min),
            to: Math.round(+mid)
        }
        if( (range2.to - range2.from) === 1){
            stage.innerText = `Your number is ${range2.to}! Easy breezy!`
        }else{
            guessYourNum(range2.from, range2.to);
        }
        return true;
    })
}

let playAgainButton = document.getElementById('cancel__button')
playAgainButton.addEventListener('click', function(){
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    document.getElementById('range__set__message').innerText = '';
    document.getElementById('number__guess__container').setAttribute('hidden', '');
    
    rangeOkButton.removeAttribute('disabled')
    inputMin.removeAttribute('disabled')
    inputMax.removeAttribute('disabled')
})