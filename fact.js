let s=()=>{
    var a=document.getElementById("num").value;
    var b=fac(a);
    document.getElementById("ans").innerHTML=b;
};
let fac=(x)=>{
    if (x == 0 || x == 1)
    {
        return 1;
    }
    else {
        return x * fac(x - 1);
    }

};