const a = [65,66,68,72,78,60,65,66];

let b = Math.max(...a);
console.log(b);
let bb = Math.min(...a);
console.log(bb);

function dd(v){
    let mx = -Infinity;
    for(const x of v){
        if(x>mx)
            mx = x;
    }
    return mx;
}
let a1 = dd(a);
console.log(a1);


let b1 = v =>{
    let mx = -Infinity;
    for(const x of v){
        if(x>mx)
            mx = x;
    }
    return mx;
}
let b2 = b1(a);
console.log(b2);

let c = a.reduce((a,b) => a>b? a:b);
console.log(c);

m = -Infinity;
m1 = -Infinity;
a.forEach(v => v>m1? m1=v:0);
console.log("ok:",m1)

a.forEach(v => {
    v>m? m=v:m;
});
console.log(m);