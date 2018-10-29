let notasMusicales=[
{nombre:"do", sound:"./wav/c1.wav",tipo:"tecla_B"},
{nombre:"doS", sound:"./wav/c1s.wav",tipo:"tecla_N"},
{nombre:"re", sound:"./wav/d1.wav",tipo:"tecla_B"},
{nombre:"re", sound:"./wav/d1s.wav",tipo:"tecla_N"},
{nombre:"mi", sound:"./wav/e1.wav",tipo:"tecla_B"},
{nombre:"fa", sound:"./wav/f1.wav",tipo:"tecla_B"},
{nombre:"faS", sound:"./wav/f1s.wav",tipo:"tecla_N"},
{nombre:"sol", sound:"./wav/g1.wav",tipo:"tecla_B"},
{nombre:"solS", sound:"./wav/g1s.wav",tipo:"tecla_N"},
{nombre:"la", sound:"./wav/a1.wav",tipo:"tecla_B"},
{nombre:"laS", sound:"./wav/a1.wav",tipo:"tecla_N"},
{nombre:"si", sound:"./wav/b1.wav",tipo:"tecla_B"},
];
/*<div class="tecla_B" id="do"></div>
<div class="tecla_N" id=""></div>
<div class="tecla_B"  id="re"></div>
<div class="tecla_N" id=""></div>
<div class="tecla_B"  id="mi"></div>
<div class="tecla_B"  id="fa"></div>
<div class="tecla_N" id=""></div>
<div class="tecla_B"  id="sol"></div>
<div class="tecla_N" id=""></div>
<div class="tecla_B"  id="si"></div>
<div class="tecla_N" id=""></div>
<div class="tecla_B"  id="la"></div>
{nombre:"doS", sound:"./wav/c1s.wav",tipo:"tecla_N"}
{nombre:"re", sound="./d1",tipo="Tono"},
{nombre:"re", sound="./d1s",tipo="Semitono"},
{nombre:"mi", sound="./e1",tipo="Tono"},
{nombre:"fa", sound="./f1",tipo="Tono"},
{nombre:"fa", sound="./f1s",tipo="Semitono"},
{nombre:"sol", sound="./g1",tipo="Tono"},
{nombre:"sol", sound="./g1s",tipo="SemiTono"},
];*/

function generacionPiano(notas)
{
    let teclado=document.getElementById("teclado");
    for(let i=0;i<notas.length;i++)
    {
        teclado.innerHTML +=`
        <div class="${notas[i].tipo} click" id="${notas[i].nombre}">
        <audio class="player" src="${notas[i].sound}"></audio>
        </div>
        `
    }
    let teclas=document.getElementsByClassName('click');
    play(teclas)
}

function play(teclas)
{
    let audios=document.getElementsByClassName('player');
    for(let i=0;i<teclas.length;i++)
    {
        teclas[i].onclick=function()
        {
            audios[i].play();
        }
    }
}


generacionPiano(notasMusicales);