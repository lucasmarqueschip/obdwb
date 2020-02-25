//Capa
nomeCarga = `Manual Actualización -  OBD0001<br />Lectura del PIN y Programación de Llaves VW Gol, Saveiro y Voyage 2009-2012`;
revCarga = `Rev. 4`;
dataManual = `January 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del PIN en las ECUs: IAW 4GV y ME7.5.30.`,
`Programación de hasta 8 llaves: Es necesario tener en la mano todas las llaves que seran programadas, incluyendo las que ya estaban programadas. Si las llaves antiguas no han sido programadas, ellas no funcionaran mas, teniendo que hacer de nuevo la programación.`,
`Añadir nuevas llaves: Añade nuevas llaves sin borrar las que ya estan programadas en el vehículo.`,
``,
`Observaciones:`,
`- ECU IAW 4GV son utilizadas en los vehículos que tienen  motor 1.0.`,
`- ECU ME7.5.30 son utilizadas en los vehículos que tienen motor 1.6.`,

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `VW`,
model: `Gol 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.6`,
years: `2009 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Fuente de alimentación. Necesaria para utilizar el OBDMap en banco de pruebas.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinza soic 8. Conecta la memoria al OBDMap.`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Cable universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos los accesorios conectados.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilice un destornillador Torx T15 para quitar los tornillos que prenden la cubierta de la ECU.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Con la ayuda de un destornillador, haga una palanca para tener acceso a tarjeta de la ECU.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU 3.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Localizando e conectando a pinça na memória 95320.jpg`},

{title: ``, 
description: ``, 
ballon: `El pino 1 de la pinza debe coincidir con el pino 1 de la memoria.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Conectando a pinça na memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinza conectada en la memoria 95320.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Pinça conectada na memória.jpg`},

{title: `All accessories connected:`, 
description: `Atención:<br />No invierta la pinza, conecte con cuidado para no dañar la pinza o la ECU.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Todos os acessórios conectados.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilice un destornillador Torx T15 para quitar los tornillos que prenden la cubierta de la ECU.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Con la ayuda de un destornillador, haga una palanca para tener acceso a tarjeta de la ECU.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30 3.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Localizando e conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `El pino 1 de la pinza debe coincidir con el pino 1 de la memoria.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinza conectada en la memoria 95040.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Conectando a pinça na memória 95040 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Todos os acessórios conectados.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El terminal OBDII de los vehículos está situado en la posición A4.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Lectura del PIN de la ECU IAW 4GV:`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Pinza`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Pinza`, `>VW`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`VW`, `>IAW 4GV.GR`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`IAW 4GV.GR`, `>Lectura?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;la&nbsp;pinza&nbsp;`,
`en&nbsp;la&nbsp;memoria&nbsp;`,
`95320`,
`&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`PIN..:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Escriba el PIN.`,
},
]
}, {title: `Lectura del PIN de la ECU ME7.5.10/20/30`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Pinza`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Pinza`, `>VW`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`VW`, `>ME7.5.10/20/30`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`ME7.5.10/20/30`, `>Lectura?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;la&nbsp;pinza&nbsp;`,
`en&nbsp;la&nbsp;memoria&nbsp;`,
`95320`,
`&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`PIN..:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Escriba el PIN.`,
},
]
}, {title: `Programación de llaves`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`VW`, `>Tablero Gol`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Tablero Gol`, `>Nueva Llave?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilice&nbsp;el&nbsp;chip`,
`ID&nbsp;48&nbsp;CAN`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: `Pulsa OK!`,
},
{lines: [
`&nbsp;`,
`Espere:&nbsp;&nbsp;6&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Pin..:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Introduzca el PIN leído.`,
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;Llaves:&nbsp;*`,
`<br />`,
`<br />`,
],
help: `Escoja el número de llaves que serán programadas. No máximo 8 llaves.`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`<br />`,
`Cerra&nbsp;switch&nbsp;y&nbsp;&nbsp;&nbsp;`,
`&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`,
},
{lines: [
`<br />`,
`Inserta&nbsp;la&nbsp;llave&nbsp;`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`,
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: `Pulsa OK! Si fuer la última llave, el procedimiento es finalizado, si no, vuelte al paso 8.`,
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Pulsa OK!`,
},
]
}, {title: `Añadir nuevas llaves`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`VW`, `>Tablero Gol`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Tablero Gol`, `>Anadir Llaves?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilice&nbsp;el&nbsp;chip`,
`ID&nbsp;48&nbsp;CAN`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: `Pulsa OK!`,
},
{lines: [
`&nbsp;`,
`Espere:&nbsp;&nbsp;6&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Pin..:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Introduzca el PIN leído.`,
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;Llaves:&nbsp;*`,
`<br />`,
`<br />`,
],
help: `Escoja el número de llaves que serán añadidas.`,
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`<br />`,
`Cerra&nbsp;switch&nbsp;y&nbsp;&nbsp;&nbsp;`,
`&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`,
},
{lines: [
`<br />`,
`Inserta&nbsp;la&nbsp;llave&nbsp;`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`,
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: `Pulsa OK! Si fuer la última llave, el procedimiento es finalizado, si no, vuelte al paso 8.`,
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Pulsa OK!`,
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Falla en lectura!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`&nbsp;&nbsp;lectura!`,
`<br />`,
],
causes: [
`Malo contacto de la pinza con la memoria,`,`Malo contacto de la pinza o cable MCU con el OBDMap,`,`ECU dañada,`,`La pinza fue conectada en otro componente,`,`Los terminales de la memoria o de la pinza pueden estar con resina o suciedad.`,],
solutions: [
`Revise la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben encostarse a los terminales correspondentes de la memoria,`,`Revise si los tornillos que prenden la pinza al OBDMap están bien fijos,`,`evise el buen estado del módulo,`,`Revise si los terminales de la memoria y de la pinza estan limpios, sin resina o suciedad.`,]
},
{ label: `Pinza invertida!`,
screens: [
`&nbsp;`,
`Pinza`,
`&nbsp;&nbsp;invertida!`,
`<br />`,
],
causes: [
`La pinza fue conectada invertida en la memoria,`,`La pinza fue conectada en otro componente,`,`Memoria, ECU o tablero dañado.`,],
solutions: [
`Revise la posición correcta de la pinza en la memoria.`,]
},
{ label: `Cortocircuito!`,
screens: [
`&nbsp;`,
`Cortocircuito!`,
`<br />`,
`<br />`,
],
causes: [
`Los cables del cable MCU fueron soldados en posiciones incorrectas,`,`La pinza fue conectada incorrectamente,`,`Cable MCU, pinza, ECU o tablero está dañado.`,],
solutions: [
`Revise la correcta posición de los cables o pinza en la ECU o en el tablero,`,`Revise si hay alguno defecto visible en el cable MCU o pinza, en caso de duda, consulte el soporte técnico.`,]
},
{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;Comunicacion!`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},
{ label: `PIN Incorrecto!`,
screens: [
`&nbsp;`,
`PIN`,
`&nbsp;Incorrecto!`,
`<br />`,
],
causes: [
`El PIN ingresado está incorrecto.`,],
solutions: [
`Ingrese el PIN correcto.`,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
