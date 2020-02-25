//Capa
nomeCarga = `Manual Actualización -  OBD0002<br />Lectura del PIN y Escribir VIN - Corsa Flex 1.0`;
revCarga = `Rev. 5`;
dataManual = `January 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del código PIN de 4 dígitos por OBDII.`,
`Escribir VIN por OBDII.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `GM`,
model: `Corsa 1.0 Flex`,
years: `2005 a 2008`
},
{
manufacturer: `GM`,
model: `Corsa 1.4 Flex`,
years: `2005 a 2008`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Conecte el cable universal al adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos los accesorios conectados.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El terminal OBDII está situado en la posición F5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/F5.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Lectura del código PIN`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Me799 V1 Corsa`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Me799 V1 Corsa`, `>Lectura?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
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
`PIN:`,
`çççç`,
`<br />`,
],
help: `Escriba el código PIN, el será utilizado para programación de llaves.`
},
{lines: [
`&nbsp;`,
`VIN:`,
`<br />`,
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
{lines: [`GM / OPEL`, `>Me799 V1 Corsa`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Me799 V1 Corsa`, `>Escribir VIN`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
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
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez esta carga tenga sido alterada.`,]
},
{ label: `PIN no Encontrado!`,
screens: [
`&nbsp;`,
`PIN&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`Archivo de la ECU está dañado,`,`Archivo inválido de la ECU,`,`El codigo PIN de la ECU puede estar reseteada.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
