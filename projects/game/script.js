// var whatIs



// function calculateAge(year){
//     var currentYear = 2019
//     var result = currentYear - year
//     return result
// }


// function checkAndLogAge(year, name, forWhatYear){
//     if(calculateAge(year) < forWhatYear){
//         console.log("It is old " + name)
//     }else{
//         console.log("It is new" + name)
//     }
// }

// checkAndLogAge(2015, "Car", 10)

// myFunction("Eduard")


// function myFunction(name){
//     console.log("My name is", name)
// }

// var personName = 'Mike'

// var typePersonName = 'My name is \'' + personName + '\''
// console.log(typePersonName)

// var newMessage = "Hello World!!!"

// console.log(newMessage.substr(newMessage.indexOf('World'), 5))

// console.log('42' + 2)
// console.log(+(9 / 2).toFixed(0))


// var myObject = {
//     name: function(value){
//         return value * 2    
//     },
//     age: 18
// }

// console.log(myObject.name(10))


// var myArray = ['BMW', 'Audi']

// Add element on last

// myArray.push('Mazda')
// console.log(myArray)


//Delete last element on myArray (Array)

// var whichElementIsDelete = myArray.pop()
// console.log(whichElementIsDelete)

//Delete first element on myArray

// var bmw = myArray.shift()
// console.log(myArray, bmw)

//Add Element on Array

// myArray.unshift(bmw)
// console.log(myArray)





// var myArray = [1, '2', '3', 4 , 6 , '8' , 10 , '12' , 14 , '16' , 18]

// myArray.push('Hello World')
// myArray.push(20)
// myArray.push(NaN)

// myArray.push(6)
// myArray.push(7)
// myArray.push(8)

// var deletArrayel = myArray.shift()
// document.write(deletArrayel + "<br>")
// document.write(myArray + "<br>")



// console.log(myArray)

// for(var i = 0; i <= myArray.length; i++){
//     if (myArray[i] % 2 === 0 && typeof myArray[i] === 'number') {
//         document.write(myArray[i] + " ")
//     }else{
//         continue
//     }
// }


// var a = document.querySelector('a')

// var aHref = a.getAttribute('href')
// aHref = 'https://list.am'

// a.setAttribute('href', 'https://yandex.ru')
// console.log(aHref)

// console.log(a.title)

// var addAttrdelAttr = 1

// var div = document.querySelector('.box')
// var button = document.querySelector('#button')
// button.onclick = function(){
//     addAttrdelAttr++
//     if(addAttrdelAttr % 2 === 0){
//         div.setAttribute('style', 'visibility: visible')
//     }else{
//         div.setAttribute('style', 'visibility: hidden')
//     }
// }

// var container = document.querySelector('#container')
// var container2 = document.querySelector('#container-2')

// function changeBg(){
//     this.style.backgroundColor = 'blue'
// }

// container2.addEventListener('click', changeBg)

// var changeColorItertor = 1
// container.onclick = function(){
//     changeColorItertor++
//     if(changeColorItertor % 2 === 0){
//         container.classList.add('blue')
//     }else{
//         container.classList.remove('blue')
//     }

// }


// var divs = document.querySelectorAll('div')
// var link = document.querySelector('a')

// for(var i = 0; i < divs.length; i++){
//     divs[i].addEventListener('click', function(event){
//         event.stopPropagation()
//         console.log(this.getAttribute('id'))   
//     }, false)
// }



// link.addEventListener('click', changePropertyDisplay)



// function changePropertyDisplay(event){
//     event.preventDefault()
//     var div = divs[0]

    // with if and else
    // if(div.style.display === 'none'){
    //     div.style.display = 'flex'
    // }else{
    //     div.style.display = 'none'
    // }
    // div.style.display = div.style.display === 'none' ? 'flex' : 'none'


// }




// var wrapper = document.getElementById('wrap')

// wrapper.addEventListener('click', function(event){
//     console.log(event.target.tagName)
//     if(event.target.tagName.toLowerCase() === 'div'){
//         throw new Error("You click div, It is a error")
//     }

// })

// wrapper.addEventListener('click', function(event){
//     console.log(event.target.tagName)
//     if(event.target.tagName.toLowerCase() === 'p'){
//         event.target.style.color = 'blue'
//     }

// })




// var str = '2,3,4,5,6,7,8'

// var newArray = str.split(',')
// console.log(newArray)

// var newArraynum = newArray.map(function(i){
//     return parseInt(i)
// })
// var filterArray = newArraynum.filter(function(i){
//     return i % 2 === 0
// })

// var findArray = newArraynum.find(function(i){
//     return i === 8
// })

// console.log(findArray)


// console.info('Console log info')
// console.warn('warnning')
// prompt('write your age')
// console.error('error')



// var strData = {
//     name: 'Alex',
//     age: 18,
//     car: {
//         name: 'Bmw',
//         year: 1995
//     },
//     childs: ['Bill', 'Mark']
// }

// var jsonDataforStrData = JSON.stringify(strData)


// console.log(JSON.parse(jsonDataforStrData).car.name);   

// var date = new Date()
// console.log(date.getSeconds());


// var dateDiv = document.querySelector('.date')
// var setdateDiv = date.getSeconds()
// dateDiv.textContent = setdateDiv

// var value = document.querySelector('input').value


// document.querySelector('button').addEventListener('click', function(){
//     var value = document.querySelector('input').value
//     var obj = {
//         name: value
//     }
    // throw new Error('you click wrong')


//     localStorage.setItem('anyValue', JSON.stringify(obj))
// })

// document.addEventListener('DOMContentLoaded', function(){
//     var text = JSON.parse(localStorage.getItem('anyValue'))
    // console.log(text.name)

    // try{

    // }catch(e){

    // }

//     if(text && text.name && text.name.trim()){
//         document.querySelector('h1').textContent = text.name
//     }

// })


// localStorage.setItem('otherValue', JSON.stringify(value))

// var otherText = JSON.parse(localStorage.getItem('otherValue'))
// console.log(otherText)



var $start = document.getElementById('start')
var $game = document.getElementById('game')
var $time = document.getElementById('time')
var $result = document.getElementById('result')
var $timeHeader = document.getElementById('time-header')
var $resultHeader = document.getElementById('result-header')
var $gameTime = document.getElementById('game-time')

var score = 0
var isGameStarted = false
var colors = ['yellow', 'purple', 'red', 'orange', 'gray']

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function startGame(){
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', 'true')
    $timeHeader.classList.remove('hide')
    $resultHeader.classList.add('hide')
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    this.classList.add('hide')

    var interval = setInterval(function(){
        var time = parseFloat($time.textContent)
        if(time <= 0){
            clearInterval(interval)
            endGame()
        }else{
            $time.textContent = (time - 0.1).toFixed(1)
        }

    }, 100)

    renderBox()
}

function setGameScore(){
    $result.textContent = score.toString()

}

function setGameTime(){
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1) 
}


function endGame(){
    isGameStarted = false
    $gameTime.removeAttribute('disabled')
    $start.classList.remove('hide')
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    $timeHeader.classList.add('hide')
    $resultHeader.classList.remove('hide')
    setGameScore()
}

function handleBoxClick(event){
    if(!isGameStarted){
        return
    }

    if(event.target.dataset.box){
        score++
        renderBox()
    }
}





function renderBox(){
    $game.innerHTML = ''
    var box = document.createElement('div')
    var boxSize = getRandom(30, 100)
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width - boxSize
    var randomNum = getRandom(0,colors.length)
    parseInt(randomNum)
    console.log(parseInt(randomNum))


    box.style.width = box.style.height = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = colors[parseInt(randomNum)]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}

// console.log(Math.random() * 70 + 30)

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}


var div = document.createElement('div')
div.style.height = div.style.width = 100 + '%'
div.style.background = 'black'
div.style.position = 'absolute'
div.style.top = 0
div.style.left = 0
div.style.zIndex = 5

var body = document.querySelector('body')
body.addEventListener('click', function(event){
    // body.insertAdjacentElement('afterbegin', div)
    console.log(event.target.dataset)
})

