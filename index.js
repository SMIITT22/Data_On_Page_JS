var numEl = document.getElementById('num')
var nameEl = document.getElementById('name')
var courseEl = document.getElementById('course')
var ageEl = document.getElementById('age')
var emailEl = document.getElementById('email')
var buttonEl = document.getElementById('btn')
var resultEl = document.getElementById('show')

//var arr1 = [nameEl.value,courseEl.value,ageEl.value,emailEl.value]

buttonEl.addEventListener('click', () =>{
    var arr1 = [nameEl.value,courseEl.value,ageEl.value,emailEl.value]
    localStorage.setItem('show', arr1); //show is key and arr1 is value
    //will store in local storage...
    var value = localStorage.getItem('show');
    resultEl.textContent = value
})



