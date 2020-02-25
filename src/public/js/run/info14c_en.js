//Capa
nomeCarga = `Manual Software -  OBD0014<br />Corolla TOYOTA - Key Programming and Remote Control`;
revCarga = `Rev. 4`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Corolla 1.6 (Chaves)`,
years: `2009 a 2010`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.8 (Chaves)`,
years: `2009 a 2012`
},
{
manufacturer: `Toyota`,
model: `Corolla 2.0 (Chaves)`,
years: `2011 a 2012`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.6 (Telecomando)`,
years: `2009 a 2010`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.8 (Telecomando)`,
years: `2009 a 2016`
},
{
manufacturer: `Toyota`,
model: `Corolla 2.0 (Telecomando)`,
years: `2011 a 2016`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Use the ID 4D70 chip.`, 
image: `/images/Transponders/4D-70.jpg`},

{title: ``, 
description: ``, 
ballon: `Vehicles with this key, this function performs key programming and remote control.`, 
image: `/images/Chaves e Telecomandos/Programação Telecomando.jpg`},

{title: ``, 
description: ``, 
ballon: `Vehicles with this key, this function performs only remote control programming. Use the function OBD0083 to perform the key programming.`, 
image: `/images/Chaves e Telecomandos/Programação Telecomando 2.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Use the Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Use the Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket of the Corolla vehicle is located in the area A5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: `Erasing keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Connect the universal cable + A1 adapter in the diagnostic socket of the vehicle. After connecting all accessories to the vehicle, follow the steps displayed in the OBDMap screen:`], help: `Press OK`, menu: 1000},
{lines: [
`Use&nbsp;at&nbsp;first`,
`a&nbsp;valid&nbsp;Key`,
`&lt;OK&gt;`,
`<br />`,
],
help: `You need to have a programmed key to perform the procedure.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
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
`Remove&nbsp;the&nbsp;key`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Switch ignition OFF, remove the key and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Insert, switch ignition ON and Press OK in 10 seconds.`
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
`Remove&nbsp;the&nbsp;key`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Switch ignition OFF, remove the key and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
]
}, {title: `Adding Keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Connect the universal cable + A1 adapter in the diagnostic socket of the vehicle. After connecting all accessories to the vehicle, follow the steps displayed in the OBDMap screen:`], help: `Press OK`, menu: 1000},
{lines: [
`Use&nbsp;at&nbsp;first`,
`a&nbsp;valid&nbsp;Key`,
`&lt;OK&gt;`,
`<br />`,
],
help: `You need to have a programmed key to perform the procedure.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
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
`Remove&nbsp;the&nbsp;key`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Switch ignition OFF, remove the key and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
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
`Remove&nbsp;the&nbsp;key`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Switch ignition OFF, remove the key and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`Insert&nbsp;new&nbsp;key`,
`and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Insert, switch ignition ON and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`Wait&nbsp;around`,
`01&nbsp;minute!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
]
}, {title: `Erasing the Remote Control`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Connect the universal cable + A3 adapter in the diagnostic socket of the vehicle. After connecting all accessories to the vehicle, follow the steps displayed in the OBDMap screen:`], help: `Press OK`, menu: 1000},
{lines: [
`NOTICE!&nbsp;Close`,
`all&nbsp;the&nbsp;doors!`,
`&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
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
`Press&nbsp;<img class="imgCarac" src="images/padlockOpenCon.png" />&nbsp;<img class="imgCarac" src="images/padlockCloseCon.png" />&nbsp;both&nbsp;4x&nbsp;and&nbsp;press&nbsp;<img class="imgCarac" src="images/padlockOpenCon.png" />&nbsp;1x`,
`<br />`,
`<br />`,
],
help: `Press Open/Close together 4x and Open 1x (Open and Close are represented by locks open and closed on OBDMap display)`
},
{lines: [
`&nbsp;`,
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
]
}, {title: `Programming the Remote Control`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Connect the universal cable + A3 adapter in the diagnostic socket of the vehicle. After connecting all accessories to the vehicle, follow the steps displayed in the OBDMap screen:`], help: `Press OK`, menu: 1000},
{lines: [
`NOTICE!&nbsp;Close`,
`all&nbsp;the&nbsp;doors!`,
`&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
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
`Press&nbsp;<img class="imgCarac" src="images/padlockOpenCon.png" />&nbsp;<img class="imgCarac" src="images/padlockCloseCon.png" />&nbsp;both&nbsp;4x&nbsp;and&nbsp;press&nbsp;<img class="imgCarac" src="images/padlockOpenCon.png" />&nbsp;1x`,
`<br />`,
`<br />`,
],
help: `Press Open/Close together 4x and Open 1x (Open and Close are represented by locks open and closed on OBDMap display)`
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
{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,``,]
},
{ label: `Use CAN cable or CAN A3 adapter!`,
screens: [
`&nbsp;`,
`Use&nbsp;CAN&nbsp;cable`,
`or&nbsp;CAN&nbsp;A3&nbsp;adapter!`,
`<br />`,
],
causes: [
`The cables used are not universal cable + A3 adapter,`,`Bad contact in the universal cable + A3 adapter in the OBDMap.`,],
solutions: [
`Check if the cables used are universal cable + A3 adapter,`,`Check connection of the cables in the OBDMap,`,`Check connection of the universal cable with the A3 adapter.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
