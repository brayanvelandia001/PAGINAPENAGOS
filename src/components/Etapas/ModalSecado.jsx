import React, {useState} from "react";
import {
X,
CheckCircle2,
Play
} from "lucide-react";


function ModalSecado({
cerrar,
language="ES"
}){


const [equipoActivo,setEquipoActivo]=useState(0);



const equipos=[


{

nombre:"Ecodryer",

imagen:
"https://penagos.com/wp-content/uploads/2021/02/Secadora-de-cafe-Penagos-ECODRYER-1024x1024.png",


descripcion:

"Secadora versátil y eficiente diseñada para lograr un excelente secado del café con bajos consumos de energía.",


beneficios:[

"Alta uniformidad de secado por su sistema automático que nivela y mezcla la capa de café.",

"No contamina el grano gracias al uso de intercambiadores de calor y paredes en acero inoxidable.",

"Permite inspeccionar el proceso de principio a fin con iluminación LED en cada sección.",

"Descarga semiautomática al finalizar el proceso de secado."

],


video:
"https://www.youtube.com/embed/M2RwtS2a7tc"


},






{

nombre:"Secadora tipo Guardiola",


imagen:
"https://penagos.com/wp-content/uploads/2021/02/Secadora-Tipo-Guardiola-web-1024x1024.png",



descripcion:

"Equipo diseñado para un secado eficiente mediante mayores volúmenes de aire y sistemas de control automático.",



beneficios:[

"Mayor eficiencia de secado debido a los grandes volúmenes de aire.",

"Sistema de combustión para cascarilla, madera, diésel y gas.",

"Capacidades desde 1 metro cúbico hasta 15 metros cúbicos.",

"Operación y mantenimiento fácil, segura y sencilla.",

"Sistemas automáticos de control de temperatura."

],


video:null


},






{

nombre:"Secadora tipo Silo",


imagen:
"https://penagos.com/wp-content/uploads/2021/02/Secadora-Tipo-Silo-1024x1024.png",



descripcion:

"Solución eficiente para facilitar el proceso de secado sin importar las condiciones climáticas.",



beneficios:[

"Facilita el proceso de secado ante cambios de clima.",

"Disminuye los tiempos de secado.",

"Reduce costos de mano de obra.",

"Requiere menor área para secado.",

"Consumo de gas optimizado: 18 litros / 25 Kg de café pergamino seco."

],


video:null


}



];



const equipo=equipos[equipoActivo];



return(


<div className="
fixed
inset-0
z-[9999]
bg-black/70
backdrop-blur-sm
flex
items-center
justify-center
p-4
">



<div className="
relative
bg-white
rounded-[35px]
max-w-[1150px]
w-full
max-h-[92vh]
overflow-y-auto
shadow-2xl
">





<button

onClick={cerrar}

className="
absolute
right-6
top-6
z-30
bg-white
text-[#171843]
rounded-full
p-3
shadow-xl
hover:bg-[#171843]
hover:text-white
transition
cursor-pointer
"

>

<X size={20}/>

</button>






<div className="
grid
lg:grid-cols-2
">







{/* IMAGEN */}

<div className="
bg-gradient-to-br
from-[#f5f7f9]
to-white
p-10
flex
items-center
justify-center
overflow-hidden
">


<img

key={equipo.imagen}

src={equipo.imagen}

alt={equipo.nombre}

className="
w-full
h-[430px]
object-contain
transition-all
duration-500
hover:scale-110
"

/>



</div>









{/* INFORMACION */}

<div className="p-8">



<h2 className="
text-3xl
font-black
text-[#171843]
">

Secado de café

</h2>




<p className="
mt-5
text-gray-600
leading-relaxed
">

Equipos versátiles y eficientes, diseñados para un excelente secado con bajos consumos de energía.

</p>







{/* TABS */}


<div className="
mt-8
flex
flex-wrap
gap-3
">


{

equipos.map((item,index)=>(


<button

key={index}

onClick={()=>setEquipoActivo(index)}

className={`

px-5
py-3
rounded-full
font-bold
text-sm
transition-all
cursor-pointer


${
equipoActivo===index

?

"bg-[#171843] text-white shadow-lg scale-105"

:

"bg-gray-100 text-gray-600 hover:bg-[#00a4e4] hover:text-white"

}

`}

>


{item.nombre}


</button>


))


}



</div>








{/* EQUIPO ACTUAL */}


<div className="
mt-8
border-t
pt-6
">


<h3 className="
text-2xl
font-black
text-[#171843]
">

{equipo.nombre}

</h3>



<p className="
mt-4
text-gray-600
">

{equipo.descripcion}

</p>



</div>









{/* BENEFICIOS */}



<div className="
mt-6
space-y-3
">


{

equipo.beneficios.map((item,index)=>(


<div

key={index}

className="
flex
gap-3
items-start
"

>


<CheckCircle2

size={18}

className="
text-[#00a4e4]
mt-1
shrink-0
"

/>


<p className="
text-gray-600
">

{item}

</p>


</div>


))


}


</div>








{/* VIDEO */}


{

equipo.video &&


<div className="
mt-8
">


<div className="
flex
items-center
gap-2
font-bold
text-[#171843]
mb-3
">

<Play size={18}/>

Video del equipo

</div>




<iframe

src={equipo.video}

title={equipo.nombre}

className="
w-full
h-[250px]
rounded-2xl
shadow-lg
"

allowFullScreen

/>


</div>


}




</div>


</div>




</div>



</div>


)

}



export default ModalSecado;