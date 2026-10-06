//<h1>Students List</h1>
//    <ul>
//        <li>Dipanshu</li>
//        <li>Nitin</li>
//        <li>Neel</li>
//        <li>Tanish</li>
//    </ul>
//    <input type="text">
//    <button>Add Me</button>
//    <script src="script4.js"></script>


let btn = document.querySelector('button')
let ulList = document.querySelector('ul')

let ip = document.querySelector('input')

btn.addEventListener('click',function(){
    let ipTxt= ip.value
    let newLi = document.createElement('li')
    newLi.textContent=ipTxt
    ulList.appendChild(newLi)
    ip.value=""

})
