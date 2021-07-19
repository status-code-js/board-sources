const board = document.querySelector('#board')
const colors = ['#F08080', '#FFB6C1e', '#FFA07A', '#FFFACD', '#E6E6FA', '#98FB98', '#66CDAA', '#DAA520']
const SQUARES_NUMBER = 48

for (let i = 0; i < SQUARES_NUMBER; i++) {         // будем пробегаться 500 раз по этой константе, на каждой итерации мы будем создавать переменную square
    const square = document.createElement('div')
    square.classList.add('square')                  //чтобы квадрат был квадратом добавляем класс square

    square.addEventListener('mouseover', setColor)
    //square.addEventListener('mouseover', () => setColor(square))        //когда мы водим мышкой - тут у нас замыкание

    square.addEventListener('mouseleave', removeColor)
    //square.addEventListener('mouseleave', () => removeColor(square))        //когда мы убираем мышку

    board.append(square)

}

//function setColor(element) {                // функция принимает элемент, у нас это квадрат
    function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`        //косые кавычки - могу передавать динамические значения прямо в строчку
                                                                            //после запятой - добавление светящегося эффекта
}

//function removeColor(element) {
    function removeColor(event) {
        const element = event.target
    element.style.backgroundColor = '#1d1d1d'       //возвращаем цвет, который был вначале: цвет убирается
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]

} 

    /*const index = Math.floor(Math.random() * colors.length)
    return colors[index]*/

    
