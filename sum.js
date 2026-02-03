const p = [
    {name: 'Shampoo', price: 300},
    {name: 'Chiruni', price: 100},
    {name: 'Shirt', price: 700},
    {name: 'Pent', price: 1200}
];

function dd(v){
    let s=0;
    for(const x of v){
        s += x.price;
    }
    return s;
}
let b = dd(p);
console.log("Sum:",b);

const a = v => {
    let s=0;
    for(const x of v){
        s += x.price;
    }
    return s;
}
let a1 = a(p);
console.log("Sum:",a1);

let aa = p.reduce((a,b) => a+b.price,0);
console.log("New sum:",aa);

let s=0;
p.forEach(v =>{
    s += v.price;
})
console.log("foreach sum:",s);