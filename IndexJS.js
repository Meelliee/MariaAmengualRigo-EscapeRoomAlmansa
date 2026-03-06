/*Defino el array: */
const diapositivas=[
    {
        fondo: "Imagenes/FondoCastillo.png",
        arriba: "Imagenes/Silueta.png",
        categoria: "Categoría: Thriller/Acción",
        titulo:"La oscuridad del Castillo",
        texto: "Cuando la peste devore la ciudad, solo quienes se atreven a cruzar la oscuridad pueden aspirar a ver un nuevo amanecer.",
        boton: "Más información"
    },
    {
        fondo: "Imagenes/FondoPantano.png",
        arriba: "Imagenes/Espiritu.png",
        categoria: "Categoría: Misterio/Fantasía",
        titulo: "El susurro de las aguas",
        texto: "Donde el agua cubrió un pueblo, nació un misterio... y ahora os invita a descubrir la historia que hubo detrás de todo eso.",
        boton: "Más información"
    },
    {
        fondo: "Imagenes/FondoExorcismo.png",
        arriba: "Imagenes/Niña.png",
        categoria: "Categoría: Terror/Horror",
        titulo: "El exorcismo de Almansa",
        texto: "Lo que quedó a mitad no duerme...aún respira oculto, aguardando el momento de reclamar lo que una vez le fue negado.",
        boton: "Más información"
    } 
];

/*Seguramente no sea la forma más eficiente, pero es la única que se me ha ocurrido porque no tengo más cabeza*/
const imgFondo = document.querySelector(".capaFondo");
const imgArriba = document.querySelector(".capaArriba");
const spantexto = document.querySelector(".subtitulo");
const titulo = document.querySelector(".contenido h1");
const parrafo = document.querySelector(".contenido p");
const boton = document.querySelector(".contenido button");

const botonIzq = document.querySelector(".flechaIzquierda");
const botonDer = document.querySelector(".flechaDerecha");


let indice = 0;

function vistaDiapositivas(){
    const diapositiva = diapositivas[indice];
    imgFondo.src = diapositiva.fondo;
    imgArriba.src = diapositiva.arriba;
    spantexto.textContent = diapositiva.categoria;
    titulo.textContent = diapositiva.titulo;
    parrafo.textContent = diapositiva.texto;
    boton.textContent = diapositiva.boton;
}

if(botonDer != null && botonIzq !=null){
    botonDer.addEventListener("click",()=>{
        indice = (indice + 1) % diapositivas.length;
        vistaDiapositivas();
    });

    botonIzq.addEventListener("click",()=>{
        indice = ((indice - 1)+diapositivas.length) % diapositivas.length;
        vistaDiapositivas();
    });
}




/*Se me ha ocurrido la brillante idea de intentar hacer una pequeña animación con las imagenes de las secciones*/
const secciones= document.querySelectorAll(".seccion");


window.addEventListener("scroll", ()=>{
    secciones.forEach(seccion =>{
        const imagenFo = seccion.querySelector("img");
        const rect = seccion.getBoundingClientRect();

        let movimiento = rect.top * 0.3;
        let limite = 50;
        if(movimiento>limite) movimiento=limite;
        if(movimiento<-limite) movimiento=-limite;
        imagenFo.style.transform = "translateY(" + movimiento + "px)";
    
    
    /*Vale, si o si necesito poner limites */
    });
});





/*Quiero que al darle click al boton de Pantano, me aparezca un farol*/
const acepto=document.getElementById("aceptoBoton");
const imagen = document.querySelector(".farol");

acepto.addEventListener("click", () =>{
    imagen.style.display = (imagen.style.display == 'none')? 'inline':'none';
});



/*Ahora quiero que se pueda mover el farol y arrastrar*/
