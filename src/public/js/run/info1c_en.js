//Capa
nomeCarga = `Manual Software -  OBD0001<br />PIN Code Reading and Key Programming  VW Gol, Saveiro and Voyage 2009-2012`;
revCarga = `Rev. 4`;
dataManual = `January 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`ECU PIN code reading: IAW 4GV and ME7.5.30.`,
`Programming utmost 8 keys:  It is necessary has in hand all keys will be programmed. The old keys must also be programmed, or them will not  work more. If it happen the programming must be done again. `,
`Add new keys: Add new keys and does't erase the keys already programmed in the vehicle.`,

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `VW`,
model: `Gol 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.6`,
years: `2009 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




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
ballon: `Use the Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure by OBDII.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU.jpg`},

{title: ``, 
description: ``, 
ballon: `Use the Torx T15 screwdriver to remove the screws that holding ECU cover.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Do a lever to have access to the ECU board with a screwdriver.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU 3.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Localizando e conectando a pinça na memória 95320.jpg`},

{title: ``, 
description: ``, 
ballon: `The pin 1 of the clip does not match to the pin 1 of the memory.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Conectando a pinça na memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Clip connected in the 95320 memory.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Pinça conectada na memória.jpg`},

{title: `All accessories connected:`, 
description: `Attention<br />Not invert the clip, connect the clip with careful to do not damaged the clip or the ECU.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Todos os acessórios conectados.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30.jpg`},

{title: ``, 
description: ``, 
ballon: `Use the Torx T15 screwdriver to remove the screws that holding ECU cover.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Do a lever to have access to the ECU board with a screwdriver.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30 3.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Localizando e conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `The pin 1 of the clip does not match to the pin 1 of the memory.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `Clip connected in the 95040 memory.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Conectando a pinça na memória 95040 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Todos os acessórios conectados.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket is located at position A4.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: `IAW 4GV ECU PIN code reading:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`VW`], help: `Press OK`, menu: 1000},
{lines: [`Gol`], help: `Press OK`, menu: 1000},
{lines: [`Keys`], help: `Press OK`, menu: 1000},
{lines: [`Imob 4`], help: `Press OK`, menu: 1000},
{lines: [`Marelli IAW 4GV`], help: `Press OK`, menu: 1000},
{lines: [`Read PIN`], help: `Press OK`, menu: 1000},
{lines: [
`Connect&nbsp;the&nbsp;clip`,
`in&nbsp;the&nbsp;memory&nbsp;95320`,
`Press&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press OK!`,
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
`PIN..:`,
`<br />`,
`<br />`,
],
help: `Write down the PIN.`,
},
]
}, {title: `ME7.5.10/20/30 ECU PIN code reading:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`VW`], help: `Press OK`, menu: 1000},
{lines: [`Gol`], help: `Press OK`, menu: 1000},
{lines: [`Keys`], help: `Press OK`, menu: 1000},
{lines: [`Imob 4`], help: `Press OK`, menu: 1000},
{lines: [`Bosch ME7.5.30`], help: `Press OK`, menu: 1000},
{lines: [`Read PIN`], help: `Press OK`, menu: 1000},
{lines: [
`Connect&nbsp;the&nbsp;clip`,
`in&nbsp;the&nbsp;memory&nbsp;95320`,
`Press&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press OK!`,
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
`PIN..:`,
`<br />`,
`<br />`,
],
help: `Write down the PIN.`,
},
]
}, {title: `Key programming:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`VW`], help: `Press OK`, menu: 1000},
{lines: [`Gol`], help: `Press OK`, menu: 1000},
{lines: [`Keys`], help: `Press OK`, menu: 1000},
{lines: [`Imob 4`], help: `Press OK`, menu: 1000},
{lines: [`Clear and Learn Keys`], help: `Press OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;the&nbsp;ID&nbsp;48&nbsp;CAN&nbsp;chip`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`,
},
{lines: [
`&nbsp;`,
`Wait...:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Pin..:`,
`0000`,
`<br />`,
],
help: `Enter the PIN read previously.`,
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;Keys:`,
`<br />`,
`<br />`,
],
help: `Choose utmost 8 keys to be programmed.`,
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
`<br />`,
`<br />`,
`<br />`,
],
help: `Press OK!`,
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Press OK!`,
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK! If it the last key the procedure will be finished, if is not the last key to go back to the step 8.`,
},
{lines: [
`&nbsp;`,
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`,
},
]
}, {title: `Add new keys:`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`VW`], help: `Press OK`, menu: 1000},
{lines: [`Gol`], help: `Press OK`, menu: 1000},
{lines: [`Chaves`], help: `Press OK`, menu: 1000},
{lines: [`Imob 4`], help: `Press OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Press OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;the&nbsp;ID&nbsp;48&nbsp;CAN&nbsp;chip`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`,
},
{lines: [
`&nbsp;`,
`Wait...:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Pin..:`,
`0000`,
`<br />`,
],
help: `Enter the PIN read previously.`,
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;Keys:`,
`<br />`,
`<br />`,
],
help: `Choose the number of keys that will be add.`,
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
`<br />`,
`<br />`,
`<br />`,
],
help: `Press OK!`,
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Press OK!`,
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK! If it the last key the procedure will be finished, if is not the last key to go back to the step 8.`,
},
{lines: [
`&nbsp;`,
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`,
},
]}];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [
{ label: `ERROR in reading!`,
screens: [
`&nbsp;`,
`ERROR&nbsp;in`,
`reading!`,
`<br />`,
],
causes: [
`Bad contact of the clip with the memory,`,`Bad contact of the clip or MCU cable with the OBDMap,`,`ECU is damaged,`,`The clip was connected in other component,`,`The memory terminals or clip terminals might be with resin or dirt.`,],
solutions: [
`Check the correct position of the clip to the memory, all terminals of the clip shall hit the corresponding terminals of the memory,`,`Check soldering correct of the MCU cable,`,`Check the connection of the clip or MCU cable with the OBDMap,`,`Check module status,`,`Check if the clip terminals or memory terminals are clean.`,``,``,]
},
{ label: `Inverted clip!`,
screens: [
`&nbsp;`,
`Inverted&nbsp;clip!`,
`<br />`,
`<br />`,
],
causes: [
`The clip was connected inverted to the memory,`,`The clip was connected in other component,`,`The memory, ECU or dashboard is damaged.`,],
solutions: [
`Check the correct position of the clip to the memory.`,]
},
{ label: `Short circuit!`,
screens: [
`&nbsp;`,
`Short&nbsp;circuit!`,
`<br />`,
`<br />`,
],
causes: [
`The MCU cables was soldered in incorrect positions of the dashboard,`,`The clip was connected incorrectly,`,`MCU cable, clip, ECU or dashboard is damaged.`,],
solutions: [
`Check the correct position of the ECU, MCU cable or dashboard,`,`Check if the clip or MCU cable has some defect, in case of doubt consult the technical support.`,]
},
{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Invalid PIN!`,
screens: [
`Invalid`,
`PIN!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`The PIN code inserted is incorrect.`,],
solutions: [
`Insert the correct PIN code.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
