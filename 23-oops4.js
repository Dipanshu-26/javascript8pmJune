//method overloading
//Method Overloading -- Same method name, same class, but different method signatures (number/type of parameters)
//Method Overriding -- Same method name, same signature, but in child class with inheritance.

//Method Overloading -- Same method name, same class, but different method signatures (number/type of parameters)

// import java.util.*;

// public class Main {
//     public static void main(String[] args) {
//       System.out.println("Hello, World!");
//       addition(1,2,3,4);
//       addition(10,20);
//       addition(11,22,33);
      
//     }

//     public static void addition(int x, int y){
//       System.out.println(x+y);
//     }

//     public static void addition(int x, int y,int z){
//       System.out.println(x+y+z);
//     }

//     public static void addition(int x, int y,int z, int a){
//       System.out.println(x+y+z+a);
//     }
// }

class calc{
    addition(x=undefined,y=undefined,z=undefined,a=undefined){
        if(x!=undefined && y!=undefined && z!=undefined && a!= undefined){
            console.log(x+y+z+a)
        }
        else if(x!=undefined && y!=undefined && z!=undefined){
            console.log(x+y+z)
        }
        else if(x!=undefined && y!=undefined) {
            console.log(x+y)
        }
        else {
            console.log("please enter 2 numbers")
        }
    }
}

let c1 = new calc()
c1.addition(10,20)
c1.addition(11,22,33)
c1.addition(1,2,3,4)

//------------------------------------------------------------------------------------------------------------------
//Method Overriding -- Same method name, same signature, but in child class with inheritance.

// class WorldBank{
//     loan(){
//         console.log("i am WB loan method")
//     }
//     save(){
//         console.log("i am WB save method")
//     }
// }

// class SBI{
//     loan(){
//         console.log("i am SBI loan method")
//     }
//     save(){
//         console.log("i am SBI save method")
//     }
// }

// let wb=new WorldBank()
// wb.save()
// wb.loan()

// let sbi=new SBI()
// sbi.loan()
// sbi.save()

//-----------------------------------------------------------------------------------------------------------

class WorldBank{
    loan(){
        console.log("i am WB loan method")
    }
    save(){
        console.log("i am WB save method")
    }
    loc(){
        console.log("india")
    }
}

class SBI extends WorldBank{
    loan(){
        console.log("i am SBI loan method")
    }
    save(){
        console.log("i am SBI save method")
    }
    loc(){
        console.log("india- sbi")
    }
}

let wb=new WorldBank()
wb.save()
wb.loan()

let sbi=new SBI()
sbi.loan()
sbi.save()
sbi.loc()