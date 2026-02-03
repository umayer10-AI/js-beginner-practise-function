const m = [
    {name: "Samsung", price: 20000, camera: '12mp', color: 'black'},
    {name: "Xaomi", price: 18000, camera: '12mp', color: 'black'},
    {name: "Oppo", price: 30000, camera: '12mp', color: 'black'},
    {name: "Iphone", price: 100000, camera: '12mp', color: 'black'},
    {name: "Walton", price: 31000, camera: '12mp', color: 'black'},
    {name: "HTC", price: 27000, camera: '12mp', color: 'black'},
];


function dd(p){
    let mn = p[0];
    for(const x of p){
        if(x.price<mn.price)
            mn = x;
    }
    return mn;
}
let c = dd(m);
console.log(c);

const a = v => {
    let mx = v[0];
    for(const x of v){
        if(x.price>mx.price)
            mx = x;
    }
    return mx;
}
let a1 = a(m);
console.log(a1);

let mx = m[0];
m.forEach(v => {
    if(v.price>mx.price){
        mx = v;
    }
});
console.log(mx);

const f = m.reduce((a,b) => a.price<b.price? a:b)
console.log(f);

const g = Math.max(...m.map(v => v.price));
console.log(g);