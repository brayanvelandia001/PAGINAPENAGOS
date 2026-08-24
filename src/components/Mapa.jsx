import Header from "../components/Header";


function Mapa(){


return(

<>


<Header/>


<main className="bg-white">


<section
className="
bg-[#07133d]
py-24
text-center
"
>


<span
className="
text-xs
font-bold
uppercase
tracking-[0.25em]
text-white/70
"
>
Penagos Hermanos
</span>



<h1
className="
mt-4
text-5xl
font-extrabold
text-white
"
>
Nuestra ubicación
</h1>



<p
className="
mx-auto
mt-5
max-w-2xl
text-lg
text-slate-300
"
>
Encuentra nuestras sedes y conoce dónde estamos ubicados.
</p>


</section>





<section
className="
bg-white
py-20
"
>


<div
className="
mx-auto
max-w-[1380px]
px-6
lg:px-10
"
>



<div
className="
overflow-hidden
rounded-3xl
border
border-slate-200
bg-white
shadow-xl
"
>


<iframe

title="Mapa Penagos"

src="https://penagos.com/mapa/"

width="100%"

height="650"

loading="lazy"

className="
border-0
w-full
"

/>


</div>



</div>


</section>





</main>


</>

)

}


export default Mapa;