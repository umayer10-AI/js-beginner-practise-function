const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

function dd(v){
    let s = 0;
    for(const x of v){
        s += x.starting + x.increment*x.experience;
    }
    return s;
}
let a = dd(employees);
console.log(a);

const b = v => {
    let s = 0;
    for(const x of v){
        s += x.starting + x.increment * x.experience;
    }
    return s;
}
let b1 = b(employees);
console.log(b1);

let c = employees.reduce((a,b) => a+(b.starting+b.increment*b.experience),0);
console.log(c);

let s = 0;
employees.forEach(a => s += a.starting + a.increment * a.experience);
console.log("Now:",s);

let s1 = 0;
for(let i=0;i<employees.length;i++){
    s1 += employees[i].starting + employees[i].increment * employees[i].experience;
}
console.log('loop:',s1);

let s2 = 0;
let i=0;
while(i<employees.length){
    s2 += employees[i].starting + employees[i].increment * employees[i].experience;
    i++;
}
console.log("While:",s2);

let s3 = 0;
let j=0;
do{
    s3 += employees[j].starting + employees[j].increment * employees[j].experience;
    j++;
}while(j<employees.length);
console.log("Do-while:",s3);