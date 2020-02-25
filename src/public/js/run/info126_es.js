//Capa
nomeCarga = `Manual Actualización -  OBD0126<br />`;
revCarga = `Rev. 3`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `JAC`,
model: `J2 1.4`,
years: `2012 a 2013`
},
{
manufacturer: `JAC`,
model: `J3 1.4`,
years: `2009 a 2012`
},
{
manufacturer: `JAC`,
model: `J5 1.5`,
years: `2009 a 2012`
},
{
manufacturer: `JAC`,
model: `J6 2.0`,
years: `2009 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/Chaves Jac.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: ``, 
image: `/images/Acessórios/Cabo JC.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
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
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;Realizar&nbsp;el`,
`&nbsp;procedimiento`,
`&nbsp;&nbsp;con&nbsp;el&nbsp;llave`,
`&nbsp;&nbsp;&nbsp;&nbsp;apagado!`,
],
help: ``
},
{lines: [
`&nbsp;`,
`ATENCION!Cerrar`,
`&nbsp;todas&nbsp;puertas!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`N.&nbsp;Telecontrol:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Pulsa&nbsp;2x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;telemd&nbsp;&lt;30&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`N.&nbsp;Telecontrol:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Pulsa&nbsp;&nbsp;&nbsp;telemd1`,
`&nbsp;&nbsp;&nbsp;&nbsp;telemd2&nbsp;&lt;30&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`N.&nbsp;Telecontrol:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Pulsa&nbsp;&nbsp;&nbsp;&nbsp;en&nbsp;los`,
`&nbsp;&nbsp;&nbsp;3&nbsp;telemd&nbsp;&lt;30&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
