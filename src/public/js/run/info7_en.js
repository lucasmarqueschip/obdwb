//Capa
nomeCarga = `Manual Software -  OBD0007<br />PIN Code Reading and Key Programming Peugeot 206 - 207 - C3`;
revCarga = `Rev. 6`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`PIN code reading BSI by clip.`,
`Key programming by OBDII.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Peugeot`,
model: `206 1.4`,
years: `2004 a 2010`
},
{
manufacturer: `Peugeot`,
model: `207 1.4`,
years: `2007 a 2015`
},
{
manufacturer: `Citroen`,
model: `C3 1.4`,
years: `2002 a 2012`
},
{
manufacturer: `Citroen`,
model: `C3 1.5`,
years: `2002 a 2012`
},
{
manufacturer: `Citroen`,
model: `Picasso 1.6`,
years: `2006 a 2006`
},
{
manufacturer: `Citroen`,
model: `Picasso 2.0`,
years: `2006 a 2006`
},
];
applicationObs = ``;
applicationObs += createObs(`The vehicle must have the BSI hardware as shown in the Page 6.`, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Use blank chip PCF7936 (ID46).`, 
image: `/images/Transponders/PCF7936 Philips Virgem.jpg`},

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
ballon: `Use the universal cable + A2 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The vehicles diagnostic socket is located in the area:<br />The BSI is located in the area B4.<br />In Citroen C3 the diagnostic socket is located in the area A4.<br />In Peugeot 206 the diagnostic socket is located in the area F6. <br /> <br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4-B4-F6.jpg`},

{title: ``, 
description: `Observation: Remove the varnish on the memory to avoid bad contact.<br /><br />`, 
ballon: `Locating the memory in the BSI.`, 
image: `/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Localizando a m emória no BSI.jpg`},

{title: ``, 
description: `Observation: Remove the varnish on the memory to avoid bad contact.<br /><br />`, 
ballon: `Identifying the pin 1 of the memory.`, 
image: `/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Identificando o pino 1.jpg`},

{title: ``, 
description: `Observation: Remove the varnish on the memory to avoid bad contact.<br /><br />`, 
ballon: `Clip connected in the memory. The pin 1 of the clip must match to the pin 1 of the memory.`, 
image: `/images/Funções Específicas/OBD0007 Leitura e Programação de Chaves Peugeot 206 - C3/Pinça conectada a memória.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: `PIN code reading:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Clip`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Clip`, `>Peugeot`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Peugeot`, `>BSI Peugeot206`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`BSI Peugeot206`, `>Read?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
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
`PIN..:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Write down the PIN code. It will be used to program the keys.`
},
]
}, {title: `Key programming:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Peugeot`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Peugeot`, `>206`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`206`, `>Prog. Key?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
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
`Use`,
`&nbsp;A2&nbsp;Adapter!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN previously read and press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`&nbsp;ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`OFF&nbsp;and&nbsp;press&nbsp;OK`,
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
`&nbsp;&nbsp;&nbsp;Programmed&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Key!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Program&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;more&nbsp;keys?`,
`<br />`,
],
help: `Press OK to more keys or BACK to exit.`
},
{lines: [
`&nbsp;`,
`End`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: `Press OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [{ label: `Inverted clip!`,
screens: [
`&nbsp;`,
`Inverted&nbsp;clip!`,
`<br />`,
`<br />`,
],
causes: [
`The clip was connected inverted in the memory, in other words, the pin 1 of the clip do not coincide with the pin 1 of the memory (pin 1 is beside the red cable).`,``,],
solutions: [
`Check the correct position of the clip in the memory.`,``,]
},
{ label: `Short circuit!`,
screens: [
`&nbsp;`,
`Short&nbsp;circuit!`,
`<br />`,
`<br />`,
],
causes: [
`The clip was not connected correctly,`,`The BSI or memory is with problem. `,``,` `,],
solutions: [
`Check the correct position of the clip to the memory, all terminals of the clip shall hit the corresponding terminals of the memory.`,]
},
{ label: `ERROR in reading!`,
screens: [
`&nbsp;`,
`ERROR&nbsp;in`,
`&nbsp;&nbsp;reading!`,
`<br />`,
],
causes: [
`Clip bad contact with the memory, `,`Clip or MCU cable bad contact with the OBDMap,`,`BSI or memory with problem,`,`The memory or the clip terminals can be with resin or dirt.`,],
solutions: [
`Check the correct position of the clip to the memory, all terminals of the clip shall hit the corresponding terminals of the memory,`,`Check the connection of the clip with the OBDMap.`,]
},
{ label: `Invalid file Immobilizer!`,
screens: [
`&nbsp;`,
`Invalid&nbsp;file`,
`Immobilizer!`,
`<br />`,
],
causes: [
`BSI file is corrupted.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
