//Capa
nomeCarga = `Manual Actualización -  OBD0034<br />Lectura del PIN ME 7.9.9 (Astra\Vectra\Zafira 2010) por OBDII`;
revCarga = `Rev. 1`;
dataManual = `January 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del PIN por OBDII: Para programación de llaves utilice la función OBD0045.`,
`Escribir VIN: En los casos de cambio de la ECU defectuosa, esta función puede ser utilizada para hermanar la información del VIN.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 2.0 Flex`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2009 a 2010`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 Flex`,
years: `2009 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(`Atención: Esta función realiza el procedimiento solamente en los vehículos que tienen año de fabricación 2009 y 2010.`, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos los accesorios conectados.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-E9-F9.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Lectura del PIN`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Me799 V3 Vec09`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Me799 V3 Vec09`, `>Lectura?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`PIN..:&nbsp;*****`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`VIN:&nbsp;`,
`****************`,
`*`,
`<br />`,
],
help: `VIN leído de la ECU.`
},
]
}, {title: `Escritura del VIN`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Me799 V3 Vec09`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Me799 V3 Vec09`, `>Escribir VIN`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Introduzca:*****`,
`************`,
`<br />`,
],
help: `Utilice los botones para arriba y para bajo para ingresar el VIN que será escrito en el vehículo.`
},
{lines: [
`Confirma?`,
`****************`,
`*`,
`<br />`,
],
help: `Pulsa OK para confirmar o VOLTA para corregir.`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;VIN`,
`&nbsp;&nbsp;&nbsp;Programado!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Falla en la Comunicacion!`,
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

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
