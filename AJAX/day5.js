function addTime1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello 1")
        },3000)
    })
}

function addTime2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye 2")
        },2000)
    })
}

function addTime3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello 3")
        },4000)
    })
}

function addTime4(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye 4")
        },1000)
    })
}

//promise.all

async function promiseAll() {
    let pro = await Promise.all([
        addTime1(),
        addTime2(),
        addTime3(),
        addTime4()
    ])
    console.log(pro)
}

//promiseAll()
//-------------------------------------------------------------------------------------------

//promise.any

async function promiseAny() {
    let pro = await Promise.any([
        addTime1(),
        addTime2(),
        addTime3(),
        addTime4()
    ])
    console.log(pro)
}

//promiseAny()

//---------------------------------------------------------------------------------------------------

//promise.any

async function PromiseAllSettle() {
    let pro = await Promise.allSettled([
        addTime1(),
        addTime2(),
        addTime3(),
        addTime4()
    ])
    console.log(pro)
}

//PromiseAllSettle()
//------------------------------------------------------------------------------------------------------

//promise.any

async function promiseRace() {
    let pro = await Promise.race([
        addTime1(),
        //addTime2(),
        addTime3(),
        //addTime4()
    ])
    console.log(pro)
}

promiseRace()