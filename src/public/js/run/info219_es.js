//Capa
nomeCarga = `Manual Actualización -  OBD0219<br />Lectura del Pin Code ECU GM Delco E83 tipo 2 (Inmo 5) via OBD`;
revCarga = `Rev. 1`;
dataManual = `January 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del pin de 4 digitos de los vehículos que tienen la ECU Delco E83 tipo 2 acuerdo con la aplicación, el pin se utiliza para programar llaves;`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `GM`,
model: `Cobalt 1.4`,
years: `2011 a 2015`
},
{
manufacturer: `GM`,
model: `Cobalt 1.8`,
years: `2013 a 2015`
},
{
manufacturer: `GM`,
model: `Cruze 1.8`,
years: `2012 a 2015`
},
{
manufacturer: `GM`,
model: `Onix 1.0`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `Onix 1.4`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `Prisma 1.0`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `Prisma 1.4`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `S10 2.4 Flex`,
years: `2013 a 2015`
},
{
manufacturer: `GM`,
model: `Sonic 1.6`,
years: `2012 a 2014`
},
{
manufacturer: `GM`,
model: `Spin 1.8`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `Tracker 1.8`,
years: `2014 a 2015`
},
];
applicationObs = ``;
applicationObs += createObs(`Atención!`, `Hay otros vehículos que utilizan la ECU Delco E83, pero sólo se puede leer el pin con este software en los vehículos de la aplicación arriba.`, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento por OBDII.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `Área A5: Cobalt, Cruze, Onix, Prisma, Sonic, Spin y Tracker.<br />Área C5: S10 Flex<br /><br /><br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{lines: [
`&nbsp;`,
`Conecta&nbsp;ignicion`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Aguarda...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`VIN:************`,
`*****&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `El VIN es utilizado para confirmar si la ECU es original del vehículo.`
},
{lines: [
`&nbsp;`,
`Aguarda...`,
`<br />`,
`<br />`,
],
help: `En este paso a veces el OBDMap puede indicar "Cerra switch y pulsa <OK>", y unos momentos más tarde indican "Conecta ignicion y pulsa <OK>", y continuar el procedimiento.`
},
{lines: [
`&nbsp;`,
`Descon.&nbsp;ignicion`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Pin:`,
`****`,
`<br />`,
],
help: `Anote el PIN`
},
{lines: [
`&nbsp;`,
`&nbsp;ECU&nbsp;invalida!`,
`<br />`,
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
{ label: `Error en el acceso!`,
screens: [
`&nbsp;`,
`Error&nbsp;en&nbsp;el&nbsp;`,
`acceso!`,
`<br />`,
],
causes: [
`No se pudo acceder el modo de lectura de la ECU.`,``,``,],
solutions: [
`Revisar aplicación.`,`Contacte el soporte técnico.`,``,``,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
