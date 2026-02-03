const a = (a,b,c) => {
    if(a>b && a>c)
        return 'Umayer';
    else if(b>a && b>c)
        return 'Ahmad';
    else
        return 'Umayer Boss';
}
let b = a(100,200,300);
console.log(b);