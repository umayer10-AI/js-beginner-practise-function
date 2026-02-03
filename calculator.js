function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function cal(a,b,operation){
    if(operation === 'add')
        return add(a,b);
    else if(operation === 'sub')
        return sub(a,b);
    else if(operation === 'mul')
        return mul(a,b);
    else if(operation === 'div')
        return div(a,b);
    else
        return "Only 'add', 'sub','mul','div' operation allowed";
}

const a = cal(5,10,'add');
console.log(a);
const b = cal(5,10,'sub');
console.log(b);
const c = cal(5,10,'mul');
console.log(c);
const d = cal(5,10,'div');
console.log(d);