/*Defino el array: */
const diapositivas=[
    {
        fondo: "Imagenes/FondoCastillo.png",
        arriba: "Imagenes/Silueta.png",
        categoria: "Categoría: Thriller/Acción",
        titulo:"La oscuridad del Castillo",
        texto: "Cuando la peste devore la ciudad, solo quienes se atreven a cruzar la oscuridad pueden aspirar a ver un nuevo amanecer.",
        enlaces: "index.html"
    },
    {
        fondo: "Imagenes/FondoPantano.png",
        arriba: "Imagenes/Espiritu.png",
        categoria: "Categoría: Misterio/Fantasía",
        titulo: "El susurro de las aguas",
        texto: "Donde el agua cubrió un pueblo, nació un misterio... y ahora os invita a descubrir la historia que hubo detrás de todo eso.",
        enlaces: "PruebaPantano.html"
    },
    {
        fondo: "Imagenes/FondoExorcismo.png",
        arriba: "Imagenes/Niña.png",
        categoria: "Categoría: Terror/Horror",
        titulo: "El exorcismo de Almansa",
        texto: "Lo que quedó a mitad no duerme...aún respira oculto, aguardando el momento de reclamar lo que una vez le fue negado.",
        enlaces:"index.html"
    } 
];

/*Seguramente no sea la forma más eficiente, pero es la única que se me ha ocurrido porque no tengo más cabeza*/
const imgFondo = document.querySelector(".capaFondo");
const imgArriba = document.querySelector(".capaArriba");
const spantexto = document.querySelector(".subtitulo");
const titulo = document.querySelector(".contenido h1");
const parrafo = document.querySelector(".contenido p");
const boton = document.querySelector(".button");

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
    boton.href = diapositiva.enlaces;
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


/*El movimiento de las secciones me lleva a la determinacion de si podré mover la 
imagen de arriba del carrusel y moverlo en el eje x*/
if(botonDer != null && botonIzq !=null){
    const zona=  document.querySelector(".carrusel");
    const capaArriba = document.querySelector(".capaArriba");
        /*Quiero que la imagen siga un poco la direccion del raton */
        zona.addEventListener("mousemove", function(e) { 
            const rect = zona.getBoundingClientRect();
    
            let offsetX = e.clientX - rect.left - 100;
            capaArriba.style.left = offsetX + "px";
        })
}; /*Asi no se raya la imagen pero se va de la zona, deberia poner unos limites pero no se establecerlos bien */


/*Se me ha ocurrido la brillante idea de intentar hacer una pequeña animación con las imagenes de las secciones*/
const secciones= document.querySelectorAll(".seccion");


window.addEventListener("scroll", ()=>{
    secciones.forEach(seccion =>{
        const imagenFo = seccion.querySelector("img");
        const rect = seccion.getBoundingClientRect();
    
    
        /*Vale, si o si necesito poner limites */
        let movimiento = rect.top * 0.3;
        let limite = 50;
        if(movimiento>limite) movimiento=limite;
        if(movimiento<-limite) movimiento=-limite;
        imagenFo.style.transform = "translateY(" + movimiento + "px)";
    })
})



/*Quiero que al darle click al boton de Pantano, me aparezca un farol*/
    const acepto=document.getElementById("aceptoBoton");
    const farolillo = document.querySelector(".farol");
    let farolEncendido = false;
    const ocultar = document.querySelector(".oculto");

if(acepto !=null && farolillo!=null && ocultar!=null){
    acepto.addEventListener("click", () =>{
        /*Vale, ahora mismo es dificil leer las letras como tal, asi que se me ha ocurrido tornar mi pagina en negro para encontrar las letras con el farol*/
        farolillo.style.display = "inline";
        ocultar.style.display="flex";
    });

    /*He encontrado la manera de hacer que el farol brille y he querido hacer lo mismo que con el boton, basicamente
    que aplique la propiedad filter drop-shadow para encender o none para apagar el farol. */
    farolillo.addEventListener("click", () =>{
        if(farolEncendido == false){
            farolillo.style.filter = "drop-shadow(0 0 50px rgba(255,220,120,0.8))";
            farolEncendido =true; /*Quiero que se revelen las letras solo si el farol esta encendido, asi que vuelvo con los interruptores */
        }else{
            farolillo.style.filter="none";
            farolEncendido = false;
        }
    });
}




/*La idea es crear un mensaje oculto de los textos que estan creados, intento usar drag and drop para esto */
/*Vale, el problema de este codigo es que el cursor esta como bloqueado porque obviamente pues no lo estamos soltando,
Voy a dejar este codigo comentado aunque no lo use, porque tarde un rato y ya me servira para algo. */
   /*  let elementoArrastrado = null;
    const farol = document.querySelector(".farol");
    const parrafosHistoria = document.querySelectorAll(".historiaSeccion p, .historiaSeccionInversa p");

    
    farol.addEventListener("dragstart", function (){
        elementoArrastrado = farol;
    });

        for(let parrafo of parrafosHistoria){
            parrafo.addEventListener("dragover", function (e){
                e.preventDefault(); 
                
                if(elementoArrastrado == farol && farolEncendido==true){ /*Para que se revelen solo si el farol esta iluminado*/
                 /*   parrafo.classList.add("textoGris")
               }
            });
     parrafo.addEventListener("drop", function(e){
        });
        } 

    }*/

        /*Voy a intentar que el farol siga al raton en lugar de hacerlo con drag and drop */
    const farol=document.querySelector(".farol");
    const zona = document.querySelector(".introduccion");
    const parrafosHistoria = document.querySelectorAll(".historiaSeccion p, .historiaSeccionInversa p");


    if(farol!=null){
        zona.addEventListener("mousemove", function(e) {
            const rect = zona.getBoundingClientRect();
            let offsetX =e.clientX - rect.left - 25;
            let offsetY = e.clientY - rect.top - 35;

            farol.style.left = offsetX + "px";
            farol.style.top = offsetY + "px";
            
            if(farolEncendido==true){
                /*Quiero saber el tamaño del farol y el tamaño del parrafo para saber cuando el farol toca el parrafo y cuando no*/
                const rectFarol = farol.getBoundingClientRect(); 
                
                /*Para que se revelen solo si el farol esta iluminado*/
                for(let parrafo of parrafosHistoria){
                    const rectParrafo= parrafo.getBoundingClientRect(); /*Vale y ahora tendre que establecer pues 1. cuando el lado derecho del farol haya pasado el lado iz del parrafo// 2. Cuando el lado izq del farol esté antes que el lado derecho del p */
                    if(rectFarol.right>rectParrafo.left && rectFarol.left<rectParrafo.right && rectFarol.bottom>rectParrafo.top && rectFarol.top < rectParrafo.bottom ){ /*3. cuando la parte de abajo del farol este mas baja que la parte de arriba del parrafo// 4. Cuando la parte de arriba del farol este antes de la parte de abajo del parrafo */
                        parrafo.classList.add("textoGris");
                    }
                }
            }
        });

    }
    /*Como me ha salido guay, voy a intentar mejorar la animación de la capa de arriba, que ahora mismo, se raya*/
    /*Vale, nuevo problema, ahora lo que pasa es que se destacan todas las letras rojas a la vez y yo quiero que sea cuando
    pasamos el raton por encima. Me voy a basar un poco en mi ejemplo anterior de drag and drop */


    /*Quiero que aparezca el anciano al darle el boton */