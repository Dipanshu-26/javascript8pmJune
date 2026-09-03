// Strings
 
//trim(), trimStart(), trimEnd(), slice(), split()
// repeat(), charAt() , charCodeAt(), replace() , replaceAll(), // join()
// split() 
// padEnd()
    //(method) String.padEnd(maxLength: number, fillString?: string | undefined): string

//padStart()    
//(method) String.padStart(maxLength: number, fillString?: string | undefined): string


//trim()

let s1="   goa    "
console.log(s1.length)

console.log(s1.trim())
console.log(s1.trimStart())
console.log(s1.trimEnd())

// padEnd()
    //(method) String.padEnd(maxLength: number, fillString?: string | undefined): string

let s2="pune"
console.log(s2.padEnd(10,"-"))
console.log(s2.padEnd(10,"_"))

console.log(s2.padStart(10,"-"))
console.log(s2.padStart(10,"#"))

//join ==> array,  converts in string
// split ==>string  converts in array

let arr = ['d','i','p','a','n','s','h','u']

console.log(arr.join("-"))
console.log(arr.join(" "))
console.log(arr.join(""))

let s3="dipanshu-nitin-chawde"
console.log(s3.split("-"))

let str2 = "20/-rs" 

console.log(str2.split("/")[0])