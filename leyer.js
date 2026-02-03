function dd(v){
    let f100 = 100;
    let s100 = 90;
    let f200 = 70;
    if(v <= 100){
        let t = v*f100;
        return t;
    }
    else if(v <= 200){
        let first100t = 100*f100;
        let rq = v-100;
        let remaining = rq*s100;
        let t = first100t + remaining;
        return t;
    }
    else{
        let first100t = 100*f100;
        let second100t = 100*s100;
        let rq = v - 200;
        let remaining = rq*f200;
        let t = first100t + second100t + remaining;
        return t;
    }
}
let a = dd(215);
console.log(a);