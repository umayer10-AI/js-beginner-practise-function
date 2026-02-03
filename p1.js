const heights2 = [167, 190, 120, 165, 137];

let a = Math.min(...heights2);
console.log(a);

let a1 = v => {
    let mn = Infinity;
    for(const x of v){
        if(x<mn)
            mn=x;
    }
    return mn;
}
let a2 = a1(heights2);
console.log(a2);

const min = heights2.reduce((a,b) => a<b ? a : b);
console.log(min);