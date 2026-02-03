function dd(v){
    if(v <= 100)
        return v*100;
    else if(v <= 200)
        return v*90;
    else
        return v*70;
}
let a = dd(200);
console.log(a);