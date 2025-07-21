let i,j;
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(j.toString())
    }
    process.stdout.write("\n");
}
for(let a=4;a>=1;a--){
    for(let b=1;b<=a;b++){
        process.stdout.write(b.toString())
    }
    process.stdout.write("\n");
}
for(let m=1;m<=5;m++){
    for(p=5;p>m;p--){
        process.stdout.write(" ");
    }
    for(let n=m;n>=1;n--){
        process.stdout.write(n.toString());
    }
    process.stdout.write("\n");
}
for(let x=4;x>=1;x--){
    for(let z=5;z>x;z--){
        process.stdout.write(" ");
    }
    for(let y=x;y>=1;y--){
        process.stdout.write(y.toString());
    }
    process.stdout.write("\n");
}