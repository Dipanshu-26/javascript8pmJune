// create user ==> id create ==> get user info 

function createUser(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },5000)
    })
    return pro
}

function createID(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("ID created")
        },3000)
    })
    return pro
}

function getInfo(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user info")
        },2000)
    })
    return pro
}

// createUser().then(function(str){
//     console.log(str)
//     return createID()
// }).then(function(str){
//     console.log(str)
//     return getInfo()
// }).then(function(str){
//     console.log(str)
// }).catch(function(){
//     console.log("error ocoured")
// }).finally(function(){
//     console.log("I will always execute")
// })

//------------------------------------------------------------------------------
//api testing  ==> e2e ==> create ==> update ==> get ==> delete

//async awit 

async function getUserInfo() {
    let q1 = await createUser()
    console.log(q1)

    let q2 = await createID()
    console.log(q2)

    let q3 = await getInfo()
    console.log(q3)
}

getUserInfo()
