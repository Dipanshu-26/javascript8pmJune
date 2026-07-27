//and && ,  or || , not !
//true / false 

//and : if any of ip is false op is false , true only when all ips are true 
// ip1   ip2     op
// T      T       T 
// T      F       F 
// F      T       F
// F      F       F

console.log(3==3 && 8>3)
//            T   && T 
//               T
//console.log

console.log(3==3 && 8<3)
console.log(3!=3 && 8>3)
console.log(3!=3 && 8<3)


//or || : if any of ip is true op is true , false only when all ips are false
// ip1   ip2     op
//  T     T       T 
//  T     F       T 
//  F     T       T 
//  F      F      F 

console.log(4 == "4" || 9> 5)
console.log(4 == "4" || 9<5)
console.log(4 === "4" || 9>5)
console.log(4 === "4" || 9<5)

//not !
//T==> F
// F ==> T
console.log(!(4 === "4"))
//         !(F) ==>T

console.log(!(4=="4"))

console.log(!(4=="4" &&  9>10))
//            !(T && F)
//            !(F)
//             T

console.log(!(4=="4" ||  9>10))