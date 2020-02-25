//Capa
nomeCarga = `Manual Software -  OBD0128<br />Key Programming Ford New Fiesta`;
revCarga = `Rev. 1`;
dataManual = `January 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Erasing keys.`,
`Programming utmost 5 keys to the vehicle.`,
`With this function it is possible erase all keys existents in the vehicle and program new keys without erase the old keys.`,

];
introObs = createObs(`Observation:`, `- When to use the function erasing keys, it is necessary has at least 2 keys to the system to work again.`, ``)


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Ford`,
model: `New Fiesta 1.6`,
years: `2012 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: `Texas Crypto Chip ID4D-DST Plus.`, 
image: `/images/Transponders/ID4D-DST Plus.jpg`},

{title: ``, 
description: ``, 
ballon: `Chip into the key.`, 
image: `/images/Chaves e Telecomandos/ID4D-DST Plus na chave.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `CAN cable or universal cable + A3 adapter.`, 
image: `/images/Acessórios/Cabo CAN.jpg`},

{title: ``, 
description: ``, 
ballon: `Universal cable + A3 adapter.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Connect the universal cable to the A3 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure via diagnosis.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket of the vehicle is located at position A5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: `Erasing keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Ford`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`PATS 3`, `>N FIESTA 12-12`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`N FIESTA 12-12`, `> Erase keys`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;2&nbsp;chips`,
`ID4D&nbsp;DST+&nbsp;Ford`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Wait...`,
`<img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" />`,
`<br />`,
],
help: `Wait 10 minutes.`
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
`Hold&nbsp;the&nbsp;key&nbsp;in&nbsp;`,
`start&nbsp;position!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Press&nbsp;OK`,
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
help: `In this time keep the key in start position.`
},
{lines: [
`&nbsp;`,
`Insert&nbsp;other`,
`Key&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Insert the next key. Press OK!`
},
{lines: [
`Hold&nbsp;the&nbsp;key&nbsp;in&nbsp;`,
`start&nbsp;position!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Press&nbsp;OK`,
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
help: `In this time keep the key in start position.`
},
{lines: [
`&nbsp;`,
`End`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: ``
},
]
}, {title: `Key programming`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Ford`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`PATS 3`, `>N FIESTA 12-12`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`N FIESTA 12-12`, `>Add keys`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;the&nbsp;Chip`,
`ID4D&nbsp;DST+&nbsp;Ford`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
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
`Wait...`,
`<br />`,
`<br />`,
],
help: `Wait 10 minutes.`
},
{lines: [
`&nbsp;`,
`End`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has epired,`,`Accessories bad connection.`,``,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A3 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Access Denied!`,
screens: [
`&nbsp;`,
`Access&nbsp;Denied!`,
`<br />`,
`<br />`,
],
causes: [
`The vehicle is not compatible with the application.`,``,],
solutions: [
`Check the application,`,`Repeat the procedure.`,``,]
},
{ label: `Operation Error! `,
screens: [
`&nbsp;&nbsp;&nbsp;Operation`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `Use CAN cable or CAN A3 adapter!`,
screens: [
`Use&nbsp;CAN&nbsp;cable`,
`or&nbsp;CAN&nbsp;A3&nbsp;`,
`adapter!`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
