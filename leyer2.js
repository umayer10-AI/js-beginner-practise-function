function dd(v){
    const a = 100;
    const b = 90;
    const c = 70;

    if(v <= 100){
        return v*a;
    }
    else if(v <= 200){
        let a1 = 100*a;
        let b1 = v-100;
        let c1 = b1*90;
        return a1+c1;
    }
    else{
        let a1 = 100*a;
        let b1 = 100*b;
        let c1 = v-200;
        let d1 = c1*c;
        return a1+b1+d1;
    }
}
let h = dd(250);
console.log(h);