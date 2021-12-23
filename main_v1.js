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
})


let rangeOkButton = document.getElementById('range_OK')
rangeOkButton.addEventListener('click', function(){

    let inputMin = document.getElementById('min').value
    let inputMax = document.getElementById('max').value
    let rangeFrom = +inputMin
    let rangeTo = +inputMax

    let rangeSetMessage = document.getElementById('range__set__message')
    rangeSetMessage.innerText = `Your range is from ${rangeFrom} to ${rangeTo}`

    document.getElementById('number__guess__container').removeAttribute('hidden')


    guessYourNum(--rangeFrom, ++rangeTo)
})



function guessYourNum(min, max, mid = (min + max)/2){
    let greaterButton = document.getElementById('greater__button')
    let lessButton = document.getElementById('less__button')
    let equalButton = document.getElementById('equal__button')
    let counter=0
    counter++
    let stage = document.getElementById('number__guess__question')



    stage.innerText = `Is your number ${Math.trunc(+mid)}?`
    
   
    greaterButton.addEventListener('click', function greaterButtonPressed(){
        rangeFrom = Math.trunc(+mid)
        rangeTo = +max
        guessYourNum(rangeFrom, rangeTo)
    })
    
    lessButton.addEventListener('click', function lessButtonPressed(){
        rangeFrom = +min
        rangeTo = Math.trunc(+mid)
        guessYourNum(rangeFrom, rangeTo)
    })

    equalButton.addEventListener('click', function equalButtonPressed(){
        stage.innerText = `Your number is ${Math.trunc(+mid)}! Easy breezy!`
    })

}

let playAgainButton = document.getElementById('cancel__button')
playAgainButton.addEventListener('click', function(){
    document.getElementById('min').value = ''
    document.getElementById('max').value = ''
    document.getElementById('range__set__message').innerText = ''
    document.getElementById('number__guess__container').setAttribute('hidden', '')
})