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
            document.getElementById('parrafo').innerHTML +=textoSeparado[i].substr(0,1).toUpperCase()+textoSeparado[i].substr(1,textoSeparado[i].length);
        }else
        {
            document.getElementById('parrafo').innerHTML +=textoSeparado[i].substr(0,1).toUpperCase()+textoSeparado[i].substr(1,textoSeparado[i].length)+" ";
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
    document.getElementById('parrafo').innerHTML="Boing Boing, la hora de hoy es: "+hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds()+":"+hora.getMilliseconds();
}

function reloj()
{
    let hora=new Date();
    document.getElementById("reloj").innerHTML=+hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    setTimeout("reloj()",1000);
}
