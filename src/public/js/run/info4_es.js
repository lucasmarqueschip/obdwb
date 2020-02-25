//Capa
nomeCarga = `Manual Actualización -  OBD0004<br />Lectura del PIN HSFI 2.3 con BCM`;
revCarga = `Rev. 2`;
dataManual = `January 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del PIN de 4 dígitos por OBDII.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `GM`,
model: `Corsa Classic 1.0`,
years: `2006 a 2009`
},
{
manufacturer: `GM`,
model: `Corsa 1.0`,
years: `2006 a 2009`
},
{
manufacturer: `GM`,
model: `Corsa 1.4`,
years: `2006 a 2009`
},
{
manufacturer: `GM`,
model: `Corsa 1.8`,
years: `2006 a 2009`
},
{
manufacturer: `GM`,
model: `Celta 1.0`,
years: `2007 a 2009`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `2007 a 2009`
},
{
manufacturer: `GM`,
model: `Montana 1.8`,
years: `2007 a 2009`
},
{
manufacturer: `GM`,
model: `Prisma 1.0`,
years: `2007 a 2009`
},
{
manufacturer: `GM`,
model: `Prisma 1.4`,
years: `2007 a 2009`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




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
description: `El terminal OBDII de los vehículos Classic, Celta y Prisma está situado en la posición A5.<br />El terminal OBDII de los vehículos Corsa y Montana está situado en la posición E5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-E5.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Lectura de PIN - HSFI 2.3 con BCM`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>HSFI 2.3 BCM`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`HSFI 2.3 BCM`, `>Lectura?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
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
`PIN:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Escriba el PIN. Él será utilizado para realizar la programación de llaves.`
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
{ label: `PIN no Encontrado! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PIN&nbsp;no`,
`&nbsp;&nbsp;Encontrado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`Archivo de la ECU está dañado,`,`Archivo inválido de la ECU,`,`El codigo PIN de la ECU puede estar reseteada.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
