let btn=document.getElementById('button');
let btn2=document.getElementById('button2');
let btn3=document.getElementById('button3');
btn.onclick=function()
{
    
    let textoParrafo=document.getElementById('parrafo').innerHTML;
    let textoSeparado=textoParrafo.split(" ");

    for(let i=0;i<textoSeparado.length;i++)
    {
        if(i==0)
        {
            document.getElementById('parrafo').innerHTML="";
        }
        if (i== textoSeparado.length-1)
        {
            document.getElementById('parrafo').innerHTML +=textoSeparado[i].substr(0,1).toUpperCase()+
            textoSeparado[i].substr(1,textoSeparado[i].length).toLowerCase();
        }else
        {
            document.getElementById('parrafo').innerHTML +=textoSeparado[i].substr(0,1).toUpperCase()+
            textoSeparado[i].substr(1,textoSeparado[i].length).toLowerCase()+" ";
        }
        
    }
}
btn2.onclick=function()
{
    document.getElementById('parrafo').innerHTML=document.getElementById('parrafo').innerHTML.toUpperCase();
}
btn2.ondblclick=function()
{
    let fecha=new Date();
    document.getElementById('parrafo').innerHTML="Boing Boing, la fecha de hoy es: "+fecha.getDay()+"//"+fecha.getMonth()+"//"+fecha.getFullYear();
}

btn3.onclick=function()
{
    document.getElementById('parrafo').innerHTML=document.getElementById('parrafo').innerHTML.toLowerCase();
}

btn3.ondblclick=function()
{
    let hora=new Date();
    document.getElementById('parrafo').innerHTML="Boing Boing, son las: "+hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds()+":"+hora.getMilliseconds();
}
/*
function reloj()
{
    let hora2=new Date();
    document.getElementById("reloj").innerHTML=hora2.getHours()+":"+hora2.getMinutes()+":"+hora2.getSeconds()+":"+hora2.getMilliseconds();
    setTimeout("reloj()",1);
}
let n1=document.getElementById('n1');
let n2=document.getElementById('n2');
let n3=document.getElementById('n3');
let n4=document.getElementById('n4');
let n5=document.getElementById('n5');
let n6=document.getElementById('n6');
let n7=document.getElementById('n7');
let n8=document.getElementById('n8');
let n9=document.getElementById('n9');
let n0=document.getElementById('n0');

n1.onclick=function()
{

};
n2.onclick=function()
{

};
n3.onclick=function()
{

};
n4.onclick=function()
{

};
n5.onclick=function()
{

};
n6.onclick=function()
{

};
n7.onclick=function()
{

};
n8.onclick=function()
{

};
n9.onclick=function()
{

};
n0.onclick=function()
{

};*/
