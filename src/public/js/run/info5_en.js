//Capa
nomeCarga = `Manual Software -  OBD0005<br />IMMO 3 GM - Valeo PIN Code Reading and Key Programming`;
revCarga = `Rev. 2`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`PIN code reading of the IMMO3 GM immobilizer in workbench.`,
`PIN code reading of the IMMO3 GM  immobilizer in the vehicle.`,
`Key programming of the IMMO3 GM immobilizer (Valeo).`,
`Erasing keys of the IMMO3 GM immobilizer (Valeo).`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `GM`,
model: `Blazer 2.4`,
years: `2002 a 2007`
},
{
manufacturer: `GM`,
model: `Blazer 2.8`,
years: `2002 a 2012`
},
{
manufacturer: `GM`,
model: `S10 2.4`,
years: `2002 a 2007`
},
{
manufacturer: `GM`,
model: `S10 2.8`,
years: `2002 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Use the blank chip Crypto 2 PCF7936 (ID46).`, 
image: `/images/Transponders/PCF7936 (ID46) Crypto 2 virgem.jpg`},

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
ballon: `Universal cable + A2 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 DESCONECTADOS.jpg`},

{title: ``, 
description: `To perform the procedure in workbench it is necessary to remove the immobilizer of the vehicle. If it is not possible remove the immobilizer of the vehicle perform the procedure in the vehicle with the function PIN code reading of the IMMO3 GM immobilizer in the vehicle.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/ID IMOB.jpg`},

{title: ``, 
description: `To perform the procedure in workbench it is necessary to remove the immobilizer of the vehicle. If it is not possible remove the immobilizer of the vehicle perform the procedure in the vehicle with the function PIN code reading of the IMMO3 GM immobilizer in the vehicle.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Desmontando o imob IMMO3.jpg`},

{title: ``, 
description: `Attention: The pin 1 of the clip must attach the pin 1 of the soic memory. When there's no tagging in the component body you must look in the chip in the frontal part, this way reading the data from left to right. In this case '24C04', the pin 1 of this component is the first from left in the bottom side.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Conectando a pinça no IMMO3.jpg`},

{title: ``, 
description: ``, 
ballon: `Use the Torks 20 to remove the two screws of the protective cover located below the steering wheel to have access to the immobilizer.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando o imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Pull the protective cover down to access to the immobilizer.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando o imobilizador1.jpg`},

{title: ``, 
description: ``, 
ballon: `Attention: It is necessary remove the automotive wiring harness of the immobilizer, because if the clip is connected in the immobilizer and the automotive wiring harness is connected also, it can damage the immobilizer and the OBDMap. Press the locks indicated in the image to remove the automotive wiring harness.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Retirando o chicote.jpg`},

{title: ``, 
description: ``, 
ballon: `Automotive wiring harness removed.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Chicote já retirado.jpg`},

{title: ``, 
description: ``, 
ballon: `Use a screwdriver to unlock the immobilizer.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Desmontando o imobilizador 2 imagens.jpg`},

{title: ``, 
description: ``, 
ballon: `Locating the memory.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Position of pin "1" of the memory indicated by arrow.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Connecting the clip in the memory.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 3.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: `PIN code reading IMMO3 GM immobilizer in the vehicle:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Clip`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Clip`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Immo 3`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Immo 3`, `>Read?`, `<br /><br />`], help: `Press OK`, menu: 1000},
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
help: `Write down the PIN.`
},
{lines: [
`&nbsp;`,
`&nbsp;End&nbsp;procedure!`,
`<br />`,
`<br />`,
],
help: `Procedure concluded successfully.`
},
]
}, {title: `PIN code reading IMMO3 GM immobilizer in workbench:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Clip`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Clip`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Immo 3`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Immo 3`, `>Read?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`PIN..:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Write down the PIN.`
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
`&nbsp;End&nbsp;procedure!`,
`<br />`,
`<br />`,
],
help: `Procedure concluded successfully.`
},
]
}, {title: `key programming of the IMMO3 GM immobilizer (Valeo)`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Immo 3`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Immo 3`, `>Prog. Key?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN code read previously and press OK!`
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
]
}, {title: `Erasing keys of the IMMO3 GM immobilizer (Valeo)`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Immo 3`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Immo 3`, `>Erase Keys?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Enter&nbsp;the&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Insert the PIN code read previously and press OK!`
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
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Key&nbsp;erased!`,
`<br />`,
`<br />`,
],
help: ``
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
`The clip was really connected inverted into the memory, in other words, the clip pin 1 do not coincide with the memory pin 1 (pin 1 is located beside the red cable).`,],
solutions: [
`Check the clip correct position in the memory.`,]
},
{ label: `Short circuit!`,
screens: [
`&nbsp;`,
`Short&nbsp;circuit!`,
`<br />`,
`<br />`,
],
causes: [
`The clip was not conected correctly,`,`The immobilizer is damaged.`,],
solutions: [
`Check the correct position of the clip to the memory, all terminals of the clip shall hit the corresponding terminals of the memory.`,]
},
{ label: `Programing ERROR!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Programing`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`·	Bad contact of the clip to the memory,`,`·	Bad contact of the clip to the OBDMap,`,`·	Defective memory or module,`,`·	The clip was connected in other component, (If there's another SOIC8 component in the board)`,`·	The terminals of the memory or of the clip itself might have resin or be dirty.`,],
solutions: [
`·	Check the correct position of the clip to the memory, all terminals of the clip must attach the corresponding terminals of the memory,`,`·	Check if the screws that fix the clip to the OBDMap are well attached,`,`·	Check the module status,`,`·	Check if the terminals of the memory and clip are clean, without resin or dirt.`,]
},
{ label: `ERROR in reading!`,
screens: [
`&nbsp;`,
`ERROR&nbsp;in`,
`&nbsp;&nbsp;reading!`,
`<br />`,
],
causes: [
`Bad contact of the clip with the memory,`,`Bad contact of the clip or MCU cable with the OBDMap,`,`Module is damaged,`,`The clip was connected in other component.`,``,],
solutions: [
`Check the correct position of the clip to the memory, all terminals of the clip shall hit the corresponding terminals of the memory,`,`Check soldering correct of the MCU cable,`,`Check the connection of the clip or MCU cable with the OBDMap,`,`Check module status.`,``,]
},
{ label: `Invalid PIN!`,
screens: [
`&nbsp;`,
`Invalid`,
`&nbsp;&nbsp;&nbsp;PIN!`,
`<br />`,
],
causes: [
`The PIN code inserted is incorrect.`,],
solutions: [
`Insert the PIN code correct.`,]
},
{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is charged, `,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the most recent update with the technical support, maybe this function has been altered.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
