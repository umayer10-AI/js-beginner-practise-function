const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

function findAveragePhonePrice(v){
    let s = 0,c=0;
    for(const x of v){
        s += x.price;
        if(x.price)
            c++;
    }
    return s/c;
}
let a = findAveragePhonePrice(phones);
console.log(a);

let a1 = v => {
    let s = 0,c=0;
    for(const x of v){
        s += x.price;
        if(x.price)
            c++;
    }
    return s/c;
}
let a2 = a1(phones);
console.log(a2);

let b = phones.reduce((a,b) => a+b.price,0)/phones.length;
console.log(b);

let s1=0;
phones.forEach(v => s1 += v.price);
console.log(s1/phones.length);

let s2=0;
let i=0;
while(i<phones.length){
    s2 += phones[i].price;
    i++;
}
console.log("While:",s2/phones.length);

const phone = phones.find(p => p.brand === "Oppo");
console.log(phone);

const k = phones.findIndex(v => v.brand === 'Oppo');
console.log(k);