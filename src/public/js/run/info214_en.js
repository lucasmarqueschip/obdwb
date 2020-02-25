//Capa
nomeCarga = `Manual Software -  OBD0214<br />Smart Key Programming Ford Pats 6 T2`;
revCarga = `Rev. 1`;
dataManual = `January 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Reading the number of programmed keys in the vehicle.`,
`Erase all vehicle keys.`,
`Add new keys to the vehicle.`,

];
introObs = createObs(`Observation: For the addition procedure after erasing all vehicle keys,  it's necessary to program at least two keys to the vehicle.`, ``, ``)


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Ford`,
model: `Edge SEL 3.5`,
years: `2012 a 2014`
},
{
manufacturer: `Ford`,
model: `Edge Limited 3.5`,
years: `2012 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Chave.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Universal cable + A9 adapter. Used to connect the OBDMap to the vehicle to perform the diagnosis.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A9 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `All accessories are connected to perform the procedure via diagnosis.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A9 CONECTADOS .jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket is located at position C5.<br /><br /><br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/C5.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Procedimento 1.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: `Performing the reading of the number of smart keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Ford`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`PATS 6`, `>Edge 12-14`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Edge 12-14`, `>Keyless 1`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Select:`,
`Number&nbsp;of&nbsp;keys`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`Press&nbsp;start/stop`,
`&nbsp;&nbsp;to&nbsp;turn&nbsp;OFF`,
`&nbsp;the&nbsp;ignition.`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;Keys`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of smart keys currently programmed in the vehicle.`,
},
]
}, {title: `Performing the erasing of smart keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Ford`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`PATS 6`, `>Edge 12-14`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Edge 12-14`, `>Keyless 1`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Select:`,
`Delete&nbsp;proximity`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`All&nbsp;keys`,
`will&nbsp;be&nbsp;deleted!`,
`<br />`,
],
help: `The smart keys already programmed will be erased.`,
},
{lines: [
`Press&nbsp;start/stop`,
`&nbsp;&nbsp;to&nbsp;turn&nbsp;OFF`,
`&nbsp;the&nbsp;ignition.`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Wait...:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Wait about 10 minutes.`,
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`<br />`,
`Key&nbsp;deleted`,
`successfully!`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`OK-&nbsp;Add&nbsp;keys?`,
`Volta-&nbsp;Quit`,
`<br />`,
],
help: `If selected "OK" go to step 7 of adding keys.
If selected "Volta" go the next step.`,
},
]
}, {title: `Performing the addition of new smart keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Ford`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`PATS 6`, `>Edge 12-14`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Edge 12-14`, `>Keyless 1`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Select:`,
`Add&nbsp;Proximity`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`Use&nbsp;the&nbsp;original`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key!`,
`<br />`,
],
help: `See the key used on page 3`,
},
{lines: [
`&nbsp;Insert&nbsp;the&nbsp;key`,
`into&nbsp;the&nbsp;slot&nbsp;as`,
`&nbsp;in&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `See position of the slot on page 6. Press OK!`,
},
{lines: [
`Press&nbsp;start/stop`,
`&nbsp;&nbsp;to&nbsp;turn&nbsp;OFF`,
`&nbsp;the&nbsp;ignition.`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Wait...:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Wait about 10 minutes.`,
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Key&nbsp;added`,
`successfully&lt;OK&gt;`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`Program&nbsp;more?`,
`(X)NO&nbsp;&nbsp;/&nbsp;(OK)YES`,
`<br />`,
],
help: `If "YES" go the next step.
If "NO" go to step 19.`,
},
{lines: [
`&nbsp;Remove&nbsp;the&nbsp;key`,
`&nbsp;&nbsp;&nbsp;&nbsp;from&nbsp;the`,
`&nbsp;&nbsp;vehicle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`Insert&nbsp;next&nbsp;key&nbsp;`,
`in&nbsp;the&nbsp;slot&nbsp;OK`,
`<br />`,
],
help: `Insert the next key to be programmed into the slot. Press OK!`,
},
{lines: [
`&nbsp;&nbsp;Press&nbsp;the&nbsp;*`,
`&nbsp;for&nbsp;all&nbsp;remote&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;control!`,
`<br />`,
],
help: `Press the button to open the remote control of all programmed keys.`,
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;Keys`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of smart keys currently programmed in the vehicle.`,
},
{lines: [
`&nbsp;&nbsp;&nbsp;Completed!`,
`Disconnect&nbsp;the&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OBD`,
`<br />`,
],
help: `Successfully completed procedure.
Disconnect the cable of diagnostic sockets.`,
},
{lines: [
`&nbsp;&nbsp;Unprogrammed`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Repeat?`,
`(X)NOT&nbsp;/&nbsp;&lt;OK&gt;YES`,
],
help: ``,
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
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A9 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Error in access!`,
screens: [
`&nbsp;`,
`Error&nbsp;in&nbsp;access!`,
`<br />`,
`<br />`,
],
causes: [
`Could not access the programming mode of the vehicle.`,],
solutions: [
`Repeat the procedure.`,]
},
{ label: `Programming Error! Repeat? <OK>YES / <X>NOT`,
screens: [
`&nbsp;&nbsp;Programming`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Repeat?`,
`&lt;OK&gt;YES&nbsp;/&nbsp;&lt;X&gt;NOT`,
],
causes: [
`The deletion of the key was not successfully completed.`,``,],
solutions: [
`Repeat the procedure.`,``,]
},
{ label: `unprogrammed key! `,
screens: [
`&nbsp;&nbsp;unprogrammed`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
causes: [
` `,],
solutions: [
]
},
{ label: `Procedure Failure!`,
screens: [
`&nbsp;`,
`Procedure`,
`&nbsp;Failure!`,
`<br />`,
],
causes: [
`All attempts to add key failed,`,`Vehicle fault, electrical part.`,``,],
solutions: [
`Check if the key used is correct,`,`Check the electric part of the vehicle, fuses, etc. `,]
},
{ label: `Use A9 cable!`,
screens: [
`&nbsp;`,
`&nbsp;Use&nbsp;A9&nbsp;cable!`,
`<br />`,
`<br />`,
],
causes: [
`The cable used is not correct.`,``,],
solutions: [
`Connect the A9 cable and repeat the procedure.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
