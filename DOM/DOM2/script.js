/* <h1 id="id1" class="c1" name="nm1">Minskole</h1>
<h2 id="id2" class="c2" name="nm2">Dipanshu Chawde</h2>
<h3 id="id3" class="c3" name="nm3">JavaScript</h3>
<p id="id4" class="c4" name="nm4">This is a paragraph.</p> */

//by tagName
let byTag = document.querySelector('h1')
console.log(byTag)

//byId

let byId= document.querySelector("#id1")
console.log(byId)

//byclass

let byClass = document.querySelector('.c1')
console.log(byClass)

//by Attrubutes

let byAtt = document.querySelector('h1[name="nm1"]')
console.log(byAtt)
