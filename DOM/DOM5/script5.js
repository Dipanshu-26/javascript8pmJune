//<ul>
        //<li>
           //Dipanshu
            //<button class="rm">Remove</button>
            //<button class="up">Up</button>
            //<button class="dn">Down</button>
        //</li>

let btn=document.querySelector('#id1')
let ipBox=document.querySelector('input')
let ulList = document.querySelector('ul')


//step1 : add li element 
btn.addEventListener('click',function(){
        let txtValue = ipBox.value
        let newLi=document.createElement('li')
        newLi.textContent=txtValue
        createButtons(newLi)
        ulList.appendChild(newLi)
        ipBox.value=""
})

//<button class="rm">Remove</button>
//<button class="up">Up</button>
//<button class="dn">Down</button>

//step 2 : add buttons 
function createButtons(liEle){
        //remove
        let rmBtn= document.createElement('button')
        rmBtn.textContent="Remove"
        rmBtn.classList.add("rm")
        liEle.appendChild(rmBtn)

        //up
        let upBtn= document.createElement('button')
        upBtn.textContent="Up"
        upBtn.classList.add("up")
        liEle.appendChild(upBtn)

        //down
        let dnBtn= document.createElement('button')
        dnBtn.textContent="Down"
        dnBtn.classList.add("dn")
        liEle.appendChild(dnBtn)
}

//step 3 : add button functionality
ulList.addEventListener('click',function(){
        if(event.target.tagName=="BUTTON"){
                if(event.target.classList=='rm'){
                        let li=event.target.parentElement
                        let ul=li.parentElement
                        ul.removeChild(li)

                }

                else if(event.target.classList=='dn'){
                        let li=event.target.parentElement
                        let ul=li.parentElement
                        let nxtLi=li.nextElementSibling
                        if(nxtLi){
                                ul.insertBefore(nxtLi,li)
                        }                  
                }

                else if(event.target.classList=='up'){
                        let li=event.target.parentElement
                        let ul=li.parentElement
                        let preLi=li.previousElementSibling
                        if(preLi){
                                ul.insertBefore(li,preLi)
                        }
                        

                }
        }
})






















