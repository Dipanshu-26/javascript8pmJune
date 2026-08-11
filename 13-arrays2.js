//arrays 

//          0          1       2       3
let nms=["dipanshu","neel","tanish","nitin"]        //length=4 , last index =3 (length-1) 
 
console.log(nms)

console.log(nms[0])
console.log(nms[2])

console.log(nms.length)

console.log(typeof(nms))

//object ==> properties , methods 
//properties ==> 


//person ==> 
//properties ==> name , age, adderess....
//methods==> walk(),talk(),gym().....

//methods ==> action , return

//walk()==>
// action==> distance cover 
// return ==> healty, waightloss 

//arrays 
//length 
//push(),pop(),shift(),unshift()........

let num=[11,22,33,44,55,66]

// push()
// action - add the element to end of array
// return - new length  of array

let q1 = num.push('aa')
console.log(num)
console.log(q1)

// pop()
// action - remove the last element
// return -- returns the deleted element

let q2 = num.pop()
console.log(num)
console.log(q2)

// unshift()
// action - add the element at 0th index of array
// return - new length  of array 
let q3 = num.unshift('bb')
console.log(num)
console.log(q3)

//shift()
// action - remove the first element
// return -- returns the deleted element

let q4=num.shift()
console.log(num)
console.log(q4)

//loops
//for , while 
//              0           1        2  3     

let nums = ['dipanshu',"9922447802",23,true]


//          i<4
for(let i=0;i<nums.length;i++){      //i=0,1....3,4exit
    console.log(nums[i])            //nums[0],nums[1],....nums[3]
}

let j=0
while(j<nums.length){
    console.log(nums[j])
    j++
}

