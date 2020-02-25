//Capa
nomeCarga = `Manual Software -  OBD0128<br />Key Programming Ford New Fiesta`;
revCarga = `Rev. 1`;
dataManual = `January 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Erasing keys.`,
`Programming utmost 5 keys to the vehicle.`,
`With this function it is possible erase all keys existents in the vehicle and program new keys without erase the old keys.`,

];
introObs = createObs()


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
ballon: `Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Use the Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure via diagnosis.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

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

obdmap = false;
services = 
[
{title: `Erasing keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
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
help: `Wait 10 minutes.`
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
`Hold&nbsp;the&nbsp;key&nbsp;in&nbsp;start&nbsp;`,
`position!`,
`Press&nbsp;OK`,
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
`Hold&nbsp;the&nbsp;key&nbsp;in&nbsp;start&nbsp;`,
`position!`,
`Press&nbsp;OK`,
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
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: ``
},
]
}, {title: `Key programming`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
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
`Wait...`,
`<br />`,
`<br />`,
],
help: `Wait 10 minutes.`
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
{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has epired,`,`Accessories bad connection.`,``,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A3 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Access Denied!`,
screens: [
`Access&nbsp;Denied!`,
`**`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`The vehicle is not compatible with the application.`,``,],
solutions: [
`Check the application,`,`Repeat the procedure.`,``,]
},
{ label: `Operation Error! `,
screens: [
`&nbsp;`,
`Operation&nbsp;Error`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Use CAN cable or CAN A3 adapter!`,
screens: [
`&nbsp;`,
`Use&nbsp;CAN&nbsp;cable`,
`or&nbsp;CAN&nbsp;A3&nbsp;adapter!`,
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
