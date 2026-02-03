const a = [20000,16000,50000,100000,12000,30000,35000];

let bb = Math.min(...a);
console.log(bb);
let b = Math.max(...a);
console.log(b);

function dd(v){
    let mn = Infinity;
    for(const x of v){
        if(x<mn)
            mn = x;
    }
    return mn;
}
let a1 = dd(a);
console.log(a1);


let b1 = v =>{
    let mn = Infinity;
    for(const x of v){
        if(x<mn)
            mn = x;
    }
    return mn;
}
let b2 = b1(a);
console.log(b2);

let c = a.reduce((a,b) => a<b? a:b);
console.log(c);

m = Infinity;
m1 = Infinity;
a.forEach(v => v<m1? m1=v:0);
console.log("ok:",m1)

a.forEach(v => {
    v<m? m=v:m;
});
console.log(m);

a.forEach(v => {
    if(v<m)
        m=v;
})
console.log("Min:",m)