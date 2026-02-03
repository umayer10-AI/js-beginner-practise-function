let add = (a,b) =>{
    return a+b;
}
let sub = (a,b) =>{
    return a-b;
}
let mul = (a,b) =>{
    return a*b;
}
let div = (a,b) =>{
    return a/b;
}
let cal = (a,b,w) =>{
    if(w === 'add')
        return add(a,b);
    else if(w === 'sub')
        return sub(a,b);
    else if(w === 'mul')
        return mul(a,b);
    else if(w === 'div')
        return div(a,b);
    else
        return "Only 'add', 'sub','mul','div' operation allowed";
}

let a1 = cal(5,10,'add');
console.log(a1);
let b1 = cal(5,10,'sub');
console.log(b1);
let c1 = cal(5,10,'mul');
console.log(c1);
let d1 = cal(5,10,'div');
console.log(d1);