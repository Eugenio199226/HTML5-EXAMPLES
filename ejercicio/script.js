let borrar = document.getElementsByClassName('Borrar');
let cambio = document.getElementById('bach');
let borrar2 = document.getElementsByClassName('Borrar2');
for(let i=0;i<borrar.length;i++)
{
    borrar[i].onclick=function()
    {
        let idp=this.getAttribute('data-idp');
        document.getElementById(idp).innerHTML="";
    }
}

for(let i=0;i<borrar2.length;i++)
{
    borrar2[i].onclick=function()
    {
        let idp=this.getAttribute('data-idp');
        document.getElementById(idp).remove();
    }
}