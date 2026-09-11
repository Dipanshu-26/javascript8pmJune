let a=[10,20]
let b=[10,20]
console.log(a==b)

console.log(JSON.stringify(a)==JSON.stringify(b))
//---------------------------------------------------------------------
//retrive
let map1 = new Map([
    [1,'admin'],[2,"manager"],[3,"customer"]
    ])

console.log(map1)    

console.log(map1.get(1))

let q1=map1.get(2)
console.log(q1)

//add, update

map1.set(4,"trainee")
console.log(map1)

map1.set(4,"project manager")
console.log(map1)

//delete

let q2 = map1.delete(5)
console.log(q2)
console.log(map1)

//if key exists

console.log(map1.has(2))
console.log(map1.has(5))
//----------------------------------------------------------
for(let v of map1.values()){
    console.log(v)
}

for(let k of map1.keys()){
    console.log(k)
}

for(let e of map1.entries()){
    console.log(e)
}

for(let [k,v] of map1){
    console.log(`${k} : ${v}`)
}

//--------------------------------------------------------------

let response  = [                            //k   v
    {id : 1 , name : "aaa"},                //[1,"aaa"]
    {id : 2 , name : "bbb"},
    {id : 3 , name : "ccc"},
    {id : 4 , name : "ddd"},
    {id : 5 , name : "bbb"}
]

let map2=new Map()

response.forEach(function(el){
    //console.log(el)
    map2.set(el.id,el.name)
})

console.log(map2)