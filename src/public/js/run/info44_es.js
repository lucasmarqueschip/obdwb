//Capa
nomeCarga = `Manual Actualización -  OBD0044<br />Programación del Control Remoto GM (sistemas GM Alarma 2, GM Alarma 2009 y GM Alarma Meriva))`;
revCarga = `Rev. 1`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Borrar control remoto.`,
`Programar control remoto.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 1.8`,
years: `2002 a 2011`
},
{
manufacturer: `GM`,
model: `Astra 2.0`,
years: `2002 a 2011`
},
{
manufacturer: `GM`,
model: `Celta 1.0`,
years: `2009 a 2011`
},
{
manufacturer: `GM`,
model: `Corsa 1.0`,
years: `2009 a 2011`
},
{
manufacturer: `GM`,
model: `Meriva 1.8`,
years: `2002 a 2010`
},
{
manufacturer: `GM`,
model: `Meriva 1.8 16V`,
years: `2002 a 2010`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `2009 a 2011`
},
{
manufacturer: `GM`,
model: `Montana 1.4 New`,
years: `2010 a 2011`
},
{
manufacturer: `GM`,
model: `Prisma`,
years: `2009 a 2011`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2005 a 2011`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2005 a 2011`
},
{
manufacturer: `GM`,
model: `Zafira 2.0`,
years: `2002 a 2011`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 16V`,
years: `2002 a 2011`
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
description: `El terminal OBDII  de los vehículos Celta y Prisma está situado en la posición A4.<br />El terminal OBDII del vehículo Vectra está situado en la posición A5.<br />El terminal OBDII del vehículo Montana está situado en la posición F5 o F9.<br />El terminal OBDII de los vehículos Astra y Zafira está situado en la posición F9.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - A5 - F5 - F9.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Alarma2`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Alarma2`, `>Borrar Control`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN y pulsa OK!`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
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
`Control&nbsp;Remoto`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Borrado!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Alarma2`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Alarma2`, `>Prog. control?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN y pulsa OK!`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
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
`Pulsa&nbsp;el&nbsp;`,
`&nbsp;control&nbsp;remoto!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Control&nbsp;Remoto`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programado!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Alarma2`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Alarma2`, `>Prog. control?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN y pulsa OK!`
},
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
`Control&nbsp;Remoto`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Borrado!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Alarma2`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Alarma2`, `>Prog. control?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN y pulsa OK!`
},
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
`&nbsp;&nbsp;Pulsa&nbsp;*&nbsp;del`,
`control&nbsp;remoto!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Control&nbsp;Remoto`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programado!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Alarma2`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Alarma2`, `>Prog. control?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN y pulsa OK!`
},
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
`Control&nbsp;Remoto`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Borrado!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Alarma2`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Alarma2`, `>Prog. control?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN y pulsa OK!`
},
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
`Pulsa&nbsp;el&nbsp;`,
`&nbsp;control&nbsp;remoto!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Control&nbsp;Remoto`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programado!`,
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
`Revise el PIN code introducido.`,]
},
{ label: `Tiempo espera:`,
screens: [
`&nbsp;`,
`Tiempo&nbsp;espera:`,
`<br />`,
`<br />`,
],
causes: [
`El vehículo está con tiempo de espera por intentos con PIN incorrectos.`,],
solutions: [
`Contacte el soporte técnico.`,``,``,]
},
{ label: `Tiempo Excedido!`,
screens: [
`&nbsp;`,
`Tiempo`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`El botón trabar y destrabar no fue pulsado en el tiempo debido.`,],
solutions: [
`Pulse el control remoto en el tiempo indicado por el OBDMap.`,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
