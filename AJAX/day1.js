//program 1

function addA(){
    console.log("hello addA")
}

function addB(){
    console.log("hello addB")
}

// addA()
// addB()

//--------------------------------------------------------------------------------------

//program 2 
function addC(){
    setTimeout(function(){
        console.log("hello addC")
    },3000)
}

function addD(){
    setTimeout(function(){
        console.log("hello addD")
    },2000)
}

// addC()
// addD()

//------------------------------------------------------------------------------------------
//program3

function createUser(){
    setTimeout(function(){
        console.log("user created")
    },4000)
}

function createId(){
    setTimeout(function(){
        console.log("ID created")
    },2000)
}

function getUserInfo(){
    setTimeout(function(){
        console.log("get user info")
    },1000)
}

// createUser()
// createId()
// getUserInfo()

//------------------------------------------------------------------------------------------
function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },4000)

    setTimeout(function(){
        console.log("ID created")
    },2000)

    setTimeout(function(){
        console.log("get user info")
    },1000)
}

getInfo()

//-----------------------------------------------------------------------------------------------
//call back hell
