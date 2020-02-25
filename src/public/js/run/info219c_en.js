//Capa
nomeCarga = `Manual Software -  OBD0219<br />PIN Code Reading ECU GM Delco E83 Type 2 (IMMO 5) by OBDII`;
revCarga = `Rev. 1`;
dataManual = `January 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`PIN code reading of four-digit of vehicles that have ECU Delco E83 type 2 according to the application, the pin is used for key programming;`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
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
applicationObs += createObs(`Attention!`, `There are other vehicles that used ECU Delco E83, however it is only possible to read the pin with this software on application of the above vehicles.`, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `All accessories are connected to perform the procedure via diagnosis.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `Area A5: Cobalt, Cruze, Onix, Prisma, Sonic, Spin and Tracker.<br />Area C5: S10 Flex<br /><br /><br /><br /><br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
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
`VIN:*****************&nbsp;`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `The VIN is used to confirm if the ECU is original vehicle.`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: `In this step sometimes the OBDMap may indicate "Switch ignition OFF and press <OK>", and a few moments later indicate "Switch ignition ON and press <OK>," and continue the procedure.`
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
`Pin:`,
`****`,
`<br />`,
],
help: `Write down the pin`
},
{lines: [
`&nbsp;`,
`Invalid&nbsp;ECU!`,
`<br />`,
`<br />`,
],
help: ``
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
`Vehicle fault, electrical part,`,`OBDMap software has epired,`,`Accessories bad connection,`,`System different vehicle from the application of this ______`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Error in access!`,
screens: [
`&nbsp;`,
`Error&nbsp;in&nbsp;access!`,
`<br />`,
`<br />`,
],
causes: [
`Could not to access ECU reading mode.`,``,],
solutions: [
`Check application`,`Contact technical support`,``,``,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
