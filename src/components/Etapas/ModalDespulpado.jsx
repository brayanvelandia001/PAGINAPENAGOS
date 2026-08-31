import React, { useState } from "react";
import {
X,
CheckCircle2,
Play
} from "lucide-react";


function ModalDespulpado({
cerrar,
language="ES"
}){


const [equipoActivo,setEquipoActivo]=useState(0);



const equipos=[


{
nombre:"UDC 7500 Bourbon",

imagen:
"https://penagos.com/wp-content/uploads/2021/02/UDC-7500-Bourbon-1024x1024.png",


descripcion:
"Unidad diseñada para despulpar, clasificar, limpiar y desmucilaginar cafés mezclados, entregando alta calidad con cero consumo de agua en el despulpado.",


beneficios:[

"Ideal para despulpar, clasificar, limpiar y desmucilaginar cafés mezclados hasta con un 20% de café verde.",

"Eficiencia en el despulpado gracias a su sistema exclusivo de pecheros vibro elásticos.",

"Mejor selección del café mediante su criba limpiadora.",

"Entrega dos calidades de café gracias al nuevo diseño de la limpiadora.",

"Mayor capacidad de procesamiento en un equipo compacto.",

"Entrega un grano más limpio con mínimo daño mecánico.",

"Adaptable a condiciones cambiantes de cosecha."

],


video:
"https://www.youtube.com/embed/yKxa7L1bJDI"

},





{
nombre:"UCBE 5000",

imagen:
"https://penagos.com/wp-content/uploads/2021/02/UCBE-5000-1024x1024.png",


descripcion:
"Unidad compacta de beneficio ecológico diseñada para despulpar, clasificar y desmucilaginar cafés de recolección selectiva con bajo consumo de agua y energía.",



beneficios:[

"Ideal para despulpar, clasificar y desmucilaginar cafés de recolección selectiva.",

"Máximo rendimiento gracias a su alta eficiencia de despulpe.",

"Reduce el consumo de agua utilizando únicamente 0.2 litros por kilo de café cereza maduro.",

"Conserva las condiciones naturales de la pulpa.",

"Bajo consumo energético.",

"Incluye DELVA para remover mecánicamente el mucílago.",

"Incluye sinfín para transportar y mezclar pulpa y mucílago."

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
">


<img

key={equipo.imagen}

src={equipo.imagen}

className="
w-full
h-[430px]
object-contain
transition-all
duration-500
hover:scale-110
"

alt={equipo.nombre}

/>


</div>







{/* CONTENIDO */}


<div className="p-8">



<h2 className="
text-3xl
font-black
text-[#171843]
">

Despulpado y Clasificación

</h2>




<p className="
mt-5
text-gray-600
leading-relaxed
">

Presentamos nuestra tecnología para despulpar, clasificar, limpiar y lavar el café, con mínimos consumos de agua y energía y la máxima calidad Penagos.

</p>






{/* TABS */}

<div className="
mt-8
flex
gap-3
flex-wrap
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
transition
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







{/* EQUIPO */}

<div className="
mt-7
border-t
pt-5
">


<h3 className="
text-2xl
font-black
text-[#171843]
">

{equipo.nombre}

</h3>



<p className="
mt-3
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

className="
w-full
h-[250px]
rounded-2xl
shadow-lg
"

allowFullScreen

title={equipo.nombre}

/>



</div>


}



</div>


</div>



</div>



</div>


)

}


export default ModalDespulpado;