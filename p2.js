const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function dd(v){
    let s = heights2[0];
    for(const x of v){
        if(x.length<s.length)
            s = x;
    }
    return s;
}
let a = dd(heights2);
console.log(a);

let b = v => {
    let s = heights2[0];
    for(const x of v){
        if(x.length<s.length)
            s = x;
    }
    return s;
}
let b1 = b(heights2);
console.log(b1);

let c1 = heights2.reduce((a,b) => a.length<b.length? a:b);
console.log(c1);

let mn = heights2[0];
heights2.forEach(v => {
    if(v.length<mn.length)
        mn = v;
});
console.log(mn);