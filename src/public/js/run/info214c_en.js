//Capa
nomeCarga = `Manual Software -  OBD0214<br />Smart Key Programming Ford Pats 6 T2`;
revCarga = `Rev. 1`;
dataManual = `January 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Reading the number of programmed keys in the vehicle.`,
`Erase all vehicle keys.`,
`Add new keys to the vehicle.`,

];
introObs = createObs()


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

obdmap = false;
services = 
[
{title: `Performing the reading of the number of smart keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Select:`,
`Number&nbsp;of&nbsp;keys`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`Press&nbsp;START/STOP&nbsp;button&nbsp;`,
`to&nbsp;switch&nbsp;ignition&nbsp;OFF`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
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
`Programmed:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of smart keys currently programmed in the vehicle.`,
},
]
}, {title: `Performing the erasing of smart keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Select:`,
`Erase&nbsp;proximity`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`All&nbsp;keys&nbsp;will&nbsp;be&nbsp;erased!`,
`&lt;OK&gt;&nbsp;Continue`,
`&lt;VOLTA&gt;&nbsp;Exit`,
`<br />`,
],
help: `The smart keys already programmed will be erased.`,
},
{lines: [
`Press&nbsp;START/STOP&nbsp;button&nbsp;`,
`to&nbsp;switch&nbsp;ignition&nbsp;OFF`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
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
`Erased&nbsp;keys&nbsp;successfully!`,
`<br />`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`OK-&nbsp;Add&nbsp;keys?`,
`Volta-&nbsp;Quit&nbsp;`,
`<br />`,
],
help: `If selected "OK" go to step 7 of adding keys.
If selected "Volta" go the next step.`,
},
]
}, {title: `Performing the addition of new smart keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Select:`,
`Proximity&nbsp;`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`Use&nbsp;the&nbsp;original&nbsp;key!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `See the key used on page 3`,
},
{lines: [
`Insert&nbsp;the&nbsp;key`,
`into&nbsp;the&nbsp;slot&nbsp;as`,
`in&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `See position of the slot on page 6. Press OK!`,
},
{lines: [
`Press&nbsp;START/STOP&nbsp;button&nbsp;`,
`to&nbsp;switch&nbsp;ignition&nbsp;OFF`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
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
`Key&nbsp;added`,
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
`Remove&nbsp;the&nbsp;key`,
`from&nbsp;the`,
`vehicle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press OK`,
},
{lines: [
`&nbsp;`,
`Insert&nbsp;next&nbsp;key&nbsp;in&nbsp;the&nbsp;slot&nbsp;`,
`OK`,
`<br />`,
],
help: `Insert the next key to be programmed into the slot. Press OK!`,
},
{lines: [
`&nbsp;`,
`Press&nbsp;the&nbsp;*`,
`for&nbsp;all&nbsp;remote&nbsp;controls!`,
`<br />`,
],
help: `Press the button to open the remote control of all programmed keys.`,
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;Keys`,
`Programmed:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of smart keys currently programmed in the vehicle.`,
},
{lines: [
`&nbsp;`,
`Procedure&nbsp;Concluded!`,
`Disconnect&nbsp;OBD&nbsp;`,
`<br />`,
],
help: `Successfully completed procedure.
Disconnect the cable of diagnostic sockets.`,
},
{lines: [
`Unprogrammed`,
`key!`,
`Repeat?`,
`(X)NOT&nbsp;/&nbsp;(OK)YES`,
],
help: ``,
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
`Programming`,
`Error!`,
`Repeat?`,
`&lt;X&gt;&nbsp;NOT&nbsp;/&nbsp;&lt;OK&gt;&nbsp;YES&nbsp;`,
],
causes: [
`The deletion of the key was not successfully completed.`,``,],
solutions: [
`Repeat the procedure.`,``,]
},
{ label: `unprogrammed key! `,
screens: [
`unprogrammed`,
`key!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
` `,],
solutions: [
]
},
{ label: `Procedure Failure!`,
screens: [
`&nbsp;`,
`Procedure&nbsp;Failure!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
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
`Use&nbsp;A9&nbsp;cable!`,
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
