let myArray = []
let alphabetical = false
const valueId = document.getElementById('valueId')
const array = document.querySelector('.array')

function show() {
    array.innerHTML = ''
    if(myArray.length === 0) {
        array.innerHTML = '<li>array is empty</li>'
    }
    myArray.forEach(function(item) {
        array.innerHTML += '<li>' + item + '</li>'
    })
}

function addToStart(newValue) {
    myArray.unshift(newValue)
    show()
    valueId.value = ''
}

function addToEnd(newValue) {
    myArray.push(newValue)
    show()
    valueId.value = ''
}

function removeFromStart() {
    myArray.shift()
    show()
}

function removeFromEnd() {
    myArray.pop()
    show()
}

function toggleSort() {
    if (!alphabetical) {
        alphabetical = true
        myArray.sort()
        show()
    } else {
        alphabetical = false
        myArray.sort().reverse()
        show()
    }
}

show()
