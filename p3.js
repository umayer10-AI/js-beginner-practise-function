function calculateElectronicsBudget(a,b,c){
    let laptop = 35000;
    let tablet = 15000;
    let mobile = 20000;
    return laptop*a + tablet*b + mobile*c;
}
let a = calculateElectronicsBudget(1,2,3);
console.log(a);

const b = (a,b,c) => a*35000 + b*15000 + c*20000;
console.log(b(1,2,3));