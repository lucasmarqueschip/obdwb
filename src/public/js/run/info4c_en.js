//Capa
nomeCarga = `Manual Software -  OBD0004<br />PIN Code Reading HSFI 2.3 with BCM`;
revCarga = `Rev. 2`;
dataManual = `January 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`4-digit PIN code reading by OBDII.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
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
ballon: `Use the Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure by OBDII.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket of the Classic, Celta and Prisma vehicles is located at position A5.<br />The diagnostic socket of the Corsa and Montana vehicles is located at position E5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-E5.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: `PIN code reading -  HSFI 2.3 with BCM`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
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
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`PIN:&nbsp;****`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Write down the PIN. It will be used to perform the key programming.`
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
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `PIN not Found! `,
screens: [
`&nbsp;`,
`PIN&nbsp;not&nbsp;Found!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`ECU file is corrupted,`,`ECU invalide file,`,`ECU PIN code might be reset.`,],
solutions: [
` `,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
