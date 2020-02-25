//Capa
nomeCarga = `Manual Software -  OBD0008<br />Clio II, Duster, Logan, Master and Sandero / Soic 93C66`;
revCarga = `Rev. 4`;
dataManual = `January 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`PIN code reading of the Calculator 2 by clip.`,
`Key programming by OBDII.`,
`<obs>`,
`Observations:`,
`- Master vehicle: this software only performs the key program. It is necessary use the software OBD0121 to performs the PIN code reading.`,
`- For other vehicles this software performs PIN code reading and key programming.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio II 1.0 16v`,
years: `2004 a 2011`
},
{
manufacturer: `Renault`,
model: `Clio II 1.6 16v`,
years: `2004 a 2011`
},
{
manufacturer: `Renault`,
model: `Duster`,
years: `2012 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.0 16v`,
years: `2007 a 2011`
},
{
manufacturer: `Renault`,
model: `Logan 1.6 16v`,
years: `2007 a 2013`
},
{
manufacturer: `Renault`,
model: `Master 2.8`,
years: `2010 a 2012`
},
{
manufacturer: `Renault`,
model: `Sandero 1.6`,
years: `2007 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Power supply. Required to use the OBDMap on the workbench.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `8 soic clip. It connects the memory of the module to the OBDMap.`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Use the Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure by OBDII.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: `It is necessary to remove the calculator of the vehicle to perform the procedure of PIN code reading in workbench by clip.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0008  Clio2, Sandero e Logan/Retirar o Calculador.jpg`},

{title: ``, 
description: `Locate the memory and connect the clip.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0008  Clio2, Sandero e Logan/localizar a memória soic de numeração 93C66.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket of the Master vehicle is located at position A4.<br />The diagnostic socket of the Clio II and Duster vehicles is located at position F6.<br />The diagnostic socket of the Logan and Sandero vehicles is located at position I5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - F6 - I5.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: `PIN code reading:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Pin:`,
`************`,
`<br />`,
],
help: `Write down the PIN.`
},
]
}, {title: `key Programming:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN code of 12 digits read before and press OK!`
},
{lines: [
`&nbsp;`,
`Remove&nbsp;the&nbsp;key`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insert&nbsp;the&nbsp;Key&nbsp;and&nbsp;press&nbsp;`,
`OK!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;OFF&nbsp;`,
`Press&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Programmed&nbsp;`,
`Key!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Program&nbsp;`,
`more&nbsp;keys?`,
`<br />`,
],
help: `Press OK to more keys or VOLTA to exit.`
},
{lines: [
`&nbsp;`,
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [
{ label: `Reading Error!`,
screens: [
`&nbsp;`,
`Reading&nbsp;Error!`,
`<br />`,
`<br />`,
],
causes: [
`Bad contact of the clip with the memory,`,`Bad contact of the clip with the OBDMap,`,`Defective clip.`,``,],
solutions: [
`Check the connection of the clip with the memory,`,`Check the connection of the clip with the OBDMap,`,`Check the good clip status.`,``,]
},
{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,``,``,],
solutions: [
`Check if the battery is charged, `,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the most recent update with the technical support, maybe this function has been altered.`,``,]
},
{ label: `Invalid PIN!`,
screens: [
`Invalid`,
`PIN!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`The PIN code inserted is incorrect.`,],
solutions: [
`Insert the PIN correct.`,``,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
