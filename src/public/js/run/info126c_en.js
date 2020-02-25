//Capa
nomeCarga = `Manual Software -  OBD0126<br />`;
revCarga = `Rev. 3`;
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
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Do&nbsp;the&nbsp;procedure`,
`with&nbsp;the&nbsp;key&nbsp;off!`,
`<br />`,
],
help: ``
},
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
`Remote&nbsp;Control&nbsp;Number:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Press&nbsp;2x&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;`,
`remote&nbsp;control&nbsp;&nbsp;&nbsp;&lt;30&gt;`,
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
help: ``
},
{lines: [
`&nbsp;`,
`Remote&nbsp;Control&nbsp;Number:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Press&nbsp;&nbsp;&nbsp;remote&nbsp;control1`,
`remote&nbsp;control2&nbsp;&lt;30&gt;`,
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
help: ``
},
{lines: [
`&nbsp;`,
`Remote&nbsp;Control&nbsp;Number:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Press&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;on`,
`3&nbsp;remote&nbsp;controls&nbsp;&lt;30&gt;`,
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
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
