//Capa
nomeCarga = `Manual Software -  OBD0110<br />PIN Code Reading of the Calculator 2 Renault (95040)`;
revCarga = `Rev. 2`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`PIN code reading of the calculator 2 95040.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio II 1.0 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Clio II 1.6 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Duster`,
years: `2012 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.0 16v`,
years: `2011 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.6 16v`,
years: `2011 a 2013`
},
{
manufacturer: `Renault`,
model: `Sandero 1.6`,
years: `2011 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Observation: There are vehicles cited above that can don't have calculator 2 95040. Check the memory model of the calculator to identify.`, undefined, undefined);




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
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Desmontando o Calculador.jpg`},

{title: ``, 
description: ``, 
ballon: `Locating the lock that hold the cover calculator.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Localizando as 4 travas.jpg`},

{title: ``, 
description: ``, 
ballon: `Use a screwdriver to unlock the calculator.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/solte as travas.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Localizando a memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `Use stylet to remove the resin of memory terminal.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Removendo a resina dos terminais da memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Connect the clip in the memory 95040.`, 
image: `/images/Funções Específicas/OBD0110 Calculador 2 95040/Conecte a pinça na memoria.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: `PIN code reading`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Connect&nbsp;clip`,
`in&nbsp;memory&nbsp;95040`,
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
`Pin:`,
`************`,
`<br />`,
],
help: `Write down the PIN.`
},
]}];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [
{ label: `Short circuit!`,
screens: [
`&nbsp;`,
`Short&nbsp;circuit!`,
`<br />`,
`<br />`,
],
causes: [
`The clip was not correctly connected,`,`The Calculador or memory is damaged.`,],
solutions: [
`Check the correct position of the clip to the memory, all terminals of the clip shall hit the corresponding terminals of the memory.`,]
},
{ label: `Inverted clip!`,
screens: [
`&nbsp;`,
`Inverted&nbsp;clip!`,
`<br />`,
`<br />`,
],
causes: [
`The clip was connected inverted to the memory, in other words, the pin 1 of the clip does not match to the pin 1 of the memory ( The pin 1 is on red side of the cable),`,`The clip was connected in other component,`,`Memory or Calculator is damaged.`,],
solutions: [
`Check the correct position of the clip to the memory,`,`Check good status of the Calculator.`,]
},
{ label: `Writing ERROR!`,
screens: [
`&nbsp;`,
`Writing`,
`ERROR!`,
`<br />`,
],
causes: [
`Bad contact of the clip to the memory,`,`Bad contact of the clip to the OBDMap,`,`Defective memory or module,`,`The clip was connected in other component, (If there's another SOIC8 component in the board)`,`The terminals of the memory or of the clip itself might have resin or be dirty.`,],
solutions: [
`Check the correct position of the clip to the memory, all terminals of the clip must attach the corresponding terminals of the memory,`,`Check if the screws that fix the clip to the OBDMap are well attached,`,`Check the module status,`,`Check if the terminals of the memory and clip are clean, without resin or dirt.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
