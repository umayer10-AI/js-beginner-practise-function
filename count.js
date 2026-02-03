function dd(c,t,b){
    let cc = c*3;
    let tt = t*10;
    let bb = b*50;

    return cc+tt+bb;
}
let a = dd(0,0,1);
console.log("Wood Needed:",a);

const f = (c,t,b) => {
    let cc = c*500;
    let tt = t*300;
    let bb = b*900;

    return cc+tt+bb;
}
let a1 = f(1,2,3);
console.log("Shop:",a1);