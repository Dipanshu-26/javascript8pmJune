// let city = "Bhopal"

// switch (city) {
//     case "jaipur":
//         console.log("RJ")
//     case "banglore":
//         console.log("KA")
//     case "bhopal":
//         console.log("MP")
//     case "pune":
//         console.log("MH")
// }
// //--------------------------------------
// city = "Jaipur"
// switch (city) {
//     case "jaipur":
//         console.log("RJ")
//         break
//     case "banglore":
//         console.log("KA")
//         break
//     case "bhopal":
//         console.log("MP")
//         break
//     case "pune":
//         console.log("MH")
//         break
//     default:
//         console.log("please enter proper city name...")
// }
// //---------------------------------------------------------------
// city = "PunE"
// switch (city) {
//     case "jaipur":
//     case "Jaipur":
//         console.log("RJ")
//         break
//     case "banglore":
//     case "Banglore":
//         console.log("KA")
//         break
//     case "bhopal":
//     case "Bhopal":
//         console.log("MP")
//         break
//     case "pune":
//     case "Pune":
//         console.log("MH")
//         break
//     default:
//         console.log("please enter proper city name...")
// }
//---------------------------------------------------------------------------

city = "Pune"
switch (city) {                                    //"Pune"
    case (city == "jaipur" || city == "Jaipur"):   // false 
        console.log("RJ")
        break
    case (city == "banglore" || city =="Banglore"):  // false
        console.log("KA")
        break
    case (city == "bhopal" || city == "Bhopal"): //false
        console.log("MP")
        break
    case (city=="pune" || city =="Pune"):      //true
        console.log("MH")
        break
    default:
        console.log("please enter proper city name...")    
}

//------------------------------------------------------------------------------

city = "Pune"
let isFlag = true 
switch(isFlag){
    case (city == "jaipur" || city == "Jaipur"):   // false 
        console.log("RJ")
        break
    case (city == "banglore" || city =="Banglore"):  // false
        console.log("KA")
        break
    case (city == "bhopal" || city == "Bhopal"): //false
        console.log("MP")
        break
    case (city=="pune" || city =="Pune"):      //true
        console.log("MH")
        break
    default:
        console.log("please enter proper city name...")   
}

//----------------------------------------------------------------------------------
//loops