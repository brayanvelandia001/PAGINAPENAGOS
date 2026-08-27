import { useMemo, useState } from "react";

// Fuente: preguntas frecuentes.txt (contenido de soporte de Penagos).
// Adaptado con campos _EN para soporte bilingüe completo.
const FAQS = [
  {
    "category": "General",
    "category_EN": "General",
    "product": "General",
    "product_EN": "General",
    "question": "¿Cuál es el horario de servicio al cliente?",
    "question_EN": "What are the customer service hours?",
    "answer": "Nos puede contactar de Lunes a Viernes de 07:30 am a 05:45 pm a través del correo: servicioalcliente@penagos.com o al número telefónico +57 310 2897 020 o al número +57 316 2433 764 *Horario local en Colombia.",
    "answer_EN": "You can contact us Monday to Friday from 07:30 am to 05:45 pm via email: servicioalcliente@penagos.com or by phone at +57 310 2897 020 or +57 316 2433 764 *Local time in Colombia."
  },
  {
    "category": "General",
    "category_EN": "General",
    "product": "General",
    "product_EN": "General",
    "question": "¿Cómo puedo ser un distribuidor Penagos?",
    "question_EN": "How can I become a Penagos distributor?",
    "answer": "Envíenos su información en Colombia al correo: grueda@penagos.com En el resto del mundo a: mcobos@penagos.com",
    "answer_EN": "Send us your information in Colombia to: grueda@penagos.com. For the rest of the world to: mcobos@penagos.com"
  },
  {
    "category": "General",
    "category_EN": "General",
    "product": "General",
    "product_EN": "General",
    "question": "¿El servicio de despacho de mi pedido incluye su instalación?",
    "question_EN": "Does the delivery service of my order include installation?",
    "answer": "La instalación de un beneficio de café o cualquier máquina Penagos se efectúa según las condiciones comerciales acordadas previamente con el Representante Comercial. En caso que no se haya determinado la instalación dentro de la cotización y posterior factura, esta no se realizará. Puede solicitar una cotización del servicio de instalación (Ejecución o asesoramiento de la instalación) al equipo de Servicio y Post venta a través del correo: servicioalcliente@penagos.com o al número telefónico +57 3102897020",
    "answer_EN": "The installation of coffee processing equipment or any Penagos machine is carried out according to the commercial conditions previously agreed upon with the Sales Representative. If installation was not determined within the quote and subsequent invoice, it will not be performed. You can request a quote for the installation service (Execution or installation advice) from the Service and After-sales team via email: servicioalcliente@penagos.com or by phone at +57 3102897020"
  },
  {
    "category": "General",
    "category_EN": "General",
    "product": "General",
    "product_EN": "General",
    "question": "¿Cuál es el significado de PQR?",
    "question_EN": "What is the meaning of PQR?",
    "answer": "(P) Petición: es aquel derecho que tiene toda persona para realizar cualquier solicitud a través de medios legales por motivo de información y/o consulta, y obtener pronta resolución de las mismas. (Q) Queja: inconformidad en la calidad de atención en el servicio recibido. (R) Reclamo: inconformidad sobre el producto comprado a Penagos, relacionado a su funcionamiento, incumplimiento en las especificaciones técnicas o cualquier insatisfacción que pueda ser aplicada como una garantía.",
    "answer_EN": "(P) Petition: the right everyone has to make any request through legal means for information and/or consultation, and obtain prompt resolution. (Q) Complaint: dissatisfaction with the quality of customer service received. (R) Claim: dissatisfaction with the product purchased from Penagos, related to its operation, non-compliance with technical specifications, or any dissatisfaction that can be applied as a warranty."
  },
  {
    "category": "General",
    "category_EN": "General",
    "product": "General",
    "product_EN": "General",
    "question": "¿Cómo puedo radicar una PQR?",
    "question_EN": "How can I file a PQR (Petition, Complaint, or Claim)?",
    "answer": "Se puede contactar directamente a nuestra línea de Servicio y Post venta (+57) 310 2897 020 o al (+57) 316 2433 764 También puede enviarnos su caso al correo electrónico servicioalcliente@penagos.com En caso que no tenga posibilidad de radicar tu PQR por los medios mencionados anteriormente, contacte a su Representante Comercial o a su distribuidor para realizar la solicitud.",
    "answer_EN": "You can directly contact our Service and After-sales line at (+57) 310 2897 020 or (+57) 316 2433 764. You can also send your case via email to servicioalcliente@penagos.com. If you cannot file your PQR through the aforementioned means, contact your Sales Representative or your distributor to make the request."
  },
  {
    "category": "General",
    "category_EN": "General",
    "product": "General",
    "product_EN": "General",
    "question": "¿En dónde puedo encontrar la política de garantía?",
    "question_EN": "Where can I find the warranty policy?",
    "answer": "Puede conocer la política de garantía en el manual técnico que se entrega al momento de hacer la compra de la máquina Penagos o puede solicitarla a través del correo: servicioalcliente@penagos.com",
    "answer_EN": "You can read the warranty policy in the technical manual delivered at the time of purchasing the Penagos machine or you can request it via email: servicioalcliente@penagos.com"
  },
  {
    "category": "General",
    "category_EN": "General",
    "product": "General",
    "product_EN": "General",
    "question": "¿Por qué me pueden negar una garantía?",
    "question_EN": "Why might a warranty be denied?",
    "answer": "Una garantía se puede negar porque: Daños de la mercancía durante el transporte cuando no está a cargo de EL FABRICANTE. Inadecuada instalación, conexiones eléctricas y/o hidráulicas, salvo cuando EL FABRICANTE directamente sea quien se encargue de hacerlas. Si ocurren eventos tales como cortes súbitos de energía, alzas de voltaje, cortocircuitos en la red eléctrica, instalaciones eléctricas sin conexión a tierra, que afecten las instalaciones eléctricas, aún cuando las hubiera realizado EL FABRICANTE. Si ocurren eventos tales como taponamientos, altas presiones fuera de lo recomendable, o daños causados por mala manipulación de los accesorios hidráulicos que afecten las instalaciones hidráulicas, aún cuando las hubiera realizado EL FABRICANTE. Mal uso, operación incorrecta del equipo, manipulación indebida del producto a procesar, ingreso de materiales extraños a la máquina o materiales para los cuales no fue diseñado el equipo conforme a lo mencionado en su ficha/manual técnico. Funcionamiento en condiciones físicas inadecuadas: motores/motorreductores a excesiva velocidad, voltaje diferente al requerido por el equipo, exceso de humedad o suciedad ambiental, etc. Alteración del equipo en cuanto inclusión, eliminación y/o modificación en su integridad, de la que hace parte su estructura y piezas, salvo que de manera expresa, escrita y previa se hubiera dado instrucción para ello por parte del área de Servicio y Post Venta de EL FABRICANTE. Daños causados por desastres naturales o eventos de fuerza mayor. Piezas sometidas a desgaste o deterioro normal. *Revise su política de garantía",
    "answer_EN": "A warranty can be denied due to: Damage to merchandise during transport when not handled by THE MANUFACTURER. Improper installation, electrical and/or hydraulic connections, except when THE MANUFACTURER directly handles them. Events such as sudden power outages, voltage spikes, short circuits in the electrical grid, ungrounded electrical installations, even if made by THE MANUFACTURER. Events such as blockages, excessively high pressures, or damages caused by mishandling hydraulic accessories, even if made by THE MANUFACTURER. Misuse, incorrect operation, improper handling of the product to be processed, entry of foreign materials into the machine, or materials for which the equipment was not designed according to its technical manual. Operation in inadequate physical conditions: motors running at excessive speed, voltage different from what is required, excess moisture or environmental dirt, etc. Alteration of the equipment, including additions, removals, and/or modifications to its structure and parts, unless expressly instructed in writing in advance by THE MANUFACTURER's Service and After-Sales area. Damage caused by natural disasters or force majeure events. Parts subjected to normal wear and tear. *Check your warranty policy."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué tipo de pasto se puede picar en las Picapastos Penagos?",
    "question_EN": "What type of grass can be chopped in Penagos Forage Choppers?",
    "answer": "Es ideal para picar pasto, caña de azúcar, sorgo y otras especies vegetales forrajeras.",
    "answer_EN": "It is ideal for chopping grass, sugarcane, sorghum, and other forage plant species."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "Si yo quiero hacer ensilaje, ¿qué equipo debo utilizar?",
    "question_EN": "If I want to make silage, what equipment should I use?",
    "answer": "Las picapastos de alta velocidad como la PP-300 AMG, la PP-300 R y la PP-600 R son ideales para picar para hacer ensilaje.",
    "answer_EN": "High-speed forage choppers such as the PP-300 AMG, PP-300 R, and PP-600 R are ideal for chopping to make silage."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿La picapasto PP 300 AMG me sirve para racionar diariamente?",
    "question_EN": "Is the PP 300 AMG forage chopper useful for daily rationing?",
    "answer": "Si, pero debe picar para lo que va a utilizar. Si guarda el pasto picado para después, este se va a calentar, se va a marchitar y el ganado lo rechazará.",
    "answer_EN": "Yes, but you must chop only what you will use. If you save chopped grass for later, it will heat up, wither, and the cattle will reject it."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Cuál es el tamaño de corte del pasto en la picapasto PP-300 AMG?",
    "question_EN": "What is the grass cutting size in the PP-300 AMG forage chopper?",
    "answer": "El tamaño de corte varía entre 3 mm y 9 mm. Esto depende de la alimentación.",
    "answer_EN": "The cutting size varies between 3 mm and 9 mm. This depends on the feeding rate."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué tipo de cuchilla utiliza la picapasto PP 300 AMG?",
    "question_EN": "What type of blade does the PP 300 AMG forage chopper use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué puntos de lubricación tiene la picapasto PP 300 AMG?",
    "question_EN": "What lubrication points does the PP 300 AMG forage chopper have?",
    "answer": "La Picapasto PP300-AMG posee solamente la lubricación del motor y se debe cumplir como lo detalla el manual que va con el motor.",
    "answer_EN": "The PP300-AMG forage chopper only has motor lubrication, which must be performed as detailed in the motor's manual."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿La picapasto PP 300 R me sirve para racionar diariamente?",
    "question_EN": "Is the PP 300 R forage chopper useful for daily rationing?",
    "answer": "Si, pero debe picar para lo que va a utilizar. Si guarda el pasto picado para después, este se va a calentar, se va a marchitar y el ganado lo rechazará.",
    "answer_EN": "Yes, but you must chop only what you will use. If you save chopped grass for later, it will heat up, wither, and the cattle will reject it."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Cuál es el tamaño de corte del pasto en la picapasto PP-300 R?",
    "question_EN": "What is the grass cutting size in the PP-300 R forage chopper?",
    "answer": "El tamaño de corte varía entre 3 mm y 9 mm. Esto depende de la alimentación.",
    "answer_EN": "The cutting size varies between 3 mm and 9 mm. This depends on the feeding rate."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué tipo de motor puedo utilizar en la picapasto PP300 R?",
    "question_EN": "What type of motor can I use for the PP300 R forage chopper?",
    "answer": "Se puede acoplar motor a gasolina o motor eléctrico a 3600 rpm monofásico o trifásico",
    "answer_EN": "You can couple a gasoline engine or a 3600 rpm single-phase or three-phase electric motor."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué se debe tener en cuenta cuando se acopla motor a gasolina o a diésel en una Picapastos?",
    "question_EN": "What should be kept in mind when coupling a gasoline or diesel engine to a Forage Chopper?",
    "answer": "El motor debe ser utilizado con un sistema de amortiguación (de cauchos o resortes) que ayude a mitigar las altas vibraciones de este tipo de motor. De esta forma, el motor no le transmite vibraciones a la máquina y así se evitan las rupturas de las tolvas, protectores de bandas e incluso la base del motor.",
    "answer_EN": "The engine must be used with a dampening system (rubber or springs) to help mitigate the high vibrations of this type of engine. This prevents the engine from transmitting vibrations to the machine, avoiding breakage of hoppers, belt guards, and even the motor base."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué tipo de cuchilla utiliza la picapasto PP 300 R?",
    "question_EN": "What type of blade does the PP 300 R forage chopper use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿La picapasto PP 600 R me sirve para racionar diariamente?",
    "question_EN": "Is the PP 600 R forage chopper useful for daily rationing?",
    "answer": "Si, pero debe picar para lo que va a utilizar. Si guarda el pasto picado para después, este se va a calentar, se va a marchitar y el ganado lo rechazará.",
    "answer_EN": "Yes, but you must chop only what you will use. If you save chopped grass for later, it will heat up, wither, and the cattle will reject it."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Cuál es el tamaño de corte del pasto en la picapasto PP-600 R?",
    "question_EN": "What is the grass cutting size in the PP-600 R forage chopper?",
    "answer": "El tamaño de corte varía entre 3 mm y 9 mm. Esto depende de la alimentación.",
    "answer_EN": "The cutting size varies between 3 mm and 9 mm. This depends on the feeding rate."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué tipo de motor puedo utilizar en la picapasto PP 600 R?",
    "question_EN": "What type of motor can I use for the PP 600 R forage chopper?",
    "answer": "Se puede acoplar motor a gasolina o motor eléctrico a 3600 rpm monofásico o trifásico",
    "answer_EN": "You can couple a gasoline engine or a 3600 rpm single-phase or three-phase electric motor."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué tipo de cuchilla utiliza la picapasto PP 600 R?",
    "question_EN": "What type of blade does the PP 600 R forage chopper use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapastos de alta velocidad (PP 300 AMG, PP 300 R, PP 600 R)",
    "product_EN": "High-speed forage choppers (PP 300 AMG, PP 300 R, PP 600 R)",
    "question": "¿Qué hago si en la picapasto PP 3000 AMG el corte es irregular?",
    "question_EN": "What should I do if the cut in the PP 3000 AMG forage chopper is irregular?",
    "answer": "* Si está sobrealimentando, reduzca la alimentación en la tolva y ubique el material a picar por el tallo. * Si las cuchillas no están afiladas, empalme o afile las cuchillas con una lima.",
    "answer_EN": "* If you are overfeeding, reduce the feed in the hopper and insert the material by the stem. * If the blades are not sharp, adjust or sharpen them with a file."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapasto de baja velocidad  (PP 7M 2C, PP 9MR Y PP 12MR)",
    "product_EN": "Low-speed forage choppers (PP 7M 2C, PP 9MR AND PP 12MR)",
    "question": "¿Qué equipo debo usar si quiero racionar diariamente a mi ganado?",
    "question_EN": "What equipment should I use if I want to ration daily for my cattle?",
    "answer": "Para ración diaria las picapastos de baja velocidad: PP 7M, la PP 9MR, la PP 12 MR, las picadoras para ensilaje: PE 800 y PE 1200 son ideales para esta labor.",
    "answer_EN": "For daily rationing, low-speed forage choppers (PP 7M, PP 9MR, PP 12 MR) and silage choppers (PE 800 and PE 1200) are ideal for this task."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapasto de baja velocidad  (PP 7M 2C, PP 9MR Y PP 12MR)",
    "product_EN": "Low-speed forage choppers (PP 7M 2C, PP 9MR AND PP 12MR)",
    "question": "¿Cuál es el tamaño de corte del pasto en las picapastos PP-7M,  PP 9MR y  PP 12MR?",
    "question_EN": "What is the grass cutting size in the PP-7M, PP 9MR, and PP 12MR choppers?",
    "answer": "El tamaño de corte varía entre 9 mm y 12 mm.",
    "answer_EN": "The cutting size varies between 9 mm and 12 mm."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapasto de baja velocidad  (PP 7M 2C, PP 9MR Y PP 12MR)",
    "product_EN": "Low-speed forage choppers (PP 7M 2C, PP 9MR AND PP 12MR)",
    "question": "¿Qué tipo de motor puedo utilizar en las picapastos PP 7M,  PP 9MR y  PP 12MR?",
    "question_EN": "What type of motor can I use for the PP 7M, PP 9MR, and PP 12MR choppers?",
    "answer": "Este equipo solo puede ser acoplado con motores eléctricos monofásicos o trifásicos de baja velocidad los cuales son conectados a través de la base motor Penagos. Si desea accionar el equipo con motor estacionario, este motor debe ser montado con una base aparte de la máquina teniendo en cuenta que el sentido de giro del motor corresponda al sentido de giro de la máquina.",
    "answer_EN": "This equipment can only be coupled with low-speed single-phase or three-phase electric motors connected through the Penagos motor base. If you want to use a stationary engine, it must be mounted on a separate base, ensuring the engine's rotation direction matches the machine's."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapasto de baja velocidad  (PP 7M 2C, PP 9MR Y PP 12MR)",
    "product_EN": "Low-speed forage choppers (PP 7M 2C, PP 9MR AND PP 12MR)",
    "question": "¿Qué se debe tener en cuenta cuando se acopla motor a gasolina o a diésel en las picapastos PP 7M,  PP 9MR y  PP 12MR?",
    "question_EN": "What should be kept in mind when coupling a gasoline or diesel engine to the PP 7M, PP 9MR, and PP 12MR choppers?",
    "answer": "El motor debe ser utilizado con un sistema de amortiguación (de cauchos o resortes) que ayude a mitigar las altas vibraciones de este tipo de motor. De esta forma, el motor no le transmite vibraciones a la máquina y así se evitan las rupturas de las tolvas, protectores de bandas e incluso la base del motor.",
    "answer_EN": "The engine must be used with a dampening system (rubber or springs) to help mitigate the high vibrations of this type of engine. This prevents the engine from transmitting vibrations to the machine, avoiding breakage of hoppers, belt guards, and even the motor base."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapasto de baja velocidad  (PP 7M 2C, PP 9MR Y PP 12MR)",
    "product_EN": "Low-speed forage choppers (PP 7M 2C, PP 9MR AND PP 12MR)",
    "question": "¿Qué tipo de cuchilla utilizan las picapastos PP 7M,  PP 9MR y  PP 12MR?",
    "question_EN": "What type of blade do the PP 7M, PP 9MR, and PP 12MR choppers use?",
    "answer": "Este equipo utiliza cuchillas de lámina",
    "answer_EN": "This equipment uses sheet metal blades."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picapasto de baja velocidad  (PP 7M 2C, PP 9MR Y PP 12MR)",
    "product_EN": "Low-speed forage choppers (PP 7M 2C, PP 9MR AND PP 12MR)",
    "question": "¿Para qué sirve la palanca de retroceso ubicada en la unidad de piñones en las picapastos PP 9MR y PP12MR?",
    "question_EN": "What is the reverse lever located on the gear unit of the PP 9MR and PP12MR choppers for?",
    "answer": "Esta palanca sirve para retroceder el forraje si se presenta un atascamiento.",
    "answer_EN": "This lever is used to reverse the forage in case of a jam."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picadoras para Ensilaje  (PE 800, PE 1200)",
    "product_EN": "Silage Choppers (PE 800, PE 1200)",
    "question": "¿Qué equipo debo usar si quiero racionar diariamente a mi ganado?",
    "question_EN": "What equipment should I use if I want to ration daily for my cattle?",
    "answer": "Para ración diaria las picapastos de baja velocidad: PP 7M, la PP 9MR, la PP 12 MR, las picadoras para ensilaje: PE 800 y PE 1200 son ideales para esta labor.",
    "answer_EN": "For daily rationing, low-speed forage choppers (PP 7M, PP 9MR, PP 12 MR) and silage choppers (PE 800 and PE 1200) are ideal for this task."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picadoras para Ensilaje  (PE 800, PE 1200)",
    "product_EN": "Silage Choppers (PE 800, PE 1200)",
    "question": "¿Cuál es el tamaño de corte del pasto en la picadora para ensilaje PE-800?",
    "question_EN": "What is the grass cutting size in the PE-800 silage chopper?",
    "answer": "El tamaño de corte se puede ajustar a 5mm, 6.5 mm y 9 mm.",
    "answer_EN": "The cutting size can be adjusted to 5mm, 6.5mm, and 9mm."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picadoras para Ensilaje  (PE 800, PE 1200)",
    "product_EN": "Silage Choppers (PE 800, PE 1200)",
    "question": "¿Qué tipo de motor puedo utilizar en las picadoras para ensilaje PE 800 y PE 1200?",
    "question_EN": "What type of motor can I use in the PE 800 and PE 1200 silage choppers?",
    "answer": "Este equipo puede utilizar motor eléctrico de baja y alta velocidad monofásico o trifásico o puede utilizar un motor estacionario.",
    "answer_EN": "This equipment can use a low or high-speed single-phase or three-phase electric motor, or a stationary engine."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picadoras para Ensilaje  (PE 800, PE 1200)",
    "product_EN": "Silage Choppers (PE 800, PE 1200)",
    "question": "¿Qué se debe tener en cuenta cuando se acopla motor a gasolina o a diésel en las picadoras para ensilaje PE 800 y PE 1200?",
    "question_EN": "What should be kept in mind when coupling a gasoline or diesel engine to the PE 800 and PE 1200 silage choppers?",
    "answer": "El motor debe ser utilizado con un sistema de amortiguación (de cauchos o resortes) que ayude a mitigar las altas vibraciones de este tipo de motor. De esta forma, el motor no le transmite vibraciones a la máquina y así se evitan las rupturas de las tolvas, protectores de bandas e incluso la base del motor.",
    "answer_EN": "The engine must be used with a dampening system (rubber or springs) to help mitigate the high vibrations of this type of engine. This prevents the engine from transmitting vibrations to the machine, avoiding breakage of hoppers, belt guards, and even the motor base."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picadoras para Ensilaje  (PE 800, PE 1200)",
    "product_EN": "Silage Choppers (PE 800, PE 1200)",
    "question": "¿Qué tipo de cuchilla utiliza las picadoras para ensilaje PE 800 y PE 1200?",
    "question_EN": "What type of blade do the PE 800 and PE 1200 silage choppers use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picadoras para Ensilaje  (PE 1200)",
    "product_EN": "Silage Choppers (PE 1200)",
    "question": "¿Cuál es el tamaño de corte del pasto en la picadora para ensilaje PE-1200?",
    "question_EN": "What is the grass cutting size in the PE-1200 silage chopper?",
    "answer": "El tamaño de corte se puede ajustar a 5mm, 7 mm, 11 mm y 14 mm.",
    "answer_EN": "The cutting size can be adjusted to 5mm, 7mm, 11mm, and 14mm."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Picadoras para Ensilaje  (PE 800, PE 1200)",
    "product_EN": "Silage Choppers (PE 800, PE 1200)",
    "question": "¿Para qué sirve la palanca de retroceso ubicada en la unidad de piñones?",
    "question_EN": "What is the reverse lever located on the gear unit for?",
    "answer": "Esta palanca sirve para retroceder el forraje si se presenta un atascamiento.",
    "answer_EN": "This lever is used to reverse the forage in case of a jam."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Ensiladora Manual EM-4",
    "product_EN": "Manual Silage Packer EM-4",
    "question": "¿Para qué sirve graduar la longitud del plato presión?",
    "question_EN": "What is adjusting the length of the pressure plate for?",
    "answer": "El plato presión se utiliza en su mayor longitud cuando se está empezando a llenar la bolsa. A medida que se va llenando la bolsa, se va recogiendo el plato presión para evitar sobreesfuerzos.",
    "answer_EN": "The pressure plate is used at its maximum length when starting to fill the bag. As the bag fills up, the pressure plate is retracted to avoid overexertion."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Ensiladora Manual EM-4",
    "product_EN": "Manual Silage Packer EM-4",
    "question": "¿Cuál es la posición correcta para operar la T de palanca?",
    "question_EN": "What is the correct position to operate the T-lever?",
    "answer": "Cuando se presiona el forraje con la T de palanca, el tope de ésta debe ser paralelo a la T de piso.",
    "answer_EN": "When pressing the forage with the T-lever, its stop must be parallel to the floor T-bar."
  },
  {
    "category": "Picadoras y Ensiladoras",
    "category_EN": "Choppers and Silage Machines",
    "product": "Ensiladora Manual EM-4",
    "product_EN": "Manual Silage Packer EM-4",
    "question": "¿Qué tipo de bolsa debo utilizar para ensilar forraje?",
    "question_EN": "What type of bag should I use for making forage silage?",
    "answer": "Se debe usar bolsa calibre 6 con dimensiones de 1,10 largo x 0,6 ancho (metros)",
    "answer_EN": "You should use a 6-gauge bag with dimensions of 1.10 length x 0.6 width (meters)."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 8R",
    "product_EN": "Crusher Chopper TP 8R",
    "question": "¿Qué significan las letras T.P?",
    "question_EN": "What do the letters T.P stand for?",
    "answer": "Esto quiere decir que esta referencia pica, tritura y muele.",
    "answer_EN": "It means this specific model chops, crushes, and mills."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 8R",
    "product_EN": "Crusher Chopper TP 8R",
    "question": "¿Qué productos puedo utilizar en el triturador picador TP-8R?",
    "question_EN": "What products can I process in the TP-8R crusher chopper?",
    "answer": "Solo se pueden procesar productos secos o con un % de humedad no superior al 20% o forrajes para elaborar concentrados.",
    "answer_EN": "You can only process dry products, products with moisture not exceeding 20%, or forages to make concentrates."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 8R",
    "product_EN": "Crusher Chopper TP 8R",
    "question": "¿Puedo utilizar el triturador picador TP-8R como picador de forraje?",
    "question_EN": "Can I use the TP-8R crusher chopper as a forage chopper?",
    "answer": "No se recomienda si va a picar forraje para ración diaria. Se puede picar forraje para elaborar concentrados.",
    "answer_EN": "It is not recommended if you are chopping forage for daily rationing. You can chop forage to produce concentrates."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 8R",
    "product_EN": "Crusher Chopper TP 8R",
    "question": "¿Cómo selecciono las cribas para el triturador picador?",
    "question_EN": "How do I select the screens for the crusher chopper?",
    "answer": "Primero se debe verificar la estructura del producto a procesar. La criba lisa es utilizada para picar. Las cribas de 2 mm y 3 mm son utilizadas para moler. Las cribas de 5 mm y 10 mm son utilizadas para triturar.",
    "answer_EN": "First, verify the structure of the product to be processed. The smooth screen is used for chopping. The 2mm and 3mm screens are used for milling. The 5mm and 10mm screens are used for crushing."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 8R",
    "product_EN": "Crusher Chopper TP 8R",
    "question": "¿Para qué se utiliza la tolva plástica del triturador picador TP-8R?",
    "question_EN": "What is the plastic hopper on the TP-8R crusher chopper used for?",
    "answer": "Esta tolva es utilizada para realizar la dosificación del producto a granel que va a ser procesado. Cuando se utiliza forraje verde o granos húmedos se debe utilizar la criba lisa. Cuando se utiliza forraje seco o granos secos se pueden utilizar cribas y el material saldrá por la parte inferior.",
    "answer_EN": "This hopper is used to dose the bulk product to be processed. When using green forage or wet grains, the smooth screen must be used. When using dry forage or dry grains, screens can be used, and the material will exit from the bottom."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 8R",
    "product_EN": "Crusher Chopper TP 8R",
    "question": "¿Qué tipo de cuchilla utiliza el triturador picador TP 8?",
    "question_EN": "What type of blade does the TP 8 crusher chopper use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 24",
    "product_EN": "Crusher Chopper TP 24",
    "question": "¿Qué productos puedo utilizar en el triturador picador TP 24?",
    "question_EN": "What products can I process in the TP 24 crusher chopper?",
    "answer": "Solo se pueden procesar productos secos o con un % de humedad no superior al 20% o forrajes para elaborar concentrados.",
    "answer_EN": "You can only process dry products, products with moisture not exceeding 20%, or forages to make concentrates."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 24",
    "product_EN": "Crusher Chopper TP 24",
    "question": "¿Puedo utilizar el triturador picador TP 24 como picador de forraje?",
    "question_EN": "Can I use the TP 24 crusher chopper as a forage chopper?",
    "answer": "No se recomienda si va a picar forraje para ración diaria. Se puede picar forraje para elaborar concentrados.",
    "answer_EN": "It is not recommended if you are chopping forage for daily rationing. You can chop forage to produce concentrates."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 24",
    "product_EN": "Crusher Chopper TP 24",
    "question": "¿Para qué se utiliza la tolva plástica del triturador picador TP 24?",
    "question_EN": "What is the plastic hopper on the TP 24 crusher chopper used for?",
    "answer": "Esta tolva es utilizada para realizar la dosificación del producto a granel que va a ser procesado. Cuando se utiliza forraje verde o granos húmedos se debe utilizar la criba lisa. Cuando se utiliza forraje seco o granos secos se pueden utilizar cribas y el material saldrá por la parte inferior.",
    "answer_EN": "This hopper is used to dose the bulk product to be processed. When using green forage or wet grains, the smooth screen must be used. When using dry forage or dry grains, screens can be used, and the material will exit from the bottom."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 24",
    "product_EN": "Crusher Chopper TP 24",
    "question": "¿Qué tipo de cuchilla utiliza el triturador picador TP 24?",
    "question_EN": "What type of blade does the TP 24 crusher chopper use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 32",
    "product_EN": "Crusher Chopper TP 32",
    "question": "¿Cuál es la función del triturador picador TP 32?",
    "question_EN": "What is the function of the TP 32 crusher chopper?",
    "answer": "Este equipo sirve para triturar, picar, moler y pulverizar.",
    "answer_EN": "This equipment is used for crushing, chopping, milling, and pulverizing."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 32",
    "product_EN": "Crusher Chopper TP 32",
    "question": "¿En qué se diferencian los trituradores picadores TP 32 del TP 8 y TP 24?",
    "question_EN": "How do the TP 32 crusher choppers differ from the TP 8 and TP 24?",
    "answer": "El TP 32 pulveriza, por ello se usa un ciclón para empacar la harina pulverizada.",
    "answer_EN": "The TP 32 pulverizes; therefore, a cyclone is used to pack the pulverized flour."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 32",
    "product_EN": "Crusher Chopper TP 32",
    "question": "¿Para qué se utiliza el ciclón?",
    "question_EN": "What is the cyclone used for?",
    "answer": "El ciclón es una tolva que se utiliza para empacar el producto pulverizado.",
    "answer_EN": "The cyclone is a hopper used to pack the pulverized product."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 32",
    "product_EN": "Crusher Chopper TP 32",
    "question": "¿Para qué sirve el aditamento para picar ubicado en el lateral de la máquina?",
    "question_EN": "What is the chopping attachment on the side of the machine for?",
    "answer": "Como un complemento al proceso de picar, triturar, moler y pulverizar, el TP 32 se puede utilizar como picador de forraje, picador de mazorca completa para producir concentrados o suplementos alimenticios para el ganado.",
    "answer_EN": "As a complement to the chopping, crushing, milling, and pulverizing process, the TP 32 can be used as a forage chopper or whole corn cob chopper to produce concentrates or feed supplements for cattle."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador Picador TP 32",
    "product_EN": "Crusher Chopper TP 32",
    "question": "¿Qué tipo de cuchilla utiliza el triturador picador TP 32?",
    "question_EN": "What type of blade does the TP 32 crusher chopper use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Picador de Residuos TRP 11",
    "product_EN": "Waste Chopper TRP 11",
    "question": "¿Para qué se utiliza el picador de residuos TRP 11?",
    "question_EN": "What is the TRP 11 waste chopper used for?",
    "answer": "Este equipo está diseñado para picar los desechos vegetales producidos en la floricultura, horticultura y desechos urbanos para estabilizar los desechos (compostaje).",
    "answer_EN": "This equipment is designed to chop plant waste produced in floriculture, horticulture, and urban waste to stabilize the waste (composting)."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Picador de Residuos TRP 11",
    "product_EN": "Waste Chopper TRP 11",
    "question": "¿Qué tipo de motor puedo usar en el picador de residuos TRP 11?",
    "question_EN": "What type of motor can I use on the TRP 11 waste chopper?",
    "answer": "Se puede utilizar motor eléctrico trifásico de alta y baja velocidad, motor estacionario y con acople a tractor.",
    "answer_EN": "You can use a high and low-speed three-phase electric motor, stationary engine, and tractor coupling."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Picador de Residuos TRP 11",
    "product_EN": "Waste Chopper TRP 11",
    "question": "¿Cómo debe ser la forma del producto que se va a picar?",
    "question_EN": "What should the shape of the product to be chopped be like?",
    "answer": "Los productos pueden ser largos o a granel. Aprovechando la gravedad, la inclinación de la tolva y la piña de alimentación.",
    "answer_EN": "Products can be long or in bulk. Taking advantage of gravity, the inclination of the hopper, and the feeding drum."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Picador de Residuos TRP 11",
    "product_EN": "Waste Chopper TRP 11",
    "question": "¿Qué tipo de cuchilla utiliza el picador de residuos TRP 11?",
    "question_EN": "What type of blade does the TRP 11 waste chopper use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador de Desechos Vegetales TDV 24 AR",
    "product_EN": "Vegetable Waste Crusher TDV 24 AR",
    "question": "¿Para qué se utiliza el triturador de desechos vegetales TDV 24 ARTDV 24 AR?",
    "question_EN": "What is the TDV 24 AR vegetable waste crusher used for?",
    "answer": "Es un equipo que sirve para procesar los desechos vegetales que se producen en la industria de la floricultura, en podas, cosecha, post cosecha y erradicación de los desechos del sector floricultor.",
    "answer_EN": "It is an equipment used to process plant waste produced in the floriculture industry, during pruning, harvesting, post-harvesting, and eradication of floriculture waste."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador de Desechos Vegetales TDV 24 AR",
    "product_EN": "Vegetable Waste Crusher TDV 24 AR",
    "question": "¿Se puede triturar heliconias o productos que posean alto contenido de fibra?",
    "question_EN": "Can heliconias or products with high fiber content be crushed?",
    "answer": "No, la máquina está diseñada con martillos tipo sierra. No posee cuchillas de corte.",
    "answer_EN": "No, the machine is designed with saw-type hammers. It does not have cutting blades."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador de Desechos Vegetales TDV 24 AR",
    "product_EN": "Vegetable Waste Crusher TDV 24 AR",
    "question": "¿Qué tipo de motor puedo usar en el triturador de desechos vegetales TDV 24 AR?",
    "question_EN": "What type of motor can I use on the TDV 24 AR vegetable waste crusher?",
    "answer": "Se puede utilizar motor eléctrico trifásico de alta y baja velocidad y motor estacionario.",
    "answer_EN": "You can use a high and low-speed three-phase electric motor and a stationary engine."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador de Desechos Vegetales TDV 24 AR",
    "product_EN": "Vegetable Waste Crusher TDV 24 AR",
    "question": "¿Puedo transportar el equipo en largas distancias?",
    "question_EN": "Can I transport the equipment over long distances?",
    "answer": "No, las llantas del equipo son exclusivas para operar el equipo en el lugar de trabajo y poder trasladarlo en distancias pequeñas mientras se esté operando.",
    "answer_EN": "No, the equipment's wheels are exclusively for operating it in the workplace and moving it over short distances while in operation."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador de Desechos Vegetales TDV 24 AR",
    "product_EN": "Vegetable Waste Crusher TDV 24 AR",
    "question": "¿Cuántas rotaciones tienen los martillos dentados o tipo sierra del triturador de desechos vegetales TDV 24 AR cuando se desgastan?",
    "question_EN": "How many rotations do the toothed or saw-type hammers of the TDV 24 AR have when they wear out?",
    "answer": "Los martillos tienen 6 posiciones para el cambio de rotación cuando se presenta desgaste.",
    "answer_EN": "The hammers have 6 positions for changing rotation when wear occurs."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador de Desechos Vegetales TDV 24 AR",
    "product_EN": "Vegetable Waste Crusher TDV 24 AR",
    "question": "¿Para qué sirve el tambor alimentador de dedos?",
    "question_EN": "What is the finger feeding drum for?",
    "answer": "Su amplia tolva en complemento con el tambor alimentador de dedos facilita la alimentación de productos que formen maraña o que estén entrelazados.",
    "answer_EN": "Its wide hopper, in complement with the finger feeding drum, facilitates the feeding of products that form tangles or are intertwined."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Triturador de Desechos Vegetales TDV 24 AR",
    "product_EN": "Vegetable Waste Crusher TDV 24 AR",
    "question": "¿Qué tipo de cuchilla utiliza el triturador de desechos vegetales TDV 24?",
    "question_EN": "What type of blade does the TDV 24 vegetable waste crusher use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Molino de Discos MDP 60",
    "product_EN": "Disc Mill MDP 60",
    "question": "¿Qué productos puedo moler en el molino de discos MDP 60?",
    "question_EN": "What products can I mill in the MDP 60 disc mill?",
    "answer": "Se pueden moler productos secos como café, cacao, maní, arveja, entre otros o productos húmedos.",
    "answer_EN": "You can mill dry products such as coffee, cocoa, peanuts, peas, among others, or wet products."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Molino de Discos MDP 60",
    "product_EN": "Disc Mill MDP 60",
    "question": "¿Puedo moler productos secos y húmedos con mi molino de discos MDP-60?",
    "question_EN": "Can I mill dry and wet products with my MDP-60 disc mill?",
    "answer": "Si, porque utiliza tornillos (ejes alimentadores) extrusores que permiten utilizar productos húmedos o secos.",
    "answer_EN": "Yes, because it uses extruder screws (feed shafts) that allow for wet or dry products."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Molino de Discos MDP 60",
    "product_EN": "Disc Mill MDP 60",
    "question": "¿Cómo se gradúa la separación de los discos?",
    "question_EN": "How is the disk separation adjusted?",
    "answer": "Utilizando el volante ubicado frente a la tolva de alimentación. Si gira a la derecha acerca los discos, si gira a la izquierda, separa los discos.",
    "answer_EN": "By using the handwheel located in front of the feeding hopper. Turning to the right brings the disks closer; turning to the left separates them."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Molino de Discos MDP 60",
    "product_EN": "Disc Mill MDP 60",
    "question": "¿Cómo se acciona el molino de discos MDP 60?",
    "question_EN": "How is the MDP 60 disc mill powered?",
    "answer": "Se acciona con motores eléctricos monofásicos o trifásicos de baja velocidad. No se recomienda utilizar motores estacionarios porque el humo de estos motores contaminan el producto procesado.",
    "answer_EN": "It is powered by low-speed single-phase or three-phase electric motors. The use of stationary engines is not recommended as their exhaust fumes can contaminate the processed product."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Molino de Discos MDP 60",
    "product_EN": "Disc Mill MDP 60",
    "question": "¿Cuál es el volumen de la tolva de alimentación?",
    "question_EN": "What is the volume of the feeding hopper?",
    "answer": "El volumen de la tolva es de 14600 cm3 o 14,6 L",
    "answer_EN": "The hopper volume is 14600 cm3 or 14.6 L."
  },
  {
    "category": "Trituradores y Molinos",
    "category_EN": "Crushers and Mills",
    "product": "Molino de Discos MDP 60",
    "product_EN": "Disc Mill MDP 60",
    "question": "¿Cuál es el material de los discos moledores?",
    "question_EN": "What material are the grinding disks made of?",
    "answer": "Los disco moledores están fabricados en hierro nodular o en acero inoxidable. Los discos en acero inoxidable son opcionales.",
    "answer_EN": "The grinding disks are made of nodular iron or stainless steel. Stainless steel disks are optional."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 10",
    "product_EN": "Corn Sheller DM 10",
    "question": "¿Qué tipo de producto procesa la desgranadora de maíz DM 10?",
    "question_EN": "What type of product does the DM 10 corn sheller process?",
    "answer": "La desgranadora de maíz DM 10 desgrana maíz con hoja.",
    "answer_EN": "The DM 10 corn sheller processes corn with husks."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 10",
    "product_EN": "Corn Sheller DM 10",
    "question": "¿La desgranadora de maíz DM 10 puede desgranar sin hoja?",
    "question_EN": "Can the DM 10 corn sheller process corn without husks?",
    "answer": "Si, pero disminuye la limpieza y aumenta la cantidad de granos que salen en la tusa. Para esto, debe disminuir la velocidad del equipo hasta verificar que no salga tanto grano en la tusa y que la limpieza sea aceptable.",
    "answer_EN": "Yes, but it decreases cleanliness and increases the amount of kernels left on the cob. To do this, you must reduce the equipment's speed until acceptable cleanliness and fewer kernels on the cob are achieved."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 10",
    "product_EN": "Corn Sheller DM 10",
    "question": "¿Qué tipo de motor se puede usar en la desgranadora de maíz DM 10?",
    "question_EN": "What type of motor can be used on the DM 10 corn sheller?",
    "answer": "Solo se pueden usar motores eléctricos monofásicos o trifásicos de baja velocidad.",
    "answer_EN": "Only low-speed single-phase or three-phase electric motors can be used."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 10",
    "product_EN": "Corn Sheller DM 10",
    "question": "¿Cómo se debe alimentar la desgranadora de maíz DM 10?",
    "question_EN": "How should the DM 10 corn sheller be fed?",
    "answer": "La alimentación en la desgranadora de maíz DM 10 es manual. Debe ingresar la tusa una por una pero continuamente.",
    "answer_EN": "Feeding the DM 10 corn sheller is manual. You must insert the cobs one by one but continuously."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 20",
    "product_EN": "Corn Sheller DM 20",
    "question": "¿Qué tipo de producto procesa la desgranadora de maíz DM 20?",
    "question_EN": "What type of product does the DM 20 corn sheller process?",
    "answer": "La desgranadora de maíz DM 20 desgrana maíz con hoja.",
    "answer_EN": "The DM 20 corn sheller processes corn with husks."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 20",
    "product_EN": "Corn Sheller DM 20",
    "question": "¿La desgranadora de maíz DM 20 puede desgranar sin hoja?",
    "question_EN": "Can the DM 20 corn sheller process corn without husks?",
    "answer": "Si, pero disminuye la limpieza y aumenta la cantidad de granos que salen en la tusa. Para esto, debe disminuir la velocidad del equipo hasta verificar que no salga tanto grano en la tusa y que la limpieza sea aceptable.",
    "answer_EN": "Yes, but it decreases cleanliness and increases the amount of kernels left on the cob. To do this, you must reduce the equipment's speed until acceptable cleanliness and fewer kernels on the cob are achieved."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 20",
    "product_EN": "Corn Sheller DM 20",
    "question": "¿Qué tipo de motor se puede usar en la desgranadora de maíz DM 20?",
    "question_EN": "What type of motor can be used on the DM 20 corn sheller?",
    "answer": "Se pueden usar motores eléctricos monofásicos o trifásicos de baja velocidad o de alta velocidad o motores estacionarios de alta velocidad.",
    "answer_EN": "You can use low-speed or high-speed single-phase or three-phase electric motors, or high-speed stationary engines."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 20",
    "product_EN": "Corn Sheller DM 20",
    "question": "¿Cómo se debe alimentar la desgranadora de maíz DM 20?",
    "question_EN": "How should the DM 20 corn sheller be fed?",
    "answer": "La alimentación en la desgranadora de maíz DM 20 es manual. Se debe alimentar a tolva completa.",
    "answer_EN": "Feeding the DM 20 corn sheller is manual. It should be fed with a full hopper."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 20",
    "product_EN": "Corn Sheller DM 20",
    "question": "¿La desgranadora de maíz DM 20 puede desgranar frijol?",
    "question_EN": "Can the DM 20 corn sheller process beans?",
    "answer": "Si, disminuyendo la velocidad de operación y solicitando la criba especial y los retardadores a su asesor comercial.",
    "answer_EN": "Yes, by decreasing the operating speed and requesting the special screen and retarders from your sales advisor."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 20",
    "product_EN": "Corn Sheller DM 20",
    "question": "¿Se puede operar la desgranadora de maíz DM 20 con tractor?",
    "question_EN": "Can the DM 20 corn sheller be operated with a tractor?",
    "answer": "Si, para esto debe acomodar el tractor a la máquina, es decir, no sobrealimente la desgranadora de maíz DM 20.",
    "answer_EN": "Yes, to do this you must match the tractor's output to the machine, meaning do not overfeed the DM 20 corn sheller."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 20",
    "product_EN": "Corn Sheller DM 20",
    "question": "¿Cómo se acopla la desgranadora de maíz DM 20 al tractor?",
    "question_EN": "How is the DM 20 corn sheller coupled to the tractor?",
    "answer": "La desgranadora de maíz DM 20 se acopla a los 3 puntos del tractor (alce hidráulico, pto y corbata)",
    "answer_EN": "The DM 20 corn sheller is coupled to the tractor's 3-point hitch (hydraulic lift, PTO, and top link)."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 40",
    "product_EN": "Corn Sheller DM 40",
    "question": "¿La desgranadora de maíz DM 40 puede desgranar sin hoja?",
    "question_EN": "Can the DM 40 corn sheller process corn without husks?",
    "answer": "Si, pero disminuye la limpieza y aumenta la cantidad de granos que salen en la tusa. Para esto, debe disminuir la velocidad del equipo hasta verificar que no salga tanto grano en la tusa y que la limpieza sea aceptable.",
    "answer_EN": "Yes, but it decreases cleanliness and increases the amount of kernels left on the cob. To do this, you must reduce the equipment's speed until acceptable cleanliness and fewer kernels on the cob are achieved."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 40",
    "product_EN": "Corn Sheller DM 40",
    "question": "¿Qué tipo de motor se puede usar en la desgranadora de maíz DM 40?",
    "question_EN": "What type of motor can be used on the DM 40 corn sheller?",
    "answer": "Se recomienda accionar la desgranadora de maíz DM 40 con tractor; pero puede usar motores estacionarios de alta velocidad.",
    "answer_EN": "It is recommended to power the DM 40 corn sheller with a tractor, but high-speed stationary engines can also be used."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 40",
    "product_EN": "Corn Sheller DM 40",
    "question": "¿Cómo se debe alimentar la desgranadora de maíz DM 40?",
    "question_EN": "How should the DM 40 corn sheller be fed?",
    "answer": "La alimentación en la desgranadora de maíz DM 40 es manual. Se debe alimentar a tolva completa.",
    "answer_EN": "Feeding the DM 40 corn sheller is manual. It should be fed with a full hopper."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 40",
    "product_EN": "Corn Sheller DM 40",
    "question": "¿La desgranadora de maíz DM 40 puede desgranar frijol?",
    "question_EN": "Can the DM 40 corn sheller process beans?",
    "answer": "No, este equipo no está diseñado para desgranar frijol. Si lo requiere consulte con su asesor comercial.",
    "answer_EN": "No, this equipment is not designed for shelling beans. If required, consult your sales advisor."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 40",
    "product_EN": "Corn Sheller DM 40",
    "question": "¿Se puede operar la desgranadora de maíz DM 40 con tractor?",
    "question_EN": "Can the DM 40 corn sheller be operated with a tractor?",
    "answer": "Si, este equipo está diseñado para ser accionado con tractor. Para esto debe acomodar el tractor a la máquina, es decir, no sobrealimente la desgranadora de maíz DM 40.",
    "answer_EN": "Yes, this equipment is designed to be powered by a tractor. To do this, you must match the tractor's output to the machine, meaning do not overfeed the DM 40 corn sheller."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Maíz DM 40",
    "product_EN": "Corn Sheller DM 40",
    "question": "¿Cómo se acopla la desgranadora de maíz DM 40 al tractor?",
    "question_EN": "How is the DM 40 corn sheller coupled to the tractor?",
    "answer": "La desgranadora de maíz DM 40 se acopla a los 3 puntos del tractor (alce hidráulico, pto y corbata)",
    "answer_EN": "The DM 40 corn sheller is coupled to the tractor's 3-point hitch (hydraulic lift, PTO, and top link)."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Cereales DC 4000",
    "product_EN": "Cereal Sheller DC 4000",
    "question": "¿Qué productos procesa la desgranadora de cereales DC 4000?",
    "question_EN": "What products does the DC 4000 cereal sheller process?",
    "answer": "Es una máquina especial para procesar cereales (frijol, soya, sorgo, arroz, trigo, cebada, entre otros). También puede desgranar maíz pero debe llevar hoja.",
    "answer_EN": "It is a special machine for processing cereals (beans, soybeans, sorghum, rice, wheat, barley, among others). It can also shell corn, but it must have husks."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Cereales DC 4000",
    "product_EN": "Cereal Sheller DC 4000",
    "question": "¿Qué tipo de accionamiento tiene la desgranadora de cereales DC 4000?",
    "question_EN": "What type of drive does the DC 4000 cereal sheller have?",
    "answer": "La desgranadora de cereales DC 4000 se utilizan sólo con tractor, pero puede solicitar a un asesor comercial el acople a motor estacionario.",
    "answer_EN": "The DC 4000 cereal sheller is generally used only with a tractor, but you can request a stationary engine coupling from a sales advisor."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Cereales DC 4000",
    "product_EN": "Cereal Sheller DC 4000",
    "question": "¿Cómo se debe alimentar la desgranadora de cereales DC 4000?",
    "question_EN": "How should the DC 4000 cereal sheller be fed?",
    "answer": "Se debe llenar la tolva completamente y alimentarla continuamente.",
    "answer_EN": "The hopper must be completely filled and fed continuously."
  },
  {
    "category": "Desgranadoras",
    "category_EN": "Huskers / Shellers",
    "product": "Desgranadora de Cereales DC 4000",
    "product_EN": "Cereal Sheller DC 4000",
    "question": "¿La desgranadora de cereales DC 4000 puede desgranar maíz sin hoja?",
    "question_EN": "Can the DC 4000 cereal sheller process corn without husks?",
    "answer": "No, se puede atascar la zaranda vibratoria.",
    "answer_EN": "No, the vibrating screen may get jammed."
  },
  {
    "category": "Trapiches",
    "category_EN": "Sugarcane Mills",
    "product": "Trapiche horizontal TH 6",
    "product_EN": "Horizontal Sugarcane Mill TH 6",
    "question": "¿Qué tipo de accionamiento tiene el trapiche TH 6?",
    "question_EN": "What type of drive does the TH 6 sugarcane mill have?",
    "answer": "Puede ser accionado con motor eléctrico trifásico de baja velocidad o motores estacionarios de baja velocidad.",
    "answer_EN": "It can be driven by a low-speed three-phase electric motor or low-speed stationary engines."
  },
  {
    "category": "Trapiches",
    "category_EN": "Sugarcane Mills",
    "product": "Trapiche horizontal TH 6",
    "product_EN": "Horizontal Sugarcane Mill TH 6",
    "question": "¿Cuál es el rendimiento de extracción del jugo de la caña?",
    "question_EN": "What is the sugarcane juice extraction yield?",
    "answer": "El rendimiento es del 60% de extracción en jugo. Por cada 100 kg de caña de azúcar que ingrese en el equipo, va a obtener 60 kg de jugo de caña de azúcar.",
    "answer_EN": "The yield is 60% juice extraction. For every 100 kg of sugarcane processed, you will get 60 kg of sugarcane juice."
  },
  {
    "category": "Trapiches",
    "category_EN": "Sugarcane Mills",
    "product": "Trapiche horizontal TH 6",
    "product_EN": "Horizontal Sugarcane Mill TH 6",
    "question": "¿Cuántos kilogramos de panela se pueden obtener con un trapiche TH 6?",
    "question_EN": "How many kilograms of panela (jaggery) can be obtained with a TH 6 sugarcane mill?",
    "answer": "Puede obtener entre 60 y 70 kilogramos de panela por hora.",
    "answer_EN": "You can get between 60 and 70 kilograms of panela per hour."
  },
  {
    "category": "Trapiches",
    "category_EN": "Sugarcane Mills",
    "product": "Trapiche Horizontal TH 8",
    "product_EN": "Horizontal Sugarcane Mill TH 8",
    "question": "¿Qué tipo de accionamiento tiene el trapiche TH 8?",
    "question_EN": "What type of drive does the TH 8 sugarcane mill have?",
    "answer": "Puede ser accionado con motor eléctrico trifásico de baja velocidad o motores estacionarios de baja velocidad.",
    "answer_EN": "It can be driven by a low-speed three-phase electric motor or low-speed stationary engines."
  },
  {
    "category": "Trapiches",
    "category_EN": "Sugarcane Mills",
    "product": "Trapiche Horizontal TH 8",
    "product_EN": "Horizontal Sugarcane Mill TH 8",
    "question": "¿Cuál es el rendimiento de extracción del jugo de la caña?",
    "question_EN": "What is the sugarcane juice extraction yield?",
    "answer": "El rendimiento es del 60% de extracción en jugo. Por cada 100 kg de caña de azúcar que ingrese en el equipo, va a obtener 60 kg de jugo de caña de azúcar.",
    "answer_EN": "The yield is 60% juice extraction. For every 100 kg of sugarcane processed, you will get 60 kg of sugarcane juice."
  },
  {
    "category": "Trapiches",
    "category_EN": "Sugarcane Mills",
    "product": "Trapiche Horizontal TH 8",
    "product_EN": "Horizontal Sugarcane Mill TH 8",
    "question": "¿Cuántos kilogramos de panela se pueden obtener con un trapiche TH 8?",
    "question_EN": "How many kilograms of panela (jaggery) can be obtained with a TH 8 sugarcane mill?",
    "answer": "Puede obtener entre 80 y 90 kilogramos de panela por hora.",
    "answer_EN": "You can get between 80 and 90 kilograms of panela per hour."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Dónde se puede utilizar la Cosechadora de Forrajes?",
    "question_EN": "Where can the Forage Harvester be used?",
    "answer": "Este equipo se utiliza únicamente en terrenos planos o terrenos ondulados que no superen una inclinación mayor a 10°",
    "answer_EN": "This equipment is used only on flat terrain or rolling terrain that does not exceed a 10° incline."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Qué tipo de cultivos sembrados puedo cosechar con la cosechadora de forrajes CF-20?",
    "question_EN": "What type of planted crops can I harvest with the CF-20 forage harvester?",
    "answer": "Se pueden cosechar cultivos sembrados al surco o sembrado al boleo",
    "answer_EN": "You can harvest row crops or broadcast-seeded crops."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Puedo cosechar pastos bajos (pastos que no tienen más de 1,5 m) con la cosechadora de forrajes CF-20?",
    "question_EN": "Can I harvest low grasses (grasses shorter than 1.5 m) with the CF-20 forage harvester?",
    "answer": "Si, pero no es lo recomendable. Esto depende de la variedad del pasto. Puede picar pasto cuba 22 o pasto estrella.",
    "answer_EN": "Yes, but it is not recommended. This depends on the grass variety. You can chop Cuba 22 grass or star grass."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Cosechando con la cosechadora de forrajes CF-20 puedo hacer silo?",
    "question_EN": "Can I make silage while harvesting with the CF-20 forage harvester?",
    "answer": "Si, pero debe asegurarse que el pasto picado cuando ingrese en las bolsas de silo no tengan oxigeno en su interior.",
    "answer_EN": "Yes, but you must make sure that the chopped grass has no oxygen inside when packed into the silage bags."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Cuál es la mínima potencia del tractor para operar la cosechadora de forrajes CF-20?",
    "question_EN": "What is the minimum tractor power required to operate the CF-20 forage harvester?",
    "answer": "La potencia mínima que debe tener un tractor es de 50 hp.",
    "answer_EN": "The minimum power a tractor must have is 50 hp."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Cuál es la velocidad de avance del tractor para operar la cosechadora de forrajes CF-20?",
    "question_EN": "What is the forward speed of the tractor for operating the CF-20 forage harvester?",
    "answer": "Los tractores no pueden superar los 4 kilómetros por hora.",
    "answer_EN": "Tractors cannot exceed 4 kilometers per hour."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Cómo gradúo el rebrote cuando se utiliza la cosechadora de forrajes CF-20?",
    "question_EN": "How do I adjust the stubble height when using the CF-20 forage harvester?",
    "answer": "El rebrote se gradúa con la rueda guía. Fije la rueda guía a la posición de altura de corte deseada.",
    "answer_EN": "The regrowth/stubble height is adjusted with the guide wheel. Set the guide wheel to the desired cutting height position."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Cuántos tamaños de corte tiene la cosechadora de forrajes CF-20?",
    "question_EN": "How many cutting sizes does the CF-20 forage harvester have?",
    "answer": "Utilizando 10 cuchillas puede obtener tamaños de corte de 5mm, 7mm, 10mm y 15mm. Utilizando 5 cuchillas puede obtener tamaños de corte de 10mm, 14mm, 20mm y 30mm.",
    "answer_EN": "Using 10 blades you can get cutting sizes of 5mm, 7mm, 10mm, and 15mm. Using 5 blades you can get cutting sizes of 10mm, 14mm, 20mm, and 30mm."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Qué sistema de direccionamiento del cuello de ganso y del deflector usa la cosechadora de forrajes CF-20?",
    "question_EN": "What directing system does the CF-20 forage harvester use for the chute and deflector?",
    "answer": "El sistema de direccionamiento es mecánico a través de guaya",
    "answer_EN": "The directing system is mechanical via cables."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Tiene la cosechadora de forrajes CF-20 un sistema de seguridad cuando se presenta una sobrecarga en el sistema?",
    "question_EN": "Does the CF-20 forage harvester have a safety system in case of an overload?",
    "answer": "Si, posee un sistema de fusible de engranajes (pin)",
    "answer_EN": "Yes, it has a shear pin gear safety system."
  },
  {
    "category": "Cosechadora de Forrajes",
    "category_EN": "Forage Harvesters",
    "product": "Cosechadora de Forrajes CF-20",
    "product_EN": "Forage Harvester CF-20",
    "question": "¿Qué tipo de cuchilla utiliza la cosechadora de forrajes CF-20?",
    "question_EN": "What type of blade does the CF-20 forage harvester use?",
    "answer": "Este equipo utiliza cuchillas de platina",
    "answer_EN": "This equipment uses flat bar blades."
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Despulpadoras Horizontales de café (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 y DH 3 1/2)",
    "product_EN": "Horizontal Coffee Pulpers (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 and DH 3 1/2)",
    "question": "¿Por qué mi despulpadora de café cascarea?",
    "question_EN": "Why is my coffee pulper leaving husk/skin on the beans?",
    "answer": "Las causas pueden ser: * La máquina esta siendo operada por encima de la velocidad recomendada. * Las aletas de graduación de la alimentación están muy abiertas. * La camisa o rallo esta muy desgastada. * El pechero está mal calibrado o desgastado. * Hay mucho café verde o reseco. Para solucionar este problema debe: * Calibrar las cuchillas del eje alimentador para que sea menor la alimentación. * Cambiar la camisa despulpadora. * Calibre y si es necesario, cambie el pechero. * Realice separación de flotes al café cereza para que procese café maduro en buen estado.",
    "answer_EN": "Causes could be: * The machine is operated above the recommended speed. * The feed adjustment flaps are too wide open. * The pulping screen/grater is very worn. * The breastplate is poorly calibrated or worn out. * There is too much green or dried-out coffee. Solutions: * Calibrate the feed shaft blades to reduce feeding. * Change the pulping screen. * Calibrate and, if necessary, replace the breastplate. * Separate floaters from cherry coffee so you process ripe coffee in good condition."
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Despulpadoras Horizontales de café (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 y DH 3 1/2)",
    "product_EN": "Horizontal Coffee Pulpers (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 and DH 3 1/2)",
    "question": "¿Por qué salen granos partidos o con daños de mi despulpadora de café?",
    "question_EN": "Why are broken or damaged beans coming out of my coffee pulper?",
    "answer": "Las causas pueden ser: * Los dientes de la camisa están muy abiertos y cortantes * La camisa no se acopla perfectamente al cuerpo del equipo. * El pechero de la despulpadora no está bien calibrado * El pechero está obstruido * La máquina no está girando a la velocidad recomendada Para solucionar este problema debe: * Si es la camisa la que presenta fallas, proceda a realizar el cambio por una nueva marca Penagos. * Realice una limpieza completa al pechero y calíbrelo hasta obtener el resultado requerido.",
    "answer_EN": "Causes could be: * The screen teeth are too open and sharp. * The screen does not fit the machine body perfectly. * The pulper breastplate is not well calibrated. * The breastplate is clogged. * The machine is not spinning at the recommended speed. Solutions: * If the screen is faulty, replace it with a new Penagos brand screen. * Completely clean the breastplate and calibrate it until the desired result is obtained."
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Despulpadoras Horizontales de café (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 y DH 3 1/2)",
    "product_EN": "Horizontal Coffee Pulpers (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 and DH 3 1/2)",
    "question": "¿Por qué mi despulpadora de café no me da la capacidad que indica el manual?",
    "question_EN": "Why is my coffee pulper not delivering the capacity indicated in the manual?",
    "answer": "Las causas pueden ser: * Las aletas o tornillo de graduación de la alimentación están muy cerradas. * La camisa o rallo está excesivamente gastada. * La despulpadora está siendo operada debajo de la velocidad recomendada. Para solucionar este problema debe: * Calibre la cuchilla de alimentación hasta obtener el resultado esperado. * Reemplace la camisa por una nueva y calibre el pechero para ajustarlo a la nueva camisa instalada. * Si observa que la máquina está trabajando por debajo de la velocidad requerida, cambie la polea del motor por una de mayor diámetro.",
    "answer_EN": "Causes could be: * The feed adjustment flaps or screws are too closed. * The screen/grater is excessively worn. * The pulper is operating below the recommended speed. Solutions: * Calibrate the feeding blade to achieve the expected result. * Replace the screen and calibrate the breastplate to match the new screen. * If the machine is running below the required speed, replace the motor pulley with a larger diameter one."
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Despulpadoras Horizontales de café (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 y DH 3 1/2)",
    "product_EN": "Horizontal Coffee Pulpers (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 and DH 3 1/2)",
    "question": "¿Cuál debe ser el tamaño del grano para usar una despulpadora de café?",
    "question_EN": "What should the bean size be to use a coffee pulper?",
    "answer": "No hay un tamaño definido para nuestros equipos Penagos. Es por esto que nuestros equipos cuentan con diferentes referencias de pecheros para todos los tipo de granos de café. Usted debe identificar el tamaño promedio de su café (adjuntar cómo se mide ese café con una imagen). Poner la parte de pecheros. Pecheros DH 2 – 4 y 6",
    "answer_EN": "There is no specific size defined for Penagos equipment. This is why our machines come with different breastplate references for all types of coffee beans. You must identify the average size of your coffee. Reference breastplates DH 2 – 4 and 6."
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Despulpadoras Horizontales de café (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 y DH 3 1/2)",
    "product_EN": "Horizontal Coffee Pulpers (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 and DH 3 1/2)",
    "question": "¿Cómo calibrar el pechero de mi despulpadora de café Penagos?",
    "question_EN": "How do I calibrate the breastplate of my Penagos coffee pulper?",
    "answer": "Visite nuestro canal de Youtube en:",
    "answer_EN": "Visit our YouTube channel at:"
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Despulpadoras Horizontales de café (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 y DH 3 1/2)",
    "product_EN": "Horizontal Coffee Pulpers (DH 2, DH 4, DH 6, DH 2 1/2, DH 2 3/4 and DH 3 1/2)",
    "question": "¿Cuál es el rango aceptado de cascareo y daño mecánico para saber si mi despulpadora de café horizontal está trabajando adecuadamente?",
    "question_EN": "What is the acceptable range of unpulped skins and mechanical damage to know if my horizontal coffee pulper is working properly?",
    "answer": "Según norma NTC 2090, dice que con unas condiciones de entrada de café, se aceptan los siguientes valores de defectos en el grano:",
    "answer_EN": "According to the NTC 2090 standard, under certain coffee input conditions, the following bean defect values are accepted:"
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Módulos clasificadores de café (MC 2, MC 4, MC 6, MC 2 1/2, MC 2 3/4 y MC 3 1/2)",
    "product_EN": "Coffee Classifying Modules (MC 2, MC 4, MC 6, MC 2 1/2, MC 2 3/4 and MC 3 1/2)",
    "question": "¿Por qué sale fruto sin despulpar en mi módulo clasificador de café y cómo lo soluciono?",
    "question_EN": "Why is unpulped fruit coming out of my coffee classifying module and how do I fix it?",
    "answer": "Las causas pueden ser: * pechero desgastado o mal calibrado * camisa en mal estado * Café verde o seco Para solucionar este problema debe: * Ajuste y verifique la graduación del pechero. Si considera necesario, cambie y calibre el pechero.",
    "answer_EN": "Causes could be: * Worn or poorly calibrated breastplate. * Screen in bad condition. * Green or dry coffee. Solutions: * Adjust and verify the breastplate settings. If necessary, change and recalibrate the breastplate."
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Módulos clasificadores de café (MC 2, MC 4, MC 6, MC 2 1/2, MC 2 3/4 y MC 3 1/2)",
    "product_EN": "Coffee Classifying Modules (MC 2, MC 4, MC 6, MC 2 1/2, MC 2 3/4 and MC 3 1/2)",
    "question": "¿Por qué sale el grano con daño mecánico en mi módulo clasificador de café y cómo lo soluciono?",
    "question_EN": "Why are mechanically damaged beans coming out of my coffee classifying module and how do I fix it?",
    "answer": "Las causas pueden ser: * El pechero está muy pegado (cerca) a la camisa despulpadora. * Los dientes de la camisa despulpadora son disparejos. * Exceso de alimentación en la tolva * Las chumaceras están desajustadas * Hay mucho café verde o reseco. Para solucionar este problema debe: * Separar y calibrar el pechero hasta lograr el resultado esperado. * Con un material blando, de suaves toques a los dientes de la camisa que están disparejos para que puedan igualarse a los demás. * Calibre con las cuchillas del eje alimentador, la capacidad de la tolva. * Cambie las chumaceras. Si están desajustadas, probablemente están desgastadas.",
    "answer_EN": "Causes could be: * The breastplate is too close to the pulping screen. * The screen teeth are uneven. * Overfeeding in the hopper. * The bearings are loose/worn. * There is a lot of green or dry coffee. Solutions: * Separate and calibrate the breastplate to achieve the expected result. * Using a soft material, gently tap the uneven screen teeth to level them with the rest. * Calibrate hopper capacity using the feed shaft blades. * Replace the bearings. If they are loose, they are likely worn."
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Módulos clasificadores de café (MC 2, MC 4, MC 6, MC 2 1/2, MC 2 3/4 y MC 3 1/2)",
    "product_EN": "Coffee Classifying Modules (MC 2, MC 4, MC 6, MC 2 1/2, MC 2 3/4 and MC 3 1/2)",
    "question": "¿Por qué sale pulpa en el café pergamino despulpado en mi módulo clasificador de café y cómo lo puedo solucionar?",
    "question_EN": "Why is pulp coming out in the pulped parchment coffee in my classifying module and how can I fix it?",
    "answer": "Las causas pueden ser: * Exceso de alimentación en la tolva. * Los dientes de la camisa despulpadora están desgastados * Los canales del pechero están desgastados * El cilindro está girando muy rápido. Para solucionar este problema debe: * Calibre la cuchilla de alimentación para graduar la alimentación al equipo. * Cambie la camisa y calibre el pechero * Cambie y calibre el pechero * Cambie la polea del motor por una más pequeña",
    "answer_EN": "Causes could be: * Overfeeding in the hopper. * The pulping screen teeth are worn. * The breastplate channels are worn. * The cylinder is spinning too fast. Solutions: * Calibrate the feed blade to adjust feeding into the equipment. * Replace the screen and recalibrate the breastplate. * Change and recalibrate the breastplate. * Replace the motor pulley with a smaller one."
  },
  {
    "category": "Despulpadoras y Módulos Clasificadores de café",
    "category_EN": "Coffee Pulpers and Classifying Modules",
    "product": "Módulos clasificadores de café (MC 2, MC 4, MC 6, MC 2 1/2, MC 2 3/4 y MC 3 1/2)",
    "product_EN": "Coffee Classifying Modules (MC 2, MC 4, MC 6, MC 2 1/2, MC 2 3/4 and MC 3 1/2)",
    "question": "¿Cuál debe ser el tamaño del grano para usar una Despulpadora de café Horizontal?",
    "question_EN": "What should the bean size be to use a Horizontal Coffee Pulper?",
    "answer": "No hay un tamaño definido para nuestros equipos Penagos. Es por esto que nuestros equipos cuentan con diferentes referencias de pecheros para todos los tipo de granos de café. Usted debe identificar el tamaño promedio de su café (adjuntar cómo se mide ese café con una imagen o foto) Pecheros DH 2 – 4 y 6",
    "answer_EN": "There is no specific size defined for Penagos equipment. This is why our machines come with different breastplate references for all types of coffee beans. You must identify the average size of your coffee. Reference breastplates DH 2 – 4 and 6."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de beneficio ecológico para café Ecolines (ECO 400, ECO 800 y ECO 1000)",
    "product_EN": "Ecological Coffee Processing Units Ecolines (ECO 400, ECO 800 and ECO 1000)",
    "question": "¿Por qué mi despulpadora de café cascarea?",
    "question_EN": "Why is my coffee pulper leaving husk/skin on the beans?",
    "answer": "Las causas pueden ser: * La máquina esta siendo operada por encima de la velocidad recomendada. * Las aletas de graduación de la alimentación están muy abiertas. * La camisa o rallo esta muy desgastada. * El pechero está mal calibrado o desgastado. * Hay mucho café verde o reseco. Para solucionar este problema debe: * Calibrar las cuchillas del eje alimentador para que sea menor la alimentación. * Cambiar la camisa despulpadora. * Calibre y si es necesario, cambie el pechero. * Realice separación de flotes al café cereza para que procese café maduro en buen estado.",
    "answer_EN": "Causes could be: * The machine is operated above the recommended speed. * The feed adjustment flaps are too wide open. * The pulping screen/grater is very worn. * The breastplate is poorly calibrated or worn out. * There is too much green or dried-out coffee. Solutions: * Calibrate the feed shaft blades to reduce feeding. * Change the pulping screen. * Calibrate and, if necessary, replace the breastplate. * Separate floaters from cherry coffee so you process ripe coffee in good condition."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de beneficio ecológico para café Ecolines (ECO 400, ECO 800 y ECO 1000)",
    "product_EN": "Ecological Coffee Processing Units Ecolines (ECO 400, ECO 800 and ECO 1000)",
    "question": "¿Por qué salen granos partidos o con daños de mi despulpadora de café?",
    "question_EN": "Why are broken or damaged beans coming out of my coffee pulper?",
    "answer": "Las causas pueden ser: * Los dientes de la camisa están muy abiertos y cortantes * La camisa no se acopla perfectamente al cuerpo del equipo. * El pechero de la despulpadora no está bien calibrado * El pechero está obstruido * La máquina no está girando a la velocidad recomendada Para solucionar este problema debe: * Si es la camisa la que presenta fallas, proceda a realizar el cambio por una nueva marca Penagos. * Realice una limpieza completa al pechero y calíbrelo hasta obtener el resultado requerido.",
    "answer_EN": "Causes could be: * The screen teeth are too open and sharp. * The screen does not fit the machine body perfectly. * The pulper breastplate is not well calibrated. * The breastplate is clogged. * The machine is not spinning at the recommended speed. Solutions: * If the screen is faulty, replace it with a new Penagos brand screen. * Completely clean the breastplate and calibrate it until the desired result is obtained."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de beneficio ecológico para café Ecolines (ECO 400, ECO 800 y ECO 1000)",
    "product_EN": "Ecological Coffee Processing Units Ecolines (ECO 400, ECO 800 and ECO 1000)",
    "question": "¿Por qué mi despulpadora de café no me da la capacidad que indica el manual?",
    "question_EN": "Why is my coffee pulper not delivering the capacity indicated in the manual?",
    "answer": "Las causas pueden ser: * Las aletas o tornillo de graduación de la alimentación están muy cerradas. * La camisa o rallo está excesivamente gastada. * La despulpadora está siendo operada debajo de la velocidad recomendada. Para solucionar este problema debe: * Calibre la cuchilla de alimentación hasta obtener el resultado esperado. * Reemplace la camisa por una nueva y calibre el pechero para ajustarlo a la nueva camisa instalada. * Si observa que la máquina está trabajando por debajo de la velocidad requerida, cambie la polea del motor por una de mayor diámetro.",
    "answer_EN": "Causes could be: * The feed adjustment flaps or screws are too closed. * The screen/grater is excessively worn. * The pulper is operating below the recommended speed. Solutions: * Calibrate the feeding blade to achieve the expected result. * Replace the screen and calibrate the breastplate to match the new screen. * If the machine is running below the required speed, replace the motor pulley with a larger diameter one."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de beneficio ecológico para café Ecolines (ECO 400, ECO 800 y ECO 1000)",
    "product_EN": "Ecological Coffee Processing Units Ecolines (ECO 400, ECO 800 and ECO 1000)",
    "question": "¿Cuál debe ser el tamaño del grano para usar una despulpadora de café?",
    "question_EN": "What should the bean size be to use a coffee pulper?",
    "answer": "No hay un tamaño definido para nuestros equipos Penagos. Es por esto que nuestros equipos cuentan con diferentes referencias de pecheros para todos los tipo de granos de café. Usted debe identificar el tamaño promedio de su café (adjuntar cómo se mide ese café con una imagen). Poner la parte de pecheros. Pecheros DH 2 – 4 y 5",
    "answer_EN": "There is no specific size defined for Penagos equipment. This is why our machines come with different breastplate references for all types of coffee beans. You must identify the average size of your coffee. Reference breastplates DH 2 – 4 and 5."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de beneficio ecológico para café Ecolines (ECO 400, ECO 800 y ECO 1000)",
    "product_EN": "Ecological Coffee Processing Units Ecolines (ECO 400, ECO 800 and ECO 1000)",
    "question": "¿Cómo calibrar el pechero de mi despulpadora de café Penagos?",
    "question_EN": "How do I calibrate the breastplate of my Penagos coffee pulper?",
    "answer": "Visite nuestro canal de Youtube en:",
    "answer_EN": "Visit our YouTube channel at:"
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de beneficio ecológico para café Ecolines (ECO 400, ECO 800 y ECO 1000)",
    "product_EN": "Ecological Coffee Processing Units Ecolines (ECO 400, ECO 800 and ECO 1000)",
    "question": "¿Cuál es el rango aceptado de cascareo y daño mecánico para saber si mi despulpadora de café horizontal está trabajando adecuadamente?",
    "question_EN": "What is the acceptable range of unpulped skins and mechanical damage to know if my horizontal coffee pulper is working properly?",
    "answer": "Según norma NTC 2090, dice que con unas condiciones de entrada de café, se aceptan los siguientes valores de defectos en el grano:",
    "answer_EN": "According to the NTC 2090 standard, under certain coffee input conditions, the following bean defect values are accepted:"
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué mi beneficio de café cascarea?",
    "question_EN": "Why is my coffee processing unit leaving husk/skin on the beans?",
    "answer": "* Porque los pecheros están mal calibrados * La camisa o rallo está dañada o desgastada * La máquina esta siendo operada por encima de la velocidad recomendada. * Las aletas de graduación de la alimentación están muy abiertas. * Algún(os) de los pecheros están muy desgastados. * La camisa no asienta perfectamente en el tronco de cono. * Montaje deficiente que permite la acumulación de pulpa entre la camisa y las guardas metálicas.",
    "answer_EN": "* Because the breastplates are poorly calibrated. * The screen/grater is damaged or worn. * The machine is operating above the recommended speed. * Feed adjustment flaps are too open. * One or more breastplates are heavily worn. * The screen does not seat perfectly on the truncated cone. * Poor assembly allowing pulp accumulation between the screen and metal guards."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué me salen granos sin despulpar de mi beneficio de café?",
    "question_EN": "Why are unpulped beans coming out of my coffee processing unit?",
    "answer": "* Porque están mal calibrados los pecheros * La máquina no cuenta con pechero con la profundidad necesaria * La camisa esta muy desgastada * La boca de los pecheros esta obstruida",
    "answer_EN": "* Because the breastplates are poorly calibrated. * The machine doesn't have a breastplate with the required depth. * The screen is heavily worn. * The mouth of the breastplates is obstructed."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué me salen granos partidos o con daños de mi beneficio de café?",
    "question_EN": "Why are broken or damaged beans coming out of my coffee processing unit?",
    "answer": "* Por mala calibración de pecheros (de la despulpadora o limpiadora) * La camisa presenta daños * Los dientes de la camisa están muy abiertos y cortantes * La camisa no asienta perfectamente en el tronco de cono * Los pecheros no están debidamente calibrados con respecto de la camisa * Algún(os) pecheros están obstruidos * La máquina no esta girando a la velocidad recomendada * La camisa no es original",
    "answer_EN": "* Due to poor calibration of breastplates (of the pulper or cleaner). * The screen is damaged. * The screen teeth are too open and sharp. * The screen does not seat perfectly on the truncated cone. * Breastplates are not properly calibrated relative to the screen. * One or more breastplates are clogged. * The machine is not spinning at the recommended speed. * The screen is not original."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué el beneficio de café no me da la capacidad que indica el manual?",
    "question_EN": "Why is my coffee processing unit not delivering the capacity indicated in the manual?",
    "answer": "* Porque las cuchillas de graduación están muy cerradas * El motor que está utilizando no es el recomendado en el manual técnico",
    "answer_EN": "* Because the feed adjustment blades are too closed. * The motor being used is not the one recommended in the technical manual."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué salen granos despulpados buenos con los rechazos en mi unidad compacta de beneficio ecológico UCBE?",
    "question_EN": "Why are good pulped beans coming out with the rejects in my UCBE ecological compact processing unit?",
    "answer": "* Porque la despulpadora principal no está bien calibrada para despulpar los maduros * Porque le falta peso en la compuerta de salida de verdes.",
    "answer_EN": "* Because the main pulper is not well calibrated to pulp ripe cherries. * Because there is a lack of weight on the green bean discharge gate."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué sale granos defectuosos mezclados con los granos buenos en mi unidad compacta de beneficio ecológico UCBE?",
    "question_EN": "Why are defective beans mixed with good beans in my UCBE ecological compact processing unit?",
    "answer": "* La despulpadora vertical está mal calibrada * Los pecheros de su despulpadora no son los adecuados",
    "answer_EN": "* The vertical pulper is poorly calibrated. * The breastplates on your pulper are not the right ones."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué no evacúa la pulpa en mi unidad compacta de beneficio ecológico UCBE?",
    "question_EN": "Why is the pulp not being evacuated in my UCBE unit?",
    "answer": "Puede ser que la banda del sinfín ya está gastada y patina",
    "answer_EN": "It could be that the auger belt is worn out and slipping."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué sale café en la pulpa en mi beneficio de café?",
    "question_EN": "Why are coffee beans coming out in the pulp?",
    "answer": "* Pecheros helicoidales mal calibrados, use galga # 20 * Camisa del tronco de cono desgastada o dañada * Canal de salida de café despulpado, mal posicionado",
    "answer_EN": "* Helical breastplates are poorly calibrated, use gauge #20. * The truncated cone screen is worn or damaged. * The pulped coffee outlet channel is poorly positioned."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades Compactas de Beneficio Ecológico (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 y UCBE 20000)",
    "product_EN": "Compact Ecological Processing Units (UCBE 500, UCBE 1500, UCBE 2500, UCBE 5000, UCBE 7500, UCBE 10000 and UCBE 20000)",
    "question": "¿Por qué se ve café despulpado en la pulpa?",
    "question_EN": "Why can I see pulped coffee in the pulp?",
    "answer": "* Puede ser mala calibración del pechero * La compuerta de inspección del bastidor está abierta * Pecheros helicoidales mal calibrados, use galga # 20 * Camisa del tronco de cono desgastada o dañada * Canal de salida de café despulpado, mal posicionado",
    "answer_EN": "* It could be poor breastplate calibration. * The frame's inspection door is open. * Helical breastplates poorly calibrated, use gauge #20. * Truncated cone screen is worn or damaged. * Pulped coffee outlet channel is poorly positioned."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de despulpe y clasificación de verdes (DCV 183, DCV 306, UCD-1, UDC-2, UDC-4 y UDC-6)",
    "product_EN": "Pulping and Green Bean Classification Units (DCV 183, DCV 306, UCD-1, UDC-2, UDC-4 and UDC-6)",
    "question": "¿Por qué sale café en la pulpa de mi unidad de despulpe y clasificación?",
    "question_EN": "Why are coffee beans coming out in the pulp of my pulping and classifying unit?",
    "answer": "* Pecheros obstruidos * Pecheros mal calibrados, use galga de calibre # 22 * Camisa dentada esta desgastada o dañada, realice el cambio.",
    "answer_EN": "* Clogged breastplates. * Poorly calibrated breastplates, use gauge #22. * Toothed screen is worn or damaged, perform replacement."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de despulpe y clasificación de verdes (DCV 183, DCV 306, UCD-1, UDC-2, UDC-4 y UDC-6)",
    "product_EN": "Pulping and Green Bean Classification Units (DCV 183, DCV 306, UCD-1, UDC-2, UDC-4 and UDC-6)",
    "question": "¿Por qué me cascarea mi unidad de despulpe y clasificación?",
    "question_EN": "Why is my pulping and classifying unit leaving skin/husk on the beans?",
    "answer": "* La maquina está siendo operada por encima de la velocidad recomendada. * Las aletas de graduación de la alimentación están muy abiertas. * La camisa dentada está muy desgastada. * Los pecheros no están debidamente calibrados con respecto de la camisa * La configuración de pecheros no es adecuada al tipo de fruta * Algún(os) de los pecheros están muy desgastados. * Los insertos vibroelásticos o elastómeros están muy desgastados. * Canastas del desmucilaginador están obstruidas por impurezas.",
    "answer_EN": "* The machine is operated above the recommended speed. * Feed adjustment flaps are too wide open. * Toothed screen is very worn. * Breastplates are not properly calibrated relative to the screen. * Breastplate configuration is inadequate for the fruit type. * One or more breastplates are heavily worn. * Vibroelastic inserts or elastomers are heavily worn. * Demucilager baskets are clogged with impurities."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de despulpe y clasificación de verdes (DCV 183, DCV 306, UCD-1, UDC-2, UDC-4 y UDC-6)",
    "product_EN": "Pulping and Green Bean Classification Units (DCV 183, DCV 306, UCD-1, UDC-2, UDC-4 and UDC-6)",
    "question": "¿Por qué no da la capacidad mi unidad de despulpe y clasificación?",
    "question_EN": "Why is my pulping and classifying unit not giving full capacity?",
    "answer": "* Las aletas de graduación de la alimentación están muy cerradas. * La camisa dentada esta excesivamente gastada. * Algún(os) de los pecheros se encuentran obstruidos por objetos extraños. * Las aletas del agitador están averiadas o desgastadas. * La despulpadora esta siendo operada a menor velocidad que la recomendada. * El alimentador no ha sido instalado * Las bandas de transmisión están flojas. * Velocidad incorrecta del motor o de la relación de transmisión.",
    "answer_EN": "* Feed adjustment flaps are too closed. * Toothed screen is excessively worn. * One or more breastplates are obstructed by foreign objects. * Agitator fins are damaged or worn. * The pulper is operating at a lower speed than recommended. * The feeder has not been installed. * Drive belts are loose. * Incorrect motor speed or transmission ratio."
  },
  {
    "category": "Beneficios compactos para café",
    "category_EN": "Compact Coffee Processing Units",
    "product": "Unidades de despulpe y clasificación de verdes (DCV 183, DCV 306, UCD-1, UDC-2, UDC-4 y UDC-6)",
    "product_EN": "Pulping and Green Bean Classification Units (DCV 183, DCV 306, UCD-1, UDC-2, UDC-4 and UDC-6)",
    "question": "¿Por qué me salen granos partidos o con daños de mi unidad de despulpe y clasificación?",
    "question_EN": "Why are broken or damaged beans coming out of my pulping and classifying unit?",
    "answer": "* Los dientes de la camisa están muy abiertos y cortantes * Algún (os) de los dientes de la camisa están rotos, realice el cambio. * Los pecheros no están debidamente calibrados con respecto a la camisa * La configuración de pecheros no es adecuada al tipo de fruta * La boca de algún(os) de los pecheros está obstruida * La máquina no está girando a la velocidad recomendada * La camisa no es original * Calibración inadecuada del desmucilaginador (consultar recomendaciones para un buen desmucilaginado en el manual técnico del equipo)",
    "answer_EN": "* Screen teeth are too open and sharp. * Some screen teeth are broken, perform replacement. * Breastplates are not properly calibrated relative to the screen. * Breastplate configuration is inadequate for the fruit type. * Mouth of one or more breastplates is clogged. * Machine is not spinning at the recommended speed. * Screen is not original. * Inadequate calibration of the demucilager (check the technical manual for recommendations for proper demucilaging)."
  },
  {
    "category": "Accesorios de preclasificación y transporte de café",
    "category_EN": "Coffee Pre-classification and Transport Accessories",
    "product": "Banda Transportadora",
    "product_EN": "Conveyor Belt",
    "question": "¿Qué mantenimiento debo realizarle a mi banda transportadora (horizontal o vertical)",
    "question_EN": "What maintenance should I perform on my conveyor belt (horizontal or vertical)?",
    "answer": "1. Verifique el alineamiento de los tambores y la banda para que no se empiece a mover. Si la banda está corrida hacia algún lado, ajuste la banda con el tensor ubicado en uno de los extremos. 2. Limpie y lubrique las chumaceras y los tensores ubicados en ambos extremos de la banda transportadora. 3. Revise que la banda no esté desgastada. Si presenta desgaste, debe cambiarla. 4. Asegure que el motorreductor de la banda transportadora este bien ajustado al soporte y que opere según sus características técnicas.",
    "answer_EN": "1. Verify the alignment of the drums and belt so it does not drift. If the belt shifts to one side, adjust it using the tensioner at one of the ends. 2. Clean and lubricate the bearings and tensioners located at both ends of the conveyor. 3. Check the belt for wear; if worn, replace it. 4. Ensure the conveyor's gear motor is tightly secured to the support and operates according to its technical specs."
  },
  {
    "category": "Accesorios de preclasificación y transporte de café",
    "category_EN": "Coffee Pre-classification and Transport Accessories",
    "product": "Banda Transportadora",
    "product_EN": "Conveyor Belt",
    "question": "¿Qué pasa si la banda transportadora está trabajando muy rápido?",
    "question_EN": "What happens if the conveyor belt is working too fast?",
    "answer": "Ajuste la velocidad en el variador de frecuencia ubicado en el tablero eléctrico de la banda transportadora.",
    "answer_EN": "Adjust the speed on the variable frequency drive located in the conveyor's electrical panel."
  },
  {
    "category": "Accesorios de preclasificación y transporte de café",
    "category_EN": "Coffee Pre-classification and Transport Accessories",
    "product": "Banda Transportadora",
    "product_EN": "Conveyor Belt",
    "question": "¿Qué hago si sale café entre las láminas encausadoras laterales y la banda?",
    "question_EN": "What do I do if coffee spills between the side guide plates and the belt?",
    "answer": "Modifique la altura de las láminas encausadoras ajustando las platinas que soportan las láminas a la estructura.",
    "answer_EN": "Modify the height of the guide plates by adjusting the brackets holding them to the structure."
  },
  {
    "category": "Accesorios de preclasificación y transporte de café",
    "category_EN": "Coffee Pre-classification and Transport Accessories",
    "product": "Banda Transportadora",
    "product_EN": "Conveyor Belt",
    "question": "¿Qué pasa si la banda transportadora se detiene?",
    "question_EN": "What if the conveyor belt stops?",
    "answer": "Probablemente sea porque la lámina encausadora lateral está tocando la banda en algún punto. Verifique que la lámina tenga la separación de mínimo 2 mm en toda su longitud.",
    "answer_EN": "It is likely because the side guide plate is touching the belt at some point. Verify that the plate has a minimum clearance of 2 mm along its entire length."
  },
  {
    "category": "Ecomill",
    "category_EN": "Ecomill",
    "product": "Ecomill 500",
    "product_EN": "Ecomill 500",
    "question": "¿Qué hago si el café sale con mucílago?",
    "question_EN": "What do I do if the coffee comes out with mucilage?",
    "answer": "Se debe verificar que las poleas sean las requeridas según el manual y que el motor está girando a la velocidad que se requiere. A veces se presentan bajas de tensión que hace que el motor no trabaje adecuadamente.",
    "answer_EN": "You must verify that the pulleys match those required in the manual and that the motor is spinning at the correct speed. Sometimes voltage drops prevent the motor from working properly."
  },
  {
    "category": "Ecomill",
    "category_EN": "Ecomill",
    "product": "Ecomill 500",
    "product_EN": "Ecomill 500",
    "question": "Si se atasca el Ecomill, ¿cómo soluciono?",
    "question_EN": "If the Ecomill jams, how do I fix it?",
    "answer": "Apague la máquina. Manualmente, gire la polea en sentido contrario de operación para que el café se regrese a la entrada. Abra la compuerta de la canasta y desocupe el café. Con el equipo desocupado, puede encender nuevamente el equipo para verificar que está operando correctamente.",
    "answer_EN": "Turn off the machine. Manually rotate the pulley in the reverse direction of operation so the coffee returns to the inlet. Open the basket gate and empty the coffee. With the equipment empty, turn it back on to verify it is operating correctly."
  },
  {
    "category": "Ecomill",
    "category_EN": "Ecomill",
    "product": "Ecomill 500",
    "product_EN": "Ecomill 500",
    "question": "¿Si tengo daño mecánico, cómo soluciono?",
    "question_EN": "If I have mechanical damage, how do I solve it?",
    "answer": "Probablemente sea porque hay demasiada agua en el lavador o porque el equipo está girando más rápido de lo requerido según el manual técnico. Regule el nivel de agua y valide que las poleas acopladas en el equipo sean las requeridas según el manual.",
    "answer_EN": "It is probably because there is too much water in the washer or because the equipment is spinning faster than required by the technical manual. Regulate the water level and validate that the pulleys attached to the equipment are correct per the manual."
  },
  {
    "category": "Ecomill",
    "category_EN": "Ecomill",
    "product": "Ecomill 500",
    "product_EN": "Ecomill 500",
    "question": "¿Qué mantenimiento se le debe realizar al Ecomill 500?",
    "question_EN": "What maintenance should be performed on the Ecomill 500?",
    "answer": "1. Lave con agua y cepillo todas las piezas del equipo sin tocar el motor o los cables eléctricos. 2. Verifique que la banda esté tensionada. 3. Lubrique las chumaceras con grasera a presión.",
    "answer_EN": "1. Wash all parts of the equipment with water and a brush without touching the motor or electrical cables. 2. Verify that the belt is tensioned. 3. Lubricate the bearings with a pressure grease gun."
  },
  {
    "category": "Ecomill",
    "category_EN": "Ecomill",
    "product": "Ecomill 1500",
    "product_EN": "Ecomill 1500",
    "question": "¿Qué hago si el café sale con mucílago?",
    "question_EN": "What do I do if the coffee comes out with mucilage?",
    "answer": "Se debe verificar que las poleas sean las requeridas según el manual y que el motor está girando a la velocidad que se requiere. A veces se presentan bajas de tensión que hace que el motor no trabaje adecuadamente.",
    "answer_EN": "You must verify that the pulleys match those required in the manual and that the motor is spinning at the correct speed. Sometimes voltage drops prevent the motor from working properly."
  },
  {
    "category": "Ecomill",
    "category_EN": "Ecomill",
    "product": "Ecomill 1500",
    "product_EN": "Ecomill 1500",
    "question": "Si se atasca el Ecomill, ¿cómo soluciono?",
    "question_EN": "If the Ecomill jams, how do I fix it?",
    "answer": "Apague la máquina. Manualmente, gire la polea en sentido contrario de operación para que el café se regrese a la entrada. Abra la compuerta de la canasta y desocupe el café. Con el equipo desocupado, puede encender nuevamente el equipo para verificar que está operando correctamente.",
    "answer_EN": "Turn off the machine. Manually rotate the pulley in the reverse direction of operation so the coffee returns to the inlet. Open the basket gate and empty the coffee. With the equipment empty, turn it back on to verify it is operating correctly."
  },
  {
    "category": "Ecomill",
    "category_EN": "Ecomill",
    "product": "Ecomill 1500",
    "product_EN": "Ecomill 1500",
    "question": "¿Si tengo daño mecánico, cómo soluciono?",
    "question_EN": "If I have mechanical damage, how do I solve it?",
    "answer": "Probablemente sea porque hay demasiada agua en el lavador o porque el equipo está girando más rápido de lo requerido según el manual técnico. Regule el nivel de agua y valide que las poleas acopladas en el equipo sean las requeridas según el manual.",
    "answer_EN": "It is probably because there is too much water in the washer or because the equipment is spinning faster than required by the technical manual. Regulate the water level and validate that the pulleys attached to the equipment are correct per the manual."
  },
  {
    "category": "Ecomill",
    "category_EN": "Ecomill",
    "product": "Ecomill 1500",
    "product_EN": "Ecomill 1500",
    "question": "¿Qué mantenimiento se le debe realizar al Ecomill 1500?",
    "question_EN": "What maintenance should be performed on the Ecomill 1500?",
    "answer": "1. Lave con agua y cepillo todas las piezas del equipo sin tocar el motor o los cables eléctricos. 2. Verifique que la banda esté tensionada. 3. Lubrique las chumaceras con grasera a presión.",
    "answer_EN": "1. Wash all parts of the equipment with water and a brush without touching the motor or electrical cables. 2. Verify that the belt is tensioned. 3. Lubricate the bearings with a pressure grease gun."
  }
];

const FAQItem = ({ item, language }) => {
  // Lógica para elegir texto basado en el idioma
  const question = language === "EN" && item.question_EN ? item.question_EN : item.question;
  const answer = language === "EN" && item.answer_EN ? item.answer_EN : item.answer;

  return (
    <details className="group border-b border-gray-200 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-[#312371] md:px-6">
        <span className="leading-relaxed">{question}</span>
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-lg text-[#312371] transition-all duration-200 group-open:rotate-180 group-open:bg-[#312371] group-open:text-white">
          ↓
        </span>
      </summary>
      <div className="px-5 pb-6 pt-1 text-sm leading-7 text-gray-500 md:px-6">
        {answer}
      </div>
    </details>
  );
};

export default function PreguntasFrecuentes({ language = "ES" }) {
  /* ============================================================
     TRADUCCIONES DE LA INTERFAZ
  ============================================================ */
  const textos = {
    ES: {
      titulo1: "Preguntas",
      titulo2: "Frecuentes",
      descripcion: "Encuentra respuestas sobre nuestros equipos, operación, mantenimiento y servicio postventa.",
      placeholder: "Busca una pregunta, modelo de equipo o palabra clave...",
      tabGeneral: "Información General",
      tabEquipos: "Soporte por Equipos",
      tipoEquipo: "Tipo de Equipo",
      lineaModelo: "Línea / Modelo",
      resultadosSingular: "resultado encontrado",
      resultadosPlural: "resultados encontrados",
      limpiarBusqueda: "Limpiar búsqueda",
      noPreguntas: "No encontramos preguntas",
      intentaOtra: "Intenta con otra palabra clave o ajusta los filtros.",
      todas: "Todas",
      todos: "Todos"
    },
    EN: {
      titulo1: "Frequently Asked",
      titulo2: "Questions",
      descripcion: "Find answers about our equipment, operation, maintenance, and after-sales service.",
      placeholder: "Search for a question, equipment model, or keyword...",
      tabGeneral: "General Information",
      tabEquipos: "Equipment Support",
      tipoEquipo: "Equipment Type",
      lineaModelo: "Line / Model",
      resultadosSingular: "result found",
      resultadosPlural: "results found",
      limpiarBusqueda: "Clear search",
      noPreguntas: "No questions found",
      intentaOtra: "Try another keyword or adjust the filters.",
      todas: "All",
      todos: "All"
    }
  };

  const texto = textos[language] || textos.ES;

  /* ============================================================
     ESTADOS
  ============================================================ */
  const [tabPrincipal, setTabPrincipal] = useState("General"); // "General" o "Equipos"
  const [categoriaEquipo, setCategoriaEquipo] = useState("Todas");
  const [producto, setProducto] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  /* ============================================================
     EXTRACCIÓN DINÁMICA DE CATEGORÍAS Y PRODUCTOS
  ============================================================ */
  const catKey = language === "EN" ? "category_EN" : "category";
  const prodKey = language === "EN" ? "product_EN" : "product";

  const categoriasEquipos = useMemo(() => [
    texto.todas,
    ...new Set(FAQS.filter((x) => x.category !== "General").map((x) => x[catKey] || x.category)),
  ], [language, catKey, texto.todas]);

  const productosEquipos = useMemo(() => {
    let filtrados = FAQS.filter((x) => x.category !== "General");
    if (categoriaEquipo !== texto.todas) {
      filtrados = filtrados.filter((x) => (x[catKey] || x.category) === categoriaEquipo);
    }
    return [
      texto.todos,
      ...new Set(filtrados.map((x) => x[prodKey] || x.product)),
    ];
  }, [categoriaEquipo, language, catKey, prodKey, texto.todos]);

  /* ============================================================
     FILTRADO FINAL
  ============================================================ */
  const resultados = useMemo(() => {
    const term = busqueda.trim().toLowerCase();
    
    return FAQS.filter((x) => {
      // Determinar campos según idioma para la búsqueda interactiva
      const q = language === "EN" && x.question_EN ? x.question_EN : x.question;
      const a = language === "EN" && x.answer_EN ? x.answer_EN : x.answer;
      const c = language === "EN" && x.category_EN ? x.category_EN : x.category;
      const p = language === "EN" && x.product_EN ? x.product_EN : x.product;

      // 1. Filtrar por término de búsqueda
      const matchSearch = !term || `${q} ${a}`.toLowerCase().includes(term);
      if (!matchSearch) return false;

      // 2. Lógica para la pestaña activa
      if (tabPrincipal === "General") {
        return x.category === "General";
      } else {
        // Pestaña Equipos
        if (x.category === "General") return false; 
        
        const matchCategory = categoriaEquipo === texto.todas || c === categoriaEquipo;
        const matchProduct = producto === texto.todos || p === producto;
        
        return matchCategory && matchProduct;
      }
    });
  }, [tabPrincipal, categoriaEquipo, producto, busqueda, language, texto.todas, texto.todos]);

  /* ============================================================
     MÉTODOS
  ============================================================ */
  const cambiarTabPrincipal = (nuevoTab) => {
    setTabPrincipal(nuevoTab);
    setCategoriaEquipo(texto.todas);
    setProducto(texto.todos);
    setBusqueda("");
  };

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-6">
        
        {/* =====================================================
            ENCABEZADO
        ====================================================== */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 md:text-4xl">
            {texto.titulo1} <span className="text-[#312371]">{texto.titulo2}</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#312371]" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            {texto.descripcion}
          </p>
        </div>

        {/* =====================================================
            BUSCADOR GLOBAL
        ====================================================== */}
        <div className="relative mb-8">
          <svg className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
          </svg>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder={texto.placeholder}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#312371] focus:bg-white focus:ring-4 focus:ring-[#312371]/10"
          />
        </div>

        {/* =====================================================
            PESTAÑAS PRINCIPALES (General | Equipos)
        ====================================================== */}
        <div className="mb-8 flex flex-wrap gap-2 border-b border-gray-100 pb-4">
          <button
            type="button"
            onClick={() => cambiarTabPrincipal("General")}
            className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium transition ${
              tabPrincipal === "General" 
                ? "bg-[#312371] text-white shadow-sm" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {texto.tabGeneral}
          </button>
          <button
            type="button"
            onClick={() => cambiarTabPrincipal("Equipos")}
            className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium transition ${
              tabPrincipal === "Equipos" 
                ? "bg-[#312371] text-white shadow-sm" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {texto.tabEquipos}
          </button>
        </div>

{/* =====================================================
            FILTROS DE EQUIPOS (Sólo si tabEquipos está activo)
        ====================================================== */}
        {tabPrincipal === "Equipos" && (
          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            
            <div className="w-full md:w-1/2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                {texto.tipoEquipo}
              </label>
              <select 
                value={categoriaEquipo} 
                onChange={(e) => {
                  setCategoriaEquipo(e.target.value);
                  setProducto(texto.todos); // Al cambiar de categoría, reiniciamos el producto
                }} 
                className="cursor-pointer w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#312371] focus:ring-4 focus:ring-[#312371]/10"
              >
                {categoriasEquipos.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-1/2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                {texto.lineaModelo}
              </label>
              <select 
                value={producto} 
                onChange={(e) => setProducto(e.target.value)} 
                className="cursor-pointer w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#312371] focus:ring-4 focus:ring-[#312371]/10"
              >
                {productosEquipos.map((prod) => (
                  <option key={prod} value={prod}>{prod}</option>
                ))}
              </select>
            </div>

          </div>
        )}

        {/* =====================================================
            RESULTADOS Y BOTÓN DE LIMPIAR
        ====================================================== */}
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-xs font-medium text-gray-400">
            {resultados.length} {resultados.length === 1 ? texto.resultadosSingular : texto.resultadosPlural}
          </p>
          {busqueda && (
            <button 
              type="button" 
              onClick={() => setBusqueda("")} 
              className="text-xs font-medium text-[#312371] transition hover:text-[#312371]/80"
            >
              {texto.limpiarBusqueda}
            </button>
          )}
        </div>

        {/* =====================================================
            ACORDEÓN DE PREGUNTAS (Resultados)
        ====================================================== */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {resultados.length ? (
            resultados.map((item, index) => (
              <FAQItem key={`${item.product}-${index}`} item={item} language={language} />
            ))
          ) : (
            <div className="px-6 py-14 text-center">
              <h3 className="text-base font-semibold text-gray-700">{texto.noPreguntas}</h3>
              <p className="mt-2 text-sm text-gray-400">{texto.intentaOtra}</p>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
}