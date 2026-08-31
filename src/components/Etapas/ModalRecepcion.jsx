import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Play
} from "lucide-react";


function ModalRecepcion({
  cerrar,
  language="ES"
}){


const [equipoActivo,setEquipoActivo]=useState(0);



const equipos=[

{
nombre:"Tanque Sifón",

imagen:
"https://penagos.com/wp-content/uploads/2021/02/Tanque-Sifon-penagos-wet-mill-coffee-beneficio-humedo-de-cafe-1024x1024.png",

descripcion:
"Equipo diseñado para la separación hidráulica del café cereza, permitiendo retirar materiales flotantes y mejorar la calidad del proceso.",

video:null

},


{
nombre:"Preclasificador 1.500",

imagen:
"http://penagos.com/wp-content/uploads/2020/04/precla-1500.jpg",

descripcion:
"Sistema encargado de separar frutos defectuosos, impurezas y materiales extraños antes del proceso de despulpado, garantizando mayor eficiencia y protección del equipo.",

video:
"https://www.youtube.com/embed/xKw69aSJXBs"

},



{
nombre:"Despedregador",

imagen:
"https://penagos.com/wp-content/uploads/2021/02/Despedregador-penagos-wet-mill-coffee-beneficio-humedo-de-cafe-1024x1024.png",

descripcion:
"Equipo diseñado para eliminar piedras y objetos pesados que pueden afectar el funcionamiento del sistema de despulpado y proteger la maquinaria.",

video:null

}


];



const equipo = equipos[equipoActivo];



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
w-full
max-w-[1150px]
max-h-[92vh]
overflow-y-auto
shadow-2xl
animate-in
fade-in
zoom-in
duration-300
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
transition-all
cursor-pointer
"

>

<X size={20}/>

</button>






<div className="
grid
lg:grid-cols-2
">







{/* IMAGEN EQUIPO */}

<div className="
bg-gradient-to-br
from-[#f4f6f8]
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

className="
w-full
h-[450px]
object-contain
transition-all
duration-500
hover:scale-110
"

alt={equipo.nombre}

/>


</div>









{/* INFORMACION */}

<div className="
p-8
lg:p-10
">



<h2 className="
text-3xl
font-black
text-[#171843]
leading-tight
">

{
language==="EN"
?
"Reception and cleaning of coffee cherries"
:
"Recepción y limpieza del café cereza"
}

</h2>





<p className="
mt-5
text-gray-600
leading-relaxed
">

{
language==="EN"
?
"With Penagos pre-classification systems you can improve your performance factor through a continuous and efficient process."
:
"Con los sistemas de preclasificación Penagos podrá mejorar su factor de rendimiento con un proceso continuo y sin complicaciones."
}

</p>








<h3 className="
mt-7
font-black
text-[#171843]
">

{
language==="EN"
?
"Additionally these systems:"
:
"Adicionalmente estos sistemas:"
}

</h3>







<div className="
mt-4
space-y-3
">


<div className="
flex
gap-3
items-start
">


<CheckCircle2
className="
text-[#00a4e4]
mt-1
shrink-0
"
/>


<p className="
text-gray-600
">

Separan los granos de café defectuosos para garantizar una buena calidad en taza.

</p>


</div>





<div className="
flex
gap-3
items-start
">


<CheckCircle2
className="
text-[#00a4e4]
mt-1
shrink-0
"
/>


<p className="
text-gray-600
">

Protegen su equipo de despulpado de objetos extraños, previniendo daños mecánicos en el grano.

</p>


</div>



</div>









{/* TABS EQUIPOS */}


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
text-sm
font-bold
transition-all
duration-300
cursor-pointer
border


${
equipoActivo===index

?

"bg-[#171843] text-white border-[#171843] shadow-lg scale-105"

:

"bg-white text-gray-600 border-gray-200 hover:border-[#00a4e4] hover:text-[#00a4e4]"

}

`}

>

{item.nombre}


</button>


))

}


</div>









{/* EQUIPO SELECCIONADO */}


<div className="
mt-8
border-t
pt-6
">


<div className="
flex
items-center
gap-3
">


<div className="
w-3
h-3
rounded-full
bg-[#00a4e4]
">
</div>


<h3 className="
text-2xl
font-black
text-[#171843]
">

{equipo.nombre}

</h3>


</div>





<p className="
mt-4
text-gray-600
leading-relaxed
">

{equipo.descripcion}

</p>



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
mb-4
">

<Play size={20}/>

Video del equipo

</div>




<iframe

src={equipo.video}

className="
w-full
h-[260px]
rounded-2xl
shadow-lg
border
border-gray-200
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


export default ModalRecepcion;