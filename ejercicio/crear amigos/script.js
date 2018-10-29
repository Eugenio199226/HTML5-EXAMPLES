
let amigos=
[
 {name:'Ricardo',email:'1@2'},
 {name:'Andres',email:'1@2'},
 {name:'Teresa',email:'1@2'},
 {name:'Santiago',email:'1@2'},
 {name:'Montoya',email:'1@2'}
];

function mensaje(saludabtn,datavalue){

    for(let i=0;i<amigos.length;i++)
    {
        saludabtn[i].onclick=function()
        {
            alert(this.getAttribute(datavalue));
        }
    }

}

function parseaAmigos(amigos,listamigos)
{
    for(let i=0;i<amigos.length;i++)
    {
        //listaAmigos.innerHTML +="<li> <span class='espinete'>"
        //listaAmigos.innerHTML +=amigos[i].name;
        //listaAmigos.innerHTML +="</span></li>"
        listamigos.innerHTML +=`
        <li id="hola${i}">
                <div class="espinete">${amigos[i].name}</div>
                <div class="espinete">${amigos[i].email}</div>
                <button class="saluda" data-value="Hola me llamo,${amigos[i].name}">Saluda</button>
        </li>`;
    }
    let saludabtn=document.getElementsByClassName("saluda");
    mensaje(saludabtn,'data-value');
}
parseaAmigos(amigos,document.getElementById('listaAmigos'));

