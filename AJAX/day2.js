//promise 
//pending , resolved , rejected

let pro = new Promise(function(resolve,reject){
    let a=10
    let b=10
    if(a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

//consume promise

//syntax
//pro.then(function(resolve),function(reject))

// pro.then(function(str1){
//     console.log(str1)
// },function(str2){
//     console.log(str2)
// })

//--------------------------------------------------------------------------------------------------
//catch
let pro2 = new Promise(function(resolve,reject){
    let a=100
    let b=100
    if(a==b){
        resolve([11,22,33,44])
    }
    else{
        reject(['a','b','c'])
    }
})

// pro2.then(function(str1){
//     console.log(str1)
// }).catch(function(str2){
//     console.log(str2)
// })

// pro2.then(function(str1){
//     console.log(str1)
// }).catch(function(str2){
//     console.log(str2)
// }).finally(function(){
//     console.log("i will always execute...")
// })

//------------------------------------------------------------------------------------

function createUser(){
    let pro =new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },5000)
    })
    return pro
}

function createId(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("ID created")
        },2000)
    })
    return pro
}

function getInfo(){
    let pro = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get user info")
        },1000)
    })
    return pro 
}

// createUser()
// createId()
// getInfo()
//--------------------------------------------------------------

// createUser().then(function(str1){
//     console.log(str1)
//     return createId()
// }).then(function(str2){
//     console.log(str2)
//     return getInfo()
// }).then(function(str3){
//     console.log(str3)
// }).catch(function(){
//     console.log("error occured")
// }).finally(function(){
//     console.log("i will always execute...")
// })

//-------------------------------------------------------------------------------------------------------

//async await 

async function getUserInfo() {
        let one = await createUser()
        console.log(one)

        let two = await createId()
        console.log(two)

        let three = await getInfo()
        console.log(three)
}

getUserInfo()