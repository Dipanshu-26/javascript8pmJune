
//buttons
let b1 = document.querySelector('#btn1')
let b2 = document.querySelector('#btn2')
let b3 = document.querySelector('#btn3')

//text
let t1 = document.querySelector('#t1')
let t2 = document.querySelector('#t2')
let t3 = document.querySelector('#t3')

b1.addEventListener('click',function(){
    t1.textContent='Red'
    t1.style.color = 'red'
})

b2.addEventListener('click',function(){
    t2.textContent='Dipanshu Chawde'
    t2.style.color = 'blue'
})

b3.addEventListener('click',function(){
    t3.textContent='Paris'
    t3.style.color = 'green'
})