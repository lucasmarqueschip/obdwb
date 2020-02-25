//Capa
nomeCarga = `Manual Software -  OBD0207<br />Proximity key Programming for Ford Pats 6`;
revCarga = `Rev. 3`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Erasing with reprogramming of 2 proximity keys for the vehicle.`,
`Programming of utmost 4 proximity keys for the vehicle.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Ford`,
model: `Focus 1.6`,
years: `2008 a 2013`
},
{
manufacturer: `Ford`,
model: `Focus 2.0`,
years: `2008 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0207- Ford Pats 6 Focus 2008 2013/Imágen-posterior-del-Ford-Focus-2010.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/Chave Ford Focus keyless .jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Universal cable + A3 adapter.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `All accessories are connected to perform the procedure via diagnosis.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket is located at position A4.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: ``, 
description: ``, 
ballon: `Remove the control blade and insert it into the ignition.`, 
image: `/images/Chaves e Telecomandos/slot ford focus.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: `Performing the proximity keys programming`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Ford`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`PATS 6`, `>Focus 08-13`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Select:`,
`Prog.&nbsp;Proximity`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`All&nbsp;keys`,
`will&nbsp;be&nbsp;erased!`,
`<br />`,
],
help: `The keys already programmed will be erased.`
},
{lines: [
`&nbsp;&nbsp;Two&nbsp;keys&nbsp;are`,
`&nbsp;&nbsp;necessary&nbsp;to`,
`&nbsp;&nbsp;perform&nbsp;this`,
`&nbsp;&nbsp;&nbsp;procedure!`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Use&nbsp;the&nbsp;original`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key!`,
`<br />`,
],
help: ``
},
{lines: [
`Press&nbsp;start/stop`,
`&nbsp;&nbsp;&nbsp;to&nbsp;turn&nbsp;ON`,
`&nbsp;the&nbsp;ignition.`,
`<br />`,
],
help: `Press OK.`
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
`Press&nbsp;start/stop`,
`&nbsp;&nbsp;to&nbsp;turn&nbsp;OFF`,
`&nbsp;the&nbsp;ignition.`,
`<br />`,
],
help: `Press OK.`
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
`Insert&nbsp;the&nbsp;key&nbsp;*`,
`into&nbsp;the&nbsp;slot&nbsp;as`,
`&nbsp;in&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insert the first proximity key to be programmed into the second slot as in page 6 and press OK.`
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
`&nbsp;Remove&nbsp;the&nbsp;key`,
`&nbsp;&nbsp;&nbsp;&nbsp;from&nbsp;the`,
`&nbsp;&nbsp;vehicle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insert&nbsp;next&nbsp;key&nbsp;`,
`in&nbsp;the&nbsp;slot&nbsp;OK`,
`<br />`,
],
help: `Insert the next proximity key to be programmed into the slot and press OK.`
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
`&nbsp;Press&nbsp;*&nbsp;of&nbsp;the&nbsp;`,
`remote&nbsp;control&nbsp;*`,
`&nbsp;&nbsp;for&nbsp;1s.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press the 'open' button of the remote control of the first proximity key and press OK.`
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
`&nbsp;Press&nbsp;*&nbsp;of&nbsp;the&nbsp;`,
`remote&nbsp;control&nbsp;*`,
`&nbsp;&nbsp;for&nbsp;1s.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press the 'open' button of the remote control of the second proximity key and press OK.`
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;Keys`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of proximity keys currenty programmed in the vehicle.`
},
{lines: [
`&nbsp;`,
`Proc.&nbsp;Concluded!`,
`Disconnect&nbsp;OBD`,
`<br />`,
],
help: `The procedure was concluded successfully. Disconnect the cable from the diagnosis socket.`
},
{lines: [
`&nbsp;`,
`Attempt&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `You can try access 16 times.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`OFF&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Wait&nbsp;for`,
`&nbsp;&nbsp;10&nbsp;seconds!`,
`<br />`,
],
help: `Wait 10 seconds and return to step 10.`
},
]
}, {title: `Performing the proximity keys addition`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Ford`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`PATS 6`, `>Focus 08-13`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Select:`,
`Add&nbsp;Proximity`,
`<br />`,
],
help: `Press OK.`
},
{lines: [
`&nbsp;`,
`Use&nbsp;the&nbsp;original`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key!`,
`<br />`,
],
help: ``
},
{lines: [
`Press&nbsp;start/stop`,
`&nbsp;&nbsp;&nbsp;to&nbsp;turn&nbsp;ON`,
`&nbsp;the&nbsp;ignition.`,
`<br />`,
],
help: `Press OK.`
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
`Press&nbsp;start/stop`,
`&nbsp;&nbsp;to&nbsp;turn&nbsp;OFF`,
`&nbsp;the&nbsp;ignition.`,
`<br />`,
],
help: `Press OK.`
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
`Insert&nbsp;the&nbsp;key&nbsp;*`,
`into&nbsp;the&nbsp;slot&nbsp;as`,
`&nbsp;in&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insert the proximity key to be programmed into the second slot as in page 6 and press OK.`
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
`&nbsp;Press&nbsp;*&nbsp;of&nbsp;the&nbsp;`,
`remote&nbsp;control&nbsp;*`,
`&nbsp;&nbsp;for&nbsp;1s.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press the 'open' button of the remote control of the proximity key which is being added and press OK.`
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
`Number&nbsp;of&nbsp;Keys`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of proximity keys currenty programmed in the vehicle.`
},
{lines: [
`&nbsp;`,
`Proc.&nbsp;Concluded!`,
`Disconnect&nbsp;OBD`,
`<br />`,
],
help: `The procedure was concluded successfully. Disconnect the cable from the diagnosis socket.`
},
{lines: [
`&nbsp;`,
`Attempt&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `You can try access 16 times.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`OFF&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Wait&nbsp;for`,
`&nbsp;&nbsp;10&nbsp;seconds!`,
`<br />`,
],
help: `Wait 10 seconds and return to step 10.
`
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
`Vehicle fault, electrical part,`,`OBDMap software has epired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Programming ERROR!`,
screens: [
`&nbsp;`,
`Programming`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`The chip used is not a valid one,`,`The chip might not be programmed for the vehicle.`,],
solutions: [
`Use a compatible chip for the vehicle.`,]
},
{ label: `Chip ERROR!`,
screens: [
`&nbsp;`,
`Chip`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`The chip used is not a valid one,`,`The image generator chip might not be correct to the vehicle.`,],
solutions: [
`Use a compatible chip for the vehicle.`,]
},
{ label: `Disconnect the OBDMap!!`,
screens: [
`&nbsp;`,
`Disconnect&nbsp;the&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OBDMap!!`,
`<br />`,
],
causes: [
`It was not possible to access the vehicle programming mode.`,],
solutions: [
`Wait 5 minutes and repeat the procedure.`,]
},
{ label: `Incode: ****** Outcode:`,
screens: [
`&nbsp;`,
`Incode:&nbsp;******`,
`Outcode:`,
`<br />`,
],
causes: [
`The access attempt to the vehicle have failed.`,],
solutions: [
`It is necessary to contact the technical support to obtain the Outcode. Obs: Do not turn the ignition off in this procedure because the code will be altered.`,]
},
{ label: `Use A9 cable!`,
screens: [
`&nbsp;`,
`&nbsp;Use&nbsp;A9&nbsp;cable!`,
`<br />`,
`<br />`,
],
causes: [
`The cable used is not the correct one.`,],
solutions: [
`Connect the A9 cable and repeat the procedure.`,]
},
{ label: `Error in access!`,
screens: [
`&nbsp;`,
`Error&nbsp;in&nbsp;access!`,
`<br />`,
`<br />`,
],
causes: [
`It was not possible to access the vehicle programming mode.`,],
solutions: [
`Repeat the procedure.`,]
},
{ label: `Vehicle out off Application!`,
screens: [
`&nbsp;`,
`Vehicle&nbsp;out&nbsp;off`,
`&nbsp;&nbsp;&nbsp;&nbsp;Application!`,
`<br />`,
],
causes: [
`The vehicle is not part of the application.`,],
solutions: [
`Check the application.`,]
},
{ label: `Access Denied Wait 5:00 min To repeat`,
screens: [
`&nbsp;Access&nbsp;&nbsp;Denied`,
`&nbsp;&nbsp;Wait&nbsp;5:00&nbsp;min`,
`&nbsp;&nbsp;&nbsp;To&nbsp;repeat`,
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
